-- Update for an existing tela database: only admins can change an account's name, username or password,
-- and only admins can put students with tutors (or take them off).
-- Run once in the SQL Editor. (Safe to run again; it keeps all existing accounts and data. schema.sql already
-- includes this for new projects.)
--
-- Before this, anyone signed in could change their own profile (including its role) from the browser console,
-- and Supabase Auth lets anyone signed in change their own password or email. Now:
--   * nobody can edit profiles directly (the "edit own name" rule is gone);
--   * a password or email change on an existing account is refused unless it comes through admin_update_account;
--   * admin_update_account lets an admin change anyone's name, username and password;
--   * tutors can no longer add students to their own list or remove them: only admins do (the "admin manages links" rule).

drop policy if exists "edit own name" on public.profiles;
drop policy if exists "tutor adds student" on public.tutor_students;
drop policy if exists "tutor removes student" on public.tutor_students;
drop function if exists public.delete_student;

-- Refuses password and email changes made any other way (for example supabase.auth.updateUser in the console).
create or replace function public.guard_account_changes() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (new.encrypted_password is distinct from old.encrypted_password or new.email is distinct from old.email)
     and coalesce(current_setting('tela.admin_edit', true), '') <> 'on' then
    raise exception 'Only an admin can change account details';
  end if;
  return new;
end $$;
drop trigger if exists guard_account_changes on auth.users;
create trigger guard_account_changes before update on auth.users for each row execute function public.guard_account_changes();

-- Admins change an account's name, username and (when new_password isn't empty) password. A new password needs at least
-- 8 characters.
-- A new password also signs the account out everywhere. Admins' own usernames can't change, since they
-- decide who is an admin (see is_admin).
create or replace function public.admin_update_account(target uuid, new_username text, new_name text, new_password text)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare
  p public.profiles;
  new_email text;
begin
  if not public.is_admin() then raise exception 'only an admin can change accounts'; end if;
  select * into p from public.profiles where id = target;
  if not found then raise exception 'no such account'; end if;
  new_username := lower(trim(coalesce(new_username, p.username)));
  new_name := trim(coalesce(new_name, p.display_name));
  if new_username <> p.username then
    if p.role = 'tutor' and p.username in ('dayan', 'ilham') then raise exception 'an admin''s username can''t change'; end if;
    if exists (select 1 from public.profiles where username = new_username and role = p.role) then raise exception 'username taken'; end if;
  end if;
  if coalesce(new_password, '') <> '' then
    if length(new_password) < 8 then raise exception 'password too short'; end if;
  end if;

  perform set_config('tela.admin_edit', 'on', true);
  update public.profiles set username = new_username, display_name = new_name where id = target;
  if new_username <> p.username then
    new_email := p.role || '.' || new_username || '@tela.example.com';
    update auth.users set email = new_email where id = target;
    update auth.identities set identity_data = identity_data || jsonb_build_object('email', new_email)
     where user_id = target and provider = 'email';
  end if;
  if coalesce(new_password, '') <> '' then
    update auth.users set encrypted_password = crypt(new_password, gen_salt('bf')) where id = target;
    delete from auth.sessions where user_id = target;
  end if;
  perform set_config('tela.admin_edit', 'off', true);
end $$;
revoke all on function public.admin_update_account from public, anon;
grant execute on function public.admin_update_account to authenticated;
