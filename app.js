/* Norsk – Norwegisch lernen (A1–C1). Reines JavaScript, keine Abhängigkeiten. */
(function () {
"use strict";

const PASS = 80;               // Prozent zum Bestehen
const EXAM_SIZE = 20;
const LEITNER_DAYS = [0, 0, 1, 3, 7, 16, 35];
const $app = document.getElementById("app");
const LEVELS = window.LEVELS;

/* ---------- Speicher ---------- */
const KEY = "norsk-progress-v1";
const blank = () => ({ lessons: {}, levels: {}, seen: {}, cards: {}, xp: 0, streak: { n: 0, last: "" }, rate: 0.9,
  goal: 20, day: { d: "", n: 0 }, best: 0, badges: {}, skill: {}, chars: {}, dialogs: {}, warm: "", remind: "18:00", perfect: 0, vnew: 15, vday: { d: "", n: 0 }, st: {} });
let S;
try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = blank(); }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const today = () => new Date().toISOString().slice(0, 10);
function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
function streakNow() { return S.streak.last === today() || S.streak.last === addDays(-1) ? S.streak.n : 0; }
function todayCount() { return S.day.d === today() ? S.day.n : 0; }
function addDaily(n) {
  if (S.day.d !== today()) S.day = { d: today(), n: 0 };
  const before = S.day.n; S.day.n += n;
  const st = S.st = S.st || {}, h = new Date().getHours();
  if (h < 7) st.early = 1; if (h >= 22) st.night = 1;
  if (before < S.goal && S.day.n >= S.goal) {
    st.goalDays = (st.goalDays || 0) + 1; const wd = new Date().getDay(); if (wd === 0 || wd === 6) st.weekend = 1;
    bumpStreak(); S.xp += 30; VIKING.confetti();
    toast(`🎯 Tagesziel erreicht! 🔥 ${S.streak.n} ${S.streak.n === 1 ? "Tag" : "Tage"} in Folge (+30 ✦)`);
  }
  save(); writeMeta(); updateStats(); setTimeout(checkBadges, 900);
}
function bumpStreak() {
  const t = today();
  if (S.streak.last === t) return;
  S.streak.n = S.streak.last === addDays(-1) ? S.streak.n + 1 : 1;
  S.streak.last = t; S.best = Math.max(S.best || 0, S.streak.n); save();
}

/* ---------- Hilfen ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const norm = s => String(s).toLowerCase().replace(/[.,!?;:«»"“”„'’()…–-]/g, " ").replace(/\s+/g, " ").trim();
const fold = s => norm(s).replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa");
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let p = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const c = [i];
    for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    p = c;
  }
  return p[n];
}
const sim = (a, b) => { a = norm(a); b = norm(b); const l = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / l; };
const words = s => norm(s).split(" ").filter(Boolean);

/* ---------- Silben & Betonung ---------- */
function sylHTML(parts) {
  return parts.map(x => (x.pre ? esc(x.pre) : "") + x.syl.map((s, i) =>
    i === x.stress && x.syl.length > 1 ? `<span class="st">ˈ${esc(s)}</span>` : `<span>${esc(s)}</span>`).join('<i class="dotsep">·</i>') + (x.post ? esc(x.post) : "")).join(" ");
}
function sylBlock(no, pron) {
  const n = SYLL.analyze(no, "no");
  let h = `<div class="syl" title="Silben, betonte Silbe fett">${sylHTML(n)}</div>`;
  if (pron) h += `<div class="pron">[${sylHTML(SYLL.analyzePron(no, pron))}]${/\(/.test(pron) ? ` <small>${esc(pron.match(/\((.*?)\)/)[1])}</small>` : ""}</div>`;
  return h;
}
const SYLL = window.SYLL;

/* ---------- Sprache: Vorlesen & Erkennen ---------- */
let voice = null;
function findVoice() {
  if (!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices();
  voice = vs.find(v => /^nb|^no/i.test(v.lang)) || vs.find(v => /^nn/i.test(v.lang)) || vs.find(v => /norw|norsk/i.test(v.name)) || null;
}
if ("speechSynthesis" in window) { findVoice(); speechSynthesis.onvoiceschanged = findVoice; }
function speak(text, slow) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = voice ? voice.lang : "nb-NO";
  if (voice) u.voice = voice;
  u.rate = slow ? 0.55 : S.rate;
  speechSynthesis.speak(u);
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const canListen = !!SR;
let srLang = "nb-NO";
/* Norwegisch-Sprachpaket fürs Gerät (Chrome 139+: SpeechRecognition.available/install) */
const PACK_LANGS = ["nb-NO", "no-NO"];
let packLocal = false, packAsked = false, packChecked = false;
const packApi = () => !!(SR && SR.available && SR.install) && !navigator.webdriver;
async function packStatus() {
  if (!packApi()) return "unsupported";
  for (const l of PACK_LANGS) {
    try { const st = await SR.available({ langs: [l], processLocally: true }); if (st !== "unavailable") { srLang = l; return st; } } catch (e) {}
  }
  return "unavailable";
}
async function packInstall() {
  try { return await SR.install({ langs: [srLang], processLocally: true }); } catch (e) { return false; }
}
function packOffer(out, then, force) {
  if (packLocal || (packAsked && !force) || !packApi()) return then();
  packStatus().then(st => {
    if (st === "available") { packLocal = true; return then(); }
    if (st !== "downloadable" && st !== "downloading") return then();
    packAsked = true;
    out.innerHTML = `<div class="notice" style="text-align:left">📦 <b>Norwegisch-Sprachpaket laden?</b><br>Damit versteht dich das Mikrofon viel besser und es funktioniert auch offline. Einmaliger Download, etwa 50–100 MB, am besten im WLAN.<div class="row" style="margin-top:8px"><button class="btn" id="pk-yes">Ja, laden</button><button class="btn ghost" id="pk-no">Später</button></div></div>`;
    out.querySelector("#pk-no").onclick = () => { out.textContent = "Okay – tippe 🎤 und sprich. Das Paket findest du später unter Ich → Einstellungen."; };
    out.querySelector("#pk-yes").onclick = async () => {
      out.textContent = "⏳ Sprachpaket wird geladen … das kann eine Minute dauern.";
      const ok = await packInstall();
      if (ok && (await packStatus()) === "available") { packLocal = true; S.pack = 1; save(); out.textContent = "✅ Sprachpaket installiert. Tippe jetzt auf 🎤."; }
      else out.textContent = "Das Paket wird im Hintergrund geladen. Versuch es gleich nochmal mit 🎤.";
    };
  });
}
function listen(onResult, onEnd, retry, target) {
  const r = new SR();
  r.lang = srLang; r.interimResults = false; r.maxAlternatives = 10; r.continuous = false;
  if (packLocal && "processLocally" in r) {
    r.processLocally = true;
    try { if (target && window.SpeechRecognitionPhrase) r.phrases = [new SpeechRecognitionPhrase(String(target).replace(/[.!?]/g, ""), 5.0)]; } catch (e) {}
  }
  let got = false, again = false;
  r.onresult = e => { got = true; const alts = []; for (const res of e.results) for (const a of res) alts.push(a.transcript); onResult(alts); };
  r.onerror = e => {
    if (e.error === "language-not-supported" && srLang !== "no-NO") { srLang = "no-NO"; again = true; return; }
    if (e.error === "no-speech" && !retry) { again = true; return; }
    if (packLocal && !retry && (e.error === "language-not-supported" || e.error === "service-not-allowed")) { packLocal = false; again = true; return; }
    onEnd(e.error);
  };
  r.onend = () => { if (again && !got) listen(onResult, onEnd, true, target); else onEnd(); };
  try { r.start(); } catch (e) { onEnd("start"); }
  return r;
}
/* Aussprache-Bewertung: tolerant gegenüber Artikeln, Zahlen, æøå-Schreibweisen und einzelnen Wörtern */
const NUMW = ["null","en","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv","tretten","fjorten","femten","seksten","sytten","atten","nitten","tjue"];
const spk = s => {
  let t = norm(String(s).replace(/\(.*?\)/g, " ")).replace(/\b(\d{1,2})\b/g, (m, d) => NUMW[+d] || m);
  t = t.replace(/aa/g, "å").replace(/oe/g, "ø").replace(/ae/g, "æ").replace(/[éè]/g, "e");
  t = t.replace(/^(å|en|ei|et|ein|eit) /, "");
  return t.replace(/ +/g, " ").trim();
};
function speakScore(alt, target) {
  const a = spk(alt), t = spk(target);
  if (!a || !t) return 0;
  if (a === t || (" " + a + " ").includes(" " + t + " ")) return 1;
  const l = Math.max(a.length, t.length);
  const whole = 1 - lev(a, t) / l;
  const tw = t.split(" "), aw = a.split(" ");
  const hit = tw.reduce((n, w) => n + Math.max(0, ...aw.map(x => 1 - lev(x, w) / Math.max(x.length, w.length))), 0) / tw.length;
  return Math.max(whole, hit * (tw.length > 1 ? 0.97 : 0.9));
}

/* ---------- Freischaltung ---------- */
const levelIdx = id => LEVELS.findIndex(l => l.id === id);
const passedLesson = id => (S.lessons[id] || 0) >= PASS;
const passedLevel = id => (S.levels[id] || 0) >= PASS;
function levelOpen(i) { return i === 0 || passedLevel(LEVELS[i - 1].id); }
function lessonOpen(li, ji) {
  if (!levelOpen(li)) return false;
  const L = LEVELS[li];
  if (passedLevel(L.id) || ji === 0) return true;
  return passedLesson(L.lessons[ji - 1].id);
}
function nextStep() {
  for (let i = 0; i < LEVELS.length; i++) {
    const L = LEVELS[i];
    if (!levelOpen(i)) return null;
    if (passedLevel(L.id)) continue;
    for (let j = 0; j < L.lessons.length; j++) if (!passedLesson(L.lessons[j].id)) return { li: i, ji: j };
    return { li: i, exam: true };
  }
  return { done: true };
}
function findLesson(id) {
  for (let i = 0; i < LEVELS.length; i++) for (let j = 0; j < LEVELS[i].lessons.length; j++)
    if (LEVELS[i].lessons[j].id === id) return { L: LEVELS[i], les: LEVELS[i].lessons[j], li: i, ji: j };
}

/* ---------- Navigation ---------- */
let tab = "home", screenStack = [];
const backBtn = document.getElementById("backBtn");
function setFocus(on) { document.body.classList.toggle("focus", on); backBtn.classList.toggle("hidden", !on); }
function updateStats() {
  document.getElementById("stats").innerHTML = `<span title="Tage in Folge">🔥 ${streakNow()}</span><span title="Tagesziel">🎯 ${Math.min(todayCount(), S.goal)}/${S.goal}</span><span title="Punkte">✦ ${S.xp}</span>`;
}
document.getElementById("tabs").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  goTab(b.dataset.tab);
});
function goTab(t) {
  tab = t; screenStack = [];
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
  setFocus(false); render();
}
backBtn.onclick = () => { if (confirmLeave()) goTab(tab); };
let inQuiz = false;
function confirmLeave() { document.querySelectorAll(".feedback").forEach(f => f.remove()); return true; }
document.getElementById("brand").onclick = () => { if (confirmLeave()) goTab("home"); };

function render() {
  inQuiz = false; updateStats(); window.scrollTo(0, 0);
  if (tab === "home") renderHome();
  else if (tab === "cards") renderCards();
  else if (tab === "sounds") renderSounds();
  else if (tab === "dialogs") renderDialogs();
  else if (tab === "lex") renderLex();
  else renderMe();
}

