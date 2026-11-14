// Ausbau B2: Nachrichten in normalem Tempo, Debatten, Arbeitswelt, Konnektoren. gram: [Satz mit ___, richtig, falsch, falsch, Hinweis]
(function () {
const L = window.LEVELS.find(l => l.id === "B2");
const TIP = t => `<p class="tip">📺 <b>Echte Medien:</b> ${t}</p>`;
L.lessons.push(
{
  id: "b2-6", t: "Nachrichten: Ausland",
  intro: "<p>Auslandsnachrichten nutzen viele Fremdwörter, die du aus dem Deutschen kennst: <b>konflikt, sanksjoner, forhandlinger</b>.</p>" + TIP("Hör die kurzen Nachrichten auf <b>NRK Radio</b> („Nyheter“, jede volle Stunde, ca. 5 Minuten). Erst Themen erkennen, dann Details."),
  items: [
    ["utenriks", "Ausland (Politik)"], ["forhandlinger", "Verhandlungen"], ["våpenhvile", "Waffenruhe"], ["sanksjoner", "Sanktionen"],
    ["flyktninger", "Flüchtlinge"], ["valg", "Wahl"], ["valgseier", "Wahlsieg"], ["toppmøte", "Gipfeltreffen"],
    ["avtale", "Abkommen"], ["FN", "die UNO"], ["EU", "die EU"], ["nødhjelp", "Nothilfe"],
    ["sivile", "Zivilisten"], ["krise", "Krise"], ["utenriksminister", "Außenminister/in"], ["fordømme", "verurteilen"]
  ],
  sent: [
    ["Partene er enige om en midlertidig våpenhvile.", "Die Parteien haben sich auf eine vorläufige Waffenruhe geeinigt."],
    ["Utenriksministeren fordømmer angrepet.", "Die Außenministerin verurteilt den Angriff."],
    ["Norge gir 200 millioner kroner i nødhjelp.", "Norwegen gibt 200 Millionen Kronen Nothilfe."],
    ["Forhandlingene fortsetter i morgen.", "Die Verhandlungen gehen morgen weiter."]
  ],
  gram: [
    ["Partene er blitt enige ___ en avtale.", "om", "på", "med", "enige om"],
    ["Angrepet ble fordømt ___ FN.", "av", "fra", "med", "Passiv: av = von"],
    ["Valget skal ___ i september.", "holdes", "holder", "holde", "s-Passiv nach skal"],
    ["Norge bidrar ___ nødhjelp.", "med", "til", "for", "bidra med"]
  ],
  text: {
    no: "Etter flere uker med forhandlinger har partene i konflikten blitt enige om en midlertidig våpenhvile. Avtalen skal gjelde i 30 dager og gi hjelpeorganisasjoner mulighet til å nå fram til sivile. FNs generalsekretær kaller avtalen «et viktig første skritt», men understreker at situasjonen fortsatt er svært alvorlig. Norge har bidratt som tilrettelegger i samtalene og gir i tillegg 200 millioner kroner i nødhjelp.",
    de: "Nach mehreren Wochen Verhandlungen haben sich die Konfliktparteien auf eine vorläufige Waffenruhe geeinigt. Das Abkommen soll 30 Tage gelten und Hilfsorganisationen ermöglichen, die Zivilbevölkerung zu erreichen. Der UN-Generalsekretär nennt das Abkommen „einen wichtigen ersten Schritt“, betont aber, dass die Lage weiterhin sehr ernst ist. Norwegen hat als Vermittler an den Gesprächen mitgewirkt und gibt zusätzlich 200 Millionen Kronen Nothilfe.",
    q: [
      ["Hvor lenge skal våpenhvilen gjelde?", "I 30 dager", "I ett år", "I tre dager"],
      ["Hva kaller FNs generalsekretær avtalen?", "Et viktig første skritt", "En stor seier", "En skuffelse"],
      ["Hvilken rolle har Norge hatt?", "Tilrettelegger i samtalene", "Part i konflikten", "Ingen rolle"]
    ]
  }
},
{
  id: "b2-7", t: "Debatte im Radio",
  intro: "<p>In Debatten unterbricht man höflich: <b>Får jeg komme inn her?</b> Man widerspricht mit <b>Det er jeg ikke enig i</b> oder <b>Det stemmer ikke helt</b>.</p>" + TIP("Die Sendung <b>Debatten</b> (NRK1, auch als Podcast) zeigt, wie Norweger streiten: schnell, direkt, oft gleichzeitig. Hör zuerst nur auf die Positionen."),
  items: [
    ["Får jeg komme inn her?", "Darf ich hier einhaken?"], ["Det er jeg ikke enig i.", "Dem stimme ich nicht zu."], ["Det stemmer ikke helt.", "Das stimmt nicht ganz."], ["La meg fullføre.", "Lass mich ausreden."],
    ["poenget er at …", "der Punkt ist, dass …"], ["argument", "Argument"], ["motargument", "Gegenargument"], ["standpunkt", "Standpunkt"],
    ["overbevise", "überzeugen"], ["tilhenger", "Befürworter"], ["motstander", "Gegner"], ["ta stilling til", "Stellung nehmen zu"],
    ["kompromiss", "Kompromiss"], ["i bunn og grunn", "im Grunde"], ["det handler om", "es geht um"], ["tvert imot", "im Gegenteil"]
  ],
  sent: [
    ["La meg fullføre, så kan du svare etterpå.", "Lass mich ausreden, dann kannst du danach antworten."],
    ["Poenget er at vi ikke har råd til dette.", "Der Punkt ist, dass wir uns das nicht leisten können."],
    ["Det handler i bunn og grunn om tillit.", "Im Grunde geht es um Vertrauen."],
    ["Tvert imot, jeg mener det motsatte.", "Im Gegenteil, ich meine das Gegenteil."]
  ],
  gram: [
    ["Det er jeg ikke enig ___.", "i", "med", "om", "enig i (Sache)"],
    ["Jeg er enig ___ deg.", "med", "i", "på", "enig med (Person)"],
    ["Du må ta stilling ___ saken.", "til", "for", "på", "ta stilling til"],
    ["Han klarte ikke å ___ publikum.", "overbevise", "overbeviser", "overbeviste", "å + Infinitiv"]
  ],
  text: {
    no: "Programleder: Skal det bli forbudt med mobiltelefon på skolen? Kari, du er for et forbud. – Ja, i bunn og grunn handler det om konsentrasjon. Elevene lærer bedre uten mobilen. – Får jeg komme inn her? Det stemmer ikke helt. Mobilen kan også være et nyttig verktøy i undervisningen. – Men forskningen viser tvert imot at …",
    de: "Moderator: Sollen Handys an Schulen verboten werden? Kari, du bist für ein Verbot. – Ja, im Grunde geht es um Konzentration. Die Schüler lernen besser ohne Handy. – Darf ich hier einhaken? Das stimmt nicht ganz. Das Handy kann auch ein nützliches Werkzeug im Unterricht sein. – Aber die Forschung zeigt im Gegenteil, dass …",
    q: [
      ["Hva handler debatten om?", "Mobilforbud på skolen", "Lekser", "Skolemat"],
      ["Hva er Karis argument?", "Elevene konsentrerer seg bedre", "Mobiler er for dyre", "Lærerne vil ha det"],
      ["Hva mener motstanderen?", "Mobilen kan være et nyttig verktøy", "Mobilen bør forbys", "Forskning er uviktig"]
    ]
  }
},
{
  id: "b2-8", t: "Arbeitsleben & Gewerkschaft",
  intro: "<p>Norwegen hat starke Gewerkschaften (<b>fagforeninger</b>) und das <b>trepartssamarbeid</b>: Staat, Arbeitgeber und Arbeitnehmer verhandeln gemeinsam. Jedes Frühjahr: <b>lønnsoppgjør</b> (Tarifrunde).</p>",
  items: [
    ["fagforening", "Gewerkschaft"], ["arbeidsgiver", "Arbeitgeber"], ["arbeidstaker", "Arbeitnehmer"], ["lønnsoppgjør", "Tarifverhandlung"],
    ["streik", "Streik"], ["mekling", "Schlichtung"], ["tariffavtale", "Tarifvertrag"], ["oppsigelse", "Kündigung"],
    ["permittere", "vorübergehend freistellen"], ["arbeidsmiljøloven", "Arbeitsschutzgesetz"], ["tillitsvalgt", "Vertrauensperson / Betriebsrat"], ["medlem", "Mitglied"],
    ["krav", "Forderung"], ["lønnsøkning", "Lohnerhöhung"], ["ansiennitet", "Dienstalter"], ["varsling", "Whistleblowing / Meldung"]
  ],
  sent: [
    ["Meklingen endte uten enighet, og det blir streik.", "Die Schlichtung endete ohne Einigung, es wird gestreikt."],
    ["Fagforeningen krever en lønnsøkning på fem prosent.", "Die Gewerkschaft fordert eine Lohnerhöhung von fünf Prozent."],
    ["Snakk med den tillitsvalgte hvis du har problemer.", "Sprich mit der Vertrauensperson, wenn du Probleme hast."],
    ["De ansatte ble permittert i tre måneder.", "Die Angestellten wurden für drei Monate freigestellt."]
  ],
  gram: [
    ["Det ble ___ etter at meklingen brøt sammen.", "streik", "streiken", "streiket", "det ble + unbestimmt"],
    ["Hun er ___ i en fagforening.", "medlem", "medlemmet", "medlemmer", "ohne Artikel"],
    ["Fagforeningen krever ___ lønn.", "høyere", "høyest", "høy", "Komparativ"],
    ["Hvis meklingen ___, blir det streik.", "mislykkes", "mislykker", "mislykket", "s-Verb: mislykkes"]
  ],
  text: {
    no: "Natt til fredag brøt meklingen mellom partene i varehandelen sammen. Dermed er over 10 000 butikkansatte i streik fra i dag. Fagforeningen krever bedre lønn for de lavest lønte og flere faste stillinger. Arbeidsgiversiden mener kravene er for høye i en vanskelig tid for bransjen. Kundene kan merke streiken ved at enkelte butikker holder stengt.",
    de: "In der Nacht zum Freitag sind die Schlichtungsgespräche zwischen den Parteien im Einzelhandel gescheitert. Damit sind ab heute über 10 000 Verkaufsangestellte im Streik. Die Gewerkschaft fordert bessere Löhne für die Geringverdienenden und mehr Festanstellungen. Die Arbeitgeberseite meint, die Forderungen seien in einer schwierigen Zeit für die Branche zu hoch. Die Kunden können den Streik daran merken, dass einige Geschäfte geschlossen bleiben.",
    q: [
      ["Hvor mange er i streik?", "Over 10 000 butikkansatte", "Rundt 1 000 lærere", "Alle i Norge"],
      ["Hva krever fagforeningen?", "Bedre lønn for lavtlønte og flere faste stillinger", "Kortere ferie", "Lavere skatt"],
      ["Hvordan kan kundene merke streiken?", "Enkelte butikker holder stengt", "Prisene går ned", "Butikkene åpner tidligere"]
    ]
  }
},
{
  id: "b2-9", t: "Wohnungsmarkt & Zinsen",
  intro: "<p>Die meisten Norweger besitzen ihre Wohnung (<b>selveier</b>) oder kaufen über ein <b>borettslag</b> (Wohngenossenschaft). Beim Kauf wird geboten: <b>budrunde</b>.</p>",
  items: [
    ["boligmarkedet", "der Wohnungsmarkt"], ["boliglån", "Hypothek"], ["egenkapital", "Eigenkapital"], ["budrunde", "Bieterrunde"],
    ["prisantydning", "Preisvorstellung"], ["takst", "Schätzwert"], ["borettslag", "Wohngenossenschaft"], ["felleskostnader", "Nebenkosten / Hausgeld"],
    ["førstegangskjøper", "Erstkäufer"], ["renteøkning", "Zinserhöhung"], ["nedbetale", "abbezahlen"], ["eiendomsmegler", "Immobilienmakler"],
    ["boligpris", "Immobilienpreis"], ["leiemarkedet", "der Mietmarkt"], ["sentrumsnær", "zentrumsnah"], ["oppussing", "Renovierung"]
  ],
  sent: [
    ["Du trenger femten prosent egenkapital for å få boliglån.", "Du brauchst fünfzehn Prozent Eigenkapital, um eine Hypothek zu bekommen."],
    ["Leiligheten gikk for en halv million over prisantydning.", "Die Wohnung ging für eine halbe Million über dem Angebotspreis weg."],
    ["Det er vanskelig for førstegangskjøpere å komme inn på boligmarkedet.", "Für Erstkäufer ist es schwer, auf den Wohnungsmarkt zu kommen."],
    ["Felleskostnadene inkluderer internett og kommunale avgifter.", "Das Hausgeld beinhaltet Internet und kommunale Abgaben."]
  ],
  gram: [
    ["Boligen ble solgt ___ prisantydning.", "over", "på", "om", "über dem Preis = over"],
    ["Hvis renten ___, blir lånet dyrere.", "øker", "økte", "økt", "hvis + Präsens"],
    ["Det er ___ å kjøpe bolig i Oslo enn i Trondheim.", "dyrere", "dyrest", "dyr", "enn → Komparativ"],
    ["De har ___ ned lånet på 20 år.", "betalt", "betale", "betaler", "har + Partizip"]
  ]
},
{
  id: "b2-10", t: "Hätte, würde, sollte",
  intro: "<p>Irreales in der Vergangenheit: <b>hadde + Partizip</b> und <b>ville ha + Partizip</b>:</p><p><i>Hvis jeg <b>hadde visst</b> det, <b>ville</b> jeg <b>ha kommet</b>.</i> = Wenn ich das gewusst hätte, wäre ich gekommen.</p><p><b>burde ha</b> = hätte sollen, <b>skulle ha</b> = hätte sollen (Vorwurf/Wunsch).</p>",
  items: [
    ["hvis jeg hadde visst", "wenn ich gewusst hätte"], ["ville ha kommet", "wäre gekommen"], ["burde ha sagt", "hätte sagen sollen"], ["skulle ha vært", "hätte sein sollen"],
    ["kunne ha gjort", "hätte machen können"], ["måtte ha", "hätte haben müssen"], ["om bare", "wenn nur"], ["hadde det ikke vært for", "wäre es nicht wegen"],
    ["i så fall", "in dem Fall"], ["ellers", "sonst"], ["heldigvis", "glücklicherweise"], ["dessverre", "leider"],
    ["angre", "bereuen"], ["forhåpentligvis", "hoffentlich"]
  ],
  sent: [
    ["Hvis jeg hadde visst det, ville jeg ha kommet tidligere.", "Wenn ich das gewusst hätte, wäre ich früher gekommen."],
    ["Du burde ha sagt fra.", "Du hättest Bescheid sagen sollen."],
    ["Vi kunne ha tatt toget i stedet.", "Wir hätten stattdessen den Zug nehmen können."],
    ["Om bare det hadde vært sommer!", "Wenn es doch nur Sommer wäre!"]
  ],
  gram: [
    ["Hvis jeg ___ tid, ville jeg ha hjulpet deg.", "hadde hatt", "har hatt", "hadde", "Irrealis: hadde + Partizip"],
    ["Du ___ ha ringt meg!", "burde", "bør", "burdet", "Vorwurf: burde ha"],
    ["Jeg ville ___ kjøpt huset.", "ha", "har", "hatt", "ville ha + Partizip"],
    ["Vi kunne ha ___ i går.", "reist", "reise", "reiste", "ha + Partizip"]
  ]
},
{
  id: "b2-11", t: "Konnektoren: dessuten, likevel …",
  intro: "<p>Texte werden flüssig durch Verbindungswörter. Achtung: Nach Adverbien wie <b>likevel, dessuten, derfor</b> am Satzanfang kommt das Verb an Platz 2: <i>Likevel <b>gikk</b> vi ut.</i></p>",
  items: [
    ["dessuten", "außerdem"], ["likevel", "trotzdem"], ["derfor", "deshalb"], ["dermed", "damit / somit"],
    ["ettersom", "da / weil"], ["til tross for", "trotz"], ["i stedet for", "statt"], ["blant annet", "unter anderem"],
    ["med andre ord", "mit anderen Worten"], ["i tillegg", "zusätzlich"], ["derimot", "dagegen"], ["først og fremst", "vor allem"],
    ["til slutt", "schließlich"], ["altså", "also"], ["nemlig", "nämlich"], ["uansett", "jedenfalls / egal"]
  ],
  sent: [
    ["Det regnet. Likevel gikk vi på tur.", "Es regnete. Trotzdem gingen wir wandern."],
    ["Til tross for regnet kom mange mennesker.", "Trotz des Regens kamen viele Menschen."],
    ["Ettersom bussen var forsinket, kom jeg for sent.", "Da der Bus Verspätung hatte, kam ich zu spät."],
    ["Oslo er dyr. Tromsø er derimot litt billigere.", "Oslo ist teuer. Tromsø dagegen ist etwas billiger."]
  ],
  gram: [
    ["Det var kaldt. Likevel ___ i sjøen.", "badet vi", "vi badet", "vi badet ikke", "V2: Verb direkt nach likevel"],
    ["___ for regnet var det mange folk der.", "Til tross", "Selv om", "Likevel", "til tross for + Nomen"],
    ["Hun er syk. ___ kan hun ikke komme.", "Derfor", "Fordi", "Ettersom", "derfor + Inversion"],
    ["___ dårlig vær, ble konserten en suksess.", "Til tross for", "Selv om", "Fordi", "vor Nomen: til tross for"]
  ],
  text: {
    no: "Elbilene har tatt over norske veier. I fjor var over 80 prosent av nye biler elektriske. Dette skyldes først og fremst lavere avgifter. Dessuten har ladenettet blitt mye bedre. Likevel er ikke alle fornøyde: På fjellet om vinteren kan det bli lange køer ved ladestasjonene. Elbilene er derimot billige i drift, og mange sier de aldri vil tilbake til bensinbil.",
    de: "Elektroautos haben die norwegischen Straßen erobert. Letztes Jahr waren über 80 Prozent der Neuwagen elektrisch. Das liegt vor allem an niedrigeren Abgaben. Außerdem ist das Ladenetz viel besser geworden. Trotzdem sind nicht alle zufrieden: In den Bergen kann es im Winter lange Schlangen an den Ladestationen geben. Elektroautos sind dagegen günstig im Unterhalt, und viele sagen, sie wollen nie zurück zum Benziner.",
    q: [
      ["Hvor stor andel av nye biler var elektriske?", "Over 80 prosent", "Rundt 50 prosent", "Under 20 prosent"],
      ["Hva er hovedgrunnen?", "Lavere avgifter", "Billigere strøm i Sverige", "Bedre veier"],
      ["Hva er et problem?", "Køer ved ladestasjoner på fjellet om vinteren", "Bilene er for store", "Det finnes ingen ladere"]
    ]
  }
},
{
  id: "b2-12", t: "Umgangssprache & Füllwörter",
  intro: "<p>In echten Gesprächen hört man viele kleine Wörter: <b>liksom</b> (irgendwie / so), <b>altså</b> (also), <b>ass</b> (Kurzform von altså), <b>sant?</b> (nicht wahr?), <b>ikke sant</b> (genau!), <b>jo</b> (ja doch).</p>" + TIP("Die NRK-Serie <b>Skam</b> ist voll von Jugendsprache. Mit norwegischen Untertiteln hörst du, wie man wirklich spricht."),
  items: [
    ["liksom", "irgendwie / so (Füllwort)"], ["altså", "also"], ["ass", "echt / also (Jugendsprache)"], ["ikke sant", "genau / nicht wahr"],
    ["jo", "ja doch / doch"], ["vel", "wohl / ja"], ["da", "dann / doch (Abtönung)"], ["Herregud!", "Oh Gott!"],
    ["Fett!", "Cool!"], ["Digg!", "Lecker / super!"], ["Kjipt!", "Mist! / Blöd!"], ["Null stress.", "Kein Stress."],
    ["Skikkelig!", "Echt! / Richtig!"], ["Same.", "Geht mir auch so."], ["Det er sykt bra.", "Das ist echt gut."], ["Hva skjer?", "Was geht?"]
  ],
  sent: [
    ["Det var sykt bra, altså!", "Das war echt total gut!"],
    ["Han er liksom ikke så interessert.", "Er ist irgendwie nicht so interessiert."],
    ["Du kommer vel i morgen?", "Du kommst doch wohl morgen?"],
    ["Kjipt at du ikke kan komme!", "Schade, dass du nicht kommen kannst!"]
  ],
  gram: [
    ["Du kommer ___ på festen?", "vel", "liksom", "ass", "Erwartung: vel"],
    ["Hun er ___ syk i dag.", "jo", "da", "Herregud", "bekannt: jo = ja (doch)"],
    ["Kom ___!", "da", "jo", "vel", "Aufforderung: da"],
    ["Det var ___ bra, altså!", "sykt", "syk", "syke", "Adverb: sykt = sehr (umgangssprachlich)"]
  ]
},
{
  id: "b2-13", t: "Wissenschaft & Technik",
  intro: "<p>Wissenschaftsnachrichten nutzen Passiv und Fachwörter: <b>Det er påvist at …</b> (es wurde nachgewiesen), <b>forskere ved …</b> (Forscher an …).</p>" + TIP("<b>forskning.no</b> bringt Wissenschaftsnews auf Norwegisch, kurz und verständlich."),
  items: [
    ["forsker", "Forscher/in"], ["forskning", "Forschung"], ["studie", "Studie"], ["resultat", "Ergebnis"],
    ["påvise", "nachweisen"], ["kunstig intelligens", "künstliche Intelligenz"], ["utvikling", "Entwicklung"], ["oppdagelse", "Entdeckung"],
    ["teknologi", "Technologie"], ["data", "Daten"], ["personvern", "Datenschutz"], ["eksperiment", "Experiment"],
    ["hypotese", "Hypothese"], ["sammenheng", "Zusammenhang"], ["årsak", "Ursache"], ["virkning", "Wirkung"]
  ],
  sent: [
    ["Forskere ved Universitetet i Oslo har gjort en spennende oppdagelse.", "Forscher an der Universität Oslo haben eine spannende Entdeckung gemacht."],
    ["Studien viser en klar sammenheng mellom søvn og læring.", "Die Studie zeigt einen klaren Zusammenhang zwischen Schlaf und Lernen."],
    ["Kunstig intelligens brukes stadig mer i helsevesenet.", "Künstliche Intelligenz wird im Gesundheitswesen immer mehr eingesetzt."],
    ["Personvern er et viktig tema i debatten.", "Datenschutz ist ein wichtiges Thema in der Debatte."]
  ],
  gram: [
    ["Det er ___ at kaffe kan beskytte hjertet.", "påvist", "påvise", "påviste", "Passiv: er + Partizip"],
    ["KI ___ mer og mer i skolen.", "brukes", "bruker", "brukt", "s-Passiv"],
    ["Det er en sammenheng ___ søvn og helse.", "mellom", "av", "med", "sammenheng mellom"],
    ["Studien ble ___ i fjor.", "publisert", "publisere", "publiserer", "ble + Partizip"]
  ],
  text: {
    no: "En ny studie fra Universitetet i Bergen viser at ungdom som sover mindre enn sju timer, gjør det dårligere på skolen. Forskerne har fulgt 5000 elever i tre år. – Vi ser en tydelig sammenheng, men vi kan ikke si sikkert hva som er årsak og virkning, sier forskeren bak studien. Hun anbefaler skjermfri tid den siste timen før leggetid.",
    de: "Eine neue Studie der Universität Bergen zeigt, dass Jugendliche, die weniger als sieben Stunden schlafen, in der Schule schlechter abschneiden. Die Forscher haben 5000 Schüler drei Jahre lang begleitet. – Wir sehen einen deutlichen Zusammenhang, können aber nicht sicher sagen, was Ursache und was Wirkung ist, sagt die Forscherin hinter der Studie. Sie empfiehlt bildschirmfreie Zeit in der letzten Stunde vor dem Schlafengehen.",
    q: [
      ["Hva viser studien?", "Lite søvn gir dårligere skoleresultater", "Skjermer er bra for søvn", "Ungdom sover for mye"],
      ["Hvor mange elever ble fulgt?", "5000", "500", "50 000"],
      ["Hva anbefaler forskeren?", "Skjermfri tid før leggetid", "Mer lekser", "Senere skolestart"]
    ]
  }
},
{
  id: "b2-14", t: "Recht & Polizei",
  intro: "<p>Gerichtsnachrichten: <b>tiltalt</b> (angeklagt), <b>dømt til</b> (verurteilt zu), <b>frifunnet</b> (freigesprochen). Instanzen: <b>tingrett → lagmannsrett → Høyesterett</b>.</p>",
  items: [
    ["politiet", "die Polizei"], ["anmelde", "anzeigen"], ["anmeldelse", "Anzeige"], ["tiltalt", "angeklagt"],
    ["dømt", "verurteilt"], ["frifunnet", "freigesprochen"], ["fengsel", "Gefängnis"], ["bot", "Geldstrafe"],
    ["vitne", "Zeuge"], ["advokat", "Anwalt/Anwältin"], ["rettssak", "Gerichtsverfahren"], ["tingrett", "Amtsgericht"],
    ["Høyesterett", "Oberster Gerichtshof"], ["anke", "Berufung einlegen"], ["mistenkt", "verdächtig"], ["innbrudd", "Einbruch"]
  ],
  sent: [
    ["Jeg vil anmelde et innbrudd.", "Ich möchte einen Einbruch anzeigen."],
    ["Mannen ble dømt til to års fengsel.", "Der Mann wurde zu zwei Jahren Gefängnis verurteilt."],
    ["Forsvareren vil anke dommen.", "Der Verteidiger will gegen das Urteil Berufung einlegen."],
    ["Politiet ber vitner melde seg.", "Die Polizei bittet Zeugen, sich zu melden."]
  ],
  gram: [
    ["Han ble dømt ___ fengsel.", "til", "for", "på", "dømt til (Strafe)"],
    ["Hun ble dømt ___ tyveri.", "for", "til", "av", "dømt for (Tat)"],
    ["Saken skal ___ for lagmannsretten.", "behandles", "behandler", "behandlet", "skal + s-Passiv"],
    ["Han er ___ for innbruddet.", "mistenkt", "mistenke", "mistanke", "Partizip als Adjektiv"]
  ],
  text: {
    no: "En 34 år gammel mann er i Oslo tingrett dømt til ett år og seks måneders fengsel for en rekke innbrudd i hytter. Mannen erkjente straffskyld for de fleste forholdene. Ifølge retten har han stjålet verdier for over en halv million kroner. Forsvareren sier til NRK at de vurderer å anke dommen.",
    de: "Ein 34-jähriger Mann ist vom Amtsgericht Oslo wegen einer Reihe von Hütteneinbrüchen zu einem Jahr und sechs Monaten Gefängnis verurteilt worden. Der Mann gestand die meisten Taten. Laut Gericht hat er Wertgegenstände für über eine halbe Million Kronen gestohlen. Der Verteidiger sagt gegenüber NRK, dass sie erwägen, gegen das Urteil Berufung einzulegen.",
    q: [
      ["Hva ble mannen dømt for?", "Innbrudd i hytter", "Bilkjøring i fylla", "Svindel på nett"],
      ["Hvor lang straff fikk han?", "Ett år og seks måneder", "Seks måneder", "Fire år"],
      ["Hva vurderer forsvareren?", "Å anke dommen", "Å trekke saken", "Å anmelde politiet"]
    ]
  }
},
{
  id: "b2-15", t: "Öl, Energie & Ölfonds",
  intro: "<p>Norwegens Reichtum kommt aus Öl und Gas. Das Geld liegt im <b>oljefondet</b> (offiziell: Statens pensjonsfond utland), einem der größten Staatsfonds der Welt. Strom kommt vor allem aus <b>vannkraft</b>.</p>",
  items: [
    ["olje", "Öl"], ["gass", "Gas"], ["oljefondet", "der Ölfonds"], ["vannkraft", "Wasserkraft"],
    ["vindkraft", "Windkraft"], ["fornybar", "erneuerbar"], ["utslipp", "Emissionen"], ["eksport", "Export"],
    ["sokkel", "Kontinentalsockel"], ["plattform", "Bohrinsel"], ["investere", "investieren"], ["avkastning", "Rendite"],
    ["handlingsregelen", "Fiskalregel (Ausgabenregel)"], ["omstilling", "Umstellung / Wandel"], ["grønn", "grün"], ["kraftkrevende", "energieintensiv"]
  ],
  sent: [
    ["Oljefondet investerer i selskaper over hele verden.", "Der Ölfonds investiert weltweit in Unternehmen."],
    ["Nesten all strøm i Norge kommer fra vannkraft.", "Fast der gesamte Strom in Norwegen stammt aus Wasserkraft."],
    ["Regjeringen vil kutte utslippene fra sokkelen.", "Die Regierung will die Emissionen auf dem Kontinentalsockel senken."],
    ["Omstillingen til fornybar energi tar tid.", "Die Umstellung auf erneuerbare Energie braucht Zeit."]
  ],
  gram: [
    ["Fondet har ___ i over 8000 selskaper.", "investert", "investere", "investerer", "har + Partizip"],
    ["Strømmen kommer hovedsakelig ___ vannkraft.", "fra", "av", "med", "komme fra"],
    ["Utslippene må ___.", "reduseres", "redusere", "reduserte", "må + s-Passiv"],
    ["Norge er ___ avhengig av olje enn før.", "mindre", "minst", "lite", "Komparativ von lite"]
  ],
  text: {
    no: "Oljefondet har passert 20 000 milliarder kroner. Fondet eier i gjennomsnitt rundt 1,5 prosent av alle børsnoterte selskaper i verden. Etter handlingsregelen kan politikerne bare bruke om lag tre prosent av fondet hvert år. Kritikere mener likevel at Norge bruker for mye oljepenger, mens andre vil bruke mer på grønn omstilling.",
    de: "Der Ölfonds hat 20 000 Milliarden Kronen überschritten. Der Fonds besitzt im Durchschnitt rund 1,5 Prozent aller börsennotierten Unternehmen der Welt. Nach der Fiskalregel dürfen die Politiker jedes Jahr nur etwa drei Prozent des Fonds ausgeben. Kritiker meinen dennoch, dass Norwegen zu viel Ölgeld ausgibt, während andere mehr für den grünen Wandel ausgeben wollen.",
    q: [
      ["Hvor stort er oljefondet?", "Over 20 000 milliarder kroner", "Rundt 2 000 milliarder kroner", "200 milliarder kroner"],
      ["Hvor mye kan brukes hvert år?", "Om lag tre prosent", "Halvparten", "Ti prosent"],
      ["Hva mener noen kritikere?", "Norge bruker for mye oljepenger", "Fondet bør selges", "Oljen er tom"]
    ]
  }
},
{
  id: "b2-16", t: "Interviews & Reportagen",
  intro: "<p>In Interviews hörst du oft lange, verschachtelte Sätze und Zögern: <b>eh</b>, <b>altså</b>, <b>på en måte</b> (gewissermaßen), <b>sånn sett</b> (so gesehen).</p>" + TIP("Hör <b>NRK P2 Nyhetsmorgen</b> oder Podcasts in der <b>NRK-Radio-App</b>: echte Interviews in normalem Tempo. Hör eine Folge zweimal: einmal ohne, einmal mit Transkript."),
  items: [
    ["på en måte", "gewissermaßen"], ["sånn sett", "so gesehen"], ["for å si det sånn", "um es so zu sagen"], ["egentlig", "eigentlich"],
    ["for så vidt", "an sich / insofern"], ["jeg vil si at …", "ich würde sagen, dass …"], ["det er klart at …", "es ist klar, dass …"], ["hva tenker du om …?", "was denkst du über …?"],
    ["intervjuobjekt", "Interviewpartner"], ["reportasje", "Reportage"], ["sitat", "Zitat"], ["kilde", "Quelle"],
    ["opplevelse", "Erlebnis"], ["fortelle om", "erzählen von"]
  ],
  sent: [
    ["Sånn sett var det en god dag for oss.", "So gesehen war es ein guter Tag für uns."],
    ["Det er for så vidt riktig, men det er ikke hele historien.", "Das ist an sich richtig, aber nicht die ganze Geschichte."],
    ["Hva tenker du om den nye loven?", "Was denkst du über das neue Gesetz?"],
    ["Jeg vil si at situasjonen er alvorlig.", "Ich würde sagen, dass die Lage ernst ist."]
  ],
  gram: [
    ["Hva tenker du ___ forslaget?", "om", "på", "av", "tenke om = halten von"],
    ["Hun fortalte ___ opplevelsen sin.", "om", "av", "fra", "fortelle om"],
    ["Jeg vil si ___ det var feil.", "at", "om", "som", "si at"],
    ["Det var på ___ måte en lettelse.", "en", "et", "den", "på en måte"]
  ],
  text: {
    no: "Reporter: Du har drevet gården her i Valdres i over tretti år. Hvordan har det endret seg? – Nei, altså, det har endret seg veldig mye. Før var det mange små gårder her, nå er det bare noen få igjen. Sånn sett er det trist. Men det er klart at det er mer effektivt nå. Jeg vil si at vi har fått det bedre økonomisk, men det er på en måte mer ensomt.",
    de: "Reporter: Sie betreiben den Hof hier in Valdres seit über dreißig Jahren. Wie hat sich das verändert? – Nun ja, es hat sich sehr verändert. Früher gab es hier viele kleine Höfe, jetzt sind nur noch wenige übrig. So gesehen ist das traurig. Aber es ist klar, dass es jetzt effizienter ist. Ich würde sagen, wirtschaftlich geht es uns besser, aber es ist gewissermaßen einsamer.",
    q: [
      ["Hvor lenge har bonden drevet gården?", "I over tretti år", "I ti år", "I fem år"],
      ["Hva har skjedd med de små gårdene?", "Det er bare noen få igjen", "Det er flere enn før", "De er blitt hoteller"],
      ["Hva er negativt i dag, ifølge bonden?", "Det er mer ensomt", "Det er dårligere økonomi", "Det er mindre effektivt"]
    ]
  }
}
);
})();
