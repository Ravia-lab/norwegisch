// Ausbau B1: Nachrichten (Stil Klar Tale), Leben in Norwegen, Grammatik. gram: [Satz mit ___, richtig, falsch, falsch, Hinweis]
(function () {
const L = window.LEVELS.find(l => l.id === "B1");
const TIP = t => `<p class="tip">📺 <b>Echte Medien:</b> ${t}</p>`;
L.lessons.push(
{
  id: "b1-7", t: "Nachrichten: Innenland",
  intro: "<p>Nachrichten haben feste Wendungen: <b>ifølge</b> (laut), <b>melder</b> (meldet), <b>regjeringen</b> (die Regierung), <b>Stortinget</b> (das Parlament).</p>" + TIP("<b>Klar Tale</b> (klartale.no) bringt Nachrichten in einfachem Norwegisch, mit Audio zum Mitlesen. Lies dort jeden Tag einen Artikel."),
  items: [
    ["nyheter", "Nachrichten"], ["ifølge", "laut / zufolge"], ["melde", "melden"], ["regjeringen", "die Regierung"],
    ["Stortinget", "das norwegische Parlament"], ["statsminister", "Ministerpräsident/in"], ["kommune", "Gemeinde"], ["fylke", "Provinz / Bezirk"],
    ["innbygger", "Einwohner"], ["forslag", "Vorschlag"], ["vedta", "beschließen"], ["budsjett", "Haushalt (Budget)"],
    ["øke", "erhöhen / steigen"], ["redusere", "verringern"], ["kritikk", "Kritik"], ["undersøkelse", "Umfrage / Untersuchung"]
  ],
  sent: [
    ["Ifølge NRK skal skatten økes neste år.", "Laut NRK soll die Steuer nächstes Jahr erhöht werden."],
    ["Regjeringen har lagt fram et nytt forslag.", "Die Regierung hat einen neuen Vorschlag vorgelegt."],
    ["Stortinget vedtok budsjettet i går.", "Das Parlament hat gestern den Haushalt beschlossen."],
    ["Mange innbyggere er kritiske til planen.", "Viele Einwohner sind kritisch gegenüber dem Plan."]
  ],
  gram: [
    ["___ NRK er det mange som er misfornøyde.", "Ifølge", "Ifra", "Etter", "laut = ifølge"],
    ["Stortinget ___ forslaget i går.", "vedtok", "vedtar", "vedtatt", "vedta – vedtok – har vedtatt"],
    ["Prisene har ___ mye i år.", "økt", "øke", "økte", "har + Partizip"],
    ["Regjeringen ___ fram planen neste uke.", "legger", "ligger", "la", "legge fram = vorlegen"]
  ],
  text: {
    no: "Regjeringen vil gi mer penger til eldreomsorg. Det sier statsministeren til NRK. Neste år skal kommunene få to milliarder kroner ekstra. Pengene skal brukes til flere sykepleiere og bedre hjemmetjeneste. Opposisjonen mener at det ikke er nok. – Mange eldre venter fortsatt for lenge på hjelp, sier en politiker fra Høyre.",
    de: "Die Regierung will mehr Geld für die Altenpflege geben. Das sagt der Ministerpräsident zu NRK. Nächstes Jahr sollen die Gemeinden zwei Milliarden Kronen zusätzlich bekommen. Das Geld soll für mehr Pflegekräfte und eine bessere häusliche Pflege verwendet werden. Die Opposition meint, dass das nicht genug ist. – Viele ältere Menschen warten immer noch zu lange auf Hilfe, sagt ein Politiker der Høyre-Partei.",
    q: [
      ["Hva skal pengene brukes til?", "Eldreomsorg", "Skoler", "Veier"],
      ["Hvor mye ekstra får kommunene?", "To milliarder kroner", "To millioner kroner", "Tjue milliarder kroner"],
      ["Hva mener opposisjonen?", "At det ikke er nok", "At det er for mye", "At planen er perfekt"]
    ]
  }
},
{
  id: "b1-8", t: "Wetterbericht & Verkehr im Radio",
  intro: "<p>Im Radio klingt das Wetter so: <b>Det blir …</b> (es wird …), <b>opphold</b> (trocken), <b>byger</b> (Schauer), <b>kuling</b> (starker Wind).</p>" + TIP("Hör morgens <b>NRK P1</b> oder die App <b>NRK Radio</b>: Wetter und Verkehr kommen jede halbe Stunde und wiederholen sich, ideal zum Üben."),
  items: [
    ["værmelding", "Wetterbericht"], ["det blir", "es wird"], ["opphold", "trockenes Wetter"], ["byger", "Schauer"],
    ["skyet", "bewölkt"], ["klarvær", "klares Wetter"], ["kuling", "starker Wind / Sturm"], ["glatt", "glatt (Straße)"],
    ["minusgrader", "Minusgrade"], ["nedbør", "Niederschlag"], ["kø", "Stau"], ["stengt", "gesperrt"],
    ["ulykke", "Unfall"], ["forsinket", "verspätet"], ["innstilt", "ausgefallen"], ["omkjøring", "Umleitung"]
  ],
  sent: [
    ["I morgen blir det skyet med noen byger.", "Morgen wird es bewölkt mit einigen Schauern."],
    ["Det er glatt på veiene i hele Trøndelag.", "In ganz Trøndelag sind die Straßen glatt."],
    ["E6 er stengt på grunn av en ulykke.", "Die E6 ist wegen eines Unfalls gesperrt."],
    ["Flere avganger er innstilt på grunn av kuling.", "Mehrere Abfahrten sind wegen Sturm ausgefallen."]
  ],
  gram: [
    ["Veien er stengt på grunn ___ snø.", "av", "for", "til", "på grunn av = wegen"],
    ["I morgen ___ det kaldere.", "blir", "er blitt", "ble", "Zukunft: blir"],
    ["Toget er ___ med tjue minutter.", "forsinket", "forsinke", "forsinkelse", "Partizip als Adjektiv"],
    ["Det er ventet ___ på fjellet.", "kuling", "kulingen", "en kulingene", "unbestimmt ohne Artikel"]
  ],
  text: {
    no: "Her er værmeldingen. I Sør-Norge blir det i morgen skyet, og det kan komme noen byger på Vestlandet. I Oslo blir det opphold og rundt fem grader. I Nord-Norge er det meldt kuling og snø. Vegvesenet advarer: Det kan bli glatt på veiene, så kjør forsiktig. Ferja mellom Bodø og Lofoten er innstilt i kveld.",
    de: "Hier ist der Wetterbericht. In Südnorwegen wird es morgen bewölkt, und an der Westküste kann es einige Schauer geben. In Oslo bleibt es trocken bei etwa fünf Grad. In Nordnorwegen sind Sturm und Schnee gemeldet. Die Straßenverwaltung warnt: Es kann glatt auf den Straßen werden, also fahrt vorsichtig. Die Fähre zwischen Bodø und den Lofoten fällt heute Abend aus.",
    q: [
      ["Hvordan blir været i Oslo?", "Opphold og rundt fem grader", "Snø og kuling", "Byger hele dagen"],
      ["Hva er meldt i Nord-Norge?", "Kuling og snø", "Sol og varme", "Tåke"],
      ["Hva skjer med ferja til Lofoten?", "Den er innstilt", "Den er forsinket", "Den går som normalt"]
    ]
  }
},
{
  id: "b1-9", t: "Bewerbung & Vorstellungsgespräch",
  intro: "<p>Eine Bewerbung heißt <b>søknad</b>, der Lebenslauf <b>CV</b>. Im Gespräch (<b>jobbintervju</b>) ist man locker, aber gut vorbereitet.</p>" + TIP("Lies Stellenanzeigen auf <b>finn.no/jobb</b> oder <b>arbeidsplassen.nav.no</b>: kurze, echte Texte mit typischem Wortschatz."),
  items: [
    ["stillingsannonse", "Stellenanzeige"], ["søker", "Bewerber/in"], ["kvalifikasjoner", "Qualifikationen"], ["utdanning", "Ausbildung"],
    ["arbeidserfaring", "Berufserfahrung"], ["referanse", "Referenz"], ["jobbintervju", "Vorstellungsgespräch"], ["stilling", "Stelle"],
    ["fast stilling", "Festanstellung"], ["vikariat", "befristete Vertretungsstelle"], ["prøvetid", "Probezeit"], ["oppsigelsestid", "Kündigungsfrist"],
    ["lønnsforventning", "Gehaltsvorstellung"], ["samarbeide", "zusammenarbeiten"], ["selvstendig", "selbstständig"], ["ansette", "einstellen"]
  ],
  sent: [
    ["Jeg søker på stillingen som prosjektleder.", "Ich bewerbe mich auf die Stelle als Projektleiter."],
    ["Jeg har fem års erfaring fra bransjen.", "Ich habe fünf Jahre Erfahrung in der Branche."],
    ["Hva er dine sterke sider?", "Was sind deine Stärken?"],
    ["Jeg liker å jobbe både selvstendig og i team.", "Ich arbeite gern sowohl selbstständig als auch im Team."]
  ],
  gram: [
    ["Jeg har jobbet ___ lærer i ti år.", "som", "for", "med", "som = als"],
    ["Hun ble ___ i en fast stilling.", "ansatt", "ansette", "ansetter", "Passiv: ble + Partizip"],
    ["Jeg har erfaring ___ salg.", "med", "på", "om", "erfaring med"],
    ["Hvorfor søker du ___ denne stillingen?", "på", "om", "til", "søke på en stilling"]
  ],
  text: {
    no: "Vi søker en blid og selvstendig medarbeider til vår butikk i Tromsø. Stillingen er fast, og arbeidstiden er 80 prosent. Du må kunne snakke norsk, og det er en fordel om du har erfaring fra salg. Vi tilbyr et godt arbeidsmiljø og gode muligheter for videreutdanning. Søknadsfrist: 15. mars.",
    de: "Wir suchen eine freundliche und selbstständige Mitarbeiterin bzw. einen Mitarbeiter für unser Geschäft in Tromsø. Die Stelle ist unbefristet, die Arbeitszeit beträgt 80 Prozent. Du musst Norwegisch sprechen können, und es ist von Vorteil, wenn du Erfahrung im Verkauf hast. Wir bieten ein gutes Arbeitsklima und gute Weiterbildungsmöglichkeiten. Bewerbungsfrist: 15. März.",
    q: [
      ["Hva slags stilling er det?", "En fast stilling på 80 prosent", "Et vikariat", "En sommerjobb"],
      ["Hva er en fordel?", "Erfaring fra salg", "Førerkort", "Utdanning som lærer"],
      ["Når er søknadsfristen?", "15. mars", "15. mai", "1. mars"]
    ]
  }
},
{
  id: "b1-10", t: "Kinder, Kita & Schule",
  intro: "<p>Kita heißt <b>barnehage</b>, die Grundschule <b>barneskole</b> (1.–7. Klasse), danach <b>ungdomsskole</b> und <b>videregående</b>. Eltern treffen sich beim <b>foreldremøte</b>.</p>",
  items: [
    ["barnehage", "Kindergarten / Kita"], ["barneskole", "Grundschule"], ["ungdomsskole", "Mittelstufe (8.–10. Klasse)"], ["videregående", "Oberstufe / Gymnasium"],
    ["foreldremøte", "Elternabend"], ["lærer", "Lehrer/in"], ["elev", "Schüler/in"], ["lekser", "Hausaufgaben"],
    ["friminutt", "Pause (Schule)"], ["matpakke", "Pausenbrot"], ["SFO", "Nachmittagsbetreuung"], ["karakter", "Note"],
    ["oppdra", "erziehen"], ["hente", "abholen"], ["levere", "abgeben / bringen"], ["skolestart", "Schulbeginn"]
  ],
  sent: [
    ["Jeg leverer datteren min i barnehagen klokka åtte.", "Ich bringe meine Tochter um acht in die Kita."],
    ["Husk matpakke og regntøy!", "Denk an das Pausenbrot und die Regenkleidung!"],
    ["Det er foreldremøte på tirsdag.", "Am Dienstag ist Elternabend."],
    ["Sønnen min går i tredje klasse.", "Mein Sohn geht in die dritte Klasse."]
  ],
  gram: [
    ["Han går ___ andre klasse.", "i", "på", "til", "gå i … klasse"],
    ["Jeg må ___ barna klokka fire.", "hente", "henter", "hentet", "må + Infinitiv"],
    ["Barna går ___ skolen.", "på", "i", "til", "gå på skolen = zur Schule gehen"],
    ["Hun har ikke gjort ___ sine.", "leksene", "lekser", "lekse", "sine + bestimmte Form"]
  ]
},
{
  id: "b1-11", t: "Gesundheitssystem & NAV",
  intro: "<p><b>NAV</b> zahlt z. B. Krankengeld (<b>sykepenger</b>), Kindergeld (<b>barnetrygd</b>) und Arbeitslosengeld (<b>dagpenger</b>). Arztbesuche kosten einen Eigenanteil (<b>egenandel</b>) bis zum <b>frikort</b>.</p>",
  items: [
    ["sykepenger", "Krankengeld"], ["dagpenger", "Arbeitslosengeld"], ["barnetrygd", "Kindergeld"], ["foreldrepermisjon", "Elternzeit"],
    ["egenandel", "Eigenanteil"], ["frikort", "Befreiungskarte (Zuzahlungen)"], ["henvisning", "Überweisung (Arzt)"], ["spesialist", "Facharzt"],
    ["ventetid", "Wartezeit"], ["rettighet", "Anspruch / Recht"], ["søke om", "beantragen"], ["innvilge", "bewilligen"],
    ["avslag", "Ablehnung"], ["klage", "Beschwerde / Widerspruch"], ["fastlegeordning", "Hausarztsystem"], ["trygd", "Sozialleistung"]
  ],
  sent: [
    ["Jeg har søkt om foreldrepermisjon hos NAV.", "Ich habe bei NAV Elternzeit beantragt."],
    ["Fastlegen ga meg en henvisning til en spesialist.", "Der Hausarzt hat mir eine Überweisung zum Facharzt gegeben."],
    ["Søknaden min ble innvilget.", "Mein Antrag wurde bewilligt."],
    ["Du kan klage hvis du får avslag.", "Du kannst Widerspruch einlegen, wenn du eine Ablehnung bekommst."]
  ],
  gram: [
    ["Søknaden ble ___ etter tre uker.", "innvilget", "innvilge", "innvilger", "ble + Partizip"],
    ["Du har ___ på sykepenger.", "rett", "rettighet", "riktig", "ha rett på = Anspruch haben"],
    ["Hvis du ___ avslag, kan du klage.", "får", "fikk", "få", "hvis + Präsens"],
    ["Jeg har ventet ___ time i tre måneder.", "på", "for", "til", "vente på"]
  ],
  text: {
    no: "Mange som flytter til Norge, vet ikke hvilke rettigheter de har. NAV har derfor laget nye nettsider på flere språk. Der kan du lese om sykepenger, barnetrygd og dagpenger. Du kan også søke direkte på nett med BankID. – Vi vil at det skal være enkelt å finne riktig informasjon, sier en rådgiver i NAV.",
    de: "Viele, die nach Norwegen ziehen, wissen nicht, welche Ansprüche sie haben. NAV hat deshalb neue Webseiten in mehreren Sprachen erstellt. Dort kann man über Krankengeld, Kindergeld und Arbeitslosengeld lesen. Man kann auch direkt online mit BankID einen Antrag stellen. – Wir wollen, dass es einfach ist, die richtigen Informationen zu finden, sagt eine Beraterin bei NAV.",
    q: [
      ["Hva har NAV laget?", "Nye nettsider på flere språk", "Et nytt kontor", "En ny app for spill"],
      ["Hvordan kan man søke?", "På nett med BankID", "Bare per brev", "Bare på kontoret"],
      ["Hvorfor har NAV gjort dette?", "Det skal være enkelt å finne informasjon", "For å spare penger", "Fordi kontorene stenger"]
    ]
  }
},
{
  id: "b1-12", t: "Verben mit Partikel",
  intro: "<p>Viele Verben ändern ihre Bedeutung durch eine Partikel: <b>finne ut</b> (herausfinden), <b>gi opp</b> (aufgeben), <b>se fram til</b> (sich freuen auf).</p><p>Die Partikel ist betont: <i>Jeg ga <b>OPP</b>.</i></p>",
  items: [
    ["finne ut", "herausfinden"], ["gi opp", "aufgeben"], ["se fram til", "sich freuen auf"], ["legge merke til", "bemerken"],
    ["komme overens", "sich verstehen / auskommen"], ["slå av", "ausschalten"], ["slå på", "einschalten"], ["ta vare på", "aufpassen auf / pflegen"],
    ["gå ut", "ablaufen / ausgehen"], ["holde på med", "beschäftigt sein mit"], ["få til", "hinbekommen"], ["komme fram", "ankommen"],
    ["sette pris på", "schätzen"], ["passe på", "aufpassen"], ["gi beskjed", "Bescheid geben"], ["finne seg i", "sich gefallen lassen"]
  ],
  sent: [
    ["Jeg ser fram til ferien.", "Ich freue mich auf den Urlaub."],
    ["Har du funnet ut når toget går?", "Hast du herausgefunden, wann der Zug fährt?"],
    ["Hun ga ikke opp, og til slutt fikk hun det til.", "Sie gab nicht auf und hat es am Ende hinbekommen."],
    ["Jeg setter stor pris på hjelpen din.", "Ich schätze deine Hilfe sehr."]
  ],
  gram: [
    ["Jeg gleder meg og ser fram ___ helga.", "til", "på", "for", "se fram til"],
    ["Kan du slå ___ lyset? Det er mørkt.", "på", "av", "opp", "einschalten = slå på"],
    ["Jeg la ikke merke ___ det.", "til", "på", "av", "legge merke til"],
    ["Husk å ta vare ___ deg selv!", "på", "om", "for", "ta vare på"]
  ]
},
{
  id: "b1-13", t: "Reflexiv: seg, sin, sitt",
  intro: "<p><b>seg</b> = sich: <i>Hun gleder seg.</i></p><p><b>sin/si/sitt/sine</b> zeigt auf das Subjekt: <i>Per elsker kona <b>si</b></i> (seine eigene). <i>Per elsker kona <b>hans</b></i> (die eines anderen).</p>",
  items: [
    ["glede seg", "sich freuen"], ["føle seg", "sich fühlen"], ["vaske seg", "sich waschen"], ["skynde seg", "sich beeilen"],
    ["legge seg", "sich hinlegen / ins Bett gehen"], ["sette seg", "sich setzen"], ["kle på seg", "sich anziehen"], ["bestemme seg", "sich entscheiden"],
    ["gifte seg", "heiraten"], ["konsentrere seg", "sich konzentrieren"], ["sin / si / sitt / sine", "sein/ihr eigener"], ["hans", "sein (von jemand anderem)"],
    ["hennes", "ihr (von jemand anderem)"], ["kjede seg", "sich langweilen"]
  ],
  sent: [
    ["Barna gleder seg til jul.", "Die Kinder freuen sich auf Weihnachten."],
    ["Jeg føler meg ikke helt bra i dag.", "Ich fühle mich heute nicht ganz gut."],
    ["Ola besøker moren sin hver søndag.", "Ola besucht jeden Sonntag seine (eigene) Mutter."],
    ["Vi må skynde oss, ellers kommer vi for sent.", "Wir müssen uns beeilen, sonst kommen wir zu spät."]
  ],
  gram: [
    ["Hun gleder ___ til ferien.", "seg", "henne", "sin", "3. Person: seg"],
    ["Vi må skynde ___.", "oss", "seg", "vår", "wir → oss"],
    ["Kari ringer mannen ___ hver dag.", "sin", "hennes", "seg", "eigener Mann → sin"],
    ["Per låner bilen ___ (Karis bil).", "hennes", "sin", "sitt", "fremder Besitz → hennes"]
  ]
},
{
  id: "b1-14", t: "Smalltalk & Höflichkeit",
  intro: "<p>Typisch norwegisch: <b>Takk for sist!</b> (Danke fürs letzte Mal), <b>Takk for maten</b> nach dem Essen und viel Gespräch übers Wetter. Man spricht direkt, aber freundlich.</p>",
  items: [
    ["Takk for sist!", "Danke fürs letzte Mal!"], ["Takk for maten!", "Danke fürs Essen!"], ["Vel bekomme!", "Wohl bekomm's! (Antwort)"], ["Lenge siden!", "Lange nicht gesehen!"],
    ["Hvordan går det med deg?", "Wie geht es dir?"], ["Bare bra, takk.", "Gut, danke."], ["Ha det bra!", "Mach's gut!"], ["Ha en fin helg!", "Schönes Wochenende!"],
    ["Unnskyld at jeg forstyrrer.", "Entschuldige die Störung."], ["Det gjør ingenting.", "Das macht nichts."], ["Ingen årsak!", "Keine Ursache!"], ["Velkommen skal du være!", "Herzlich willkommen!"],
    ["Hils så mye!", "Viele Grüße (an …)!"], ["Kos deg!", "Viel Spaß! / Genieß es!"]
  ],
  sent: [
    ["Takk for sist, det var en veldig hyggelig kveld!", "Danke fürs letzte Mal, es war ein sehr netter Abend!"],
    ["Hils så mye til familien din!", "Viele Grüße an deine Familie!"],
    ["For et vær vi har i dag, ikke sant?", "Was für ein Wetter heute, nicht wahr?"],
    ["Ha en fin helg, og kos deg på hytta!", "Schönes Wochenende und viel Spaß in der Hütte!"]
  ],
  gram: [
    ["Takk ___ maten!", "for", "til", "på", "takke for"],
    ["Hils ___ moren din!", "til", "på", "for", "hilse til noen"],
    ["Det var hyggelig å ___ deg.", "treffe", "treffer", "truffet", "å + Infinitiv"],
    ["Kos ___ på ferie!", "deg", "seg", "du", "kose seg: du → deg"]
  ]
},
{
  id: "b1-15", t: "Preise, Wirtschaft & Alltag",
  intro: "<p>In den Nachrichten oft: <b>prisene stiger</b> (die Preise steigen), <b>renten</b> (der Zinssatz), <b>strømprisen</b> (der Strompreis).</p>" + TIP("Schau <b>NRK Dagsrevyen</b> (19 Uhr) in der NRK-TV-App mit <b>norwegischen Untertiteln</b>. Erst mitlesen, später ohne."),
  items: [
    ["prisene stiger", "die Preise steigen"], ["renten", "der Zinssatz"], ["strømpris", "Strompreis"], ["matpris", "Lebensmittelpreis"],
    ["inflasjon", "Inflation"], ["arbeidsledighet", "Arbeitslosigkeit"], ["økonomi", "Wirtschaft"], ["husholdning", "Haushalt (Familie)"],
    ["dyrtid", "Teuerungszeit"], ["spare penger", "Geld sparen"], ["Norges Bank", "Norwegische Zentralbank"], ["prosent", "Prozent"],
    ["stige", "steigen"], ["synke", "sinken"], ["krone", "Krone"], ["kjøpekraft", "Kaufkraft"]
  ],
  sent: [
    ["Matprisene har steget med fem prosent i år.", "Die Lebensmittelpreise sind dieses Jahr um fünf Prozent gestiegen."],
    ["Norges Bank holder renten uendret.", "Die Norges Bank lässt den Zins unverändert."],
    ["Mange familier må spare på strømmen.", "Viele Familien müssen beim Strom sparen."],
    ["Arbeidsledigheten er fortsatt lav.", "Die Arbeitslosigkeit ist weiterhin niedrig."]
  ],
  gram: [
    ["Prisene har steget ___ tre prosent.", "med", "på", "av", "steigen um = stige med"],
    ["Renten ___ i fjor.", "steg", "stiger", "steget", "stige – steg – har steget"],
    ["Strømprisen har ___ i det siste.", "sunket", "sank", "synke", "synke – sank – har sunket"],
    ["Det blir ___ å kjøpe mat.", "dyrere", "dyrest", "mer dyr", "dyr → dyrere"]
  ],
  text: {
    no: "Matprisene fortsetter å stige. Ifølge Statistisk sentralbyrå har maten blitt nesten seks prosent dyrere det siste året. Særlig kaffe, ost og grønnsaker koster mer. Mange husholdninger merker det i lommeboka. – Vi handler mer på tilbud og lager mer mat selv, sier en småbarnsmor i Stavanger.",
    de: "Die Lebensmittelpreise steigen weiter. Laut dem Statistischen Zentralamt sind Lebensmittel im letzten Jahr fast sechs Prozent teurer geworden. Besonders Kaffee, Käse und Gemüse kosten mehr. Viele Haushalte merken es im Geldbeutel. – Wir kaufen mehr Angebote und kochen mehr selbst, sagt eine Mutter kleiner Kinder in Stavanger.",
    q: [
      ["Hvor mye dyrere har maten blitt?", "Nesten seks prosent", "Nesten tre prosent", "Over ti prosent"],
      ["Hva koster særlig mer?", "Kaffe, ost og grønnsaker", "Brød og melk", "Fisk og kjøtt"],
      ["Hva gjør familien i Stavanger?", "Handler mer på tilbud", "Spiser ute oftere", "Flytter til Sverige"]
    ]
  }
},
{
  id: "b1-16", t: "Natur & Jedermannsrecht",
  intro: "<p>Das <b>allemannsretten</b> erlaubt allen, frei in der Natur zu wandern und zu zelten, mit Abstand zu Häusern (150 m). Feuer im Wald ist vom 15. April bis 15. September meist verboten.</p>",
  items: [
    ["allemannsretten", "Jedermannsrecht"], ["telte", "zelten"], ["bål", "Lagerfeuer"], ["forbudt", "verboten"],
    ["tillatt", "erlaubt"], ["innmark", "eingezäuntes Land / Felder"], ["utmark", "freie Natur"], ["sti", "Pfad"],
    ["fjelltopp", "Berggipfel"], ["villmark", "Wildnis"], ["DNT-hytte", "Hütte des Wandervereins"], ["varde", "Steinmännchen (Wegzeichen)"],
    ["hensyn", "Rücksicht"], ["søppel", "Müll"], ["plukke bær", "Beeren pflücken"], ["nordlys", "Nordlicht"]
  ],
  sent: [
    ["Du kan telte i utmark i inntil to døgn.", "Du darfst bis zu zwei Tage in freier Natur zelten."],
    ["Det er forbudt å tenne bål i skogen om sommeren.", "Es ist verboten, im Sommer im Wald Feuer zu machen."],
    ["Følg stien og se etter de røde merkene.", "Folge dem Pfad und achte auf die roten Markierungen."],
    ["Ta med deg søppelet ditt hjem.", "Nimm deinen Müll mit nach Hause."]
  ],
  gram: [
    ["Det er ___ å telte her.", "tillatt", "tillate", "tillater", "det er + Partizip"],
    ["Du må ta hensyn ___ andre.", "til", "på", "for", "ta hensyn til"],
    ["Vi gikk ___ toppen av fjellet.", "til", "på", "i", "gå til toppen"],
    ["Det er ikke lov ___ tenne bål.", "å", "og", "at", "lov å + Infinitiv"]
  ],
  text: {
    no: "Allemannsretten gir alle rett til å gå på tur i naturen, også på privat grunn i utmark. Du kan telte i inntil to døgn på samme sted, men du må holde minst 150 meter avstand til hus og hytter. Du kan plukke bær og sopp. Husk å ta hensyn til dyr og andre mennesker, og ta med deg søppelet ditt.",
    de: "Das Jedermannsrecht gibt allen das Recht, in der Natur zu wandern, auch auf Privatgrund in freier Natur. Du darfst bis zu zwei Tage am selben Ort zelten, musst aber mindestens 150 Meter Abstand zu Häusern und Hütten halten. Du darfst Beeren und Pilze pflücken. Denk daran, Rücksicht auf Tiere und andere Menschen zu nehmen, und nimm deinen Müll mit.",
    q: [
      ["Hvor lenge kan du telte på samme sted?", "I inntil to døgn", "I en uke", "Bare én natt"],
      ["Hvor stor avstand må du holde til hus?", "Minst 150 meter", "Minst 50 meter", "Minst én kilometer"],
      ["Hva kan du plukke?", "Bær og sopp", "Blomster i hager", "Ingenting"]
    ]
  }
},
{
  id: "b1-17", t: "Indirekte Rede & Meinung",
  intro: "<p>In Nachrichten oft: <b>Han sier at …</b>, <b>Hun mener at …</b>. Im Nebensatz: <b>ikke</b> vor dem Verb und keine Inversion.</p><p>Meinung äußern: <b>Etter min mening …</b>, <b>Jeg synes at …</b>, <b>Jeg er enig / uenig</b>.</p>",
  items: [
    ["Han sier at …", "Er sagt, dass …"], ["Hun mener at …", "Sie meint, dass …"], ["Etter min mening", "Meiner Meinung nach"], ["Jeg synes at …", "Ich finde, dass …"],
    ["Jeg tror at …", "Ich glaube, dass …"], ["enig", "einverstanden / einer Meinung"], ["uenig", "anderer Meinung"], ["påstå", "behaupten"],
    ["understreke", "betonen"], ["fortelle", "erzählen"], ["spørre om", "fragen, ob"], ["svare", "antworten"],
    ["på den ene siden", "einerseits"], ["på den andre siden", "andererseits"]
  ],
  sent: [
    ["Ministeren sier at hun ikke vil gå av.", "Die Ministerin sagt, dass sie nicht zurücktreten will."],
    ["Jeg er ikke helt enig med deg.", "Ich bin nicht ganz deiner Meinung."],
    ["Han spurte om jeg kunne hjelpe ham.", "Er fragte, ob ich ihm helfen könnte."],
    ["På den ene siden er det dyrt, på den andre siden er det praktisk.", "Einerseits ist es teuer, andererseits ist es praktisch."]
  ],
  gram: [
    ["Hun sier at hun ___ i morgen.", "ikke kommer", "kommer ikke", "kom ikke", "Nebensatz: ikke vor dem Verb"],
    ["Jeg er enig ___ deg.", "med", "til", "på", "enig med"],
    ["Han spurte ___ jeg var sulten.", "om", "at", "hvis", "fragen, ob → om"],
    ["Etter min ___ er det feil.", "mening", "mene", "meninger", "etter min mening"]
  ]
},
{
  id: "b1-18", t: "Medien & Freizeit auf Norwegisch",
  intro: "<p>Jetzt bist du bereit für echtes Norwegisch! Plan für jeden Tag: <b>10 Minuten hören, 10 Minuten lesen.</b></p>" + TIP("<b>NRK TV</b> (Serien wie „Skam“, „Exit“ oder Dokus) mit norwegischen Untertiteln · <b>NRK Radio</b> (App) mit Nachrichten und Podcasts · <b>Klar Tale</b> für einfache Nachrichten · Kinderprogramme auf <b>NRK Super</b> sind ideal, weil langsam und deutlich."),
  items: [
    ["serie", "Serie"], ["episode", "Folge"], ["undertekster", "Untertitel"], ["programleder", "Moderator/in"],
    ["sending", "Sendung"], ["direkte", "live"], ["podkast", "Podcast"], ["avis", "Zeitung"],
    ["overskrift", "Überschrift"], ["artikkel", "Artikel"], ["kommentar", "Kommentar"], ["seer", "Zuschauer"],
    ["lytter", "Zuhörer"], ["strømme", "streamen"]
  ],
  sent: [
    ["Jeg ser på norske serier med norske undertekster.", "Ich schaue norwegische Serien mit norwegischen Untertiteln."],
    ["Sendingen går direkte fra Stortinget.", "Die Sendung kommt live aus dem Parlament."],
    ["Jeg hører på en podkast på vei til jobben.", "Ich höre auf dem Weg zur Arbeit einen Podcast."],
    ["Har du lest artikkelen i Aftenposten i dag?", "Hast du heute den Artikel in der Aftenposten gelesen?"]
  ],
  gram: [
    ["Jeg hører ___ radio hver morgen.", "på", "til", "med", "høre på"],
    ["Vi så ___ en film i går.", "på", "til", "om", "se på"],
    ["Artikkelen handler ___ klima.", "om", "på", "av", "handle om"],
    ["Serien er ___ av NRK.", "laget", "lage", "lager", "Partizip: laget"]
  ],
  text: {
    no: "God morgen, du hører på Nyhetsmorgen. Klokka er sju. Tusenvis av elever har i dag sin første skoledag etter sommerferien. I Bergen har det regnet hele natta, og flere veier er stengt. Og så sporten: Norge vant i går 2–1 over Sverige i fotball. Vi kommer tilbake med mer etter musikken.",
    de: "Guten Morgen, ihr hört Nyhetsmorgen. Es ist sieben Uhr. Tausende Schülerinnen und Schüler haben heute ihren ersten Schultag nach den Sommerferien. In Bergen hat es die ganze Nacht geregnet, und mehrere Straßen sind gesperrt. Und dann der Sport: Norwegen hat gestern 2:1 gegen Schweden im Fußball gewonnen. Wir sind nach der Musik mit mehr zurück.",
    q: [
      ["Hva skjer med elevene i dag?", "De har første skoledag", "De har sommerferie", "De har eksamen"],
      ["Hvorfor er veier stengt i Bergen?", "Det har regnet hele natta", "Det har snødd", "Det har vært en ulykke"],
      ["Hvordan gikk fotballkampen?", "Norge vant 2–1", "Sverige vant 2–1", "Det ble uavgjort"]
    ]
  }
}
);
})();