/* ---------- Startseite / Lernpfad ---------- */
function renderHome() {
  const n = nextStep();
  let hero = "";
  if (n && n.done) hero = `<div class="card hero"><h1>Gratulation! 🇳🇴</h1><p>Du hast alle Stufen bis C1 bestanden. Wiederhole mit den Karten, um fit zu bleiben.</p></div>`;
  else if (n) {
    const L = LEVELS[n.li];
    const label = n.exam ? `Abschlussprüfung ${L.id}` : L.lessons[n.ji].t;
    hero = `<div class="card hero"><div class="muted" style="color:#c9d4ff">Als Nächstes · ${L.id}</div><h1>${esc(label)}</h1>
      <button class="btn" id="go">${n.exam ? "Prüfung starten" : "Weiterlernen"} ›</button></div>`;
  }
  const dueList = dueCards(), due = dueList.length;
  const tc = todayCount(), gp = Math.min(100, Math.round(tc / S.goal * 100));
  const goalCard = `<div class="card goal"><div class="ring" style="--p:${gp}"><span>${gp >= 100 ? "✓" : tc}</span></div>
    <div class="lt"><b>${gp >= 100 ? "Tagesziel geschafft! 🎉" : `Tagesziel: ${tc} von ${S.goal} Aufgaben`}</b>
    <small class="muted">${streakNow() ? `🔥 ${streakNow()} ${streakNow() === 1 ? "Tag" : "Tage"} in Folge – ${gp >= 100 ? "bis morgen!" : "bleib dran!"}` : "Schaffe dein Tagesziel und starte eine Serie 🔥"}</small></div></div>`;
  const warm = due && S.warm !== today() ? `<div class="card warm"><b>☀️ Aufwärmen</b><p class="muted">${Math.min(due, 8)} Karten sind fällig. Kurz wiederholen, dann geht's weiter – so bleibt alles im Kopf.</p><button class="btn" id="warm">Aufwärmen (ca. 2 Min.) ›</button><button class="linkbtn" id="skipwarm">Heute überspringen</button></div>` : "";
  const hr = new Date().getHours(), sn = streakNow();
  const greet = gp >= 100 ? ["Tagesziel klart! Du er rå!", "Tagesziel geschafft! Du bist stark!"]
    : sn >= 2 ? [`${sn} dager på rad! Ikke bryt rekka!`, `${sn} Tage am Stück! Halte die Serie!`]
    : tc > 0 ? ["Godt i gang! Litt til?", "Guter Start! Noch ein bisschen?"]
    : hr < 11 ? ["God morgen! Klar for norsk?", "Guten Morgen! Bereit für Norwegisch?"]
    : hr < 18 ? ["Hei! Skal vi lære litt?", "Hallo! Wollen wir ein bisschen lernen?"]
    : ["God kveld! Fem minutter norsk?", "Guten Abend! Fünf Minuten Norwegisch?"];
  const coach = `<div class="coach">${VIKING.html(gp >= 100 ? "cheer" : "happy", 92, greet)}</div>`;
  hero = coach + goalCard + warm + hero;
  const vnw = vocNew(vocNewLeft()).length, vtodo = Math.min(due, 30) + vnw;
  const cardsHint = !warm && vtodo ? `<button class="lesson" id="gocards"><span class="dot" style="background:#e3a008">📚</span><span class="lt"><b>Wortschatz heute</b><small>${due ? due + " Wiederholungen" : ""}${due && vnw ? " · " : ""}${vnw ? vnw + " neue Wörter" : ""}</small></span>›</button>` : "";
  let html = hero + cardsHint;
  LEVELS.forEach((L, i) => {
    const open = levelOpen(i);
    const done = L.lessons.filter(x => passedLesson(x.id)).length;
    const pct = passedLevel(L.id) ? 100 : Math.round(done / (L.lessons.length + 1) * 100);
    html += `<section class="level"><div class="level-head"><h2>${open ? "" : "🔒 "}${esc(L.title)}</h2><span class="muted">${passedLevel(L.id) ? "✓ bestanden" : done + "/" + L.lessons.length}</span></div>
      <p class="muted">${esc(L.desc)}</p><div class="bar"><i style="width:${pct}%"></i></div>`;
    L.lessons.forEach((les, j) => {
      const o = lessonOpen(i, j), p = passedLesson(les.id), best = S.lessons[les.id];
      html += `<button class="lesson ${p ? "done" : ""} ${o ? "" : "locked"}" data-les="${les.id}" ${o ? "" : "aria-disabled=true"}>
        <span class="dot">${p ? "✓" : o ? j + 1 : "🔒"}</span><span class="lt"><b>${esc(les.t)}</b>
        <small>${p ? "Bestanden · " + best + " %" : o ? (best != null ? "Bestwert " + best + " % – nochmal versuchen" : "Bereit") : "Erst die vorige Lektion bestehen"}</small></span>${o ? "›" : ""}</button>`;
    });
    const ep = passedLevel(L.id);
    html += `<button class="lesson exam ${ep ? "done" : ""} ${open ? "" : "locked"}" data-exam="${L.id}">
      <span class="dot">${ep ? "✓" : open ? "🎓" : "🔒"}</span><span class="lt"><b>Abschlussprüfung ${L.id}</b>
      <small>${ep ? "Bestanden · " + S.levels[L.id] + " %" : open ? `${EXAM_SIZE} Fragen, ${PASS} % zum Bestehen – schaltet ${LEVELS[i + 1] ? LEVELS[i + 1].id : "das Zertifikat"} frei${done < L.lessons.length ? ". Schon Vorkenntnisse? Du kannst sie direkt machen." : ""}` : "Erst die vorige Stufe bestehen"}</small></span>${open ? "›" : ""}</button></section>`;
  });
  $app.innerHTML = html;
  const go = document.getElementById("go");
  if (go) go.onclick = () => n.exam ? startExam(LEVELS[n.li].id) : openLesson(LEVELS[n.li].lessons[n.ji].id);
  const gc = document.getElementById("gocards"); if (gc) gc.onclick = () => dailyWords(() => goTab("home"));
  const wb = document.getElementById("warm");
  if (wb) wb.onclick = () => { cardDir = "no"; cardSession(pick(dueList, 8), true, () => { S.warm = today(); save(); goTab("home"); }); };
  const sw = document.getElementById("skipwarm"); if (sw) sw.onclick = () => { S.warm = today(); save(); renderHome(); };
  $app.querySelectorAll("[data-les]").forEach(b => b.onclick = () => {
    const f = findLesson(b.dataset.les);
    if (lessonOpen(f.li, f.ji)) openLesson(b.dataset.les);
  });
  $app.querySelectorAll("[data-exam]").forEach(b => b.onclick = () => {
    if (levelOpen(levelIdx(b.dataset.exam))) startExam(b.dataset.exam);
  });
}

/* ---------- Lektion: Erklärung -> Lernkarten -> Test ---------- */
function openLesson(id) {
  const { L, les } = findLesson(id);
  setFocus(true);
  S.seen[id] = 1; save();
  $app.innerHTML = `<div class="qtype">${L.id} · Lektion</div><h1>${esc(les.t)}</h1>
    <div class="coach small">${VIKING.html("happy", 70, VIKING.phrase("start"))}</div>
    <div class="card intro">${les.intro}</div>
    <div class="card"><b>In dieser Lektion:</b><p class="muted">${les.items.length} Wörter & Wendungen · ${les.sent.length} Beispielsätze${les.gram ? ` · ${les.gram.length} Grammatik-Übungen` : ""}${les.text ? " · ein Hör- & Lesetext" : ""}${les.write ? " · eine Schreibaufgabe" : ""}</p></div>
    <button class="btn" id="learn">🃏 Lernkarten ansehen</button>
    <button class="btn ghost" id="test">Direkt zum Test</button>`;
  document.getElementById("learn").onclick = () => learnCards(id);
  document.getElementById("test").onclick = () => startLessonTest(id);
}

function cardFace(no, de, pron, opts) {
  return `<div class="flip" id="flip"><div class="flip-inner">
    <div class="face"><div class="big">${esc(opts && opts.rev ? de : no)}</div>${!(opts && opts.rev) ? sylBlock(no, pron) : ""}<div class="hint">Antippen zum Umdrehen</div></div>
    <div class="face rear"><div class="big">${esc(opts && opts.rev ? no : de)}</div>${opts && opts.rev ? sylBlock(no, pron) : ""}</div>
  </div></div>
  <div class="sbtns"><button class="icon" id="say" aria-label="Anhören">🔊</button><button class="icon" id="slow" aria-label="Langsam anhören">🐢</button>${canListen ? `<button class="icon" id="mic" aria-label="Nachsprechen">🎤</button>` : ""}</div>
  <div class="speakres center" id="sres"></div>`;
}
function wireCard(no, autoplay) {
  const f = document.getElementById("flip");
  f.onclick = () => { f.classList.toggle("on"); };
  document.getElementById("say").onclick = () => speak(no);
  document.getElementById("slow").onclick = () => speak(no, true);
  const mic = document.getElementById("mic");
  if (mic) mic.onclick = () => practiceSpeak(no, mic, document.getElementById("sres"));
  if (autoplay) setTimeout(() => speak(no), 250);
}
function practiceSpeak(target, btn, out, cb) {
  if (!packLocal && !packAsked && packApi()) { packAsked = true; return packOffer(out, () => practiceSpeak(target, btn, out, cb), true); }
  btn.classList.add("rec"); out.textContent = "Sprich jetzt …";
  let got = false;
  listen(alts => {
    got = true;
    const sc = alts.map(a => speakScore(a, target));
    const best = Math.max(...sc);
    const heard = alts[sc.indexOf(best)] || alts[0];
    const ok = best >= 0.62;
    out.innerHTML = ok ? `✅ Sehr gut! (${Math.round(best * 100)} %)` : `🔁 Verstanden: „${esc(heard)}“ – versuch es nochmal (${Math.round(best * 100)} %)<br><small class="muted">Tipp: erst nach dem Antippen sprechen, Handy nah an den Mund, ruhig und deutlich.</small>`;
    if (cb) cb(ok, best);
  }, err => {
    btn.classList.remove("rec");
    if (!got) {
      out.textContent = err === "not-allowed" || err === "service-not-allowed" ? "Mikrofon ist blockiert. Stell in den Browser-Einstellungen für diese Seite Mikrofon auf „Erlauben“ (nicht „Fragen“)." : "Nichts gehört – tippe 🎤 und sprich deutlich.";
      if (cb) cb(null);
    }
  }, false, target);
}

function learnCards(id) {
  const { les } = findLesson(id);
  const all = les.items.map(x => ({ no: x[0], de: x[1], pron: x[2] })).concat(les.sent.map(x => ({ no: x[0], de: x[1] })));
  let k = 0;
  const show = () => {
    const c = all[k];
    $app.innerHTML = `<div class="counter">Karte ${k + 1} von ${all.length}</div><div class="bar"><i style="width:${(k + 1) / all.length * 100}%"></i></div>
      ${cardFace(c.no, c.de, c.pron)}
      <div class="row"><button class="btn ghost" id="prev" ${k ? "" : "disabled"}>‹ Zurück</button><button class="btn" id="next">${k < all.length - 1 ? "Weiter ›" : "Zum Test ›"}</button></div>`;
    wireCard(c.no, true);
    document.getElementById("prev").onclick = () => { k--; show(); };
    document.getElementById("next").onclick = () => { if (k < all.length - 1) { k++; show(); } else startLessonTest(id); };
  };
  show();
}

/* ---------- Fragen erzeugen ---------- */
function poolFor(L) { return L.lessons.flatMap(x => x.items.map(i => i[1])); }
function poolNo(L) { return L.lessons.flatMap(x => x.items.map(i => i[0])); }
function distract(correct, pool, n) {
  const c = norm(correct);
  return pick([...new Set(pool.filter(p => norm(p) !== c))], n);
}
function itemQ(item, type, L, lid) {
  const [no, de, pron] = item, key = lid + "|" + no;
  switch (type) {
    case "listen": return { t: "listen", label: "Hören", prompt: "Was bedeutet das?", audio: no, opts: shuffle([de, ...distract(de, poolFor(L), 3)]), ans: de, no, key };
    case "read": return { t: "choose", label: "Lesen", prompt: no, pron, opts: shuffle([de, ...distract(de, poolFor(L), 3)]), ans: de, no, key };
    case "reverse": return { t: "choose", label: "Wortschatz", prompt: `Wie heißt „${de}“ auf Norwegisch?`, opts: shuffle([no, ...distract(no, poolNo(L), 3)]), ans: no, no, key };
    case "write": return { t: "write", label: "Schreiben", prompt: `Schreib auf Norwegisch: „${de}“`, ans: no, no, key };
    case "dict": return { t: "write", label: "Diktat", prompt: "Hör zu und schreib, was du hörst.", audio: no, ans: no, no, key };
    case "speak": return { t: "speak", label: "Sprechen", prompt: no, sub: de, pron, ans: no, no, key };
    case "stress": {
      const p = SYLL.analyze(no, "no")[0];
      return { t: "stress", label: "Betonung", prompt: "Welche Silbe wird betont?", word: no, de, syl: p.syl, ans: p.syl.map((s, i) => i === p.stress ? "ˈ" + s : s).join("·"), right: p.stress, no, key };
    }
  }
}
function sentQ(s, type, lid) {
  const [no, de] = s, key = lid + "|" + no;
  if (type === "order") return { t: "order", label: "Satzbau", prompt: `Bilde den Satz: „${de}“`, ans: no, no, key };
  if (type === "dict") return { t: "write", label: "Diktat", prompt: "Hör zu und schreib den Satz.", audio: no, ans: no, no, key };
  return { t: "speak", label: "Sprechen", prompt: no, sub: de, ans: no, no, key };
}
const stressable = it => !/\s/.test(it[0].trim()) && SYLL.analyze(it[0], "no")[0].syl.length > 1;
function stressQs(items, L, lid, n) { return pick(items.filter(stressable), n).map(it => itemQ(it, "stress", L, lid)); }
function gramQs(les, n) {
  if (!les.gram) return [];
  return pick(les.gram, n).map(g => ({ t: "gram", label: "Grammatik", prompt: g[0], opts: shuffle([g[1], g[2], g[3]]), ans: g[1], hint: g[4], no: g[0].replace("___", g[1]) }));
}
function textQs(les) {
  if (!les.text) return [];
  // Erst hören (Text verdeckt, wie Radio), dann lesen
  const nHear = les.text.q.length >= 3 ? 2 : 1;
  return les.text.q.map((q, i) => ({ t: i < nHear ? "hear" : "text", label: i < nHear ? "Hörverstehen" : "Leseverstehen", text: les.text, prompt: q[0], opts: shuffle([q[1], q[2], q[3]]), ans: q[1] }));
}
function lessonQuestions(les, L) {
  const advanced = levelIdx(L.id) >= 2;
  const types = advanced ? ["read", "reverse", "listen", "write", "speak", "read", "dict", "reverse"] : ["listen", "read", "reverse", "write", "speak", "read", "write", "listen"];
  const items = pick(les.items, 8);
  const qs = items.map((it, i) => {
    let ty = types[i % types.length];
    if (ty === "speak" && !canListen) ty = "listen";
    if (ty === "write" && words(it[0]).length > 4) ty = "reverse";
    return itemQ(it, ty, L, les.id);
  });
  const ss = pick(les.sent, 3);
  const st = ["order", canListen ? "speak" : "order", "dict"];
  ss.forEach((s, i) => qs.push(sentQ(s, st[i], les.id)));
  const rest = les.items.filter(it => !items.includes(it) && stressable(it));
  stressQs(rest.length ? rest : les.items, L, les.id, levelIdx(L.id) === 0 ? 2 : 1).forEach(q => qs.push(q));
  gramQs(les, 3).forEach(q => qs.push(q));
  let all = shuffle(qs);
  all = all.concat(textQs(les));
  if (les.write) all.push({ t: "compose", label: "Freies Schreiben", prompt: les.write.task, need: les.write.need, min: les.write.min });
  return all;
}
function examQuestions(L) {
  const qs = [];
  const tps = ["listen", "read", "reverse", "write", "dict", "speak"];
  const items = shuffle(L.lessons.flatMap(les => les.items.map(it => ({ it, les }))));
  const sents = shuffle(L.lessons.flatMap(les => les.sent.map(s => ({ s, les }))));
  const texts = shuffle(L.lessons.filter(l => l.text));
  items.slice(0, EXAM_SIZE - 4 - (texts.length ? 3 : 0)).forEach((x, i) => {
    let ty = tps[i % tps.length];
    if (ty === "speak" && !canListen) ty = "listen";
    if ((ty === "write" || ty === "dict") && words(x.it[0]).length > 4) ty = "reverse";
    qs.push(itemQ(x.it, ty, L, x.les.id));
  });
  sents.slice(0, 4).forEach((x, i) => qs.push(sentQ(x.s, i % 2 ? "dict" : "order", x.les.id)));
  const st = items.slice(EXAM_SIZE - 4).find(x => stressable(x.it));
  if (st) { qs.pop(); qs.push(itemQ(st.it, "stress", L, st.les.id)); }
  const gl = shuffle(L.lessons.filter(l => l.gram));
  gl.slice(0, 3).forEach(l => { qs.splice(qs.length - 1, 1); qs.push(...gramQs(l, 1)); });
  let out = shuffle(qs);
  if (texts.length) out = out.concat(textQs(texts[0]));
  return out.slice(0, EXAM_SIZE);
}

