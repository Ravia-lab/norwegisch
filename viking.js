// Bjørn, der kleine Wikinger, der dich anfeuert.
(function () {
"use strict";
function svg(mood) {
  const cheer = mood === "cheer", sad = mood === "sad", wave = mood === "happy" || mood === "wave";
  const eyes = cheer
    ? `<path d="M44 61 Q49 55 54 61" class="vk-line"/><path d="M66 61 Q71 55 76 61" class="vk-line"/>`
    : `<circle cx="49" cy="60" r="4.2" fill="#1d2433"/><circle cx="71" cy="60" r="4.2" fill="#1d2433"/><circle cx="50.4" cy="58.6" r="1.4" fill="#fff"/><circle cx="72.4" cy="58.6" r="1.4" fill="#fff"/>`;
  const brows = sad ? `<path d="M43 51 L54 54" class="vk-line"/><path d="M77 51 L66 54" class="vk-line"/>` : "";
  const mouth = sad
    ? `<path d="M53 88 Q60 84 67 88" class="vk-line"/>`
    : cheer ? `<path d="M50 84 Q60 98 70 84 Z" fill="#a8323e"/><path d="M54 90 Q60 94 66 90" fill="#f08a96"/>`
    : `<path d="M52 85 Q60 93 68 85 Z" fill="#a8323e"/>`;
  // Arme: links/rechts, angehoben beim Jubeln, rechts winkt
  const armL = cheer ? `rotate(-140 36 96)` : `rotate(18 36 96)`;
  const armR = cheer ? `rotate(140 84 96)` : wave ? `rotate(-130 84 96)` : `rotate(-18 84 96)`;
  return `<svg viewBox="0 0 120 140" aria-hidden="true">
  <ellipse cx="60" cy="134" rx="30" ry="4" fill="rgba(0,0,0,.12)"/>
  <g transform="${armL}"><rect x="30" y="94" width="12" height="28" rx="6" fill="#2457d6"/><circle cx="36" cy="124" r="6.5" fill="#ffd7b5"/></g>
  <g class="${wave && !cheer ? "vk-wave" : ""}" style="transform-origin:84px 96px"><g transform="${armR}"><rect x="78" y="94" width="12" height="28" rx="6" fill="#2457d6"/><circle cx="84" cy="124" r="6.5" fill="#ffd7b5"/>
    ${cheer ? `<g transform="translate(80 120) rotate(180)"><rect x="-1" y="0" width="2" height="24" fill="#8a5a2b"/><rect x="1" y="0" width="16" height="11" fill="#ba0c2f"/><rect x="5" y="0" width="3" height="11" fill="#fff"/><rect x="1" y="4" width="16" height="3" fill="#fff"/><rect x="5.8" y="0" width="1.4" height="11" fill="#00205b"/><rect x="1" y="4.8" width="16" height="1.4" fill="#00205b"/></g>` : ""}</g></g>
  <path d="M36 92 Q60 84 84 92 L88 128 Q60 136 32 128 Z" fill="#2457d6"/>
  <rect x="34" y="114" width="52" height="6" rx="3" fill="#7a4a24"/><rect x="56" y="113" width="8" height="8" rx="2" fill="#e8b84a"/>
  <circle cx="60" cy="62" r="30" fill="#ffd7b5"/>
  <path d="M29 60 Q28 104 60 110 Q92 104 91 60 Q84 80 60 80 Q36 80 29 60 Z" fill="#e8772e"/>
  <path d="M60 110 Q54 118 58 124 M60 110 Q66 118 62 124" stroke="#e8772e" stroke-width="5" stroke-linecap="round" fill="none"/>
  <ellipse cx="52" cy="78" rx="9" ry="4.5" fill="#d0611c"/><ellipse cx="68" cy="78" rx="9" ry="4.5" fill="#d0611c"/>
  ${mouth}
  <circle cx="40" cy="70" r="5" fill="#ff9aa2" opacity=".55"/><circle cx="80" cy="70" r="5" fill="#ff9aa2" opacity=".55"/>
  ${eyes}${brows}
  <circle cx="60" cy="69" r="4" fill="#f4b48d"/>
  <path d="M32 46 Q14 40 13 15 Q24 33 39 37 Z" fill="#f4ecd8" stroke="#d9cba8" stroke-width="1.5"/>
  <path d="M88 46 Q106 40 107 15 Q96 33 81 37 Z" fill="#f4ecd8" stroke="#d9cba8" stroke-width="1.5"/>
  <path d="M28 52 Q30 20 60 18 Q90 20 92 52 Z" fill="#9aa7b8"/>
  <path d="M40 30 Q50 22 60 22" stroke="#c9d2de" stroke-width="3" stroke-linecap="round" fill="none"/>
  <rect x="26" y="46" width="68" height="9" rx="4.5" fill="#7b8798"/>
  <rect x="57" y="20" width="6" height="35" fill="#7b8798"/>
  <circle cx="36" cy="50.5" r="1.8" fill="#c9d2de"/><circle cx="48" cy="50.5" r="1.8" fill="#c9d2de"/><circle cx="72" cy="50.5" r="1.8" fill="#c9d2de"/><circle cx="84" cy="50.5" r="1.8" fill="#c9d2de"/>
</svg>`;
}
const PH = {
  right: [["Kjempebra!", "Riesig gut!"], ["Supert!", "Super!"], ["Helt riktig!", "Genau richtig!"], ["Du er flink!", "Du bist klasse!"], ["Strålende!", "Großartig!"], ["Sånn skal det være!", "So muss das sein!"], ["Ekte viking!", "Ein echter Wikinger!"]],
  wrong: [["Ikke gi opp!", "Nicht aufgeben!"], ["Nesten!", "Fast!"], ["Feil er lov!", "Fehler sind erlaubt!"], ["Øvelse gjør mester!", "Übung macht den Meister!"], ["Du klarer det!", "Du schaffst das!"], ["Pust ut, prøv igjen!", "Durchatmen, nochmal!"]],
  pass: [["Hurra! Du klarte det!", "Hurra, du hast es geschafft!"], ["Skål for deg!", "Ein Hoch auf dich!"], ["Du er en ekte viking!", "Du bist ein echter Wikinger!"]],
  fail: [["Ingen fare! Vi prøver igjen.", "Kein Problem! Wir versuchen es nochmal."], ["Selv vikinger øver mye!", "Auch Wikinger üben viel!"], ["Snart sitter det!", "Bald sitzt es!"]],
  start: [["La oss lære!", "Lass uns lernen!"], ["Klar? Ferdig? Gå!", "Auf die Plätze, fertig, los!"], ["Dette blir gøy!", "Das wird lustig!"]]
};
const rnd = a => a[Math.random() * a.length | 0];
window.VIKING = {
  svg,
  phrase: k => rnd(PH[k]),
  html(mood, size, ph) {
    const p = ph || null;
    return `<div class="vk-wrap"><button class="viking vk-${mood}" style="--s:${size || 96}px" data-say="${p ? p[0] : "Hei!"}" aria-label="Bjørn der Wikinger">${svg(mood)}</button>${p ? `<div class="vk-bubble"><b>${p[0]}</b><small>${p[1]}</small></div>` : ""}</div>`;
  },
  confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = document.createElement("div"); box.className = "confetti";
    const cols = ["#ba0c2f", "#00205b", "#ffffff", "#e3a008", "#1f9d55", "#7ea2ff"];
    for (let i = 0; i < 70; i++) {
      const c = document.createElement("i");
      c.style.left = Math.random() * 100 + "%"; c.style.background = rnd(cols);
      c.style.animationDelay = Math.random() * .5 + "s"; c.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      c.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
      box.appendChild(c);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 3500);
  }
};
})();
