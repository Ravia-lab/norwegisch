// Bjørn, der kleine Wikinger, der dich anfeuert.
(function () {
"use strict";
function svg(mood) {
  const cheer = mood === "cheer", sad = mood === "sad", wave = mood === "happy" || mood === "wave";
  const O = 'stroke="#2b1a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  // Riesenaugen
  const eyes = cheer
    ? `<path d="M38 60 Q47 49 56 60" ${O} fill="none" stroke-width="4"/><path d="M64 60 Q73 49 82 60" ${O} fill="none" stroke-width="4"/>`
    : `<ellipse cx="47" cy="57" rx="10" ry="12" fill="#fff" ${O}/><ellipse cx="73" cy="57" rx="10" ry="12" fill="#fff" ${O}/>
       <circle cx="${sad ? 46 : 49}" cy="${sad ? 61 : 58}" r="6" fill="#2b1a10"/><circle cx="${sad ? 72 : 75}" cy="${sad ? 61 : 58}" r="6" fill="#2b1a10"/>
       <circle cx="${sad ? 48 : 51}" cy="${sad ? 58 : 55}" r="2.4" fill="#fff"/><circle cx="${sad ? 74 : 77}" cy="${sad ? 58 : 55}" r="2.4" fill="#fff"/>
       <circle cx="${sad ? 44 : 47}" cy="${sad ? 63 : 61}" r="1.1" fill="#fff"/><circle cx="${sad ? 70 : 73}" cy="${sad ? 63 : 61}" r="1.1" fill="#fff"/>`;
  const brows = sad
    ? `<path d="M36 44 Q44 38 54 44" fill="none" stroke="#c4501a" stroke-width="5" stroke-linecap="round" transform="rotate(14 45 42)"/><path d="M66 44 Q76 38 84 44" fill="none" stroke="#c4501a" stroke-width="5" stroke-linecap="round" transform="rotate(-14 75 42)"/>`
    : `<path d="M36 42 Q45 34 55 41" fill="none" stroke="#c4501a" stroke-width="5" stroke-linecap="round"/><path d="M65 41 Q75 34 84 42" fill="none" stroke="#c4501a" stroke-width="5" stroke-linecap="round"/>`;
  const mouth = sad
    ? `<path d="M50 90 Q55 85 60 89 Q65 85 70 90" fill="none" ${O}/>`
    : cheer
    ? `<path d="M40 82 Q60 112 80 82 Q60 90 40 82 Z" fill="#7a1f2b" ${O}/><path d="M44 84 Q60 89 76 84 L74 88 Q60 92 46 88 Z" fill="#fff"/><path d="M50 99 Q60 92 70 99 Q60 106 50 99Z" fill="#ff7a8a"/>`
    : `<path d="M44 83 Q60 104 76 83 Q60 89 44 83 Z" fill="#7a1f2b" ${O}/><path d="M47 84.5 Q60 88 73 84.5 L72 87.5 Q60 90 48 87.5 Z" fill="#fff"/><path d="M53 95 Q60 90 67 95 Q60 99 53 95Z" fill="#ff7a8a"/>`;
  const armL = cheer ? `rotate(-145 40 104)` : `rotate(25 40 104)`;
  const armR = cheer ? `rotate(145 80 104)` : wave ? `rotate(-135 80 104)` : `rotate(-25 80 104)`;
  const flag = cheer ? `<g transform="translate(76 124) rotate(180)"><rect x="-1.5" y="-2" width="3" height="26" fill="#8a5a2b" ${O} stroke-width="2"/><g transform="translate(1.5 0)"><rect width="20" height="14" fill="#ba0c2f" ${O} stroke-width="2"/><rect x="5" width="4" height="14" fill="#fff"/><rect y="5" width="20" height="4" fill="#fff"/><rect x="6" width="2" height="14" fill="#00205b"/><rect y="6" width="20" height="2" fill="#00205b"/></g></g>` : "";
  return `<svg viewBox="0 -4 120 146" aria-hidden="true">
  <ellipse cx="60" cy="138" rx="28" ry="4" fill="rgba(0,0,0,.15)"/>
  <!-- Arme -->
  <g transform="${armL}"><rect x="34" y="100" width="13" height="24" rx="6.5" fill="#3a6df0" ${O}/><circle cx="40.5" cy="126" r="7" fill="#ffcfa6" ${O}/></g>
  <g class="${wave && !cheer ? "vk-wave" : ""}" style="transform-origin:80px 104px"><g transform="${armR}"><rect x="73" y="100" width="13" height="24" rx="6.5" fill="#3a6df0" ${O}/><circle cx="79.5" cy="126" r="7" fill="#ffcfa6" ${O}/>${flag}</g></g>
  <!-- Körper -->
  <path d="M38 102 Q60 92 82 102 L86 130 Q60 138 34 130 Z" fill="#3a6df0" ${O}/>
  <path d="M36 120 L84 120" stroke="#6b3d1c" stroke-width="7"/><rect x="54" y="115" width="12" height="10" rx="3" fill="#ffc83d" ${O} stroke-width="2"/>
  <ellipse cx="47" cy="133" rx="9" ry="5" fill="#6b3d1c" ${O} stroke-width="2.5"/><ellipse cx="73" cy="133" rx="9" ry="5" fill="#6b3d1c" ${O} stroke-width="2.5"/>
  <!-- Hörner -->
  <path d="M27 40 Q4 34 6 2 Q16 24 34 28 Z" fill="#fff4dc" ${O}/><path d="M9 14 L16 17 M12 23 L20 25" stroke="#e4d2a8" stroke-width="2"/>
  <path d="M93 40 Q116 34 114 2 Q104 24 86 28 Z" fill="#fff4dc" ${O}/><path d="M111 14 L104 17 M108 23 L100 25" stroke="#e4d2a8" stroke-width="2"/>
  <!-- Kopf -->
  <circle cx="60" cy="58" r="35" fill="#ffcfa6" ${O}/>
  <ellipse cx="25" cy="62" rx="5" ry="7" fill="#ffcfa6" ${O}/><ellipse cx="95" cy="62" rx="5" ry="7" fill="#ffcfa6" ${O}/>
  <!-- Bart mit Zöpfen -->
  <path d="M24 62 Q22 104 46 112 Q60 120 74 112 Q98 104 96 62 Q90 80 78 80 Q60 76 42 80 Q30 80 24 62 Z" fill="#f2862e" ${O}/>
  <path d="M34 92 Q38 100 36 106 M86 92 Q82 100 84 106 M48 104 Q50 110 48 114 M72 104 Q70 110 72 114" stroke="#d0611c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M50 113 Q46 122 50 128 M70 113 Q74 122 70 128" stroke="#f2862e" stroke-width="7" stroke-linecap="round" fill="none"/>
  <circle cx="50" cy="129" r="4" fill="#ffc83d" ${O} stroke-width="2"/><circle cx="70" cy="129" r="4" fill="#ffc83d" ${O} stroke-width="2"/>
  ${mouth}
  <!-- Schnurrbart -->
  <path d="M60 76 Q48 70 36 80 Q44 86 60 80 Q76 86 84 80 Q72 70 60 76 Z" fill="#e0701f" ${O}/>
  <circle cx="34" cy="70" r="6" fill="#ff8f9c" opacity=".55"/><circle cx="86" cy="70" r="6" fill="#ff8f9c" opacity=".55"/>
  <circle cx="31" cy="66" r="1" fill="#d98b62"/><circle cx="35" cy="67" r="1" fill="#d98b62"/><circle cx="89" cy="66" r="1" fill="#d98b62"/><circle cx="85" cy="67" r="1" fill="#d98b62"/>
  ${eyes}${brows}
  <ellipse cx="60" cy="70" rx="7" ry="6" fill="#ffad85" ${O}/><circle cx="58" cy="68" r="1.8" fill="#fff" opacity=".8"/>
  <!-- Helm -->
  <path d="M24 44 Q24 8 60 6 Q96 8 96 44 Z" fill="#a9b6c7" ${O}/>
  <path d="M38 22 Q48 12 60 12" stroke="#e3e9f1" stroke-width="4" stroke-linecap="round" fill="none"/>
  <rect x="21" y="38" width="78" height="11" rx="5.5" fill="#7d8aa0" ${O}/>
  <path d="M56 8 L64 8 L63 50 L57 50 Z" fill="#7d8aa0" ${O} stroke-width="2.5"/>
  <circle cx="31" cy="43.5" r="2" fill="#e3e9f1"/><circle cx="44" cy="43.5" r="2" fill="#e3e9f1"/><circle cx="76" cy="43.5" r="2" fill="#e3e9f1"/><circle cx="89" cy="43.5" r="2" fill="#e3e9f1"/>
  ${sad ? `<path d="M100 30 Q104 38 100 42 Q96 38 100 30Z" fill="#7ec8ff" ${O} stroke-width="2"/>` : ""}
  ${cheer ? `<path d="M10 52 L4 48 M12 62 L4 63 M110 52 L116 48 M108 62 L116 63" stroke="#ffc83d" stroke-width="3" stroke-linecap="round"/>` : ""}
</svg>`;
}
const PH = {
  right: [["Kjempebra!", "Riesig gut!"], ["Supert!", "Super!"], ["Helt riktig!", "Genau richtig!"], ["Du er flink!", "Du bist klasse!"], ["Strålende!", "Großartig!"], ["Sånn skal det være!", "So muss das sein!"], ["Ekte viking!", "Ein echter Wikinger!"]],
  wrong: [["Ikke gi opp!", "Nicht aufgeben!"], ["Nesten!", "Fast!"], ["Feil er lov!", "Fehler sind erlaubt!"], ["Øvelse gjør mester!", "Übung macht den Meister!"], ["Du klarer det!", "Du schaffst das!"], ["Pust ut, prøv igjen!", "Durchatmen, nochmal!"]],
  pass: [["Hurra! Du klarte det!", "Hurra, du hast es geschafft!"], ["Skål for deg!", "Ein Hoch auf dich!"], ["Du er en ekte viking!", "Du bist ein echter Wikinger!"]],
  fail: [["Ingen fare! Vi prøver igjen.", "Kein Problem! Wir versuchen es nochmal."], ["Selv vikinger øver mye!", "Auch Wikinger üben viel!"], ["Snart sitter det!", "Bald sitzt es!"]],
  start: [["La oss lære!", "Lass uns lernen!"], ["Klar? Ferdig? Gå!", "Auf die Plätze, fertig, los!"], ["Dette blir gøy!", "Das wird lustig!"]],
  cards: [["Litt hver dag!", "Jeden Tag ein bisschen!"], ["Ord for ord blir du flink!", "Wort für Wort wirst du gut!"], ["Hjernen din elsker repetisjon!", "Dein Gehirn liebt Wiederholung!"]],
  cardsdone: [["Alt er gjort for i dag!", "Für heute ist alles erledigt!"], ["Godt jobba! Hvil hjernen litt.", "Gut gemacht! Gönn deinem Kopf eine Pause."]],
  round: [["Bra runde!", "Gute Runde!"], ["Ordene sitter!", "Die Wörter sitzen!"], ["Du blir bedre hver dag!", "Du wirst jeden Tag besser!"]],
  roundmeh: [["Det kommer!", "Das wird schon!"], ["De vanskelige ordene kommer igjen snart.", "Die schweren Wörter kommen bald wieder."]],
  dialogs: [["La oss prate!", "Lass uns reden!"], ["Snakk i vei – ingen dømmer deg!", "Rede einfach drauflos – niemand urteilt!"], ["Øvelse gjør mester!", "Übung macht den Meister!"]],
  sounds: [["Hør godt etter!", "Hör genau hin!"], ["Norsk synger litt – hør på melodien!", "Norwegisch singt ein bisschen – hör auf die Melodie!"]],
  me: [["Se hvor langt du har kommet!", "Schau, wie weit du gekommen bist!"], ["Jeg er stolt av deg!", "Ich bin stolz auf dich!"]],
  exam: [["Nå gjelder det! Du klarer det.", "Jetzt gilt's! Du schaffst das."], ["Pust rolig – du kan dette!", "Ruhig atmen – du kannst das!"]],
  badge: [["Wow, et nytt merke!", "Wow, ein neues Abzeichen!"], ["Hurra! Du har låst opp noe!", "Hurra! Du hast etwas freigeschaltet!"], ["Ekte vikingstyrke!", "Echte Wikingerstärke!"]]
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
