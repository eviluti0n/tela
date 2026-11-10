// Everything tela saves lives in Supabase (tables and access rules: supabase/schema.sql). This file signs
// people in and out, loads everything the signed-in person is allowed to see when a page opens, and saves
// changes back. Pages read from memory (TelaDB.S), so their code stays synchronous; Supabase's live updates
// (and a check every 30 seconds) keep it current, and onChange tells the page to redraw.
//
// Accounts use usernames: the student "samlee" signs in to Supabase Auth as student.samlee@tela.example.com
// (tutors as tutor.<username>@…). No emails are sent; "Confirm email" is off in the Supabase project.
const TelaDB = (() => {
  const SUPABASE_URL = "https://kxqgmgqtggkzbzzqiptb.supabase.co";
  // The public (publishable) key: fine to have in page code, since what each person can read or change
  // is decided by the access rules in schema.sql.
  const SUPABASE_KEY = "sb_publishable_ZwIj14MMPje35nPyRZBfrg__PkNh3Zn";
  const EMAIL_DOMAIN = "tela.example.com";
  const REMEMBER = "tela.remember";
  const emailFor = (role, username) => `${role}.${String(username).trim().toLowerCase()}@${EMAIL_DOMAIN}`;

  // "Keep me signed in" keeps the sign-in in localStorage; otherwise it ends when the browser tab closes.
  const safe = fn => { try { return fn(); } catch (e) { return null; } };
  const authStorage = {
    getItem: k => safe(() => sessionStorage.getItem(k) ?? localStorage.getItem(k)),
    setItem: (k, v) => safe(() => (localStorage.getItem(REMEMBER) === "1" ? localStorage : sessionStorage).setItem(k, v)),
    removeItem: k => safe(() => { sessionStorage.removeItem(k); localStorage.removeItem(k); })
  };
  const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { storage: authStorage, storageKey: "tela.auth", persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
  });

  // ---------- What the signed-in person can see ----------
  // Rows as Supabase returns them. profiles is by id; the rest are arrays (topics and kv are by student / key).
  // activity is each student's time active (activity.js) and progress how far through each topic's set they are, by
  // student id; both only loaded for tutors.
  const S = { me: null, profiles: {}, links: [], topics: {}, kv: {}, activity: {}, progress: {}, homework: [], messages: [], groups: [], members: [], groupMessages: [], reads: {} };
  const listeners = [], errorListeners = [];
  const emit = what => listeners.forEach(fn => { try { fn(what); } catch (e) { console.error(e); } });
  function report(error) {
    console.error(error);
    const msg = "Couldn't save to the server. Check your connection; the last change may not have been kept.";
    if (errorListeners.length) errorListeners.forEach(fn => fn(msg)); else alert(msg);
  }
  const isStudent = () => S.me && S.me.role === "student";
  const isAdmin = () => S.me && S.me.role === "tutor" && ["dayan", "ilham"].includes(S.me.username);

  // Writes go to the server in the background. If one fails, undo puts the page's copy back and the page redraws.
  // While any are on their way, a reload from the server waits, so it never shows the page an older copy.
  const pending = new Set();
  let writeCount = 0;
  function track(request, undo) {
    writeCount++;
    const p = Promise.resolve(request).then(res => {
      if (res && res.error) { if (undo) undo(); report(res.error); emit("error"); }
      return res;
    }, err => { if (undo) undo(); report(err); emit("error"); });
    pending.add(p);
    p.finally(() => pending.delete(p));
    return p;
  }

  const rows = async query => { const { data, error } = await query; if (error) throw error; return data || []; };
  async function fetchAll() {
    const me = S.me, t = name => client.from(name).select("*");
    const [links, data, homework, messages, groups, members, groupMessages, reads, kv] = await Promise.all([
      rows(t("tutor_students")), rows(t("student_data")), rows(t("homework")), rows(t("messages")),
      rows(t("groups")), rows(t("group_members")), rows(t("group_messages")), rows(t("reads")),
      // A tutor only needs their students' time active and topic progress (the access rules give them their own students' rows).
      me.role === "student" ? rows(t("student_kv")) : rows(t("student_kv").in("key", ["activity", "progress"]))
    ]);
    // Profiles of everyone mentioned (an admin sees everyone).
    const ids = new Set([me.id]);
    links.forEach(r => { ids.add(r.tutor_id); ids.add(r.student_id); });
    data.forEach(r => ids.add(r.student_id));
    homework.forEach(r => { ids.add(r.student_id); if (r.set_by) ids.add(r.set_by); });
    messages.forEach(r => { ids.add(r.student_id); ids.add(r.tutor_id); });
    groups.forEach(r => ids.add(r.tutor_id));
    members.forEach(r => ids.add(r.student_id));
    groupMessages.forEach(r => { if (r.sender_id) ids.add(r.sender_id); });
    const profiles = isAdmin() ? await rows(t("profiles")) : await rows(t("profiles").in("id", [...ids]));
    return { links, data, homework, messages, groups, members, groupMessages, reads, kv, profiles };
  }
  function apply(f, first) {
    S.profiles = Object.fromEntries(f.profiles.map(p => [p.id, p]));
    S.links = f.links; S.homework = f.homework; S.messages = f.messages;
    S.groups = f.groups; S.members = f.members; S.groupMessages = f.groupMessages;
    // A student is the only one who changes their own topics and answers, so after the first load the
    // page's copy is the newest and the server's isn't read again.
    if (first || !isStudent()) S.topics = Object.fromEntries(f.data.map(r => [r.student_id, r.topics]));
    if (first && isStudent()) S.kv = Object.fromEntries(f.kv.map(r => [r.key, r.value]));
    if (!isStudent()) {
      const byStudent = key => Object.fromEntries(f.kv.filter(r => r.key === key).map(r => [r.student_id, r.value]));
      S.activity = byStudent("activity"); S.progress = byStudent("progress");
    }
    const reads = Object.fromEntries(f.reads.map(r => [r.convo, r.read_at]));
    Object.keys(S.reads).forEach(k => { if ((S.reads[k] || 0) > (reads[k] || 0)) reads[k] = S.reads[k]; });
    S.reads = reads;
  }
  let refreshing = null, refreshAgain = false;
  async function refresh() {
    if (refreshing) { refreshAgain = true; return refreshing; }
    refreshing = (async () => {
      try {
        do {
          refreshAgain = false;
          await Promise.allSettled([...pending]);
          const before = writeCount, f = await fetchAll();
          if (writeCount !== before || pending.size) { refreshAgain = true; continue; }   // a write started meanwhile
          apply(f, false);
          emit("refresh");
        } while (refreshAgain);
      } catch (e) { console.error(e); }
      finally { refreshing = null; }
    })();
    return refreshing;
  }
  let refreshTimer;
  const refreshSoon = () => { clearTimeout(refreshTimer); refreshTimer = setTimeout(refresh, 250); };

  // Opens a page for a signed-in student or tutor: anyone else goes to the sign-in page.
  // Resolves once everything is loaded.
  async function start(role) {
    const bounce = () => { location.replace(role === "tutor" ? "login.html#tutor" : "login.html"); return new Promise(() => {}); };
    try {
      const { data: { session } } = await client.auth.getSession();
      if (!session) return bounce();
      const { data: me, error } = await client.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
      if (error) throw error;
      if (!me || me.role !== role) return bounce();
      S.me = me;
      apply(await fetchAll(), true);
    } catch (e) {
      console.error(e);
      document.body.innerHTML = `<div style="max-width:420px;margin:15vh auto;padding:24px;font-family:Inter,system-ui,sans-serif;text-align:center;color:#13261e">
        <h2 style="margin-bottom:8px">Can't reach the server</h2><p style="color:#5f7369;margin-bottom:18px">Check your internet connection and try again.</p>
        <button onclick="location.reload()" style="border:none;border-radius:10px;padding:10px 18px;background:#146c43;color:#fff;font:600 14px Inter,sans-serif">Try again</button></div>`;
      return new Promise(() => {});
    }
    // Live updates: any change someone else makes reloads what this page shows. The live connection is
    // given the sign-in first, or Supabase applies the access rules as a signed-out visitor and sends nothing.
    const { data: { session } } = await client.auth.getSession();
    if (session) await client.realtime.setAuth(session.access_token);
    const channel = client.channel("tela-" + S.me.id);
    ["messages", "group_messages", "homework", "groups", "group_members", "tutor_students", "student_data"].forEach(table =>
      channel.on("postgres_changes", { event: "*", schema: "public", table }, refreshSoon));
    channel.subscribe();
    setInterval(() => { if (document.visibilityState === "visible") refresh(); }, 30000);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") refreshSoon(); else flush(); });
    window.addEventListener("pagehide", flush);
    // Signing out in another tab signs this one out too.
    client.auth.onAuthStateChange(event => { if (event === "SIGNED_OUT") bounce(); });
  }

  // ---------- Signing in and out ----------
  // Resolves to null, or a message saying what went wrong.
  async function signIn(role, username, password, remember) {
    safe(() => remember ? localStorage.setItem(REMEMBER, "1") : localStorage.removeItem(REMEMBER));
    const { data, error } = await client.auth.signInWithPassword({ email: emailFor(role, username), password });
    if (error) return /invalid/i.test(error.message) ? "mismatch" : "Couldn't sign in: " + error.message;
    const { data: me } = await client.from("profiles").select("role").eq("id", data.user.id).maybeSingle();
    if (!me || me.role !== role) { await client.auth.signOut(); return "mismatch"; }
    return null;
  }
  async function signOut() {
    await flush();
    await client.auth.signOut().catch(() => {});
    safe(() => localStorage.removeItem(REMEMBER));
  }
  // The role of whoever is signed in on this browser, or null (used by the sign-in page).
  async function signedInRole() {
    const { data: { session } } = await client.auth.getSession();
    if (!session) return null;
    const { data } = await client.from("profiles").select("role").eq("id", session.user.id).maybeSingle();
    return data ? data.role : null;
  }

  // ---------- People ----------
  const profile = (role, username) => Object.values(S.profiles).find(p => p.role === role && p.username === username) || null;
  const idOf = (role, username) => (profile(role, username) || {}).id || null;
  const usernameOf = id => (S.profiles[id] || {}).username || null;
  const me = () => S.me && { id: S.me.id, username: S.me.username, displayName: S.me.display_name, role: S.me.role };
  // Students as the pages used to keep them: { username: { displayName, tutors: [tutor usernames] } }.
  function studentAccounts() {
    const out = {};
    Object.values(S.profiles).filter(p => p.role === "student").forEach(p => {
      out[p.username] = { displayName: p.display_name, created: p.created_at,
        tutors: S.links.filter(l => l.student_id === p.id).map(l => usernameOf(l.tutor_id)).filter(Boolean) };
    });
    return out;
  }
  function tutorAccounts() {
    return Object.fromEntries(Object.values(S.profiles).filter(p => p.role === "tutor").map(p => [p.username, { displayName: p.display_name }]));
  }

  // Only an admin makes accounts (students and tutors). The admin writes an invite, which the database needs
  // before it accepts the new account (see supabase/admin-accounts.sql), then the account is signed up on a
  // separate connection that doesn't keep the sign-in, so the admin stays signed in.
  // A new student starts with an empty dashboard and is put with the given tutors (usernames).
  // Resolves to null, "taken" or an error message.
  async function createAccount(role, username, name, password, tutors = []) {
    username = String(username).trim().toLowerCase();
    const { data: existing, error: lookupError } = await client.from("profiles").select("id").eq("role", role).eq("username", username).maybeSingle();
    if (lookupError) return "Couldn't check the username: " + lookupError.message;
    if (existing) return "taken";
    const invite = await client.from("account_invites").upsert({ username, role, display_name: name });
    if (invite.error) return "Couldn't create the account: " + invite.error.message;
    const other = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false, autoRefreshToken: false, storageKey: "tela.newAccount" } });
    const { data, error } = await other.auth.signUp({ email: emailFor(role, username), password, options: { data: { username, display_name: name, role } } });
    if (error) {
      await client.from("account_invites").delete().eq("username", username).eq("role", role);
      return /already|registered|exists/i.test(error.message) ? "taken" : "Couldn't create the account: " + error.message;
    }
    if (role === "student") {
      await other.from("student_data").insert({ student_id: data.user.id, topics: [] });
      const links = tutors.map(idOf.bind(null, "tutor")).filter(Boolean).map(tutor_id => ({ tutor_id, student_id: data.user.id, added_at: Date.now() }));
      if (links.length) {
        const res = await client.from("tutor_students").insert(links);
        if (res.error) { await refresh(); return "The account was made, but it couldn't be put with its tutors: " + res.error.message; }
      }
    }
    await other.auth.signOut().catch(() => {});
    await refresh();
    return null;
  }
  // Admins only: deletes an account and everything saved for it.
  async function deleteAccount(role, username) {
    const { error } = await client.rpc("admin_delete_account", { target: idOf(role, username) });
    if (error) throw error;
    await refresh();
  }
  // Admins only: changes an account's name and username, and its password when one is given (which also
  // signs the account out everywhere). Resolves to null, "taken" or an error message.
  async function updateAccount(role, username, { newUsername, name, password }) {
    const { error } = await client.rpc("admin_update_account",
      { target: idOf(role, username), new_username: newUsername, new_name: name, new_password: password || "" });
    if (error) return /taken/.test(error.message) ? "taken" : "Couldn't save the changes: " + error.message;
    await refresh();
    return null;
  }
  // Admins only: puts a student with exactly these tutors (usernames), taking them off any others.
  // Resolves to null or an error message.
  async function setTutors(student, tutors) {
    const sid = idOf("student", student), want = tutors.map(u => idOf("tutor", u)).filter(Boolean);
    const have = S.links.filter(l => l.student_id === sid).map(l => l.tutor_id);
    const add = want.filter(id => !have.includes(id)), drop = have.filter(id => !want.includes(id));
    if (add.length) {
      const res = await client.from("tutor_students").insert(add.map(tutor_id => ({ tutor_id, student_id: sid, added_at: Date.now() })));
      if (res.error) return "Couldn't change their tutors: " + res.error.message;
    }
    if (drop.length) {
      const res = await client.from("tutor_students").delete().eq("student_id", sid).in("tutor_id", drop);
      if (res.error) { await refresh(); return "Couldn't change their tutors: " + res.error.message; }
    }
    await refresh();
    return null;
  }

  // ---------- A student's topics and saved answers ----------
  // null if the student has never opened their dashboard (and no tutor made their account).
  const topicsOf = username => { const v = S.topics[idOf("student", username)]; return Array.isArray(v) ? v : null; };
  // Saving is put off for a moment, so a burst of changes is sent once.
  const timers = {}, flushers = {};
  function later(key, fn) {
    clearTimeout(timers[key]);
    flushers[key] = fn;
    timers[key] = setTimeout(() => { delete flushers[key]; fn(); }, 600);
  }
  // Sends anything still waiting (when the page is hidden or closed, or before signing out).
  function flush() {
    Object.keys(flushers).forEach(k => { clearTimeout(timers[k]); const fn = flushers[k]; delete flushers[k]; fn(); });
    return Promise.allSettled([...pending]);
  }
  function saveMyTopics(list) {
    const copy = JSON.parse(JSON.stringify(list));
    S.topics[S.me.id] = copy;
    later("topics", () => track(client.from("student_data").upsert({ student_id: S.me.id, topics: copy, updated_at: Date.now() })));
  }
  const kvGet = key => S.kv[key] === undefined ? null : S.kv[key];
  const kvKeys = () => Object.keys(S.kv);
  // A tutor's view of a student's time active: { "YYYY-MM-DD": seconds }.
  const activityOf = username => S.activity[idOf("student", username)] || {};
  // A tutor's view of how far through each topic's current set a student is: { "<topic title>": { parts, answered, correct } }.
  const progressOf = username => S.progress[idOf("student", username)] || {};
  function kvSet(key, value) {
    S.kv[key] = JSON.parse(JSON.stringify(value));
    later("kv:" + key, () => track(client.from("student_kv").upsert({ student_id: S.me.id, key, value: S.kv[key], updated_at: Date.now() })));
  }
  function kvRemove(key) {
    delete S.kv[key];
    clearTimeout(timers["kv:" + key]); delete flushers["kv:" + key];
    track(client.from("student_kv").delete().eq("student_id", S.me.id).eq("key", key));
  }

  // ---------- Homework ----------
  // As the pages use it: { id, title, subject, grade, setBy, setByName, setAt, due, note, questions }.
  const hwOut = h => ({ id: h.id, title: h.title, subject: h.subject, grade: h.grade, setBy: usernameOf(h.set_by) || "",
    setByName: h.set_by_name, setAt: h.set_at, due: h.due, note: h.note, questions: h.questions });
  const homeworkOf = username => { const id = idOf("student", username); return S.homework.filter(h => h.student_id === id).sort((a, b) => a.set_at - b.set_at).map(hwOut); };
  function addHomework(username, item) {
    const row = { id: item.id, student_id: idOf("student", username), title: item.title, subject: item.subject || "", grade: item.grade || "",
      set_by: S.me.id, set_by_name: item.setByName || "", set_at: item.setAt, due: item.due || "", note: item.note || "", questions: item.questions || 0 };
    S.homework.push(row);
    track(client.from("homework").insert(row), () => { S.homework = S.homework.filter(h => h !== row); });
  }
  function removeHomework(id) {
    const old = S.homework.find(h => h.id === id);
    if (!old) return;
    S.homework = S.homework.filter(h => h !== old);
    track(client.from("homework").delete().eq("id", id), () => S.homework.push(old));
  }

  // ---------- Export ----------
  // Everything saved for one of the tutor's students, for the tutor page's "Export data" button. Their saved
  // answers and practice times aren't kept on the tutor page, so they're fetched now.
  async function exportStudent(username) {
    const id = idOf("student", username), p = S.profiles[id];
    if (!p) throw new Error("no such student");
    const kv = await rows(client.from("student_kv").select("key, value, updated_at").eq("student_id", id));
    return {
      exportedAt: new Date().toISOString(),
      student: { username: p.username, name: p.display_name, created: p.created_at,
        tutors: S.links.filter(l => l.student_id === id).map(l => usernameOf(l.tutor_id)).filter(Boolean) },
      topics: topicsOf(username) || [],
      homework: homeworkOf(username),
      activity: (kv.find(r => r.key === "activity") || {}).value || activityOf(username),
      saved: Object.fromEntries(kv.filter(r => r.key !== "activity").map(r => [r.key, { value: r.value, updatedAt: r.updated_at }]))
    };
  }

  // ---------- When each conversation was last read ----------
  const lastRead = convo => S.reads[convo] || 0;
  function markRead(convo) {
    const at = Date.now();
    if (at - lastRead(convo) < 1000) return;   // already just marked
    S.reads[convo] = at;
    track(client.from("reads").upsert({ user_id: S.me.id, convo, read_at: at }));
  }

  return {
    client, S, track, start, refresh, onChange: fn => listeners.push(fn), onError: fn => errorListeners.push(fn), emit, flush,
    signIn, signOut, signedInRole, me, isAdmin, idOf, usernameOf, profile, studentAccounts, tutorAccounts,
    createAccount, deleteAccount, updateAccount, setTutors, topicsOf, saveMyTopics, kvGet, kvSet, kvKeys, kvRemove, activityOf, progressOf,
    homeworkOf, addHomework, removeHomework, exportStudent, lastRead, markRead
  };
})();