function startLessonTest(id) {
  const { L, les } = findLesson(id);
  runQuiz(lessonQuestions(les, L), `${L.id} · ${les.t}`, pct => {
    const prev = S.lessons[id] || 0;
    S.lessons[id] = Math.max(prev, pct); save();
    return { passed: pct >= PASS, again: () => startLessonTest(id), title: les.t };
  });
}
function startExam(lid) {
  const L = LEVELS[levelIdx(lid)];
  setFocus(true);
  $app.innerHTML = `<div class="qtype">Abschlussprüfung</div><h1>${esc(L.title)}</h1>
    <div class="coach small">${VIKING.html("happy", 70, VIKING.phrase("exam"))}</div>
    <div class="card"><p>${EXAM_SIZE} gemischte Fragen aus allen Lektionen dieser Stufe: Hören, Lesen, Schreiben${canListen ? ", Sprechen" : ""} und Leseverstehen.</p>
    <p>Du brauchst <b>${PASS} %</b>, um ${LEVELS[levelIdx(lid) + 1] ? "<b>" + LEVELS[levelIdx(lid) + 1].id + "</b> freizuschalten" : "das Ziel C1 zu erreichen"}.</p></div>
    <button class="btn red" id="s">Prüfung starten</button>`;
  document.getElementById("s").onclick = () => runQuiz(examQuestions(L), `Prüfung ${L.id}`, pct => {
    S.levels[lid] = Math.max(S.levels[lid] || 0, pct); save();
    return { passed: pct >= PASS, again: () => startExam(lid), title: "Abschlussprüfung " + lid, exam: lid };
  });
}

/* ---------- Quiz-Ablauf ---------- */
function runQuiz(qs, title, finish) {
  setFocus(true);
  let i = 0, right = 0, counted = 0;
  const wrong = [];
  inQuiz = true;
  const next = () => {
    if (i >= qs.length) return done();
    const q = qs[i];
    $app.innerHTML = `<div class="qbar"><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div><span class="muted">${i + 1}/${qs.length}</span></div>
      <div class="qtype">${esc(q.label)}</div><div id="q"></div>`;
    renderQ(q, document.getElementById("q"), (ok, skip, extra) => {
      if (!skip) { counted++; if (ok) right++; else wrong.push(q); track(q, ok, extra); addDaily(1); }
      if (q.key) cardResult(q.key, !!ok && !skip, skip);
      if (skip) { i++; return next(); }
      feedback(ok, q, extra, () => { i++; next(); });
    });
  };
  const done = () => {
    inQuiz = false;
    const pct = counted ? Math.round(right / counted * 100) : 0;
    const r = finish(pct);
    const rph = VIKING.phrase(r.passed ? "pass" : "fail");
    S.xp += right * 10 + (r.passed ? 50 : 0); if (pct === 100 && counted >= 5) S.perfect = (S.perfect || 0) + 1; save(); updateStats(); setTimeout(checkBadges, 600);
    const nx = nextStep();
    if (r.passed) { VIKING.confetti(); setTimeout(() => speak(rph[0]), 400); }
    $app.innerHTML = `<div class="center">${VIKING.html(r.passed ? "cheer" : "sad", 130, rph)}
      <div class="score" style="color:${r.passed ? "var(--ok)" : "var(--bad)"}">${pct} %</div>
      <h1>${r.passed ? "Bestanden!" : "Noch nicht ganz"}</h1>
      <p class="muted">${right} von ${counted} richtig · ${PASS} % zum Bestehen</p>
      <p>${r.passed ? (r.exam ? (LEVELS[levelIdx(r.exam) + 1] ? `Stufe <b>${LEVELS[levelIdx(r.exam) + 1].id}</b> ist jetzt freigeschaltet!` : "Du hast C1 erreicht! Fantastisk!") : "Die nächste Lektion ist freigeschaltet.") : "Schau dir die Lernkarten nochmal an und versuch es erneut. Deine Fehler landen automatisch in den Karten zum Wiederholen."}</p></div>
      ${wrong.length ? `<div class="card"><b>Das solltest du wiederholen:</b>${wrong.filter(w => w.no || w.ans).slice(0, 8).map(w => `<p>🔊 <a href="#" data-say="${esc(w.no || w.ans)}">${esc(w.no || w.ans)}</a>${w.sub ? " – " + esc(w.sub) : ""}</p>`).join("")}</div>` : ""}
      ${r.passed && nx && !nx.done ? `<button class="btn ok" id="nx">Weiter: ${esc(nx.exam ? "Abschlussprüfung " + LEVELS[nx.li].id : LEVELS[nx.li].lessons[nx.ji].t)} ›</button>` : ""}
      ${!r.passed ? `<button class="btn" id="ag">Nochmal versuchen</button>` : ""}
      <button class="btn ghost" id="home">Zur Übersicht</button>`;
    $app.querySelectorAll("[data-say]").forEach(a => a.onclick = e => { e.preventDefault(); speak(a.dataset.say); });
    const b1 = document.getElementById("nx"); if (b1) b1.onclick = () => nx.exam ? startExam(LEVELS[nx.li].id) : openLesson(LEVELS[nx.li].lessons[nx.ji].id);
    const b2 = document.getElementById("ag"); if (b2) b2.onclick = r.again;
    document.getElementById("home").onclick = () => goTab("home");
  };
  next();
}

function feedback(ok, q, extra, cont) {
  const el = document.createElement("div");
  el.className = "feedback" + (ok ? "" : " bad");
  const sol = q.t === "compose" ? "" : `<p>${ok ? "" : "Richtig wäre: "}<b>${esc(q.ans)}</b>${q.no && q.no !== q.ans ? ` <span class="muted">(${esc(q.no)})</span>` : ""}</p>`;
  const ph = VIKING.phrase(ok ? "right" : "wrong");
  el.innerHTML = `<div class="inner"><div class="fb-head"><button class="viking mini vk-${ok ? "cheer" : "sad"}" data-say="${ph[0]}" style="--s:58px">${VIKING.svg(ok ? "cheer" : "sad")}</button>
    <div><b>${ok ? "✅ " : ""}${ph[0]}</b><div class="muted" style="font-size:13px">${ph[1]}${ok ? "" : " – das war leider falsch."}</div></div></div>${extra ? `<p>${extra}</p>` : ""}${ok && !extra ? "" : sol}
    <div class="row">${q.no ? `<button class="btn ghost" id="fs" style="flex:0 0 64px">🔊</button>` : ""}<button class="btn ${ok ? "ok" : "red"}" id="fc">Weiter</button></div></div>`;
  document.body.appendChild(el);
  if (q.no) { document.getElementById("fs").onclick = () => speak(q.no); if (!ok || q.t === "write") speak(q.no); }
  const fc = document.getElementById("fc"); fc.focus();
  fc.onclick = () => { el.remove(); cont(); };
}

