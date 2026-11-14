// Silbentrennung mit Betonung für Bokmål (und deutsche Lautschrift).
// Regeln: jede Silbe hat einen Vokal (Doppellaute ei/øy/au zählen als einer);
// zwischen zwei Vokalen geht ein Konsonant zur nächsten Silbe, bei mehreren
// nur der letzte – außer bei gültigen Anlautpaaren (bl, br, pl, st, kj, sj …).
// Betonung: im Norwegischen meist auf der ersten Silbe; Ausnahmen in STRESS.
(function () {
"use strict";
const NO_V = "aeiouyæøåéèê", DE_V = "aeiouyäöüéè";
const DIPH_NO = ["ei", "øy", "au", "ai", "oi"], DIPH_DE = ["äi", "öi", "ai", "au", "ie", "ei", "eu"];
const ONSET = ["bl","br","dr","fl","fr","gl","gr","kl","kr","pl","pr","sk","sl","sm","sn","sp","st","sv","tr","kv","tv","kj","sj","gj","hj","tj","hv","dj","fj","bj","pj","sch","ch","skj","str","spr","skr"];
// Wörter mit Betonung nicht auf der 1. Silbe (oder abweichender Trennung)
const STRESS = {
  "forstår": "for·ˈstår", "fordi": "for·ˈdi", "foreldre": "for·ˈel·dre", "familie": "fa·ˈmi·li·e",
  "butikk": "bu·ˈtikk", "billett": "bi·ˈlett", "stasjon": "sta·ˈsjon", "apotek": "a·po·ˈtek",
  "unnskyld": "unn·ˈskyld", "hvorfor": "ˈhvor·for", "hvordan": "ˈhvor·dan", "kollega": "kol·ˈle·ga",
  "intervju": "in·ter·ˈvju", "erfaring": "er·ˈfa·ring", "allerede": "al·le·ˈre·de", "endelig": "ˈen·de·lig",
  "egentlig": "e·ˈgent·lig", "overrasket": "ˈo·ver·ras·ket", "spennende": "ˈspen·nen·de",
  "tradisjon": "tra·di·ˈsjon", "nasjonaldagen": "na·sjo·ˈnal·da·gen", "spørsmål": "ˈspørs·mål",
  "beklager": "be·ˈkla·ger", "forbindelse": "for·ˈbin·del·se", "avtale": "ˈav·ta·le", "vedlagt": "ˈved·lagt",
  "regjering": "re·ˈgje·ring", "stortinget": "ˈstor·tin·get", "likestilling": "ˈli·ke·stil·ling",
  "velferdsstat": "ˈvel·ferds·stat", "innvandring": "ˈinn·vand·ring", "ytringsfrihet": "ˈyt·rings·fri·het",
  "ulikhet": "ˈu·lik·het", "kommune": "kom·ˈmu·ne", "vedtatt": "ˈved·tatt", "ifølge": "i·ˈføl·ge",
  "imidlertid": "ˈi·mid·ler·tid", "dessuten": "des·ˈsu·ten", "følgelig": "ˈføl·ge·lig", "betydelig": "be·ˈty·de·lig",
  "bekymret": "be·ˈkym·ret", "klimaendringer": "ˈkli·ma·end·rin·ger", "fornybar": "ˈfor·ny·bar",
  "bærekraftig": "ˈbæ·re·kraf·tig", "gjenvinning": "ˈgjen·vin·ning", "forurensning": "ˈfor·u·rens·ning",
  "miljøvennlig": "mil·ˈjø·venn·lig", "foregangsland": "ˈfo·re·gangs·land", "likevel": "ˈli·ke·vel",
  "derimot": "de·ri·ˈmot", "avslutningsvis": "ˈav·slut·nings·vis", "argument": "ar·gu·ˈment",
  "påstå": "ˈpå·stå", "fordel": "ˈfor·del", "ulempe": "ˈu·lem·pe", "hjemmekontor": "ˈhjem·me·kon·tor",
  "påpeke": "ˈpå·pe·ke", "fremheve": "ˈfrem·he·ve", "antyde": "ˈan·ty·de", "bagatellisere": "ba·ga·tel·li·ˈse·re",
  "underbygge": "ˈun·der·byg·ge", "forutsetning": "ˈfor·ut·set·ning", "konsekvens": "kon·se·ˈkvens",
  "vesentlig": "ve·ˈsent·lig", "tvetydig": "ˈtve·ty·dig", "iøynefallende": "i·ˈøy·ne·fal·len·de",
  "tilstrebe": "ˈtil·stre·be", "åpenbar": "ˈå·pen·bar", "korleis": "ˈkor·leis", "kvifor": "ˈkvi·for",
  "roman": "ro·ˈman", "novelle": "no·ˈvel·le", "forfatter": "for·ˈfat·ter", "anmeldelse": "ˈan·mel·del·se",
  "utgi": "ˈut·gi", "kronikk": "kro·ˈnikk", "kildekritikk": "ˈkil·de·kri·tikk", "oppsikt": "ˈopp·sikt",
  "hovedperson": "ˈho·ved·per·son", "problemstilling": "pro·ˈblem·stil·ling", "redegjøre": "ˈre·de·gjø·re",
  "hypotese": "hy·po·ˈte·se", "empiri": "em·pi·ˈri", "utvalg": "ˈut·valg", "konkludere": "kon·klu·ˈde·re",
  "avhandling": "ˈav·hand·ling", "utgangspunkt": "ˈut·gangs·punkt", "pålitelig": "på·ˈli·te·lig",
  "altså": "ˈalt·så", "liksom": "ˈlik·som", "uansett": "ˈu·an·sett", "nemlig": "ˈnem·lig",
  "sykepleier": "ˈsy·ke·plei·er", "arbeidsplass": "ˈar·beids·plass", "lønnen": "ˈløn·nen",
  "leilighet": "ˈlei·lig·het", "soverom": "ˈso·ve·rom", "tannlege": "ˈtann·le·ge", "flyplass": "ˈfly·plass",
  "fellesskap": "ˈfel·les·skap", "allemannsretten": "ˈal·le·manns·ret·ten", "friluftsliv": "ˈfri·lufts·liv",
  "matpakke": "ˈmat·pak·ke", "helligdag": "ˈhel·lig·dag", "nordmenn": "ˈnord·menn", "nordlys": "ˈnord·lys",
  "videreutdanning": "ˈvi·de·re·ut·dan·ning", "elbil": "ˈel·bil", "vannkraft": "ˈvann·kraft",
  "stortingsvalg": "ˈstor·tings·valg", "hjemme": "ˈhjem·me", "heime": "ˈhei·me", "ikkje": "ˈikk·je",
  "mykje": "ˈmyk·je", "nokon": "ˈno·kon", "berre": "ˈber·re", "kjøkken": "ˈkjøk·ken", "kjøkkenet": "ˈkjøk·ke·net",
  "frokost": "ˈfro·kost", "middag": "ˈmid·dag", "mandag": "ˈman·dag", "tirsdag": "ˈtirs·dag", "onsdag": "ˈons·dag",
  "torsdag": "ˈtors·dag", "fredag": "ˈfre·dag", "lørdag": "ˈlør·dag", "søndag": "ˈsøn·dag", "størrelse": "ˈstør·rel·se",
  "e-posten": "ˈe·pos·ten", "invitasjonen": "in·vi·ta·ˈsjo·nen", "Østerrike": "ˈøs·ter·ri·ke", "Tyskland": "ˈtysk·land",
  "kjedelig": "ˈkje·de·lig", "slitsomt": "ˈslit·somt", "hyggelig": "ˈhyg·ge·lig", "veldig": "ˈvel·dig",
  "koselig": "ˈko·se·lig", "dugnad": "ˈdug·nad", "pandemien": "pan·de·ˈmi·en", "isolert": "i·so·ˈlert",
  "fleksibiliteten": "flek·si·bi·li·ˈte·ten", "kombinasjon": "kom·bi·na·ˈsjon", "provokasjon": "pro·vo·ka·ˈsjon",
  "representativt": "re·pre·sen·ta·ˈtivt", "produktiviteten": "pro·duk·ti·vi·ˈte·ten", "effektivitet": "ef·fek·ti·vi·ˈtet",
  "politikk": "po·li·ˈtikk", "demokrati": "de·mo·kra·ˈti", "prinsippet": "prin·ˈsip·pet", "systemet": "sy·ˈste·met",
  "insentivene": "in·sen·ˈti·ve·ne", "kritikere": "ˈkri·ti·ke·re", "prosjektet": "pro·ˈsjek·tet",
  "paradoks": "pa·ra·ˈdoks", "energi": "e·ner·ˈgi", "tilgang": "ˈtil·gang", "utdanning": "ˈut·dan·ning",
  "økonomisk": "ø·ko·ˈno·misk", "trygghet": "ˈtrygg·het", "sammenheng": "ˈsam·men·heng", "funnene": "ˈfun·ne·ne",
  "spørreundersøkelse": "ˈspør·re·un·der·sø·kel·se", "hypotesen": "hy·po·ˈte·sen", "studien": "ˈstu·di·en",
  "debatten": "de·ˈbat·ten", "reformen": "re·ˈfor·men", "opposisjonen": "op·po·si·ˈsjo·nen",
  "kommentatorer": "kom·men·ˈta·to·rer", "budsjettet": "bud·ˈsjet·tet", "konsentrere": "kon·sen·ˈtre·re",
  "videre": "ˈvi·de·re", "fantastisk": "fan·ˈtas·tisk", "kafeer": "ka·ˈfe·er", "kino": "ˈki·no",
  "forstå": "for·ˈstå", "betale": "be·ˈta·le", "besøke": "be·ˈsø·ke", "bestille": "be·ˈstil·le", "bestemme": "be·ˈstem·me",
  "begge": "ˈbeg·ge", "igjen": "i·ˈgjen", "skuespill": "ˈsku·e·spill", "skuespillet": "ˈsku·e·spil·let", "tyskland": "ˈtysk·land", "genser": "ˈgen·ser", "penger": "ˈpen·ger", "venstre": "ˈven·stre", "høyre": "ˈhøy·re"
};
function isV(s, i, V) { return V.includes(s[i]); }
function syllabify(word, lang) {
  const V = lang === "de" ? DE_V : NO_V, D = lang === "de" ? DIPH_DE : DIPH_NO;
  const w = word.toLowerCase();
  // Kerne finden
  const nuc = []; let i = 0;
  while (i < w.length) {
    if (isV(w, i, V)) {
      let j = i + 1;
      if (j < w.length && D.includes(w.slice(i, j + 1))) j++;
      while (j < w.length && w[j] === w[j - 1] && isV(w, j, V)) j++; // lange Vokale (aa, öö)
      nuc.push([i, j]); i = j;
    } else i++;
  }
  if (nuc.length < 2) return [word];
  const cuts = [];
  for (let k = 0; k < nuc.length - 1; k++) {
    const a = nuc[k][1], b = nuc[k + 1][0], cl = w.slice(a, b);
    let cut;
    if (cl.length === 0) cut = a;
    else if (cl.length === 1) cut = a;
    else {
      cut = b - 1;
      for (const len of [3, 2]) if (cl.length >= len && ONSET.includes(cl.slice(-len)) && (len < cl.length || lang === "de")) { cut = b - len; break; }
      if (cl.endsWith("ng") && cl.length === 2) cut = b; // "ng" bleibt hinten? -> pen·ger: g geht weiter
      if (cl.length === 2 && cl === "ng") cut = a + 1;
    }
    cuts.push(cut);
  }
  const out = []; let p = 0;
  cuts.forEach(c => { out.push(word.slice(p, c)); p = c; });
  out.push(word.slice(p));
  return out.filter(Boolean);
}
// Ganzer Ausdruck -> [{w:"kjø·re", syl:["kjø","re"], stress:0}]
function analyze(text, lang) {
  return text.split(/(\s+)/).filter(t => t.trim()).map(tok => {
    const m = tok.match(/^([^\p{L}]*)([\p{L}\-]+)([^\p{L}]*)$/u);
    if (!m) return { raw: tok, syl: [tok], stress: -1 };
    const core = m[2], key = core.toLowerCase();
    let syl, stress;
    const o = lang !== "de" && (STRESS[key] || STRESS[core]);
    if (o) { syl = o.split("·").map(s => s.replace("ˈ", "")); stress = o.split("·").findIndex(s => s.includes("ˈ")); }
    else { syl = syllabify(core, lang); stress = syl.length > 1 ? 0 : -1; }
    // Großschreibung des Originals übernehmen
    if (o && core[0] !== core[0].toLowerCase()) syl[0] = syl[0][0].toUpperCase() + syl[0].slice(1);
    return { pre: m[1], post: m[3], syl, stress };
  });
}
// Lautschrift trennen und die Betonung vom norwegischen Wort übernehmen
function analyzePron(no, pron) {
  const P = analyze(pron.replace(/\(.*?\)/g, "").trim(), "de");
  const N = analyze(no, "no");
  if (N.length === P.length) P.forEach((p, i) => {
    const n = N[i];
    if (p.syl.length > 1 && n.stress >= 0 && n.stress < p.syl.length) p.stress = n.stress;
  });
  return P;
}
window.SYLL = { analyze, analyzePron, syllabify, STRESS };
if (typeof module !== "undefined") module.exports = window.SYLL;
})();
