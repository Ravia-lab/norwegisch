// Ausbau A1: zusätzliche Lektionen. gram: Lückentexte [Satz mit ___, richtig, falsch, falsch, Hinweis]
(function () {
const L = window.LEVELS.find(l => l.id === "A1");
L.lessons.push(
{
  id: "a1-8", t: "Farben & Aussehen",
  intro: "<p>Adjektive bekommen im Norwegischen Endungen: <b>en rød bil</b>, <b>et rødt hus</b>, <b>røde biler</b>.</p><p>Merke: <b>et</b>-Wort → <b>-t</b>, Mehrzahl → <b>-e</b>.</p>",
  items: [
    ["rød", "rot", "röö"], ["blå", "blau", "bloo"], ["grønn", "grün", "grönn"], ["gul", "gelb", "güül"],
    ["svart", "schwarz", "swaat"], ["hvit", "weiß", "wiit"], ["grå", "grau", "groo"], ["brun", "braun", "brüün"],
    ["stor", "groß", "stuur"], ["liten", "klein", "liiten"], ["ny", "neu", "nüü"], ["gammel", "alt", "gammel"],
    ["pen", "hübsch", "peen"], ["høy", "hoch / groß (Person)", "höi"], ["lang", "lang", "lang"], ["fin", "schön / fein", "fiin"]
  ],
  sent: [
    ["Bilen min er rød.", "Mein Auto ist rot."],
    ["Huset er stort og hvitt.", "Das Haus ist groß und weiß."],
    ["Hun har langt, brunt hår.", "Sie hat lange, braune Haare."],
    ["Jeg liker den blå jakka.", "Ich mag die blaue Jacke."]
  ],
  gram: [
    ["Et ___ hus.", "rødt", "rød", "røde", "et-Wort → -t"],
    ["To ___ biler.", "store", "stor", "stort", "Mehrzahl → -e"],
    ["En ___ katt.", "svart", "svarte", "svartt", "en-Wort: Grundform"],
    ["Et ___ eple.", "grønt", "grønn", "grønne", "grønn + t = grønt"]
  ]
},
{
  id: "a1-9", t: "Zahlen bis 1000 & Preise",
  intro: "<p>Zehner: <b>tretti, førti, femti, seksti, sytti, åtti, nitti</b>.</p><p>Zusammengesetzt wie im Englischen: <b>tjuefem</b> (25), <b>hundre og ti</b> (110).</p><p>Uhrzeit: <b>halv tre</b> = halb drei (2:30), <b>kvart over to</b> = Viertel nach zwei.</p>",
  items: [
    ["tretti", "dreißig", "tretti"], ["førti", "vierzig", "förti"], ["femti", "fünfzig", "femti"], ["seksti", "sechzig", "seksti"],
    ["sytti", "siebzig", "sütti"], ["åtti", "achtzig", "otti"], ["nitti", "neunzig", "nitti"], ["hundre", "hundert", "hündre"],
    ["tusen", "tausend", "tüüsen"], ["tjuefem", "fünfundzwanzig", "chüüefemm"], ["halv tre", "halb drei", "hall tree"],
    ["kvart over to", "Viertel nach zwei", "kwaat ower tuu"], ["kvart på fire", "Viertel vor vier", "kwaat po fiire"], ["krone", "Krone", "kruune"]
  ],
  sent: [
    ["Det koster hundre og femti kroner.", "Das kostet hundertfünfzig Kronen."],
    ["Klokka er kvart over to.", "Es ist Viertel nach zwei."],
    ["Bussen går halv fem.", "Der Bus fährt um halb fünf."],
    ["Jeg er førtito år.", "Ich bin zweiundvierzig."]
  ],
  gram: [
    ["30 = ___", "tretti", "trettisju", "tre ti", "Zehner auf -ti"],
    ["Klokka er ___ tre. (2:30)", "halv", "kvart", "over", "halb = halv"],
    ["Det koster ___ kroner. (100)", "hundre", "tusen", "ti", ""],
    ["Kvart ___ fire. (3:45)", "på", "over", "i", "Viertel vor = kvart på"]
  ]
},
{
  id: "a1-10", t: "Tagesablauf",
  intro: "<p>Einige Verben sind <b>reflexiv</b>: <b>Jeg legger meg</b> (ich lege mich hin), <b>du legger deg</b>, <b>han legger seg</b>.</p><p>Zeitangaben: <b>om morgenen</b> (morgens), <b>om kvelden</b> (abends).</p>",
  items: [
    ["står opp", "stehe auf", "stoor upp"], ["dusjer", "dusche", "düscher"], ["spiser frokost", "frühstücke", "spiiser fruukost"],
    ["går på jobb", "gehe zur Arbeit", "goor po jobb"], ["kommer hjem", "komme nach Hause", "kommer jemm"], ["lager mat", "koche", "laager maat"],
    ["ser på TV", "sehe fern", "seer po teewee"], ["legger meg", "gehe ins Bett", "legger mäi"], ["sover", "schlafe", "soower"],
    ["våkner", "wache auf", "wookner"], ["om morgenen", "morgens", "omm moornen"], ["om kvelden", "abends", "omm kwellen"],
    ["ettermiddag", "Nachmittag", "ettermiddag"], ["natt", "Nacht", "natt"], ["alltid", "immer", "alltid"], ["vanligvis", "normalerweise", "waanliwiis"]
  ],
  sent: [
    ["Jeg står opp klokka sju.", "Ich stehe um sieben Uhr auf."],
    ["Om kvelden ser vi på TV.", "Abends sehen wir fern."],
    ["Hun legger seg tidlig.", "Sie geht früh ins Bett."],
    ["Vanligvis spiser jeg frokost hjemme.", "Normalerweise frühstücke ich zu Hause."]
  ],
  gram: [
    ["Jeg legger ___ klokka elleve.", "meg", "deg", "seg", "jeg → meg"],
    ["Han legger ___ sent.", "seg", "meg", "ham", "han/hun → seg"],
    ["Om morgenen ___ jeg kaffe.", "drikker", "drikke", "drakk", "V2: Verb auf Platz 2, Präsens"],
    ["Vi står ___ tidlig.", "opp", "på", "ut", "stå opp = aufstehen"]
  ]
},
{
  id: "a1-11", t: "In der Stadt",
  intro: "<p>Wo ist …? <b>Hvor er …?</b></p><p>Ortsangaben: <b>i</b> (in), <b>på</b> (auf/an/in), <b>ved siden av</b> (neben), <b>foran</b> (vor), <b>bak</b> (hinter).</p><p>Oft sagt man <b>på</b> bei Gebäuden: <i>på skolen, på banken, på kafé</i>.</p>",
  items: [
    ["gate", "Straße", "gaate"], ["skole", "Schule", "skuule"], ["sykehus", "Krankenhaus", "süükehüüs"], ["kirke", "Kirche", "chirke"],
    ["park", "Park", "park"], ["bank", "Bank", "bank"], ["kafé", "Café", "kafee"], ["restaurant", "Restaurant", "restüraang"],
    ["hotell", "Hotel", "hutell"], ["bibliotek", "Bibliothek", "bibliuteek"], ["torg", "Marktplatz", "torg"], ["bro", "Brücke", "bruu"],
    ["foran", "vor", "foran"], ["bak", "hinter", "baak"], ["ved siden av", "neben", "we siiden aaw"], ["langt", "weit", "langt"]
  ],
  sent: [
    ["Banken er ved siden av kirken.", "Die Bank ist neben der Kirche."],
    ["Vi møtes på kafeen.", "Wir treffen uns im Café."],
    ["Hotellet ligger i sentrum.", "Das Hotel liegt im Zentrum."],
    ["Er det langt til biblioteket?", "Ist es weit bis zur Bibliothek?"]
  ],
  gram: [
    ["Barna er ___ skolen.", "på", "i", "til", "bei Gebäuden oft på"],
    ["Jeg bor ___ Oslo.", "i", "på", "til", "Städte/Länder: i"],
    ["Parken er ___ huset. (hinter)", "bak", "foran", "over", ""],
    ["Hvor ___ banken?", "er", "har", "går", ""]
  ]
},
{
  id: "a1-12", t: "Hobbys & Freizeit",
  intro: "<p>Was man gern macht: <b>Jeg liker å …</b> (Ich mag es, zu …) oder <b>Jeg er glad i …</b> (Ich mag … sehr).</p><p><b>å</b> vor dem Infinitiv = „zu“: <i>å lese, å svømme</i>.</p>",
  items: [
    ["fotball", "Fußball", "futball"], ["gå på ski", "Ski fahren", "goo po schii"], ["svømme", "schwimmen", "swömme"], ["lese", "lesen", "leese"],
    ["høre på musikk", "Musik hören", "höre po müsikk"], ["spille gitar", "Gitarre spielen", "spille gitaar"], ["trene", "trainieren", "treene"],
    ["danse", "tanzen", "danse"], ["male", "malen", "maale"], ["fritid", "Freizeit", "friitid"], ["helg", "Wochenende", "hellg"],
    ["kino", "Kino", "chiinu"], ["gå tur", "spazieren / wandern", "goo tüür"], ["jeg er glad i", "ich mag (sehr)", "jäi är glaa i"]
  ],
  sent: [
    ["Jeg liker å lese bøker.", "Ich lese gern Bücher."],
    ["I helgen går vi på ski.", "Am Wochenende fahren wir Ski."],
    ["Hun er glad i musikk.", "Sie liebt Musik."],
    ["Hva gjør du i fritiden?", "Was machst du in deiner Freizeit?"]
  ],
  gram: [
    ["Jeg liker ___ svømme.", "å", "at", "og", "Infinitivzeichen å"],
    ["Han er glad ___ fotball.", "i", "på", "for", "glad i = mögen"],
    ["I helgen ___ vi tur.", "går", "gå", "gikk", "V2 + Präsens"],
    ["Hva ___ du i fritiden?", "gjør", "gjøre", "gjort", ""]
  ]
},
{
  id: "a1-13", t: "Modalverben",
  intro: "<p>Nach Modalverben steht der <b>Infinitiv ohne å</b>:</p><ul><li><b>kan</b> – kann</li><li><b>vil</b> – will</li><li><b>må</b> – muss</li><li><b>skal</b> – werde / soll (Plan)</li><li><b>bør</b> – sollte</li></ul><p><i>Jeg kan snakke norsk.</i> (nicht: <s>kan å snakke</s>)</p>",
  items: [
    ["kan", "kann", "kann"], ["vil", "will", "will"], ["må", "muss", "moo"], ["skal", "werde / soll", "skall"], ["bør", "sollte", "bör"],
    ["får lov til", "darf", "foor loow till"], ["har lyst til", "habe Lust auf", "haar lüst till"], ["pleier å", "pflege zu", "pläier o"],
    ["prøver å", "versuche zu", "pröwer o"], ["trenger", "brauche", "trenger"], ["kanskje", "vielleicht", "kanschje"], ["gjerne", "gern", "järne"]
  ],
  sent: [
    ["Jeg kan snakke litt norsk.", "Ich kann ein bisschen Norwegisch sprechen."],
    ["Vi skal reise til Bergen i morgen.", "Wir fahren morgen nach Bergen."],
    ["Du må hvile.", "Du musst dich ausruhen."],
    ["Jeg har lyst til å gå på kino.", "Ich habe Lust, ins Kino zu gehen."]
  ],
  gram: [
    ["Jeg kan ___ norsk.", "snakke", "å snakke", "snakker", "nach Modalverb: Infinitiv ohne å"],
    ["Vi må ___ nå.", "gå", "går", "å gå", ""],
    ["Jeg har lyst til ___ danse.", "å", "–", "at", "lyst til + å"],
    ["Hun ___ kaffe om morgenen. (pflegt zu trinken)", "pleier å drikke", "pleier drikke", "pleier å drikker", "pleie å + Infinitiv"]
  ]
},
{
  id: "a1-14", t: "Mein, dein, sein",
  intro: "<p>Das Possessiv steht meist <b>hinter</b> dem Nomen, das dann bestimmt ist:</p><ul><li><b>bilen min</b> (mein Auto, en-Wort)</li><li><b>boka mi</b> (mein Buch, ei-Wort)</li><li><b>huset mitt</b> (mein Haus, et-Wort)</li><li><b>bilene mine</b> (meine Autos)</li></ul><p><b>sin/si/sitt/sine</b> = sein eigenes (bezieht sich aufs Subjekt).</p>",
  items: [
    ["min", "mein (en-Wort)", "minn"], ["mi", "mein (ei-Wort)", "mii"], ["mitt", "mein (et-Wort)", "mitt"], ["mine", "meine (Mehrzahl)", "miine"],
    ["din", "dein", "dinn"], ["hans", "sein", "hans"], ["hennes", "ihr (von ihr)", "hennes"], ["vår", "unser", "woor"],
    ["deres", "euer / ihr", "deeres"], ["sin", "sein eigener", "sinn"], ["bilen min", "mein Auto", "biilen minn"], ["huset mitt", "mein Haus", "hüüse mitt"]
  ],
  sent: [
    ["Dette er huset mitt.", "Das ist mein Haus."],
    ["Hvor er nøklene mine?", "Wo sind meine Schlüssel?"],
    ["Han besøker moren sin.", "Er besucht seine (eigene) Mutter."],
    ["Bilen hennes er ny.", "Ihr Auto ist neu."]
  ],
  gram: [
    ["huset ___ (mein)", "mitt", "min", "mine", "et-Wort → mitt"],
    ["bøkene ___ (meine)", "mine", "min", "mitt", "Mehrzahl → mine"],
    ["Hun ringer mannen ___. (ihren eigenen)", "sin", "hennes", "hans", "eigener → sin"],
    ["bilen ___ (dein)", "din", "ditt", "dine", "en-Wort → din"]
  ]
},
{
  id: "a1-15", t: "Gegenteile",
  intro: "<p>Wörter lernt man leichter in Paaren. Hier die wichtigsten Gegenteile.</p>",
  items: [
    ["varm", "warm", "warm"], ["kald", "kalt", "kall"], ["lett", "leicht", "lett"], ["vanskelig", "schwierig", "wanskeli"],
    ["rask", "schnell", "rask"], ["langsom", "langsam", "langsomm"], ["tidlig", "früh", "tiili"], ["sen", "spät", "seen"],
    ["full", "voll", "füll"], ["tom", "leer", "tomm"], ["åpen", "offen", "oopen"], ["stengt", "geschlossen", "stengt"],
    ["ren", "sauber", "reen"], ["skitten", "schmutzig", "schitten"], ["lys", "hell", "lüüs"], ["mørk", "dunkel", "mörk"]
  ],
  sent: [
    ["Butikken er stengt på søndag.", "Das Geschäft ist am Sonntag geschlossen."],
    ["Norsk er ikke så vanskelig.", "Norwegisch ist nicht so schwer."],
    ["Om vinteren er det mørkt.", "Im Winter ist es dunkel."],
    ["Glasset er tomt.", "Das Glas ist leer."]
  ],
  gram: [
    ["Glasset er ___. (leer)", "tomt", "tom", "tomme", "et glass → -t"],
    ["Det er ___ ute. (dunkel)", "mørkt", "mørk", "mørke", "det er + -t"],
    ["Butikkene er ___. (offen)", "åpne", "åpen", "åpent", "Mehrzahl"],
    ["Kaffen er ___. (kalt)", "kald", "kaldt", "kalde", "en kaffe → Grundform"]
  ]
},
{
  id: "a1-16", t: "Monate & Jahreszeiten",
  intro: "<p>Monate schreibt man <b>klein</b>. Datum: <b>den femte mai</b> (der fünfte Mai).</p><p>Jahreszeiten: <b>vår, sommer, høst, vinter</b>. „Im Sommer“ = <b>om sommeren</b> oder <b>i sommer</b> (diesen Sommer).</p>",
  items: [
    ["januar", "Januar", "januaar"], ["februar", "Februar", "februaar"], ["mars", "März", "masch"], ["april", "April", "apriil"],
    ["mai", "Mai", "mai"], ["juni", "Juni", "jüüni"], ["juli", "Juli", "jüüli"], ["august", "August", "äugüst"],
    ["september", "September", "september"], ["oktober", "Oktober", "oktoober"], ["november", "November", "nowember"], ["desember", "Dezember", "desember"],
    ["vår", "Frühling", "woor"], ["høst", "Herbst", "höst"], ["bursdag", "Geburtstag", "büschdag"], ["måned", "Monat", "mooned"]
  ],
  sent: [
    ["Jeg har bursdag i juni.", "Ich habe im Juni Geburtstag."],
    ["Om høsten regner det mye.", "Im Herbst regnet es viel."],
    ["Nasjonaldagen er den syttende mai.", "Der Nationalfeiertag ist am siebzehnten Mai."],
    ["Vi reiser til Norge i juli.", "Wir reisen im Juli nach Norwegen."]
  ],
  gram: [
    ["Jeg har bursdag ___ mars.", "i", "på", "om", "Monat: i"],
    ["___ vinteren går vi på ski.", "Om", "På", "I", "om vinteren = im Winter (immer)"],
    ["Vi reiser ___ fredag.", "på", "i", "om", "Wochentag: på"],
    ["Det er kaldt ___ januar.", "i", "på", "ved", ""]
  ]
},
{
  id: "a1-17", t: "Im Supermarkt",
  intro: "<p>Mengen: <b>en kilo</b>, <b>en liter</b>, <b>en pakke</b>, <b>en flaske</b>.</p><p>An der Kasse: <b>Trenger du pose?</b> (Brauchst du eine Tüte?)</p>",
  items: [
    ["kasse", "Kasse", "kasse"], ["pose", "Tüte", "puuse"], ["tilbud", "Angebot", "tillbüüd"], ["pris", "Preis", "priis"],
    ["flaske", "Flasche", "flaske"], ["pakke", "Packung", "pakke"], ["egg", "Ei", "egg"], ["smør", "Butter", "smör"],
    ["potet", "Kartoffel", "puteet"], ["tomat", "Tomate", "tumaat"], ["kylling", "Hähnchen", "chülling"], ["ris", "Reis", "riis"],
    ["sukker", "Zucker", "sükker"], ["salt", "Salz", "salt"], ["grønnsaker", "Gemüse", "grönnsaaker"], ["frukt", "Obst", "frükt"]
  ],
  sent: [
    ["Jeg trenger en liter melk.", "Ich brauche einen Liter Milch."],
    ["Trenger du pose?", "Brauchst du eine Tüte?"],
    ["Kyllingen er på tilbud i dag.", "Das Hähnchen ist heute im Angebot."],
    ["Hvor finner jeg grønnsakene?", "Wo finde ich das Gemüse?"]
  ],
  gram: [
    ["en flaske → to ___", "flasker", "flaske", "flaskene", "Mehrzahl unbestimmt: -r"],
    ["et egg → seks ___", "egg", "egger", "eggene", "einsilbige et-Wörter: ohne Endung"],
    ["Jeg kjøper ___ kilo poteter.", "to", "andre", "tos", ""],
    ["Hvor ___ sukkeret?", "er", "har", "kommer", ""]
  ]
}
);
// Grammatik-Lückentexte auch für die ersten Lektionen
const G = {
  "a1-1": [["Jeg ___ Ola.", "heter", "er heter", "hete", "heißen = å hete"], ["Hvor kommer du ___?", "fra", "til", "av", ""], ["Hyggelig å ___ deg.", "treffe", "treffer", "traff", "nach å: Infinitiv"]],
  "a1-3": [["Jeg har ___ bror.", "en", "et", "ei", "bror = en-Wort"], ["Vi har ___ barn.", "et", "en", "ei", "barn = et-Wort"], ["Moren ___ heter Kari.", "min", "mitt", "mine", ""]],
  "a1-4": [["Jeg vil gjerne ___ en kaffe.", "ha", "har", "å ha", "nach vil: Infinitiv"], ["Kan jeg ___ regningen?", "få", "får", "fikk", ""], ["Det ___ godt.", "smaker", "smake", "smakte", "Präsens -r"]],
  "a1-5": [["Hun ___ i Oslo.", "bor", "bo", "boer", "Präsens: -r für alle"], ["Vi ___ norsk.", "snakker", "snakke", "snakkes", ""], ["Jeg ___ ikke.", "forstår", "forstå", "forstod", ""]],
  "a1-6": [["___ bor du?", "Hvor", "Hva", "Hvem", "wo = hvor"], ["___ heter du?", "Hva", "Hvor", "Når", "wie heißt = hva heter"], ["___ kommer bussen?", "Når", "Hvem", "Hva", "wann = når"]],
  "a1-7": [["I dag ___ det mandag.", "er", "har", "blir", "V2: Verb an Platz 2"], ["Vi ses ___ morgen.", "i", "på", "om", "i morgen"], ["Klokka ___ tre.", "er", "har", "går", ""]]
};
L.lessons.forEach(les => { if (G[les.id]) les.gram = G[les.id]; });
})();
