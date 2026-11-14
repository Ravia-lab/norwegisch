// Ausbau C1: Kommentare, Nominalstil, Ironie, gesprochene Sprache, Fachsprache. gram: [Satz mit ___, richtig, falsch, falsch, Hinweis]
(function () {
const L = window.LEVELS.find(l => l.id === "C1");
const TIP = t => `<p class="tip">📺 <b>Echte Medien:</b> ${t}</p>`;
L.lessons.push(
{
  id: "c1-6", t: "Kommentar & Leitartikel",
  intro: "<p>Meinungstexte heißen <b>kommentar</b>, <b>leder</b> (Leitartikel) oder <b>kronikk</b> (Gastbeitrag). Typisch sind abwägende Formulierungen: <b>riktignok … men</b> (zwar … aber), <b>snarere</b> (eher).</p>" + TIP("Lies jede Woche eine <b>kronikk</b> in Aftenposten oder auf <b>nrk.no/ytring</b>. Notiere drei Ausdrücke, die du selbst verwenden willst."),
  items: [
    ["kronikk", "Gastbeitrag"], ["leder", "Leitartikel"], ["riktignok", "zwar"], ["snarere", "eher / vielmehr"],
    ["så å si", "sozusagen"], ["langt på vei", "weitgehend"], ["neppe", "kaum"], ["ytterst", "äußerst"],
    ["betenkelig", "bedenklich"], ["påstand", "Behauptung"], ["konsekvens", "Konsequenz"], ["ansvar", "Verantwortung"],
    ["vesentlig", "wesentlich"], ["ivareta", "wahren / berücksichtigen"], ["tilsynelatende", "anscheinend"], ["unektelig", "unbestreitbar"]
  ],
  sent: [
    ["Forslaget er riktignok godt ment, men det er neppe gjennomførbart.", "Der Vorschlag ist zwar gut gemeint, aber kaum umsetzbar."],
    ["Problemet er snarere mangel på vilje enn mangel på penger.", "Das Problem ist eher fehlender Wille als fehlendes Geld."],
    ["Det er ytterst betenkelig at ingen tar ansvar.", "Es ist äußerst bedenklich, dass niemand Verantwortung übernimmt."],
    ["Regjeringen har langt på vei innfridd løftene sine.", "Die Regierung hat ihre Versprechen weitgehend eingelöst."]
  ],
  gram: [
    ["Planen er ___ dyr, men den er nødvendig.", "riktignok", "snarere", "neppe", "zwar … aber = riktignok … men"],
    ["Det er ___ en tilfeldighet, men et mønster.", "neppe", "riktignok", "snarere", "kaum = neppe"],
    ["Det handler ___ om prioriteringer enn om penger.", "snarere", "neppe", "langt", "eher … als = snarere … enn"],
    ["Hvem skal ta ansvar ___ dette?", "for", "om", "på", "ansvar for"]
  ],
  text: {
    no: "Det er unektelig positivt at regjeringen vil styrke psykisk helsevern. Forslaget er riktignok et skritt i riktig retning, men det løser neppe de grunnleggende problemene. Ventetidene er fortsatt lange, og mange unge faller mellom to stoler. Det som trengs, er snarere en langsiktig plan enn enda en engangsbevilgning. Ellers risikerer vi at tiltakene forblir symbolpolitikk.",
    de: "Es ist unbestreitbar positiv, dass die Regierung die psychiatrische Versorgung stärken will. Der Vorschlag ist zwar ein Schritt in die richtige Richtung, aber er löst kaum die grundlegenden Probleme. Die Wartezeiten sind weiterhin lang, und viele junge Menschen fallen durchs Raster. Was es braucht, ist eher ein langfristiger Plan als noch eine Einmalbewilligung. Sonst riskieren wir, dass die Maßnahmen Symbolpolitik bleiben.",
    q: [
      ["Hva er skribentens holdning til forslaget?", "Positiv, men kritisk", "Helt negativ", "Helt begeistret"],
      ["Hva betyr «faller mellom to stoler»?", "Får ikke hjelp fra noen", "Får for mye hjelp", "Velger feil behandling"],
      ["Hva etterlyser skribenten?", "En langsiktig plan", "Flere engangsbevilgninger", "Færre psykologer"]
    ]
  }
},
{
  id: "c1-7", t: "Nominalstil & Behördensprache",
  intro: "<p>Formelle Texte verwandeln Verben in Nomen: <b>gjennomføre → gjennomføring</b>, <b>vurdere → vurdering</b>. Auf C1 solltest du beides verstehen und bewusst einfacher schreiben können (<b>klarspråk</b>).</p>",
  items: [
    ["gjennomføring", "Durchführung"], ["vurdering", "Beurteilung"], ["iverksettelse", "Umsetzung / Inkraftsetzung"], ["ivaretakelse", "Wahrung"],
    ["saksbehandling", "Sachbearbeitung"], ["vedtak", "Bescheid / Beschluss"], ["i henhold til", "gemäß"], ["med hensyn til", "hinsichtlich"],
    ["herunder", "einschließlich / darunter"], ["jf.", "vgl."], ["ifm. (i forbindelse med)", "im Zusammenhang mit"], ["høringsfrist", "Anhörungsfrist"],
    ["forskrift", "Verordnung"], ["klarspråk", "klare, einfache Amtssprache"], ["innsigelse", "Einwand"], ["tilsvarende", "entsprechend"]
  ],
  sent: [
    ["I henhold til forskriften må søknaden sendes innen fristen.", "Gemäß der Verordnung muss der Antrag fristgerecht eingereicht werden."],
    ["Vedtaket kan påklages innen tre uker.", "Gegen den Bescheid kann innerhalb von drei Wochen Widerspruch eingelegt werden."],
    ["Gjennomføringen av prosjektet er utsatt.", "Die Durchführung des Projekts ist verschoben."],
    ["Med hensyn til budsjettet må vi gjøre en ny vurdering.", "Hinsichtlich des Budgets müssen wir eine neue Beurteilung vornehmen."]
  ],
  gram: [
    ["Etter en grundig ___ har vi avslått søknaden.", "vurdering", "vurdere", "vurdert", "Nominalstil: -ing"],
    ["Vedtaket kan ___ til statsforvalteren.", "påklages", "påklager", "påklaget", "kan + s-Passiv"],
    ["___ henhold til loven har du rett til svar.", "I", "På", "Med", "i henhold til"],
    ["Prosjektets ___ starter i mai.", "iverksettelse", "iverksette", "iverksatt", "Nomen nach Genitiv"]
  ],
  text: {
    no: "Vi viser til Deres søknad av 3. mars. Etter en helhetlig vurdering har Utlendingsdirektoratet kommet fram til at vilkårene for innvilgelse ikke er oppfylt, jf. utlendingsloven. Vedtaket kan påklages innen tre uker fra det er mottatt. En eventuell klage skal sendes til den instansen som har fattet vedtaket.",
    de: "Wir beziehen uns auf Ihren Antrag vom 3. März. Nach einer Gesamtbeurteilung ist die Ausländerbehörde zu dem Ergebnis gekommen, dass die Voraussetzungen für eine Bewilligung nicht erfüllt sind, vgl. Ausländergesetz. Gegen den Bescheid kann innerhalb von drei Wochen nach Erhalt Widerspruch eingelegt werden. Ein etwaiger Widerspruch ist an die Stelle zu richten, die den Bescheid erlassen hat.",
    q: [
      ["Hva er utfallet av søknaden?", "Den er avslått", "Den er innvilget", "Den er ikke behandlet ennå"],
      ["Hvor lang er klagefristen?", "Tre uker", "Tre måneder", "Tre dager"],
      ["Hvor skal klagen sendes?", "Til instansen som fattet vedtaket", "Til Stortinget", "Til politiet"]
    ]
  }
},
{
  id: "c1-8", t: "Redewendungen für Fortgeschrittene",
  intro: "<p>Muttersprachler benutzen ständig Bilder. Viele lassen sich nicht wörtlich übersetzen: <b>Det er ingen sak</b> (Das ist kein Problem), <b>å ta det med en klype salt</b>.</p>",
  items: [
    ["ta det med en klype salt", "nicht allzu ernst nehmen"], ["ikke se skogen for bare trær", "den Wald vor lauter Bäumen nicht sehen"], ["snakke rett fra levra", "frei von der Leber weg reden"], ["ha en finger med i spillet", "die Finger im Spiel haben"],
    ["skjære alle over én kam", "alle über einen Kamm scheren"], ["gå som hånd i hanske", "wie die Faust aufs Auge passen (positiv)"], ["være på bærtur", "auf dem Holzweg sein"], ["kaste perler for svin", "Perlen vor die Säue werfen"],
    ["det koster skjorta", "das kostet ein Vermögen"], ["ro i land", "etwas über die Bühne bringen"], ["slå to fluer i en smekk", "zwei Fliegen mit einer Klappe schlagen"], ["ha is i magen", "einen kühlen Kopf bewahren"],
    ["være midt i blinken", "genau ins Schwarze treffen"], ["ikke lage krøll", "keinen Ärger machen"]
  ],
  sent: [
    ["Han har is i magen, selv når det er kaos.", "Er bewahrt einen kühlen Kopf, auch wenn Chaos herrscht."],
    ["Nå er du helt på bærtur!", "Jetzt bist du völlig auf dem Holzweg!"],
    ["Vi klarte å ro prosjektet i land.", "Wir haben es geschafft, das Projekt über die Bühne zu bringen."],
    ["Den gaven var midt i blinken!", "Das Geschenk war genau richtig!"]
  ],
  gram: [
    ["Hun har ___ i magen.", "is", "snø", "salt", "ha is i magen"],
    ["Ikke skjær alle over én ___!", "kam", "kniv", "kant", "over én kam"],
    ["Vi slo to fluer i en ___.", "smekk", "slag", "klapp", "i en smekk"],
    ["Ta det med en klype ___.", "salt", "sukker", "pepper", "en klype salt"]
  ]
},
{
  id: "c1-9", t: "Gesprochenes Norwegisch im Tempo",
  intro: "<p>Im echten Sprechen verschmelzen Wörter: <b>jeg</b> → „jæ“/„je“, <b>det er</b> → „de’e“, <b>ikke</b> → „ikke/ikkje/itj“, <b>har ikke</b> → „ha’kke“, <b>vet ikke</b> → „vettu“ (weißt du).</p><p>Das zu erkennen ist der Schlüssel zu Radio, Serien und Gesprächen.</p>" + TIP("Schau eine Folge einer NRK-Serie zuerst mit, dann ohne Untertitel. Achte nur auf die Verschleifungen."),
  items: [
    ["Vet du hva?", "Weißt du was? (gesprochen: „vettu hva“)"], ["Det er ikke sant.", "Das stimmt nicht. („de’e’kke sant“)"], ["Jeg har ikke tid.", "Ich habe keine Zeit. („jæ ha’kke tid“)"], ["Skal vi se …", "Mal sehen … („ska’ru se“)"],
    ["Hva sa du?", "Was hast du gesagt? („ka sa du“ in Bergen)"], ["Jeg vet ikke.", "Ich weiß nicht. („veit’ke“)"], ["Hva er det?", "Was ist das? („hæ’de“ / „ka e’de“)"], ["Hæ?", "Hä? / Wie bitte?"],
    ["Ja, ja.", "Na ja. / Schon gut."], ["Nei, men …", "Ach, aber … (Überraschung)"], ["Sånn er det.", "So ist es eben."], ["Ikke noe problem.", "Kein Problem. („ikke no’ problem“)"],
    ["Det går fint.", "Das geht schon."], ["Har du sett?", "Hast du gesehen? („har’u sett“)"]
  ],
  sent: [
    ["Vet du hva? Jeg har ikke tid i dag.", "Weißt du was? Ich habe heute keine Zeit."],
    ["Det er ikke sant, sier du det?", "Echt jetzt? Sagst du das?"],
    ["Nei, men hei, lenge siden!", "Ach, hallo, lange nicht gesehen!"],
    ["Sånn er det bare.", "So ist es halt."]
  ],
  gram: [
    ["„Ha’kke“ bedeutet: ___", "har ikke", "hva ikke", "ha det", "Verschleifung"],
    ["„Vettu“ bedeutet: ___", "vet du", "vil du", "ville du", "Verschleifung"],
    ["„Ka“ (Bergen, Nordnorwegen) bedeutet: ___", "hva", "hvem", "hvor", "Dialekt: ka = hva"],
    ["„De’e“ bedeutet: ___", "det er", "de er ikke", "det var", "Verschleifung"]
  ],
  text: {
    no: "– Hei! Lenge siden! Hva skjer? – Nei, ikke så mye, altså. Har jobba mye i det siste. – Ja, sånn er det. Skal vi ta en kaffe snart? – Gjerne! Men jeg har ikke tid denne uka, vet du. Neste uke kanskje? – Det går fint. Jeg sender deg en melding.",
    de: "– Hi! Lange nicht gesehen! Was geht? – Ach, nicht so viel. Hab in letzter Zeit viel gearbeitet. – Ja, so ist das. Sollen wir bald mal einen Kaffee trinken? – Gerne! Aber ich hab diese Woche keine Zeit, weißt du. Vielleicht nächste Woche? – Passt. Ich schick dir eine Nachricht.",
    q: [
      ["Hvorfor har personen ikke gjort så mye?", "Har jobbet mye", "Har vært syk", "Har vært på ferie"],
      ["Hva foreslår de å gjøre?", "Ta en kaffe", "Gå på kino", "Spise middag"],
      ["Når passer det?", "Kanskje neste uke", "I dag", "Denne uka"]
    ]
  }
},
{
  id: "c1-10", t: "Ironie, Humor & Untertreibung",
  intro: "<p>Norweger untertreiben gern: <b>Det var ikke så verst</b> (Das war gar nicht schlecht = richtig gut). Ironie erkennt man am Tonfall: <b>Flott, du!</b> kann „Toll gemacht“ oder „Na super“ heißen.</p>" + TIP("Satire wie <b>Nytt på nytt</b> (NRK1, freitags) ist die Königsdisziplin: Wenn du da mitlachst, bist du bei C1."),
  items: [
    ["ikke så verst", "gar nicht schlecht (= gut)"], ["ikke akkurat", "nicht gerade"], ["så morsomt, da", "wie lustig (ironisch)"], ["Typisk!", "Typisch!"],
    ["Det sier seg selv.", "Das versteht sich von selbst."], ["Det var da voldsomt!", "Na, das ist ja heftig!"], ["Gratulerer, du!", "Gratuliere! (oft ironisch)"], ["joda", "na ja, schon"],
    ["kanskje litt", "vielleicht ein bisschen (= sehr)"], ["Det kunne vært verre.", "Hätte schlimmer sein können."], ["galgenhumor", "Galgenhumor"], ["selvironi", "Selbstironie"],
    ["janteloven", "Jantegesetz (Bescheidenheitsnorm)"], ["underdrivelse", "Untertreibung"]
  ],
  sent: [
    ["Maten var ikke så verst, altså!", "Das Essen war echt richtig gut!"],
    ["Han er ikke akkurat kjent for å være punktlig.", "Er ist nicht gerade für Pünktlichkeit bekannt."],
    ["Regn i juli igjen? Typisk!", "Schon wieder Regen im Juli? Typisch!"],
    ["Det var kanskje litt kaldt i dag, minus tjue.", "Es war heute vielleicht ein bisschen kalt, minus zwanzig."]
  ],
  gram: [
    ["„Ikke så verst“ bedeutet meist: ___", "ziemlich gut", "ziemlich schlecht", "mittelmäßig", "Untertreibung"],
    ["Han er ikke ___ kjent for å være stille.", "akkurat", "så verst", "typisk", "nicht gerade = ikke akkurat"],
    ["Det sier ___ selv.", "seg", "det", "sin", "det sier seg selv"],
    ["Det ___ vært verre.", "kunne", "kan", "kunnet", "kunne + Partizip (Irrealis)"]
  ]
},
{
  id: "c1-11", t: "Berufssprache: Protokoll & Bericht",
  intro: "<p>Im Berufsleben schreibt man <b>referat</b> (Protokoll), <b>rapport</b> und <b>e-post</b>. Typisch: <b>Til orientering</b> (zur Kenntnis), <b>Vedlagt følger …</b> (Anbei …).</p>",
  items: [
    ["referat", "Protokoll"], ["rapport", "Bericht"], ["til orientering", "zur Kenntnis"], ["vedlagt følger", "anbei finden Sie"],
    ["saksliste", "Tagesordnung"], ["eventuelt", "Verschiedenes (TOP)"], ["frist", "Frist"], ["oppfølging", "Nachverfolgung"],
    ["ansvarlig", "verantwortlich"], ["konklusjon", "Schlussfolgerung"], ["anbefaling", "Empfehlung"], ["sammendrag", "Zusammenfassung"],
    ["Med vennlig hilsen", "Mit freundlichen Grüßen"], ["Ta gjerne kontakt.", "Melden Sie sich gerne."], ["i forkant av", "im Vorfeld von"], ["i etterkant", "im Nachhinein"]
  ],
  sent: [
    ["Vedlagt følger referatet fra møtet.", "Anbei finden Sie das Protokoll der Besprechung."],
    ["Saken ble utsatt til neste møte.", "Die Sache wurde auf die nächste Sitzung vertagt."],
    ["Ta gjerne kontakt hvis noe er uklart.", "Melden Sie sich gerne, falls etwas unklar ist."],
    ["Rapporten konkluderer med at tiltaket har hatt god effekt.", "Der Bericht kommt zu dem Schluss, dass die Maßnahme gut gewirkt hat."]
  ],
  gram: [
    ["Rapporten konkluderer ___ at prosjektet bør fortsette.", "med", "om", "på", "konkludere med"],
    ["Saken ble ___ til neste uke.", "utsatt", "utsette", "utsetter", "ble + Partizip"],
    ["Hvem er ansvarlig ___ oppfølgingen?", "for", "til", "med", "ansvarlig for"],
    ["Vi vil ta kontakt ___ forkant av møtet.", "i", "på", "før", "i forkant av"]
  ],
  text: {
    no: "Referat fra avdelingsmøte 12. februar. Til stede: seks av sju ansatte. Sak 1: Ny turnusordning. Det ble besluttet å prøve ut den nye ordningen i tre måneder. Ansvarlig: Kari. Sak 2: Budsjett. Saken ble utsatt til neste møte, ettersom tallene ikke var klare. Eventuelt: Sommeravslutningen holdes 20. juni.",
    de: "Protokoll der Abteilungssitzung vom 12. Februar. Anwesend: sechs von sieben Mitarbeitenden. TOP 1: Neuer Schichtplan. Es wurde beschlossen, die neue Regelung drei Monate lang zu erproben. Verantwortlich: Kari. TOP 2: Budget. Der Punkt wurde auf die nächste Sitzung vertagt, da die Zahlen nicht fertig waren. Verschiedenes: Die Sommerfeier findet am 20. Juni statt.",
    q: [
      ["Hva ble besluttet om turnusordningen?", "Å prøve den i tre måneder", "Å avvise den", "Å utsette saken"],
      ["Hvorfor ble budsjettsaken utsatt?", "Tallene var ikke klare", "Kari var syk", "Det var for lite tid"],
      ["Når er sommeravslutningen?", "20. juni", "12. februar", "1. juli"]
    ]
  }
},
{
  id: "c1-12", t: "Samen & Minderheiten",
  intro: "<p>Die <b>samer</b> sind Norwegens indigenes Volk mit eigenem Parlament, dem <b>Sametinget</b> in Karasjok. Nationale Minderheiten sind u. a. <b>kvener</b>, <b>skogfinner</b>, <b>romanifolk/tatere</b>, <b>rom</b> und <b>jøder</b>.</p>" + TIP("NRK hat ein eigenes Angebot, <b>NRK Sápmi</b>, mit Nachrichten auf Norwegisch und Samisch."),
  items: [
    ["samer", "Samen"], ["samisk", "samisch"], ["Sametinget", "das samische Parlament"], ["urfolk", "indigenes Volk"],
    ["reindrift", "Rentierhaltung"], ["fornorskning", "Norwegisierung"], ["sannhets- og forsoningskommisjon", "Wahrheits- und Versöhnungskommission"], ["minoritet", "Minderheit"],
    ["rettigheter", "Rechte"], ["diskriminering", "Diskriminierung"], ["identitet", "Identität"], ["morsmål", "Muttersprache"],
    ["arealkonflikt", "Flächenkonflikt"], ["vindkraftverk", "Windkraftanlage"], ["kultur", "Kultur"], ["kvener", "Kvenen (Minderheit)"]
  ],
  sent: [
    ["Sametinget ble opprettet i 1989.", "Das samische Parlament wurde 1989 gegründet."],
    ["Fornorskningspolitikken førte til at mange mistet språket sitt.", "Die Norwegisierungspolitik führte dazu, dass viele ihre Sprache verloren."],
    ["Reindriftsutøvere protesterer mot vindkraftverket.", "Rentierhalter protestieren gegen den Windpark."],
    ["Samisk er offisielt språk i flere kommuner.", "Samisch ist in mehreren Gemeinden Amtssprache."]
  ],
  gram: [
    ["Mange samer ble ___ til å snakke norsk.", "tvunget", "tvinge", "tvang", "ble + Partizip"],
    ["Politikken førte ___ at språket nesten forsvant.", "til", "med", "på", "føre til at"],
    ["De protesterer ___ utbyggingen.", "mot", "på", "for", "protestere mot"],
    ["Sametinget ___ i 1989.", "ble opprettet", "opprettet seg", "har opprettet", "Passiv mit ble"]
  ],
  text: {
    no: "Sannhets- og forsoningskommisjonen la i 2023 fram sin rapport om fornorskningen av samer, kvener og skogfinner. Rapporten beskriver hvordan barn i generasjoner ble straffet for å snakke morsmålet sitt på skolen. Mange bærer fortsatt sorgen over et tapt språk. Kommisjonen anbefaler blant annet mer undervisning i samisk og kvensk og bedre kunnskap om minoritetenes historie.",
    de: "Die Wahrheits- und Versöhnungskommission legte 2023 ihren Bericht über die Norwegisierung der Samen, Kvenen und Waldfinnen vor. Der Bericht beschreibt, wie Kinder über Generationen bestraft wurden, wenn sie in der Schule ihre Muttersprache sprachen. Viele tragen noch immer die Trauer über eine verlorene Sprache. Die Kommission empfiehlt unter anderem mehr Unterricht in Samisch und Kvenisch und besseres Wissen über die Geschichte der Minderheiten.",
    q: [
      ["Hva handler rapporten om?", "Fornorskningen av minoriteter", "Reindriftens økonomi", "Turisme i nord"],
      ["Hva skjedde med barna på skolen?", "De ble straffet for å snakke morsmålet", "De fikk gratis mat", "De lærte samisk"],
      ["Hva anbefaler kommisjonen?", "Mer undervisning i samisk og kvensk", "Å avskaffe Sametinget", "Mindre historieundervisning"]
    ]
  }
},
{
  id: "c1-13", t: "Präpositionen: die Feinheiten",
  intro: "<p>Präpositionen sind die letzte Hürde. Städte: <b>i Oslo</b>, aber <b>på Lillehammer</b> (Tradition). Inseln und Orte im Inland oft <b>på</b>: <b>på Hamar, på Sørlandet, på Island</b>. Zeit: <b>om sommeren</b> (jeden Sommer) vs. <b>i sommer</b> (diesen Sommer).</p>",
  items: [
    ["på Lillehammer", "in Lillehammer"], ["på Island", "auf Island"], ["på Sørlandet", "in Südnorwegen"], ["i Bergen", "in Bergen"],
    ["om sommeren", "im Sommer (immer)"], ["i sommer", "diesen Sommer"], ["for to år siden", "vor zwei Jahren"], ["om to år", "in zwei Jahren"],
    ["i to år", "zwei Jahre lang"], ["på to år", "seit zwei Jahren (verneint)"], ["til jul", "zu Weihnachten"], ["i jula", "über Weihnachten"],
    ["på jobb", "bei der Arbeit"], ["i jobben", "im Job"], ["på nytt", "erneut"], ["i det hele tatt", "überhaupt"]
  ],
  sent: [
    ["Jeg har ikke sett ham på flere år.", "Ich habe ihn seit mehreren Jahren nicht gesehen."],
    ["Vi skal til Lofoten i sommer.", "Wir fahren diesen Sommer auf die Lofoten."],
    ["Om vinteren er det mørkt det meste av dagen.", "Im Winter ist es den Großteil des Tages dunkel."],
    ["Hun vokste opp på Hamar.", "Sie ist in Hamar aufgewachsen."]
  ],
  gram: [
    ["Jeg har ikke vært der ___ fem år.", "på", "i", "for", "Verneinung + Zeitraum: på"],
    ["___ vinteren går vi på ski hver helg.", "Om", "I", "På", "regelmäßig: om"],
    ["Vi bodde i Tromsø ___ tre år.", "i", "på", "om", "Dauer: i"],
    ["Han flyttet til Norge for ti år ___.", "siden", "før", "tilbake", "vor = for … siden"]
  ]
},
{
  id: "c1-14", t: "Ethik & Gesellschaftsdebatte",
  intro: "<p>Ethische Debatten (Bioethik, KI, Sterbehilfe) brauchen präzise Sprache: <b>forsvarlig</b> (vertretbar), <b>prinsipiell</b> (grundsätzlich), <b>avveining</b> (Abwägung).</p>",
  items: [
    ["forsvarlig", "vertretbar"], ["prinsipiell", "grundsätzlich"], ["avveining", "Abwägung"], ["etisk", "ethisch"],
    ["dilemma", "Dilemma"], ["verdigrunnlag", "Wertegrundlage"], ["likeverd", "Gleichwertigkeit"], ["selvbestemmelse", "Selbstbestimmung"],
    ["aktiv dødshjelp", "aktive Sterbehilfe"], ["bioteknologi", "Biotechnologie"], ["samtykke", "Einwilligung"], ["sårbar", "verletzlich"],
    ["hensynet til", "die Rücksicht auf"], ["veie opp for", "aufwiegen"], ["glidebane", "Dammbruch (Argument)"], ["menneskeverd", "Menschenwürde"]
  ],
  sent: [
    ["Det er et vanskelig etisk dilemma uten enkle svar.", "Es ist ein schwieriges ethisches Dilemma ohne einfache Antworten."],
    ["Hensynet til de mest sårbare må veie tyngst.", "Die Rücksicht auf die Verletzlichsten muss am schwersten wiegen."],
    ["Motstanderne advarer mot en glidebane.", "Die Gegner warnen vor einem Dammbruch."],
    ["Fordelene veier ikke opp for risikoen.", "Die Vorteile wiegen das Risiko nicht auf."]
  ],
  gram: [
    ["Fordelene veier ikke opp ___ ulempene.", "for", "mot", "med", "veie opp for"],
    ["De advarer ___ en glidebane.", "mot", "for", "om", "advare mot"],
    ["Det er en avveining ___ frihet og sikkerhet.", "mellom", "av", "for", "avveining mellom"],
    ["Behandlingen er ikke medisinsk ___.", "forsvarlig", "forsvare", "forsvar", "Adjektiv"]
  ],
  text: {
    no: "Debatten om aktiv dødshjelp har blusset opp igjen. Tilhengerne viser til retten til selvbestemmelse og mener at mennesker med uhelbredelig sykdom bør få velge en verdig død. Motstanderne advarer mot en glidebane der sårbare grupper kan føle press. Et utvalg skal nå utrede saken og levere sin innstilling neste år.",
    de: "Die Debatte über aktive Sterbehilfe ist wieder aufgeflammt. Die Befürworter verweisen auf das Recht auf Selbstbestimmung und meinen, dass Menschen mit unheilbarer Krankheit einen würdigen Tod wählen dürfen sollten. Die Gegner warnen vor einem Dammbruch, bei dem verletzliche Gruppen Druck empfinden könnten. Ein Ausschuss soll die Frage nun untersuchen und nächstes Jahr seine Empfehlung vorlegen.",
    q: [
      ["Hva er tilhengernes hovedargument?", "Retten til selvbestemmelse", "Økonomiske besparelser", "Mangel på leger"],
      ["Hva frykter motstanderne?", "At sårbare grupper kan føle press", "At det blir for dyrt", "At legene slutter"],
      ["Hva skjer videre?", "Et utvalg skal utrede saken", "Loven er allerede vedtatt", "Saken er lagt bort"]
    ]
  }
},
{
  id: "c1-15", t: "Prüfungsvorbereitung C1",
  intro: "<p>Die offizielle Prüfung für hohes Niveau heißt <b>Norskprøven</b> und geht bis C1. Für Studium und viele Berufe wird mindestens B2 verlangt. Geprüft werden Lesen, Hören, Schreiben und Sprechen.</p>" + TIP("Auf <b>hkdir.no</b> (Stichwort „Norskprøven“) findest du Beispielaufgaben für die Norskprøve. Mach sie unter Zeitdruck."),
  items: [
    ["Norskprøven", "offizielle Norwegischprüfung"], ["muntlig", "mündlich"], ["skriftlig", "schriftlich"], ["leseforståelse", "Leseverstehen"],
    ["lytteforståelse", "Hörverstehen"], ["drøfte", "erörtern"], ["argumentere", "argumentieren"], ["oppsummere", "zusammenfassen"],
    ["innledning", "Einleitung"], ["hoveddel", "Hauptteil"], ["avslutning", "Schluss"], ["tekstbinding", "Textkohärenz"],
    ["formell", "formell"], ["uformell", "informell"], ["vurderingskriterier", "Bewertungskriterien"], ["bestått", "bestanden"]
  ],
  sent: [
    ["Drøft fordeler og ulemper ved hjemmekontor.", "Erörtere Vor- und Nachteile von Homeoffice."],
    ["Oppsummer hovedpoengene i teksten med egne ord.", "Fasse die Hauptpunkte des Textes mit eigenen Worten zusammen."],
    ["En god tekst har en klar innledning, hoveddel og avslutning.", "Ein guter Text hat eine klare Einleitung, einen Hauptteil und einen Schluss."],
    ["Jeg besto Norskprøven på C1-nivå!", "Ich habe die Norwegischprüfung auf C1-Niveau bestanden!"]
  ],
  gram: [
    ["Jeg ___ prøven i fjor.", "besto", "består", "bestått", "bestå – besto – har bestått"],
    ["Drøft fordeler og ulemper ___ sosiale medier.", "ved", "av", "til", "fordeler ved"],
    ["Teksten ___ av tre deler.", "består", "bestod av seg", "bestås", "bestå av = bestehen aus"],
    ["Til ___ vil jeg si at …", "slutt", "slutten", "sluttet", "til slutt = abschließend"]
  ],
  write: { task: "Skriv en kort drøfting (minst 60 ord): Bør alle innvandrere ta en norskprøve? Bruk «på den ene siden», «på den andre siden» og «til slutt».", need: ["på den ene siden", "på den andre siden", "til slutt"], min: 60 }
}
);
})();
