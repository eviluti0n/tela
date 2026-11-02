// Time a student spends active on tela, saved with their data (db.js) under the key "activity" as seconds per
// day: { "2026-10-25": 1830, ... }. The student's dashboard adds to it while they have a topic open; their
// tutors' page and their own Progress pop-up show it as totals for today, this week, this month and this year.
const TelaActivity = (() => {
  const KEY = "activity";
  const IDLE = 3 * 60 * 1000;   // no clicks, taps, keys or scrolling for this long counts as away
  const TICK = 1000;
  const SAVE_EVERY = 30000;
  const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  // Totals in seconds for today, this week (from Monday), this month and this year.
  function totals(days, now = new Date()) {
    const today = dayKey(now);
    const monday = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - (now.getDay() + 6) % 7));
    const out = { day: 0, week: 0, month: 0, year: 0 };
    Object.entries(days || {}).forEach(([d, s]) => {
      s = Number(s) || 0;
      if (d === today) out.day += s;
      if (d >= monday && d <= today) out.week += s;
      if (d.slice(0, 7) === today.slice(0, 7)) out.month += s;
      if (d.slice(0, 4) === today.slice(0, 4)) out.year += s;
    });
    return out;
  }
  // "45 s", "12 min", "3 h 5 min".
  function format(secs) {
    secs = Math.round(secs || 0);
    if (secs < 60) return secs ? secs + " s" : "0 min";
    const m = Math.floor(secs / 60), h = Math.floor(m / 60);
    return h ? `${h} h${m % 60 ? ` ${m % 60} min` : ""}` : `${m} min`;
  }
  function tilesHTML(days) {
    const t = totals(days);
    return `<div class="time-tiles">${[["Today", t.day], ["This week", t.week], ["This month", t.month], ["This year", t.year]]
      .map(([label, s]) => `<div class="time-tile"><strong>${format(s)}</strong><span>${label}</span></div>`).join("")}</div>`;
  }

  // ---------- Counting (student's dashboard only) ----------
  let unsaved = 0, saveHooks = [];
  const saved = () => TelaDB.kvGet(KEY) || {};
  // What's saved plus what hasn't been sent yet.
  function mine() {
    const days = { ...saved() }, k = dayKey(new Date());
    days[k] = (days[k] || 0) + Math.floor(unsaved / 1000);
    return days;
  }
  function save() {
    const secs = Math.floor(unsaved / 1000);
    if (secs) {
      const days = mine(), thisYear = new Date().getFullYear();
      // Only this year and last year are ever shown, so older days are dropped.
      Object.keys(days).forEach(d => { if (Number(d.slice(0, 4)) < thisYear - 1) delete days[d]; });
      unsaved -= secs * 1000;
      TelaDB.kvSet(KEY, days);
    }
    saveHooks.forEach(fn => fn());
  }
  // Starts counting. onTick(ms) gets each bit of active time; onSave runs whenever the count is saved.
  // With counting given, time only counts while counting() is true.
  function track({ onTick, onSave, counting } = {}) {
    if (onSave) saveHooks.push(onSave);
    let last = Date.now(), lastInput = Date.now(), sinceSave = 0;
    ["pointerdown", "pointermove", "keydown", "wheel", "scroll", "touchstart"].forEach(ev =>
      addEventListener(ev, () => { lastInput = Date.now(); }, { passive: true, capture: true }));
    setInterval(() => {
      const now = Date.now(), step = Math.min(now - last, TICK * 2);   // a sleeping computer doesn't count
      last = now;
      if (document.visibilityState !== "visible" || now - lastInput > IDLE || (counting && !counting())) return;
      unsaved += step; sinceSave += step;
      if (onTick) onTick(step);
      if (sinceSave >= SAVE_EVERY) { sinceSave = 0; save(); }
    }, TICK);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") { save(); TelaDB.flush(); } });
    addEventListener("pagehide", () => { save(); TelaDB.flush(); });
  }

  return { KEY, dayKey, totals, format, tilesHTML, mine, save, track };
})();
