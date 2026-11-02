-- Update for an existing tela database: a password may now contain the person's username.
-- Paste into the Supabase SQL Editor and run. Safe to run more than once; no data changes.

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