function renderQ(q, el, answer) {
  let answered = false;
  const once = (...a) => { if (answered) return; answered = true; answer(...a); };
  if (q.t === "choose" || q.t === "listen" || q.t === "text" || q.t === "hear") {
    let head = "";
    if (q.t === "listen") head = `<div class="prompt">${esc(q.prompt)}</div><div class="sbtns" style="justify-content:flex-start;margin-bottom:14px"><button class="icon" id="pa">🔊</button><button class="icon" id="ps">🐢</button></div>`;
    else if (q.t === "hear") head = `<div class="card reading hear"><div class="hear-top"><button class="icon big" id="pa" aria-label="Abspielen">🎧</button><button class="icon" id="ps" aria-label="Langsam">🐢</button><span class="muted">Hör gut zu, wie im Radio. Du kannst so oft abspielen, wie du willst.</span></div><div class="hear-text hidden">${esc(q.text.no)}<p class="muted">${esc(q.text.de)}</p></div></div><div class="prompt">${esc(q.prompt)}</div>`;
    else if (q.t === "text") head = `<div class="card reading">${esc(q.text.no)}<details><summary>Übersetzung anzeigen</summary><p class="muted">${esc(q.text.de)}</p></details><div class="sbtns" style="justify-content:flex-start"><button class="icon" id="pa">🔊</button></div></div><div class="prompt">${esc(q.prompt)}</div>`;
    else head = `<div class="prompt">${esc(q.prompt)}${q.t === "choose" && q.no === q.prompt ? `<div style="font-size:16px;font-weight:400">${sylBlock(q.no, q.pron)}</div>` : ""}</div>${q.no && q.prompt === q.no ? `<div class="sbtns" style="justify-content:flex-start;margin:-6px 0 14px"><button class="icon" id="pa">🔊</button></div>` : ""}`;
    el.innerHTML = head + `<div class="opts">${q.opts.map((o, i) => `<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`;
    const pa = el.querySelector("#pa"), ps = el.querySelector("#ps");
    const audio = q.t === "text" || q.t === "hear" ? q.text.no : q.audio || q.no;
    if (pa) pa.onclick = () => speak(audio);
    if (ps) ps.onclick = () => speak(audio, true);
    if (q.t === "listen") setTimeout(() => speak(q.audio), 300);
    if (q.t === "hear") setTimeout(() => speak(q.text.no), 400);
    el.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      if (answered) return;
      const v = q.opts[+b.dataset.i], ok = v === q.ans;
      el.querySelectorAll(".opt").forEach(x => { if (q.opts[+x.dataset.i] === q.ans) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      const ht = el.querySelector(".hear-text"); if (ht) ht.classList.remove("hidden");
      once(ok);
    });
  } else if (q.t === "write") {
    el.innerHTML = `<div class="prompt">${esc(q.prompt)}</div>
      ${q.audio ? `<div class="sbtns" style="justify-content:flex-start;margin-bottom:14px"><button class="icon" id="pa">🔊</button><button class="icon" id="ps">🐢</button></div>` : ""}
      <input class="txt" id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Auf Norwegisch tippen …">
      <div class="chars"><button>æ</button><button>ø</button><button>å</button></div>
      <button class="btn" id="chk" disabled>Prüfen</button>`;
    const inp = el.querySelector("#in"), chk = el.querySelector("#chk");
    if (q.audio) { el.querySelector("#pa").onclick = () => speak(q.audio); el.querySelector("#ps").onclick = () => speak(q.audio, true); setTimeout(() => speak(q.audio), 300); }
    el.querySelectorAll(".chars button").forEach(b => b.onclick = () => {
      const s = inp.selectionStart ?? inp.value.length;
      inp.value = inp.value.slice(0, s) + b.textContent + inp.value.slice(inp.selectionEnd ?? s);
      inp.focus(); inp.setSelectionRange(s + 1, s + 1); chk.disabled = !inp.value.trim();
    });
    inp.oninput = () => chk.disabled = !inp.value.trim();
    inp.onkeydown = e => { if (e.key === "Enter" && inp.value.trim()) chk.click(); };
    chk.onclick = () => {
      const v = inp.value, a = q.ans;
      if (norm(v) === norm(a)) return once(true);
      if (fold(v) === fold(a)) return once(true, false, "Fast perfekt! Benutze die Tasten æ ø å für die richtige Schreibweise.");
      const d = lev(norm(v), norm(a));
      if (norm(a).length >= 6 && d === 1) return once(true, false, `Kleiner Tippfehler – richtig: <b>${esc(a)}</b>`);
      once(false);
    };
    setTimeout(() => inp.focus(), 100);
  } else if (q.t === "order") {
    const target = q.ans.replace(/[.!?]$/, "").split(/\s+/);
    let pool = shuffle(target.map((w, i) => ({ w, i })));
    if (pool.map(p => p.w).join(" ") === target.join(" ") && target.length > 1) pool = pool.reverse();
    let built = [];
    const draw = () => {
      el.innerHTML = `<div class="prompt">${esc(q.prompt)}</div>
        <div class="tiles" id="built">${built.map((p, k) => `<button class="tile" data-b="${k}">${esc(p.w)}</button>`).join("")}</div>
        <div class="tiles pool">${pool.map((p, k) => `<button class="tile" data-p="${k}">${esc(p.w)}</button>`).join("")}</div>
        <button class="btn" id="chk" ${pool.length ? "disabled" : ""}>Prüfen</button>`;
      el.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { if (!pool[+b.dataset.p]) return; built.push(pool.splice(+b.dataset.p, 1)[0]); draw(); });
      el.querySelectorAll("[data-b]").forEach(b => b.onclick = () => { if (!built[+b.dataset.b]) return; pool.push(built.splice(+b.dataset.b, 1)[0]); draw(); });
      el.querySelector("#chk").onclick = () => once(norm(built.map(p => p.w).join(" ")) === norm(q.ans));
    };
    draw();
  } else if (q.t === "speak") {
    let tries = 0;
    el.innerHTML = `<div class="prompt">Sprich nach:</div>
      <div class="card center"><div class="big">${esc(q.prompt)}</div>${sylBlock(q.prompt, q.pron)}<p class="muted">${esc(q.sub)}</p>
      <div class="sbtns"><button class="icon" id="pa">🔊</button><button class="icon" id="ps">🐢</button></div></div>
      <button class="btn red" id="mic">🎤 Tippen und sprechen</button><div class="speakres center" id="sres"></div>
      <button class="btn ghost" id="skip">Ich kann gerade nicht sprechen</button>`;
    el.querySelector("#pa").onclick = () => speak(q.ans);
    el.querySelector("#ps").onclick = () => speak(q.ans, true);
    const mic = el.querySelector("#mic"), out = el.querySelector("#sres");
    mic.onclick = () => practiceSpeak(q.ans, mic, out, (ok) => {
      if (ok === null) return;
      tries++;
      if (ok) setTimeout(() => once(true), 700);
      else if (tries >= 3) setTimeout(() => once(false, false, "Drei Versuche – hör dir das Wort nochmal genau an."), 900);
    });
    el.querySelector("#skip").onclick = () => once(false, true);
  } else if (q.t === "gram") {
    const parts = q.prompt.split("___");
    el.innerHTML = `<div class="prompt">Welches Wort passt?</div>
      <div class="card gapline">${esc(parts[0])}<span class="gap">?</span>${esc(parts[1] || "")}</div>
      <div class="opts">${q.opts.map((o, i) => `<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`;
    el.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      if (answered) return;
      const v = q.opts[+b.dataset.i], ok = v === q.ans;
      el.querySelector(".gap").textContent = q.ans; el.querySelector(".gap").classList.add(ok ? "ok" : "bad");
      el.querySelectorAll(".opt").forEach(x => { if (q.opts[+x.dataset.i] === q.ans) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      once(ok, false, q.hint ? `💡 ${esc(q.hint)}` : "");
    });
  } else if (q.t === "stress") {
    el.innerHTML = `<div class="prompt">${esc(q.prompt)}</div>
      <div class="card center"><div class="big">${esc(q.word)}</div><p class="muted">${esc(q.de)}</p>
      <div class="sbtns"><button class="icon" id="pa">🔊</button><button class="icon" id="ps">🐢</button></div></div>
      <p class="muted">Hör genau hin und tippe die betonte Silbe an:</p>
      <div class="tiles pool" style="justify-content:center">${q.syl.map((s, i) => `<button class="tile big-tile" data-s="${i}">${esc(s)}</button>`).join("")}</div>`;
    el.querySelector("#pa").onclick = () => speak(q.word);
    el.querySelector("#ps").onclick = () => speak(q.word, true);
    setTimeout(() => speak(q.word), 300);
    el.querySelectorAll("[data-s]").forEach(b => b.onclick = () => {
      if (answered) return;
      const ok = +b.dataset.s === q.right;
      el.querySelectorAll("[data-s]").forEach(x => { if (+x.dataset.s === q.right) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      once(ok, false, `Silben: <b>${esc(q.ans)}</b>`);
    });
  } else if (q.t === "compose") {
    el.innerHTML = `<div class="prompt">${esc(q.prompt)}</div>
      <p class="muted">Pflichtwörter: ${q.need.map(n => `<b>${esc(n)}</b>`).join(", ")} · mindestens ${q.min} Wörter</p>
      <textarea class="txt" id="in" placeholder="Schreib hier auf Norwegisch …"></textarea>
      <div class="chars"><button>æ</button><button>ø</button><button>å</button></div>
      <p class="muted" id="cnt">0 Wörter</p><button class="btn" id="chk">Abgeben</button>`;
    const inp = el.querySelector("#in");
    el.querySelectorAll(".chars button").forEach(b => b.onclick = () => { const s = inp.selectionStart; inp.value = inp.value.slice(0, s) + b.textContent + inp.value.slice(inp.selectionEnd); inp.focus(); inp.setSelectionRange(s + 1, s + 1); inp.oninput(); });
    inp.oninput = () => el.querySelector("#cnt").textContent = words(inp.value).length + " Wörter";
    el.querySelector("#chk").onclick = () => {
      const t = norm(inp.value), n = words(inp.value).length;
      const miss = q.need.filter(w => !t.includes(norm(w)));
      if (!miss.length && n >= q.min) once(true, false, "Gut geschrieben! Lies deinen Text laut vor, um auch die Aussprache zu üben.");
      else once(false, false, (miss.length ? `Es fehlt: <b>${miss.map(esc).join(", ")}</b>. ` : "") + (n < q.min ? `Noch zu kurz (${n}/${q.min} Wörter).` : ""));
    };
  }
}

/* ---------- Vokabelkarten (Leitner-System) ---------- */
function deck() {
  const out = [];
  LEVELS.forEach((L, i) => L.lessons.forEach((les, j) => {
    if (!lessonOpen(i, j) || !(S.seen[les.id] || S.lessons[les.id] != null)) return;
    les.items.forEach(it => out.push({ key: les.id + "|" + it[0], no: it[0], de: it[1], pron: it[2], lv: L.id }));
    les.sent.forEach(s => out.push({ key: les.id + "|" + s[0], no: s[0], de: s[1], lv: L.id }));
  }));
  VOC.forEach(v => { if (S.cards[v.key]) out.push(v); });
  return out;
}
function cardResult(key, ok, skip) {
  if (skip) return;
  const c = S.cards[key] || { b: 0, d: today() };
  c.b = ok ? Math.min(6, Math.max(1, c.b) + 1) : 1;
  c.d = addDays(LEITNER_DAYS[c.b]);
  S.cards[key] = c; save();
}
function dueCards() {
  const t = today();
  return deck().filter(c => S.cards[c.key] && S.cards[c.key].d <= t);
}
let cardDir = "no";
/* ---------- Wortschatz-Trainer ---------- */
const VOC = (() => {
  const seen = new Set(), out = [];
  LEVELS.forEach(L => L.lessons.forEach(l => l.items.forEach(i => seen.add(i[0].toLowerCase()))));
  (window.VOCAB || []).forEach((g, gi) => g.w.split("|").forEach(p => {
    const k = p.indexOf("="); if (k < 0) return;
    const no = p.slice(0, k).trim(), de = p.slice(k + 1).trim(), lo = no.toLowerCase();
    if (!no || !de || seen.has(lo)) return; seen.add(lo);
    out.push({ key: "v|" + no, no, de, lv: g.lv, t: g.t, kind: g.k || "core", gi });
  }));
  const li = id => LEVELS.findIndex(l => l.id === id);
  return out.map((v, i) => [v, i]).sort((x, y) => li(x[0].lv) - li(y[0].lv) || x[1] - y[1]).map(x => x[0]);
})();
const VGROUPS = (window.VOCAB || []).map((g, gi) => ({ gi, lv: g.lv, t: g.t, kind: g.k || "core", n: VOC.filter(v => v.gi === gi).length })).filter(g => g.n);
const ALLWORDS = (() => { const a = []; LEVELS.forEach(L => L.lessons.forEach(l => l.items.forEach(i => a.push({ no: i[0], de: i[1], lv: L.id, t: l.t })))); VOC.forEach(v => a.push(v)); return a; })();
function vocMaxLevel() { let m = 0; LEVELS.forEach((L, i) => { if (levelOpen(i)) m = i; }); return m; }
function vocNewLeft() { return Math.max(0, S.vnew - (S.vday.d === today() ? S.vday.n : 0)); }
function vocNew(n) { const m = vocMaxLevel(); return VOC.filter(v => !S.cards[v.key] && levelIdx(v.lv) <= m).slice(0, n); }
function knownCount() { return Object.entries(S.cards).filter(([k, c]) => c.b >= 3 && (k.startsWith("v|") || !/\s\S+\s/.test(k.split("|")[1] || ""))).length; }
function vocToday() { const due = dueCards(), nw = vocNew(vocNewLeft()); return { due, nw }; }
function dailyWords(onDone) {
  const { due, nw } = vocToday();
  const list = pick(due, 30).concat(nw.map(v => Object.assign({ isNew: true }, v)));
  if (!list.length) { toast("Für heute ist alles erledigt ✓"); return; }
  cardDir = "no"; cardSession(list, true, onDone);
}
function renderCards() {
  const d = deck(), due = dueCards(), left = vocNewLeft(), nw = vocNew(left);
  const total = ALLWORDS.length, known = knownCount(), started = Object.keys(S.cards).length;
  const counts = [0, 0, 0, 0, 0, 0, 0];
  d.forEach(c => counts[S.cards[c.key] ? S.cards[c.key].b : 0]++);
  const lvMax = vocMaxLevel();
  const groups = k => VGROUPS.filter(g => g.kind === k && levelIdx(g.lv) <= lvMax);
  const chip = g => { const ws = VOC.filter(v => v.gi === g.gi), kn = ws.filter(v => S.cards[v.key] && S.cards[v.key].b >= 3).length;
    return `<button class="chip" data-g="${g.gi}"><b>${esc(g.t)}</b><small>${g.lv} · ${kn}/${g.n}</small></button>`; };
  const todo = Math.min(due.length, 30) + nw.length;
  $app.innerHTML = `<h1>Wortschatz</h1>
    <div class="coach small">${todo ? VIKING.html("happy", 70, due.length >= 10 ? ["Tid for repetisjon!", `${due.length} Wörter wollen wiederholt werden.`] : VIKING.phrase("cards")) : VIKING.html("cheer", 70, VIKING.phrase("cardsdone"))}</div>
    <div class="card"><div class="vk-row"><div><b style="font-size:26px">${known.toLocaleString("de-DE")}</b> <span class="muted">sicher gelernt</span></div><div class="muted" style="text-align:right">${started.toLocaleString("de-DE")} begonnen<br>${total.toLocaleString("de-DE")} in der App</div></div>
      <div class="bar"><i style="width:${Math.min(100, known / 100)}%"></i></div><p class="muted" style="font-size:14px;margin:6px 0 0">Ziel C1: rund 10.000 Wörter. Jeden Tag ein paar, und die App erinnert dich zur richtigen Zeit.</p></div>
    <div class="card hero"><h1 style="margin:0 0 6px">📚 Heute</h1><p style="margin:0 0 12px;color:#dfe6ff">${due.length ? `<b>${due.length}</b> Wiederholungen` : "Keine Wiederholungen"} · ${nw.length ? `<b>${nw.length}</b> neue Wörter` : "keine neuen Wörter mehr heute"}</p>
      <button class="btn" id="today" ${todo ? "" : "disabled"}>${todo ? `Los geht's (ca. ${Math.max(1, Math.round(todo / 6))} Min.) ›` : "Alles erledigt für heute ✓"}</button></div>
    <div class="row" style="gap:8px;align-items:center"><span class="muted" style="font-size:14px">Neue Wörter pro Tag:</span><div class="seg" id="vnew" style="flex:1">${[5, 15, 30].map(n => `<button data-n="${n}" class="${S.vnew === n ? "on" : ""}">${n}</button>`).join("")}</div></div>
    <div class="seg" id="dir"><button data-d="no" class="${cardDir === "no" ? "on" : ""}">🇳🇴 → 🇩🇪</button><button data-d="de" class="${cardDir === "de" ? "on" : ""}">🇩🇪 → 🇳🇴</button></div>
    <input class="txt" id="q" type="search" placeholder="🔍 Wort suchen (norwegisch oder deutsch) …" autocomplete="off" style="margin-top:6px">
    <div id="res"></div>
    <details class="card" ${groups("core").length ? "" : "hidden"}><summary><b>Themen</b> <span class="muted">· gezielt üben</span></summary><div class="chips">${groups("core").map(chip).join("")}</div></details>
    <details class="card" ${groups("eigen").length ? "" : "hidden"}><summary><b>Eigenheiten</b> <span class="muted">· Redewendungen, Dialekte, Umgangssprache</span></summary><div class="chips">${groups("eigen").map(chip).join("")}</div></details>
    <details class="card"><summary><b>Karteikasten</b> <span class="muted">· ${d.length} Karten</span></summary>
      <div class="boxes">${["Neu", "1", "2", "3", "4", "5", "Sicher"].map((n, i) => `<div><b>${counts[i]}</b>${n}</div>`).join("")}</div>
      <p class="muted" style="font-size:14px">Gewusste Karten wandern ein Fach weiter und kommen seltener. Nicht gewusste starten wieder in Fach 1.</p>
      <button class="btn ghost" id="all" ${d.length ? "" : "disabled"}>Alle Karten durchblättern</button></details>
    ${lvMax < LEVELS.length - 1 ? `<p class="muted center" style="font-size:14px">Neue Wörter kommen aus den Stufen, die du schon freigeschaltet hast. Mit jeder bestandenen Prüfung kommen weitere dazu.</p>` : ""}`;
  document.getElementById("today").onclick = () => dailyWords();
  document.querySelectorAll("#vnew button").forEach(b => b.onclick = () => { S.vnew = +b.dataset.n; save(); renderCards(); });
  document.querySelectorAll("#dir button").forEach(b => b.onclick = () => { cardDir = b.dataset.d; renderCards(); });
  document.getElementById("all").onclick = () => cardSession(shuffle(d), false);
  document.querySelectorAll("[data-g]").forEach(b => b.onclick = () => cardSession(shuffle(VOC.filter(v => v.gi === +b.dataset.g)).slice(0, 20), true));
  const q = document.getElementById("q"), res = document.getElementById("res");
  q.oninput = () => {
    const t = fold(q.value);
    if (t.length < 2) { res.innerHTML = ""; return; }
    const hits = ALLWORDS.filter(w => fold(w.no).includes(t) || fold(w.de).includes(t)).sort((a, b) => (fold(a.no).startsWith(t) ? 0 : 1) - (fold(b.no).startsWith(t) ? 0 : 1)).slice(0, 40);
    res.innerHTML = hits.length ? `<div class="card wl">${hits.map((w, i) => `<button class="wrow" data-i="${i}"><span><b>${esc(w.no)}</b><small>${esc(w.de)}</small></span><span class="muted">${w.lv} 🔊</span></button>`).join("")}</div>` : `<p class="muted">Nichts gefunden.</p>`;
    res.querySelectorAll(".wrow").forEach(b => b.onclick = () => speak(hits[+b.dataset.i].no));
  };
}
function cardSession(list, grade, onDone) {
  setFocus(true);
  let k = 0, known = 0;
  const rev = cardDir === "de";
  const show = () => {
    if (k >= list.length) {
      S.st = S.st || {}; S.st.rounds = (S.st.rounds || 0) + 1;
      S.xp += known * 2; save(); updateStats(); setTimeout(checkBadges, 500);
      const good = !grade || known >= list.length * 0.7;
      if (good) VIKING.confetti();
      $app.innerHTML = `<div class="center">${VIKING.html(good ? "cheer" : "happy", 120, VIKING.phrase(good ? "round" : "roundmeh"))}<h1>Runde geschafft!</h1><p>${grade ? `${known} von ${list.length} gewusst · +${known * 2} ✦` : "Alle Karten angesehen."}</p></div>
        <button class="btn" id="b">${onDone ? "Weiter zum Lernen ›" : "Zurück zu den Karten"}</button>`;
      document.getElementById("b").onclick = onDone || (() => goTab("cards"));
      return;
    }
    const c = list[k];
    $app.innerHTML = `<div class="counter">${c.isNew ? `<span class="newtag">NEU</span> ` : ""}${k + 1} / ${list.length}</div><div class="bar"><i style="width:${k / list.length * 100}%"></i></div>
      ${cardFace(c.no, c.de, c.pron, { rev })}
      ${grade ? `<div class="row"><button class="btn red" id="no">✗ Nochmal</button><button class="btn ok" id="yes">✓ Gewusst</button></div>` : `<button class="btn" id="yes">Weiter ›</button>`}`;
    wireCard(c.no, !rev);
    const f = document.getElementById("flip");
    if (rev) f.addEventListener("click", () => { if (f.classList.contains("on")) speak(c.no); });
    const markNew = () => { if (c.isNew && !c.counted) { c.counted = true; if (S.vday.d !== today()) S.vday = { d: today(), n: 0 }; S.vday.n++; } };
    document.getElementById("yes").onclick = () => { if (grade) { markNew(); cardResult(c.key, true); known++; addDaily(1); } k++; show(); };
    const no = document.getElementById("no"); if (no) no.onclick = () => { markNew(); cardResult(c.key, false); addDaily(1); list.push(c); k++; show(); };
  };
  show();
}

/* ---------- Laute ---------- */
function renderSounds() {
  $app.innerHTML = `<h1>Aussprache</h1><div class="coach small">${VIKING.html("happy", 70, VIKING.phrase("sounds"))}</div><p class="muted">Tippe auf eine Zeile, um das Beispiel zu hören.</p>` +
    window.SOUNDS.map(g => `<h2>${esc(g.h)}</h2><div class="card">${g.list.map(s => `<button class="sound" style="width:100%;background:none;border:0;border-bottom:1px solid var(--line);text-align:left" data-say="${esc(s[2])}"><span class="l">${esc(s[0])}</span><span class="d">${esc(s[1])}<br><small class="muted">Beispiel: <b>${esc(s[2])}</b></small></span>🔊</button>`).join("")}</div>`).join("") +
    (canListen ? `<h2>Freies Sprechen</h2><div class="card"><p>Sag irgendetwas auf Norwegisch – die App zeigt dir, was sie verstanden hat.</p><button class="btn red" id="free">🎤 Sprechen</button><p class="speakres center" id="fr"></p></div>` : "");
  $app.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
  const fb = document.getElementById("free");
  if (fb) fb.onclick = () => {
    const out = document.getElementById("fr"); fb.classList.add("rec"); out.textContent = "Sprich jetzt …";
    listen(a => { out.innerHTML = `Verstanden: „<b>${esc(a[0])}</b>“`; }, err => { fb.classList.remove("rec"); if (err) out.textContent = "Nichts verstanden – versuch es nochmal."; });
  };
}

/* ---------- Fortschritt & Einstellungen ---------- */
function renderMe() {
  const total = LEVELS.reduce((a, L) => a + L.lessons.length, 0);
  const done = Object.keys(S.lessons).filter(passedLesson).length;
  const lvl = [...LEVELS].reverse().find(L => passedLevel(L.id));
  const nb = Object.keys(S.badges).length;
  $app.innerHTML = `<h1>Dein Fortschritt</h1>
    <div class="coach small">${VIKING.html(nb ? "cheer" : "happy", 70, nb ? ["Jeg er stolt av deg!", `Rang ${rank().lv} · ${nb} von ${BADGES.length} Erfolgen – weiter so!`] : VIKING.phrase("me"))}</div>
    <div class="card"><p>Erreichtes Niveau: <b>${lvl ? lvl.id : "Anfänger"}</b></p><p>Lektionen bestanden: <b>${done} / ${total}</b></p>
      <div class="bar"><i style="width:${done / total * 100}%"></i></div>
      <p>🔥 ${streakNow()} Tag(e) in Folge (Rekord ${S.best || 0}) · ✦ ${S.xp} Punkte · 🃏 ${Object.keys(S.cards).length} Karten im Training</p>
      <div class="boxes">${LEVELS.map(L => `<div><b>${passedLevel(L.id) ? "✓" : levelOpen(levelIdx(L.id)) ? "…" : "🔒"}</b>${L.id}</div>`).join("")}</div></div>
    <h2>Rang</h2>
    <div class="card"><p><b>Rang ${rank().lv}</b> · noch ${rank().next} ✦ bis Rang ${rank().lv + 1}</p><div class="bar"><i style="width:${rank().p}%"></i></div>
      <p class="muted" style="font-size:14px">✦ gibt es für richtige Antworten, bestandene Tests, Dialoge, das Tagesziel und Abzeichen.</p></div>
    <h2>Erfolge <span class="muted" style="font-size:15px">${nb}/${BADGES.length}</span></h2>
    ${BCATS.map(c => `<h3 class="bcat">${c[1]} ${esc(c[2])}</h3><div class="badges">${BADGES.filter(b => b[5] === c[0]).map(badgeHTML).join("")}</div>`).join("")}
    <h2>Deine Stärken & Schwächen</h2>
    <div class="card">${weakSpots().length ? weakSpots().map(w => `<div class="skill"><span>${esc(w.label)}</span><div class="bar"><i style="width:${w.pct}%;background:${w.pct >= 80 ? "var(--ok)" : w.pct >= 60 ? "#e3a008" : "var(--bad)"}"></i></div><b>${w.pct} %</b></div>`).join("") +
      (weakSpots()[0].pct < 90 ? `<button class="btn red" id="weak">Gezielt üben: ${esc(weakSpots()[0].label)} ›</button>` : `<p class="muted">Alles im grünen Bereich – stark! 💪</p>`)
      : `<p class="muted">Mach ein paar Tests – dann siehst du hier, was schon gut sitzt und wo du gezielt üben kannst.</p>`}</div>
    <h2>Tagesziel & Erinnerung</h2>
    <div class="card">
      <p>Wie viele Aufgaben pro Tag?</p>
      <div class="seg" id="goalseg">${[10, 20, 40].map(g => `<button data-g="${g}" class="${S.goal === g ? "on" : ""}">${g === 10 ? "Locker · 10" : g === 20 ? "Normal · 20" : "Intensiv · 40"}</button>`).join("")}</div>
      <label class="set">Tägliche Erinnerung um <input type="time" id="rtime" value="${esc(S.remind || "18:00")}"></label>
      <button class="btn ghost" id="ics">📅 Erinnerung in den Kalender eintragen</button>
      <button class="btn ghost" id="notif">🔔 Benachrichtigungen erlauben</button>
      <p class="muted" id="nres" style="font-size:14px">Der Kalender-Eintrag klappt auf jedem Handy zuverlässig. Benachrichtigungen funktionieren nur in der installierten App auf Android.</p>
    </div>
    <h2>Einstellungen</h2>
    <div class="card">
      ${!("speechSynthesis" in window) ? `<div class="notice">Dein Browser kann nicht vorlesen. Nutze Chrome, Edge oder Safari.</div>` : !voice ? `<div class="notice">Keine norwegische Stimme gefunden. Am Handy: Einstellungen → Sprache → Text-in-Sprache → Norwegisch installieren. Am PC klappt es meist in Chrome oder Edge.</div>` : `<p class="muted">Stimme: ${esc(voice.name)}</p>`}
      ${!canListen ? `<div class="notice">Spracherkennung wird hier nicht unterstützt (am besten Chrome auf Android/PC oder Safari auf iPhone). Sprechübungen werden solange übersprungen.</div>` : ""}
      ${canListen && packApi() ? `<button class="btn ghost" id="pack">📦 Norwegisch-Sprachpaket fürs Mikrofon</button><p class="muted" id="packres" style="font-size:14px"></p>` : ""}
      <label class="set">Sprechtempo <input type="range" min="0.5" max="1.2" step="0.05" value="${S.rate}" id="rate"></label>
      <button class="btn ghost" id="test">🔊 Stimme testen</button></div>
    <h2>Als App installieren</h2>
    <div class="card" id="inst"><p><b>Android/Chrome:</b> Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.</p><p><b>iPhone/Safari:</b> Teilen-Symbol → „Zum Home-Bildschirm“.</p><p><b>PC (Chrome/Edge):</b> Installieren-Symbol rechts in der Adressleiste.</p><p class="muted">Danach funktioniert die App auch offline.</p></div>
    <h2>Daten</h2>
    <div class="card"><p class="muted">Dein Fortschritt wird nur auf diesem Gerät gespeichert.</p>
      <div class="row"><button class="btn ghost" id="exp">Sichern</button><button class="btn ghost" id="imp">Laden</button></div>
      <button class="btn ghost" id="reset" style="color:var(--bad)">Alles zurücksetzen</button></div>`;
  document.getElementById("rate").oninput = e => { S.rate = +e.target.value; save(); };
  const pk = document.getElementById("pack");
  if (pk) { const pr = document.getElementById("packres");
    pr.textContent = S.pack ? "✅ Installiert – das Mikrofon erkennt Norwegisch direkt auf dem Gerät." : "Tippe, um zu prüfen, ob dein Handy ein Norwegisch-Paket anbietet.";
    pk.onclick = () => { packAsked = false; pr.textContent = "Prüfe …"; packStatus().then(st => {
      if (st === "available") { packLocal = true; S.pack = 1; save(); pr.textContent = "✅ Installiert – das Mikrofon erkennt Norwegisch direkt auf dem Gerät."; }
      else if (st === "unavailable" || st === "unsupported") pr.textContent = "Für Norwegisch bietet dein Gerät (noch) kein Paket an – die Erkennung läuft dann online über Google.";
      else packOffer(pr, () => {}, true); }); }; }
  const wk = document.getElementById("weak"); if (wk) wk.onclick = () => practiceWeak(weakSpots()[0]);
  $app.querySelectorAll("[data-badge]").forEach(el => el.onclick = () => { const b = BADGES.find(x => x[0] === el.dataset.badge); if (b) badgeModal(b, !!S.badges[b[0]]); });
  document.querySelectorAll("#goalseg button").forEach(b => b.onclick = () => { S.goal = +b.dataset.g; save(); updateStats(); renderMe(); });
  document.getElementById("rtime").onchange = e => { S.remind = e.target.value; save(); writeMeta(); };
  document.getElementById("ics").onclick = icsFile;
  document.getElementById("notif").onclick = () => enableNotify(document.getElementById("nres"));
  document.getElementById("test").onclick = () => speak("Hei! Velkommen. Jeg heter Norsk, og jeg hjelper deg å lære norsk.");
  const rs = document.getElementById("reset");
  rs.onclick = () => { if (rs.dataset.armed) { S = blank(); save(); render(); } else { rs.dataset.armed = 1; rs.textContent = "Wirklich alles löschen? Nochmal tippen"; setTimeout(() => { if (rs.isConnected) { delete rs.dataset.armed; rs.textContent = "Alles zurücksetzen"; } }, 4000); } };
  document.getElementById("exp").onclick = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" }));
    a.download = "norsk-fortschritt.json"; a.click();
  };
  document.getElementById("imp").onclick = () => {
    const f = document.createElement("input"); f.type = "file"; f.accept = "application/json";
    f.onchange = () => f.files[0].text().then(t => { try { S = Object.assign(blank(), JSON.parse(t)); save(); render(); } catch (e) { document.getElementById("imp").textContent = "Datei ungültig"; } });
    f.click();
  };
  if (deferredPrompt) {
    const b = document.createElement("button"); b.className = "btn"; b.textContent = "📲 Jetzt installieren";
    b.onclick = () => { deferredPrompt.prompt(); deferredPrompt = null; b.remove(); };
    document.getElementById("inst").prepend(b);
  }
}

/* ---------- Statistik & Schwächen ---------- */
const SKILL_TYPE = { "Grammatik": "gram", "Hörverstehen": "hear", "Leseverstehen": "text", "Hören": "listen", "Lesen": "read", "Wortschatz": "reverse", "Schreiben": "write", "Diktat": "dict", "Sprechen": "speak", "Betonung": "stress", "Satzbau": "order" };
function track(q, ok, extra) {
  const s = S.skill[q.label] || (S.skill[q.label] = [0, 0]);
  s[1]++; if (ok) s[0]++;
  if (q.t === "write" && q.ans) for (const c of "æøå") if (q.ans.toLowerCase().includes(c)) {
    const x = S.chars[c] || (S.chars[c] = [0, 0]); x[1]++;
    if (ok && !(extra && extra.includes("æ ø å"))) x[0]++;
  }
}
function weakSpots() {
  const list = [];
  Object.entries(S.skill).forEach(([k, v]) => { if (v[1] >= 3) list.push({ k, label: k, pct: Math.round(v[0] / v[1] * 100), n: v[1], kind: "skill" }); });
  Object.entries(S.chars).forEach(([c, v]) => { if (v[1] >= 2) list.push({ k: c, label: `Buchstabe ${c}`, pct: Math.round(v[0] / v[1] * 100), n: v[1], kind: "char" }); });
  return list.sort((a, b) => a.pct - b.pct);
}
function openItems() {
  const out = [];
  LEVELS.forEach((L, i) => L.lessons.forEach((les, j) => {
    if (lessonOpen(i, j) && (S.seen[les.id] || S.lessons[les.id] != null)) les.items.forEach(it => out.push({ it, L, les }));
  }));
  return out;
}
function practiceWeak(spot) {
  let items = openItems(), type = "read";
  if (spot.kind === "char") { items = items.filter(x => x.it[0].toLowerCase().includes(spot.k) && words(x.it[0]).length <= 4); type = "write"; }
  else type = SKILL_TYPE[spot.k] || "read";
  if (type === "stress") items = items.filter(x => stressable(x.it));
  if ((type === "write" || type === "dict") ) items = items.filter(x => words(x.it[0]).length <= 4);
  if (type === "speak" && !canListen) type = "listen";
  let qs;
  if (type === "hear" || type === "text") {
    const ls = []; LEVELS.forEach((L, i) => L.lessons.forEach((les, j) => { if (lessonOpen(i, j) && les.text) ls.push(les); }));
    qs = shuffle(ls).slice(0, 3).flatMap(l => textQs(l));
  } else if (type === "gram") {
    const ls = []; LEVELS.forEach((L, i) => L.lessons.forEach((les, j) => { if (lessonOpen(i, j) && les.gram) ls.push(les); }));
    qs = shuffle(ls.flatMap(l => gramQs(l, 2))).slice(0, 10);
  } else if (type === "order") {
    const sents = [];
    LEVELS.forEach((L, i) => L.lessons.forEach((les, j) => { if (lessonOpen(i, j) && S.seen[les.id]) les.sent.forEach(s => sents.push({ s, les })); }));
    qs = pick(sents, 8).map(x => sentQ(x.s, "order", x.les.id));
  } else qs = pick(items, 10).map(x => itemQ(x.it, type, x.L, x.les.id));
  if (!qs.length) { toast("Dafür gibt es noch nicht genug Wörter. Lerne erst ein paar Lektionen."); return; }
  runQuiz(qs, "Schwächen üben", pct => ({ passed: pct >= PASS, again: () => practiceWeak(spot), title: "Training" }));
}

/* ---------- Erfolge ---------- */
function learnedWords() { return Object.values(S.cards).filter(c => c.b >= 3).length; }
const lessonsPassed = () => Object.keys(S.lessons).filter(passedLesson).length;
const stc = k => (S.st && S.st[k]) || 0;
const EIGEN_GI = new Set(VGROUPS.filter(g => g.kind === "eigen").map(g => g.gi));
const eigenKnown = () => VOC.filter(v => EIGEN_GI.has(v.gi) && S.cards[v.key] && S.cards[v.key].b >= 3).length;
const hardDialogs = () => Object.values(S.dialogs).filter(x => x === 2).length;
const skillOk = k => (S.skill[k] || [0])[0];
const BCATS = [["learn", "📘", "Lernen"], ["words", "🧠", "Wortschatz"], ["streak", "🔥", "Dranbleiben"], ["talk", "🗣️", "Sprechen & Hören"], ["level", "🏔️", "Niveaus"], ["fun", "🎲", "Besondere"]];
// [id, Symbol, Name, Beschreibung, Prüfung, Kategorie, Fortschritt [ist, ziel]]
const prog = (f, n) => [() => f() >= n, () => [Math.min(f(), n), n]];
const B = (id, ic, name, desc, cat, f, n) => { const [chk, pr] = prog(f, n); return [id, ic, name, desc, chk, cat, pr]; };
const BADGES = [
  B("first", "🌱", "Erster Schritt", "Erste Lektion bestanden", "learn", lessonsPassed, 1),
  B("l5", "📘", "Fleißig", "5 Lektionen bestanden", "learn", lessonsPassed, 5),
  B("l15", "📚", "Bücherwurm", "15 Lektionen bestanden", "learn", lessonsPassed, 15),
  B("l30", "🎓", "Musterschüler", "30 Lektionen bestanden", "learn", lessonsPassed, 30),
  B("perfect", "💯", "Fehlerfrei", "Ein Test mit 100 %", "learn", () => S.perfect || 0, 1),
  B("perfect5", "🌟", "Perfektionist", "5 Tests mit 100 %", "learn", () => S.perfect || 0, 5),
  B("perfect20", "💎", "Diamant", "20 Tests mit 100 %", "learn", () => S.perfect || 0, 20),
  B("rank5", "⚔️", "Krieger", "Rang 5 erreicht", "learn", () => rank().lv, 5),
  B("rank10", "🛡️", "Jarl", "Rang 10 erreicht", "learn", () => rank().lv, 10),
  B("rank25", "👑", "Wikingerkönig", "Rang 25 erreicht", "learn", () => rank().lv, 25),
  B("w50", "🧠", "50 Wörter", "50 Wörter sicher gelernt", "words", learnedWords, 50),
  B("w150", "🧠", "150 Wörter", "150 Wörter sicher gelernt", "words", learnedWords, 150),
  B("w500", "📗", "500 Wörter", "500 Wörter sicher – Alltag klappt", "words", learnedWords, 500),
  B("w1000", "📙", "1.000 Wörter", "1.000 Wörter sicher gelernt", "words", learnedWords, 1000),
  B("w2500", "📕", "2.500 Wörter", "2.500 Wörter – Zeitung lesen wird leichter", "words", learnedWords, 2500),
  B("w5000", "🏛️", "5.000 Wörter", "5.000 Wörter – Nachrichten verstehen", "words", learnedWords, 5000),
  B("w10000", "🌌", "10.000 Wörter", "10.000 Wörter – C1-Wortschatz!", "words", learnedWords, 10000),
  B("eigen25", "🧩", "Redewendungs-Fan", "25 Eigenheiten & Redewendungen sicher", "words", eigenKnown, 25),
  B("eigen150", "🦉", "Wie ein Einheimischer", "150 Eigenheiten & Redewendungen sicher", "words", eigenKnown, 150),
  B("r10", "🃏", "Kartenspieler", "10 Wortschatz-Runden geschafft", "words", () => stc("rounds"), 10),
  B("r100", "🎴", "Kartenkönig", "100 Wortschatz-Runden geschafft", "words", () => stc("rounds"), 100),
  B("goal", "🎯", "Zielstrebig", "Tagesziel zum ersten Mal geschafft", "streak", () => stc("goalDays") || (S.best ? 1 : 0), 1),
  B("goal10", "🏹", "Treffsicher", "Tagesziel an 10 Tagen geschafft", "streak", () => stc("goalDays"), 10),
  B("goal100", "🎖️", "Unaufhaltsam", "Tagesziel an 100 Tagen geschafft", "streak", () => stc("goalDays"), 100),
  B("s3", "🔥", "Auf Kurs", "3 Tage in Folge", "streak", () => S.best || 0, 3),
  B("s7", "🔥", "Eine Woche!", "7 Tage in Folge", "streak", () => S.best || 0, 7),
  B("s14", "🔥", "Zwei Wochen!", "14 Tage in Folge", "streak", () => S.best || 0, 14),
  B("s30", "🏔️", "Bergsteiger", "30 Tage in Folge", "streak", () => S.best || 0, 30),
  B("s100", "🌋", "Hundert Tage", "100 Tage in Folge", "streak", () => S.best || 0, 100),
  B("s365", "☀️", "Ein ganzes Jahr", "365 Tage in Folge", "streak", () => S.best || 0, 365),
  B("speak", "🎤", "Plaudertasche", "20 Sprechübungen richtig", "talk", () => skillOk("Sprechen"), 20),
  B("speak100", "📣", "Redner", "100 Sprechübungen richtig", "talk", () => skillOk("Sprechen"), 100),
  B("stress", "🎵", "Gutes Gehör", "20 × Betonung richtig erkannt", "talk", () => skillOk("Betonung"), 20),
  B("hear", "🎧", "Radiohörer", "25 Hörverstehen-Fragen richtig", "talk", () => skillOk("Hörverstehen"), 25),
  B("dialog", "💬", "Erstes Gespräch", "Einen Dialog gesprochen", "talk", () => Object.keys(S.dialogs).length, 1),
  B("hard5", "🙈", "Ohne Spickzettel", "5 Dialoge ohne Text geschafft", "talk", hardDialogs, 5),
  B("dialogs", "🗣️", "Gesprächsprofi", "Alle Dialoge gesprochen", "talk", () => Object.keys(S.dialogs).length, window.DIALOGS.length),
  B("A1", "🇳🇴", "A1 geschafft", "Abschlussprüfung A1 bestanden", "level", () => +passedLevel("A1"), 1),
  B("A2", "⛵", "A2 geschafft", "Abschlussprüfung A2 bestanden", "level", () => +passedLevel("A2"), 1),
  B("B1", "🏡", "B1 geschafft", "Abschlussprüfung B1 bestanden", "level", () => +passedLevel("B1"), 1),
  B("B2", "🏔️", "B2 geschafft", "Abschlussprüfung B2 bestanden", "level", () => +passedLevel("B2"), 1),
  B("C1", "👑", "C1 geschafft", "Du sprichst Norwegisch!", "level", () => +passedLevel("C1"), 1),
  B("early", "🌅", "Frühaufsteher", "Vor 7 Uhr morgens gelernt", "fun", () => stc("early"), 1),
  B("night", "🌙", "Nachteule", "Nach 22 Uhr gelernt", "fun", () => stc("night"), 1),
  B("weekend", "🏕️", "Wochenend-Wikinger", "Tagesziel am Wochenende geschafft", "fun", () => stc("weekend"), 1)
];
function badgeHTML(b) {
  const on = !!S.badges[b[0]], [cur, max] = b[6]();
  return `<button class="badge ${on ? "on" : ""}" data-badge="${b[0]}"><span>${b[1]}</span><b>${esc(b[2])}</b><small>${esc(b[3])}</small>${on ? "" : max > 1 ? `<div class="bar mini"><i style="width:${cur / max * 100}%"></i></div><small>${cur.toLocaleString("de-DE")} / ${max.toLocaleString("de-DE")}</small>` : ""}</button>`;
}
const modalQ = []; let modalOpen = false;
function badgeModal(b, on, fresh) {
  if (modalOpen) { modalQ.push([b, on, fresh]); return; }
  modalOpen = true;
  const [cur, max] = b[6]();
  const ph = fresh ? VIKING.phrase("badge") : on ? ["Allerede ditt!", "Diesen Erfolg hast du schon."] : ["Snart ditt!", max > 1 ? `Noch ${(max - cur).toLocaleString("de-DE")} bis zum Ziel.` : "Den holst du dir auch noch!"];
  const m = document.createElement("div"); m.className = "bmodal";
  m.innerHTML = `<div class="bm-card center">${fresh ? `<div class="qtype">Neuer Erfolg!</div>` : ""}<div class="bm-icon ${on ? "" : "off"}">${b[1]}</div><h2>${esc(b[2])}</h2><p class="muted">${esc(b[3])}${on && S.badges[b[0]] !== true ? ` · seit ${new Date(S.badges[b[0]]).toLocaleDateString("de-DE")}` : ""}</p>
    ${!on && max > 1 ? `<div class="bar"><i style="width:${cur / max * 100}%"></i></div>` : ""}
    ${VIKING.html(on ? "cheer" : "happy", 90, ph)}${fresh ? `<p><b>+25 ✦</b></p>` : ""}<button class="btn" id="bm-ok">${fresh ? "Super!" : "Schließen"}</button></div>`;
  document.body.appendChild(m);
  if (fresh) { VIKING.confetti(); setTimeout(() => speak(ph[0]), 300); }
  const close = () => { m.remove(); modalOpen = false; const n = modalQ.shift(); if (n) badgeModal(...n); };
  m.querySelector("#bm-ok").onclick = close; m.onclick = e => { if (e.target === m) close(); };
}
function checkBadges() {
  if (inQuiz) return;
  const fresh = BADGES.filter(b => !S.badges[b[0]] && b[4]());
  fresh.forEach(b => { S.badges[b[0]] = today(); S.xp += 25; });
  if (fresh.length) { save(); updateStats(); fresh.slice(0, 3).forEach(b => badgeModal(b, true, true)); if (fresh.length > 3) toast(`🏅 Und ${fresh.length - 3} weitere Erfolge – schau unter „Ich“!`); }
}
const rank = () => { const lv = Math.floor(S.xp / 250) + 1; return { lv, p: Math.round((S.xp % 250) / 250 * 100), next: 250 - S.xp % 250 }; };
const toastQ = []; let toasting = false;
function toast(html) { toastQ.push(html); if (!toasting) nextToast(); }
function nextToast() {
  const html = toastQ.shift(); if (!html) { toasting = false; return; }
  toasting = true;
  const t = document.createElement("div"); t.className = "toast"; t.innerHTML = `<span class="tv">${VIKING.svg("cheer")}</span><span>${html}</span>`;
  document.body.appendChild(t); setTimeout(() => t.classList.add("out"), 2300); setTimeout(() => { t.remove(); nextToast(); }, 2700);
}

/* ---------- Dialoge ---------- */
function renderDialogs() {
  $app.innerHTML = `<h1>Dialoge</h1><div class="coach small">${VIKING.html("wave", 70, VIKING.phrase("dialogs"))}</div><p class="muted">Alltagsgespräche zum Mitsprechen. Die App spricht die andere Person, du antwortest${canListen ? " ins Mikrofon" : " laut"}.</p>` +
    LEVELS.map((L, i) => {
      const ds = window.DIALOGS.filter(d => d.lv === L.id); if (!ds.length) return "";
      const open = levelOpen(i);
      return `<h2>${open ? "" : "🔒 "}${L.id}</h2>` + ds.map(d => `<button class="lesson ${S.dialogs[d.id] ? "done" : ""} ${open ? "" : "locked"}" data-d="${d.id}">
        <span class="dot">${S.dialogs[d.id] ? "✓" : d.icon}</span><span class="lt"><b>${esc(d.t)}</b><small>${open ? `${d.lines.length} Sätze${S.dialogs[d.id] === 2 ? " · ⭐ auch ohne Text geschafft" : S.dialogs[d.id] ? " · Probier's ohne Text!" : ""}` : `Ab Stufe ${L.id}`}</small></span>${open ? "›" : ""}</button>`).join("");
    }).join("");
  $app.querySelectorAll("[data-d]").forEach(b => b.onclick = () => {
    const d = window.DIALOGS.find(x => x.id === b.dataset.d);
    if (levelOpen(levelIdx(d.lv))) playDialog(d, false);
  });
}
function playDialog(d, hard) {
  setFocus(true);
  let k = 0;
  const box = () => document.getElementById("chat");
  $app.innerHTML = `<div class="qtype">${d.lv} · Dialog${hard ? " · ohne Text" : ""}</div><h1>${d.icon} ${esc(d.t)}</h1><div id="chat" class="chat"></div><div id="ctl"></div>`;
  const bubble = (l, hide) => `<div class="bub ${l[0] === "A" ? "them" : "me"}"><div class="who">${l[0] === "A" ? "Gegenüber" : "Du"}</div>
    <div class="no">${hide ? "<i class='muted'>(Antworte auf Norwegisch)</i>" : esc(l[1])}</div><div class="de">${esc(l[2])}</div></div>`;
  const step = () => {
    const ctl = document.getElementById("ctl");
    if (k >= d.lines.length) {
      const first = !S.dialogs[d.id];
      S.dialogs[d.id] = Math.max(S.dialogs[d.id] || 0, hard ? 2 : 1); S.xp += first ? 20 : 5; save(); updateStats(); setTimeout(checkBadges, 1200);
      addDaily(d.lines.filter(l => l[0] === "B").length);
      VIKING.confetti();
      ctl.innerHTML = `<div class="center">${VIKING.html("cheer", 110, ["Bra snakka!", "Gut gesprochen!"])}<h2>Gespräch geschafft!</h2></div>
        ${!hard ? `<button class="btn red" id="hard">Nochmal ohne Text (Profi)</button>` : ""}<button class="btn ghost" id="back">Zu den Dialogen</button>`;
      const h = document.getElementById("hard"); if (h) h.onclick = () => playDialog(d, true);
      document.getElementById("back").onclick = () => goTab("dialogs");
      return;
    }
    const l = d.lines[k];
    if (l[0] === "A") {
      box().insertAdjacentHTML("beforeend", bubble(l)); speak(l[1]);
      ctl.innerHTML = `<div class="row"><button class="btn ghost" id="rep" style="flex:0 0 64px">🔊</button><button class="btn" id="nx">Weiter ›</button></div>`;
      document.getElementById("rep").onclick = () => speak(l[1]);
      document.getElementById("nx").onclick = () => { k++; step(); };
    } else {
      box().insertAdjacentHTML("beforeend", bubble(l, hard));
      const me = box().lastElementChild;
      ctl.innerHTML = `${canListen ? `<button class="btn red" id="mic">🎤 Jetzt du – sprich deinen Satz</button>` : `<p class="muted center">Sprich den Satz laut nach.</p>`}
        <div class="speakres center" id="sres"></div>
        <div class="row"><button class="btn ghost" id="hear">🔊 Vorsagen</button><button class="btn ghost" id="nx">${canListen ? "Überspringen" : "Geschafft ›"}</button></div>`;
      document.getElementById("hear").onclick = () => { speak(l[1]); if (hard) me.querySelector(".no").textContent = l[1]; };
      document.getElementById("nx").onclick = () => { me.querySelector(".no").textContent = l[1]; k++; step(); };
      const mic = document.getElementById("mic");
      if (mic) mic.onclick = () => practiceSpeak(l[1], mic, document.getElementById("sres"), ok => {
        if (ok) { me.classList.add("ok"); me.querySelector(".no").textContent = l[1]; (S.skill["Sprechen"] = S.skill["Sprechen"] || [0, 0]); S.skill["Sprechen"][0]++; S.skill["Sprechen"][1]++; setTimeout(() => { k++; step(); }, 800); }
      });
    }
    box().lastElementChild.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  step();
}

/* ---------- Erinnerung ---------- */
function writeMeta() {
  try { if ("caches" in window) caches.open("norsk-meta").then(c => c.put("meta", new Response(JSON.stringify({ last: S.day.n >= S.goal ? S.day.d : "", time: S.remind })))); } catch (e) {}
}
function icsFile() {
  const [h, m] = (S.remind || "18:00").split(":");
  const d = new Date(); const ymd = d.toISOString().slice(0, 10).replace(/-/g, "");
  const body = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Norsk//DE", "BEGIN:VEVENT", "UID:norsk-daily@norsk",
    `DTSTAMP:${ymd}T000000Z`, `DTSTART:${ymd}T${h}${m}00`, "DURATION:PT10M",
    "RRULE:FREQ=DAILY", "SUMMARY:🇳🇴 Norwegisch lernen (10 Min.)", "DESCRIPTION:Tagesziel in der Norsk-App schaffen!",
    "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:Zeit für Norwegisch!", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([body], { type: "text/calendar" })); a.download = "norsk-erinnerung.ics"; a.click();
}
async function enableNotify(out) {
  if (!("Notification" in window)) { out.textContent = "Dein Browser unterstützt keine Benachrichtigungen. Nimm die Kalender-Erinnerung."; return; }
  const p = await Notification.requestPermission();
  if (p !== "granted") { out.textContent = "Benachrichtigungen wurden nicht erlaubt."; return; }
  try {
    const reg = await navigator.serviceWorker.ready;
    if ("periodicSync" in reg) { await reg.periodicSync.register("norsk-reminder", { minInterval: 6 * 60 * 60 * 1000 }); out.textContent = "✓ Erinnerung aktiv. Das Handy entscheidet selbst, wann genau geprüft wird – für eine feste Uhrzeit nimm zusätzlich den Kalender."; }
    else out.textContent = "Benachrichtigungen erlaubt, aber dieses Gerät kann sie nicht im Hintergrund planen. Nimm die Kalender-Erinnerung – die klappt überall.";
    writeMeta();
  } catch (e) { out.textContent = "Hintergrund-Erinnerung geht nur in der installierten App (Android/Chrome). Die Kalender-Erinnerung klappt überall."; }
}

document.addEventListener("click", e => {
  const v = e.target.closest(".viking"); if (!v) return;
  e.stopPropagation(); v.classList.remove("jump"); void v.offsetWidth; v.classList.add("jump");
  speak(v.dataset.say || "Hei!");
});

/* ---------- PWA ---------- */
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; });
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

/* ---------- Wörterbuch (Deutsch ↔ Norwegisch) und Kamera-Scanner ---------- */
// Nutzt die globalen Helfer aus app.js: ALLWORDS, VOC, LEVELS, S, save, speak, esc, fold, lev, $app, setFocus, toast, today, VIKING
const LEX = (() => {
  const strip = s => s.replace(/\([^)]*\)/g, " ").replace(/\b(der|die|das|ein|eine|einen|sich|jdn|jdm|etw|en|ei|et|å|seg)\b/gi, " ");
  const keys = s => { const out = new Set(); const f = fold(s); if (f) out.add(f);
    strip(s).split(/[\/;,]|\bbzw\b|\boder\b/).forEach(p => { const k = fold(p); if (k && k.length > 1) out.add(k); });
    return [...out]; };
  const seen = new Map(), list = [];
  ALLWORDS.forEach(w => {
    const id = w.no.toLowerCase() + "=" + w.de.toLowerCase();
    if (seen.has(id)) return; seen.set(id, 1);
    list.push(Object.assign({}, w, { kn: keys(w.no), kd: keys(w.de) }));
  });
  return list;
})();
const COCO_NO = {
  "person": ["en person", "Person"], "bicycle": ["en sykkel", "Fahrrad"], "car": ["en bil", "Auto"], "motorcycle": ["en motorsykkel", "Motorrad"],
  "airplane": ["et fly", "Flugzeug"], "bus": ["en buss", "Bus"], "train": ["et tog", "Zug"], "truck": ["en lastebil", "Lastwagen"], "boat": ["en båt", "Boot"],
  "traffic light": ["et trafikklys", "Ampel"], "fire hydrant": ["en brannhydrant", "Hydrant"], "stop sign": ["et stoppskilt", "Stoppschild"],
  "parking meter": ["en parkeringsautomat", "Parkuhr"], "bench": ["en benk", "Bank"], "bird": ["en fugl", "Vogel"], "cat": ["en katt", "Katze"],
  "dog": ["en hund", "Hund"], "horse": ["en hest", "Pferd"], "sheep": ["en sau", "Schaf"], "cow": ["ei ku", "Kuh"], "elephant": ["en elefant", "Elefant"],
  "bear": ["en bjørn", "Bär"], "zebra": ["en sebra", "Zebra"], "giraffe": ["en sjiraff", "Giraffe"], "backpack": ["en ryggsekk", "Rucksack"],
  "umbrella": ["en paraply", "Regenschirm"], "handbag": ["ei veske", "Handtasche"], "tie": ["et slips", "Krawatte"], "suitcase": ["en koffert", "Koffer"],
  "frisbee": ["en frisbee", "Frisbee"], "skis": ["ski", "Skier"], "snowboard": ["et snøbrett", "Snowboard"], "sports ball": ["en ball", "Ball"],
  "kite": ["en drage", "Drachen"], "baseball bat": ["et balltre", "Baseballschläger"], "baseball glove": ["en baseballhanske", "Baseballhandschuh"],
  "skateboard": ["et skateboard", "Skateboard"], "surfboard": ["et surfebrett", "Surfbrett"], "tennis racket": ["en tennisracket", "Tennisschläger"],
  "bottle": ["ei flaske", "Flasche"], "wine glass": ["et vinglass", "Weinglas"], "cup": ["en kopp", "Tasse"], "fork": ["ei gaffel", "Gabel"],
  "knife": ["en kniv", "Messer"], "spoon": ["ei skje", "Löffel"], "bowl": ["en bolle", "Schüssel"], "banana": ["en banan", "Banane"],
  "apple": ["et eple", "Apfel"], "sandwich": ["et smørbrød", "belegtes Brot"], "orange": ["en appelsin", "Orange"], "broccoli": ["en brokkoli", "Brokkoli"],
  "carrot": ["ei gulrot", "Karotte"], "hot dog": ["en pølse i brød", "Hotdog"], "pizza": ["en pizza", "Pizza"], "donut": ["en smultring", "Donut"],
  "cake": ["ei kake", "Kuchen"], "chair": ["en stol", "Stuhl"], "couch": ["en sofa", "Sofa"], "potted plant": ["en potteplante", "Topfpflanze"],
  "bed": ["ei seng", "Bett"], "dining table": ["et spisebord", "Esstisch"], "toilet": ["et toalett", "Toilette"], "tv": ["en TV", "Fernseher"],
  "laptop": ["en bærbar PC", "Laptop"], "mouse": ["ei mus", "Computermaus"], "remote": ["en fjernkontroll", "Fernbedienung"],
  "keyboard": ["et tastatur", "Tastatur"], "cell phone": ["en mobil", "Handy"], "microwave": ["en mikrobølgeovn", "Mikrowelle"],
  "oven": ["en stekeovn", "Backofen"], "toaster": ["en brødrister", "Toaster"], "sink": ["en vask", "Spüle / Waschbecken"],
  "refrigerator": ["et kjøleskap", "Kühlschrank"], "book": ["ei bok", "Buch"], "clock": ["ei klokke", "Uhr"], "vase": ["en vase", "Vase"],
  "scissors": ["ei saks", "Schere"], "teddy bear": ["en teddybjørn", "Teddybär"], "hair drier": ["en hårføner", "Föhn"], "toothbrush": ["ei tannbørste", "Zahnbürste"]
};
// norwegische Endungen, damit auch gebeugte Formen (bilen, husene, snakket) gefunden werden
const NO_SUFFIX = ["ene", "ane", "erne", "ende", "ere", "est", "ete", "het", "en", "et", "ei", "a", "er", "te", "de", "dd", "r", "e", "t"];
function lexSearch(q) {
  const t = fold(q); if (t.length < 1) return [];
  const sc = (k, t) => k === t ? 0 : k.startsWith(t + " ") || k.startsWith(t) && t.length >= 3 && k.length - t.length <= 2 ? 1 : k.startsWith(t) ? 2 : (" " + k).includes(" " + t) ? 3 : t.length >= 3 && k.includes(t) ? 5 : 99;
  let hits = [];
  LEX.forEach(w => {
    let s = 99;
    w.kn.forEach(k => { s = Math.min(s, sc(k, t)); });
    w.kd.forEach(k => { s = Math.min(s, sc(k, t) + 0.5); });
    if (s < 99) hits.push([s + (w.no.length > 30 ? 1 : 0), w]);
  });
  if (hits.filter(h => h[0] < 2).length < 3 && t.length >= 4) {
    NO_SUFFIX.forEach(sf => { if (!t.endsWith(sf) || t.length - sf.length < 2) return; const b = t.slice(0, -sf.length);
      LEX.forEach(w => { if (w.kn.some(k => k === b || k === b + "e" || k === b + "e " || k === b + "a")) hits.push([1.5, w]); }); });
  }
  if (hits.length < 4 && t.length >= 4) {
    const max = t.length >= 7 ? 2 : 1;
    LEX.forEach(w => { [...w.kn, ...w.kd].forEach(k => { if (Math.abs(k.length - t.length) <= max && lev(k, t) <= max) hits.push([6, w]); }); });
  }
  const best = new Map();
  hits.forEach(([s, w]) => { if (!best.has(w) || best.get(w) > s) best.set(w, s); });
  return [...best].sort((a, b) => a[1] - b[1] || a[0].no.length - b[0].no.length).map(x => x[0]).slice(0, 60);
}
function lexExamples(w) {
  const base = fold(w.no.replace(/^(en|ei|et|å)\s+/i, "")).split(" ")[0];
  if (!base || base.length < 2) return [];
  const re = new RegExp("(^| )" + base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(e|en|et|a|er|ene|te|de|r|t|s)?( |$)");
  const out = [];
  LEVELS.forEach(L => L.lessons.forEach(l => (l.sent || []).forEach(s => { if (out.length < 4 && re.test(fold(s[0]))) out.push(s); })));
  (window.DIALOGS || []).forEach(d => d.lines.forEach(x => { if (out.length < 4 && re.test(fold(x[1]))) out.push([x[1], x[2]]); }));
  return out;
}
function lexLinks(q) {
  const u = encodeURIComponent(q);
  return `<div class="lexlinks"><a href="https://ordbokene.no/nob/bm/${u}" target="_blank" rel="noopener">📘 Ordbøkene</a>
    <a href="https://www.deepl.com/translator#nb/de/${u}" target="_blank" rel="noopener">🔷 DeepL</a>
    <a href="https://translate.google.com/?sl=auto&tl=de&text=${u}" target="_blank" rel="noopener">🌐 Google</a></div>`;
}
function lexRow(w, i) {
  return `<button class="wrow" data-i="${i}"><span><b>${esc(w.no)}</b><small>${esc(w.de)}</small></span><span class="muted lvt">${esc(w.lv || "")}</span></button>`;
}
function lexHist(q) {
  S.lexh = (S.lexh || []).filter(x => x !== q); S.lexh.unshift(q); S.lexh = S.lexh.slice(0, 12);
  S.st = S.st || {}; S.st.lex = (S.st.lex || 0) + 1; save();
}
let lexQ = "";
function renderLex() {
  const hist = S.lexh || [];
  $app.innerHTML = `<h1>Wörterbuch</h1>
    <div class="coach small">${VIKING.html("happy", 64, ["Slå opp!", "Tipp ein Wort, norwegisch oder deutsch. Oder lass die Kamera schauen."])}</div>
    <input class="txt" id="lq" type="search" placeholder="🔍 z. B. „Haus“, „hus“, „bilen“ …" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(lexQ)}">
    <div class="row scanrow"><button class="btn ghost" id="scanT">📷 Text scannen</button><button class="btn ghost" id="scanO">🍎 Gegenstand</button></div>
    <div id="lres"></div>
    <p class="muted center" style="font-size:13px">${LEX.length.toLocaleString("de-DE")} Einträge · Deutsch ↔ Bokmål</p>`;
  const q = document.getElementById("lq"), res = document.getElementById("lres");
  const run = () => {
    lexQ = q.value.trim();
    if (!lexQ) {
      res.innerHTML = hist.length ? `<div class="card"><b>Zuletzt gesucht</b><div class="chips" style="margin-top:8px">${hist.map(h => `<button class="chip" data-h="${esc(h)}"><b>${esc(h)}</b></button>`).join("")}</div></div>` : "";
      res.querySelectorAll("[data-h]").forEach(b => b.onclick = () => { q.value = b.dataset.h; run(); });
      return;
    }
    const hits = lexSearch(lexQ);
    res.innerHTML = hits.length ? `<div class="card wl">${hits.map(lexRow).join("")}</div>${hits.length < 3 ? `<p class="muted" style="font-size:14px">Nicht das Richtige? Schau extern nach:</p>${lexLinks(lexQ)}` : ""}`
      : `<div class="card"><p style="margin-top:0">Kein Eintrag für „${esc(lexQ)}“ in der App.</p>${lexLinks(lexQ)}</div>`;
    res.querySelectorAll(".wrow").forEach(b => b.onclick = () => { lexHist(lexQ); lexDetail(hits[+b.dataset.i]); });
  };
  let tmr; q.oninput = () => { clearTimeout(tmr); tmr = setTimeout(run, 120); };
  q.onkeydown = e => { if (e.key === "Enter") { q.blur(); if (q.value.trim()) lexHist(q.value.trim()); } };
  run();
  document.getElementById("scanT").onclick = () => openScanner("text");
  document.getElementById("scanO").onclick = () => openScanner("obj");
}
function lexDetail(w, back) {
  setFocus(true);
  const ex = lexExamples(w), inDeck = w.key && S.cards[w.key];
  const word = w.no.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  $app.innerHTML = `<div class="card lexcard">
      <div class="muted" style="font-size:13px">${esc(w.lv || "")}${w.t ? " · " + esc(w.t) : ""}</div>
      <h1 style="margin:4px 0 2px">${esc(w.no)}</h1>
      ${w.pron ? `<div class="muted">[${esc(w.pron)}]</div>` : ""}
      <p style="font-size:20px;margin:10px 0 14px">🇩🇪 ${esc(w.de)}</p>
      <div class="row"><button class="btn" id="ls">🔊 Anhören</button><button class="btn ghost" id="lsl">🐢 Langsam</button></div>
      ${w.key ? `<button class="btn ${inDeck ? "ghost" : ""}" id="ladd" ${inDeck ? "disabled" : ""} style="margin-top:8px">${inDeck ? "✓ Schon im Karteikasten" : "＋ Zum Lernen hinzufügen"}</button>` : ""}
    </div>
    ${ex.length ? `<div class="card"><b>Beispiele aus der App</b>${ex.map((s, i) => `<p class="lexex"><a href="#" data-x="${i}">🔊</a> <b>${esc(s[0])}</b><br><span class="muted">${esc(s[1])}</span></p>`).join("")}</div>` : ""}
    <div class="card"><b>Mehr dazu</b><p class="muted" style="font-size:14px;margin:4px 0 8px">Ordbøkene ist das offizielle Wörterbuch der Sprachbehörde und zeigt alle Beugungsformen.</p>${lexLinks(word.replace(/^(en|ei|et|å)\s+/i, ""))}</div>
    <button class="btn ghost" id="lb">‹ Zurück</button>`;
  document.getElementById("ls").onclick = () => speak(word);
  document.getElementById("lsl").onclick = () => speak(word, true);
  $app.querySelectorAll("[data-x]").forEach(a => a.onclick = e => { e.preventDefault(); speak(ex[+a.dataset.x][0]); });
  const add = document.getElementById("ladd");
  if (add && !inDeck) add.onclick = () => { S.cards[w.key] = { b: 1, d: today() }; save(); add.disabled = true; add.classList.add("ghost"); add.textContent = "✓ Im Karteikasten"; toast("Kommt ab heute in deinen Wiederholungen 📚"); };
  document.getElementById("lb").onclick = back || (() => { setFocus(false); renderLex(); });
  speak(word);
  window.scrollTo(0, 0);
}

/* ---------- Kamera-Scanner ---------- */
let scanStream = null, scanLoop = 0, ocrWorker = null, cocoModel = null;
function loadScript(src) {
  return new Promise((ok, bad) => { if (document.querySelector(`script[src="${src}"]`)) return ok();
    const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = () => bad(new Error("load " + src)); document.head.appendChild(s); });
}
function stopScan() {
  cancelAnimationFrame(scanLoop); scanLoop = 0;
  if (scanStream) { scanStream.getTracks().forEach(t => t.stop()); scanStream = null; }
}
document.getElementById("tabs").addEventListener("click", stopScan, true);
document.getElementById("backBtn").addEventListener("click", stopScan, true);
document.addEventListener("visibilitychange", () => { if (document.hidden) stopScan(); });
async function getOcr(status) {
  if (ocrWorker) return ocrWorker;
  status("Texterkennung wird geladen (einmalig ca. 7 MB) …");
  await loadScript("lib/tess/tesseract.min.js");
  ocrWorker = await Tesseract.createWorker(["nor", "deu"], 1, {
    workerPath: "lib/tess/worker.min.js", corePath: "lib/tess/", langPath: "lib/tess/lang", gzip: true,
    logger: m => { if (m.status === "recognizing text") status(`Lese Text … ${Math.round(m.progress * 100)} %`); }
  });
  return ocrWorker;
}
async function getCoco(status) {
  if (cocoModel) return cocoModel;
  status("Objekterkennung wird geladen (einmalig ca. 22 MB) …");
  await loadScript("lib/coco/tf.min.js");
  await loadScript("lib/coco/coco-ssd.min.js");
  cocoModel = await cocoSsd.load({ base: "lite_mobilenet_v2", modelUrl: "lib/coco/model.json" });
  return cocoModel;
}
function openScanner(mode) {
  stopScan(); setFocus(true);
  $app.innerHTML = `<div class="seg" id="smode"><button data-m="text" class="${mode === "text" ? "on" : ""}">📝 Text</button><button data-m="obj" class="${mode === "obj" ? "on" : ""}">🍎 Gegenstand</button></div>
    <div class="scanbox" id="sbox"><video id="sv" playsinline muted autoplay></video><canvas id="sov"></canvas>${mode === "text" ? `<div class="scanframe"></div>` : ""}</div>
    <p class="muted center" id="sst" style="font-size:14px;min-height:20px">${mode === "text" ? "Halte die Kamera auf ein Schild, eine Packung oder einen Brief." : "Richte die Kamera auf einen Gegenstand."}</p>
    <div class="row"><button class="btn" id="sgo">${mode === "text" ? "📸 Text lesen" : "📸 Was ist das?"}</button><label class="btn ghost" style="text-align:center">🖼️ Foto<input type="file" accept="image/*" id="sfile" hidden></label></div>
    <div id="sout"></div>
    <details class="card" style="margin-top:10px"><summary class="muted">Was der Scanner kann</summary><p class="muted" style="font-size:14px">${mode === "text"
      ? "Liest gedruckten Text (Norwegisch und Deutsch) direkt auf dem Handy, ohne Upload. Am besten bei gutem Licht, gerade und nah. Handschrift klappt kaum. Jedes erkannte Wort kannst du antippen und nachschlagen."
      : "Erkennt rund 80 Alltagsdinge (z. B. Tasse, Flasche, Stuhl, Banane, Auto, Hund, Handy, Buch) direkt auf dem Handy. Alles andere kennt das Modell nicht. Für Verpackungen und Schilder nimm den Text-Modus."}</p></details>`;
  const st = t => { const e = document.getElementById("sst"); if (e) e.textContent = t; };
  const v = document.getElementById("sv"), out = document.getElementById("sout");
  document.querySelectorAll("#smode button").forEach(b => b.onclick = () => openScanner(b.dataset.m));
  const startCam = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { st("Keine Kamera verfügbar. Wähle ein Foto aus."); return; }
    try {
      scanStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
      v.srcObject = scanStream; await v.play().catch(() => {});
      if (mode === "obj") liveObjects();
    } catch (e) { st("Kamera nicht erlaubt. Erlaube sie in Chrome (Schloss-Symbol › Berechtigungen) oder wähle ein Foto."); }
  };
  const snap = src => { const c = document.createElement("canvas"); const w = src.videoWidth || src.naturalWidth, h = src.videoHeight || src.naturalHeight;
    if (!w) return null; c.width = w; c.height = h; c.getContext("2d").drawImage(src, 0, 0, w, h); return c; };
  const prep = c => { // für OCR: Graustufen und Kontrast
    const x = c.getContext("2d"), d = x.getImageData(0, 0, c.width, c.height), p = d.data;
    for (let i = 0; i < p.length; i += 4) { let g = p[i] * .3 + p[i + 1] * .59 + p[i + 2] * .11; g = Math.max(0, Math.min(255, (g - 128) * 1.4 + 128)); p[i] = p[i + 1] = p[i + 2] = g; }
    x.putImageData(d, 0, 0); return c; };
  const doText = async c => {
    const btn = document.getElementById("sgo"); btn.disabled = true;
    try {
      const wk = await getOcr(st); st("Lese Text …");
      const { data } = await wk.recognize(prep(c));
      showText(data.text || "", out); st(data.text && data.text.trim() ? "Tippe ein Wort an, um es nachzuschlagen." : "Kein Text erkannt. Näher ran und für gutes Licht sorgen.");
    } catch (e) { st("Texterkennung hat nicht geklappt. Bist du online? Beim ersten Mal wird sie geladen."); console.warn(e); }
    btn.disabled = false;
  };
  const doObj = async c => {
    try { const m = await getCoco(st); const preds = await m.detect(c, 6, 0.4); showObjects(preds, out, st); } catch (e) { st("Objekterkennung hat nicht geklappt. Bist du online? Beim ersten Mal wird sie geladen."); console.warn(e); }
  };
  async function liveObjects() {
    let m; try { m = await getCoco(st); } catch (e) { st("Objekterkennung konnte nicht geladen werden. Bist du online?"); return; }
    st("Erkenne live … tippe ein Ergebnis an.");
    const ov = document.getElementById("sov"); let last = 0, busy = false, prevKey = "";
    const tick = async ts => {
      if (!scanStream || !document.getElementById("sov")) return;
      scanLoop = requestAnimationFrame(tick);
      if (busy || ts - last < 600 || !v.videoWidth) return;
      busy = true; last = ts;
      try {
        const preds = await m.detect(v, 6, 0.5);
        ov.width = v.videoWidth; ov.height = v.videoHeight; const x = ov.getContext("2d"); x.clearRect(0, 0, ov.width, ov.height);
        x.lineWidth = Math.max(3, ov.width / 200); x.font = `bold ${Math.max(18, ov.width / 28)}px Nunito, sans-serif`;
        preds.forEach(p => { const [bx, by, bw, bh] = p.bbox, n = COCO_NO[p.class]; x.strokeStyle = "#ffcc00"; x.strokeRect(bx, by, bw, bh);
          if (n) { const lab = n[0]; const tw = x.measureText(lab).width + 12, th = Math.max(24, ov.width / 22); x.fillStyle = "#00205bdd"; x.fillRect(bx, Math.max(0, by - th), tw, th); x.fillStyle = "#fff"; x.fillText(lab, bx + 6, Math.max(th - 6, by - 6)); } });
        const key = [...new Set(preds.map(p => p.class))].sort().join(",");
        if (key !== prevKey) { prevKey = key; showObjects(preds, out, null); }
      } catch (e) {}
      busy = false;
    };
    scanLoop = requestAnimationFrame(tick);
  }
  document.getElementById("sgo").onclick = () => { const c = snap(v); if (!c) { st("Die Kamera ist noch nicht bereit. Oder wähle ein Foto."); return; } mode === "text" ? doText(c) : doObj(c); };
  document.getElementById("sfile").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const img = new Image(); img.onload = () => { const c = snap(img); URL.revokeObjectURL(img.src); if (c) mode === "text" ? doText(c) : doObj(c); };
    img.src = URL.createObjectURL(f);
  };
  startCam();
}
function showObjects(preds, out, st) {
  const seen = new Set(), items = [];
  preds.forEach(p => { if (seen.has(p.class) || !COCO_NO[p.class]) return; seen.add(p.class); items.push([p, COCO_NO[p.class]]); });
  if (!items.length) { out.innerHTML = `<div class="card muted">Nichts erkannt, das ich kenne. Versuch einen anderen Winkel oder den Text-Modus.</div>`; if (st) st("Nichts erkannt."); return; }
  out.innerHTML = `<div class="card wl">${items.map(([p, n], i) => `<button class="wrow" data-o="${i}"><span><b>${esc(n[0])}</b><small>${esc(n[1])}</small></span><span class="muted">${Math.round(p.score * 100)} % 🔊</span></button>`).join("")}</div>`;
  out.querySelectorAll("[data-o]").forEach(b => b.onclick = () => { const n = items[+b.dataset.o][1]; speak(n[0]);
    const hit = lexSearch(n[0].replace(/^(en|ei|et)\s+/, ""))[0]; if (hit && fold(hit.no).includes(fold(n[0].replace(/^(en|ei|et)\s+/, "")))) { stopScan(); lexHist(n[0]); lexDetail(hit, () => openScanner("obj")); } });
  if (st) st("Tippe ein Ergebnis an.");
}
function showText(text, out) {
  const toks = (text.match(/[A-Za-zÆØÅæøåÄÖÜäöüß-]{2,}/g) || []).map(w => w.replace(/^-+|-+$/g, "")).filter(w => w.length > 1);
  const words = [...new Set(toks)].slice(0, 80);
  const exact = k => LEX.find(w => w.kn.includes(k) || w.kd.includes(k));
  const found = [], used = new Set();
  for (let i = 0; i < toks.length && found.length < 40; i++) {
    const pair = i + 1 < toks.length ? exact(fold(toks[i] + " " + toks[i + 1])) : null;
    if (pair) { const p = toks[i] + " " + toks[i + 1]; if (!used.has(fold(p))) { used.add(fold(p)); found.push([p, pair]); } used.add(fold(toks[i])); used.add(fold(toks[i + 1])); i++; continue; }
    const w = toks[i], f = fold(w); if (used.has(f)) continue; used.add(f);
    const h = lexSearch(w)[0];
    if (h && (fold(h.no).replace(/^(en|ei|et|aa) /, "").startsWith(f.slice(0, Math.max(3, f.length - 3))) || h.kd.some(k => k === f))) found.push([w, h]);
  }
  const fset = new Set(found.flatMap(f => f[0].split(" ")));
  out.innerHTML = `<div class="card"><b>Erkannter Text</b><p class="ocrtext">${words.length ? words.map(w => `<button class="ocrw ${fset.has(w) ? "hit" : ""}" data-w="${esc(w)}">${esc(w)}</button>`).join(" ") : "<span class='muted'>—</span>"}</p>
      <button class="btn ghost" id="ocrsay" ${text.trim() ? "" : "disabled"}>🔊 Ganzen Text vorlesen</button></div>
    ${found.length ? `<div class="card wl"><div style="padding:8px 16px 0"><b>Gefunden im Wörterbuch</b></div>${found.map(([w, h], i) => `<button class="wrow" data-f="${i}"><span><b>${esc(w)}</b> <span class="muted">→ ${esc(h.no)}</span><small>${esc(h.de)}</small></span><span class="muted">›</span></button>`).join("")}</div>` : ""}`;
  out.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("ocrsay").onclick = () => speak(text.replace(/\s+/g, " "));
  out.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { stopScan(); const h = found[+b.dataset.f][1]; lexHist(found[+b.dataset.f][0]); lexDetail(h, () => openScanner("text")); });
  out.querySelectorAll("[data-w]").forEach(b => b.onclick = () => { stopScan(); lexQ = b.dataset.w; tab = "lex"; document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("active", x.dataset.tab === "lex")); setFocus(false); renderLex(); });
}

render();
setTimeout(checkBadges, 1500);
})();
