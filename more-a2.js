// Ausbau A2: Alltag in Norwegen. gram: [Satz mit ___, richtig, falsch, falsch, Hinweis]
(function () {
const L = window.LEVELS.find(l => l.id === "A2");
L.lessons.push(
{
  id: "a2-7", t: "Beim Arzt & Notfall",
  intro: "<p>In Norwegen hat jeder einen <b>fastlege</b> (Hausarzt). Nachts und am Wochenende hilft die <b>legevakt</b> (116 117). Notruf: <b>113</b>.</p><p>Schmerzen: <b>Jeg har vondt i …</b> = Mir tut … weh.</p>",
  items: [
    ["fastlege", "Hausarzt", "fastleege"], ["legevakt", "ärztlicher Notdienst", "leegewakt"], ["time", "Termin", "tiime"], ["resept", "Rezept", "resept"],
    ["medisin", "Medikament", "medisiin"], ["vondt i hodet", "Kopfschmerzen", "wunt i hoode"], ["hoste", "Husten", "huste"], ["forkjølet", "erkältet", "fårchöölet"],
    ["sykemelding", "Krankschreibung", "süükemelling"], ["ambulanse", "Krankenwagen", "ambülangse"], ["skadet", "verletzt", "skaadet"], ["blod", "Blut", "bluu"],
    ["allergisk", "allergisch", "allergisk"], ["pasient", "Patient", "pasient"], ["undersøke", "untersuchen", "ünnersööke"], ["Det haster.", "Es ist dringend.", "dee haster"]
  ],
  sent: [
    ["Jeg vil gjerne bestille time hos fastlegen.", "Ich möchte gern einen Termin beim Hausarzt machen."],
    ["Jeg har hatt feber i tre dager.", "Ich habe seit drei Tagen Fieber."],
    ["Er du allergisk mot noe?", "Bist du gegen etwas allergisch?"],
    ["Du må ta én tablett tre ganger om dagen.", "Du musst dreimal täglich eine Tablette nehmen."]
  ],
  gram: [
    ["Jeg har vondt ___ magen.", "i", "på", "med", "vondt i = Schmerzen in"],
    ["Jeg er allergisk ___ nøtter.", "mot", "for", "på", "allergisk mot"],
    ["Du ___ hvile noen dager.", "bør", "børe", "burde å", "bør + Infinitiv ohne å"],
    ["Legen ___ meg i går.", "undersøkte", "undersøker", "undersøke", "i går → Präteritum"]
  ],
  text: {
    no: "Anna våkner med vondt i halsen og feber. Hun ringer legekontoret klokka åtte og får time klokka elleve. Legen undersøker henne og sier at hun har en infeksjon. Hun får resept på medisin og en sykemelding for tre dager. På apoteket henter hun medisinen.",
    de: "Anna wacht mit Halsschmerzen und Fieber auf. Sie ruft um acht Uhr in der Arztpraxis an und bekommt einen Termin um elf Uhr. Die Ärztin untersucht sie und sagt, dass sie eine Infektion hat. Sie bekommt ein Rezept für ein Medikament und eine Krankschreibung für drei Tage. In der Apotheke holt sie das Medikament ab.",
    q: [
      ["Hva feiler det Anna?", "Vondt i halsen og feber", "Vondt i ryggen", "Hun har brukket armen"],
      ["Når får hun time?", "Klokka elleve", "Klokka åtte", "Neste uke"],
      ["Hvor lenge er hun sykemeldt?", "Tre dager", "En uke", "To dager"]
    ]
  }
},
{
  id: "a2-8", t: "Wohnung mieten",
  intro: "<p>Wohnungen findet man meist auf <b>Finn.no</b>. Üblich: <b>depositum</b> (Kaution) von bis zu 6 Monatsmieten und eine <b>visning</b> (Besichtigung).</p>",
  items: [
    ["leie", "mieten / Miete", "leie"], ["husleie", "Miete", "hüüsleie"], ["utleier", "Vermieter", "üütleier"], ["leietaker", "Mieter", "leietaaker"],
    ["depositum", "Kaution", "depoositüm"], ["kontrakt", "Vertrag", "kontrakt"], ["visning", "Besichtigung", "wiisning"], ["møblert", "möbliert", "mööbleert"],
    ["strøm", "Strom", "strömm"], ["inkludert", "inbegriffen", "inklüdeert"], ["kvadratmeter", "Quadratmeter", "kwadraatmeeter"], ["etasje", "Stockwerk", "etaasche"],
    ["nabo", "Nachbar", "naabu"], ["flytte", "umziehen", "flütte"], ["bod", "Abstellraum", "buu"], ["ledig", "frei / verfügbar", "leedi"]
  ],
  sent: [
    ["Er leiligheten fortsatt ledig?", "Ist die Wohnung noch frei?"],
    ["Er strøm inkludert i husleia?", "Ist Strom in der Miete inbegriffen?"],
    ["Når kan jeg komme på visning?", "Wann kann ich zur Besichtigung kommen?"],
    ["Vi flytter inn første desember.", "Wir ziehen am ersten Dezember ein."]
  ],
  gram: [
    ["Leiligheten ligger i tredje ___.", "etasje", "etasjen", "etasjer", "i tredje etasje (ohne Endung)"],
    ["Husleia er ti tusen kroner ___ måneden.", "i", "på", "per en", "i måneden = pro Monat"],
    ["Vi ___ inn i går.", "flyttet", "flytter", "flytte", "Präteritum: -et"],
    ["Er det mulig å se ___?", "leiligheten", "leilighet", "en leiligheten", "bestimmt: -en"]
  ],
  text: {
    no: "Til leie: lys toroms leilighet på 55 kvadratmeter i andre etasje. Leiligheten har balkong og egen bod i kjelleren. Husleie: 13 500 kroner i måneden. Strøm er ikke inkludert. Depositum: tre måneders husleie. Ledig fra 1. januar. Visning på søndag klokka 14.",
    de: "Zu vermieten: helle Zweizimmerwohnung mit 55 Quadratmetern im zweiten Stock. Die Wohnung hat einen Balkon und einen eigenen Abstellraum im Keller. Miete: 13 500 Kronen im Monat. Strom ist nicht inbegriffen. Kaution: drei Monatsmieten. Frei ab 1. Januar. Besichtigung am Sonntag um 14 Uhr.",
    q: [
      ["Hvor stor er leiligheten?", "55 kvadratmeter", "13 kvadratmeter", "35 kvadratmeter"],
      ["Er strøm inkludert?", "Nei", "Ja", "Bare om vinteren"],
      ["Når er visningen?", "På søndag klokka 14", "1. januar", "På lørdag klokka 12"]
    ]
  }
},
{
  id: "a2-9", t: "Bank, Geld & Bezahlen",
  intro: "<p>In Norwegen zahlt man fast überall mit Karte oder <b>Vipps</b> (Handy). Für ein Bankkonto brauchst du ein <b>fødselsnummer</b> oder <b>D-nummer</b> und <b>BankID</b>.</p>",
  items: [
    ["bankkonto", "Bankkonto", "bankkonto"], ["kontonummer", "Kontonummer", "kontunümmer"], ["betale", "bezahlen", "betaale"], ["overføre", "überweisen", "owerfööre"],
    ["regning", "Rechnung", "reining"], ["forfallsdato", "Fälligkeitsdatum", "fårfallsdaatu"], ["lønn", "Lohn / Gehalt", "lönn"], ["spare", "sparen", "spaare"],
    ["lån", "Kredit / Darlehen", "loon"], ["kontanter", "Bargeld", "kontanter"], ["minibank", "Geldautomat", "miinibank"], ["gebyr", "Gebühr", "gebüür"],
    ["skatt", "Steuer", "skatt"], ["Vipps meg!", "Schick mir's per Vipps!", "wipps mei"], ["kvittering", "Quittung", "kwittering"], ["dyrt", "teuer", "düürt"]
  ],
  sent: [
    ["Jeg vil gjerne åpne en bankkonto.", "Ich möchte gern ein Bankkonto eröffnen."],
    ["Lønnen kommer den tjuende hver måned.", "Das Gehalt kommt am Zwanzigsten jedes Monats."],
    ["Kan jeg betale med kort?", "Kann ich mit Karte bezahlen?"],
    ["Jeg må betale regningen før fredag.", "Ich muss die Rechnung vor Freitag bezahlen."]
  ],
  gram: [
    ["Kan jeg betale ___ kort?", "med", "på", "av", "betale med kort"],
    ["Jeg ___ penger til deg i går.", "overførte", "overfører", "overføre", "Präteritum: -te"],
    ["Det er ___ å bo i Oslo.", "dyrt", "dyr", "dyre", "det er + Adjektiv mit -t"],
    ["Jeg har ikke ___ kontanter.", "noen", "noe", "ingen", "Mehrzahl: noen"]
  ]
},
{
  id: "a2-10", t: "Arbeit & Kollegen",
  intro: "<p>Am Arbeitsplatz duzt man sich, auch den Chef. Wichtig: die <b>lunsj</b> um ca. 11:30 und die Kaffeepause. Arbeitstage enden oft schon um 16 Uhr.</p>",
  items: [
    ["kollega", "Kollege/Kollegin", "kolleega"], ["sjef", "Chef", "scheef"], ["møte", "Besprechung", "mööte"], ["lunsj", "Mittagessen", "lönsch"],
    ["pause", "Pause", "pause"], ["kontor", "Büro", "kontuur"], ["oppgave", "Aufgabe", "oppgaawe"], ["ferie", "Urlaub", "feerie"],
    ["deltid", "Teilzeit", "deeltiid"], ["heltid", "Vollzeit", "heeltiid"], ["overtid", "Überstunden", "owertiid"], ["hjemmekontor", "Homeoffice", "jemmekontuur"],
    ["fri", "frei", "frii"], ["travel", "beschäftigt / stressig", "traawel"], ["hjelpe", "helfen", "jelpe"], ["frist", "Frist", "frist"]
  ],
  sent: [
    ["Skal vi spise lunsj sammen?", "Sollen wir zusammen zu Mittag essen?"],
    ["Jeg har et møte klokka ti.", "Ich habe um zehn Uhr eine Besprechung."],
    ["Jeg jobber hjemmefra på fredager.", "Freitags arbeite ich von zu Hause."],
    ["Kan du hjelpe meg med denne oppgaven?", "Kannst du mir bei dieser Aufgabe helfen?"]
  ],
  gram: [
    ["Jeg jobber ___ kontor i sentrum.", "på et", "i en", "til et", "på kontoret / på et kontor"],
    ["Hun jobber ___ ingeniør.", "som", "for", "av", "jobbe som = arbeiten als"],
    ["Jeg har det veldig ___ i dag.", "travelt", "travel", "travle", "ha det + Adjektiv mit -t"],
    ["Møtet ___ klokka ni.", "begynner", "begynne", "begynt", "Präsens -r"]
  ],
  text: {
    no: "Jonas har ny jobb i et IT-firma i Bergen. Han begynner klokka åtte og slutter klokka fire. Kollegene er hyggelige, og de spiser lunsj sammen hver dag klokka halv tolv. På fredager jobber Jonas hjemmefra. Sjefen hans heter Lise, og alle sier «du» til henne.",
    de: "Jonas hat eine neue Stelle in einer IT-Firma in Bergen. Er fängt um acht Uhr an und hört um vier Uhr auf. Die Kollegen sind nett, und sie essen jeden Tag um halb zwölf zusammen zu Mittag. Freitags arbeitet Jonas von zu Hause. Seine Chefin heißt Lise, und alle sagen „du“ zu ihr.",
    q: [
      ["Når slutter Jonas på jobb?", "Klokka fire", "Klokka åtte", "Klokka halv tolv"],
      ["Når spiser de lunsj?", "Klokka halv tolv", "Klokka tolv", "Klokka ett"],
      ["Hva gjør Jonas på fredager?", "Han jobber hjemmefra", "Han har fri", "Han har møte med sjefen"]
    ]
  }
},
{
  id: "a2-11", t: "Behörden & Formulare",
  intro: "<p>Wichtige Stellen: <b>Skatteetaten</b> (Steueramt, Personennummer), <b>NAV</b> (Arbeit & Soziales), <b>UDI</b> (Einwanderung), <b>politiet</b> (Polizei). Vieles läuft online mit <b>BankID</b>.</p>",
  items: [
    ["skjema", "Formular", "schemma"], ["fylle ut", "ausfüllen", "fülle üüt"], ["søknad", "Antrag / Bewerbung", "söknad"], ["søke om", "beantragen", "sööke om"],
    ["fødselsnummer", "Personennummer", "föselsnümmer"], ["adresse", "Adresse", "adresse"], ["underskrift", "Unterschrift", "ünnerskrift"], ["pass", "Reisepass", "pass"],
    ["oppholdstillatelse", "Aufenthaltserlaubnis", "oppholstillaatelse"], ["dokument", "Dokument", "dokümeent"], ["kø", "Warteschlange", "kö"], ["bekreftelse", "Bestätigung", "bekreftelse"],
    ["etternavn", "Nachname", "etternawn"], ["fornavn", "Vorname", "foornawn"], ["sivilstatus", "Familienstand", "siwiilstaatüs"], ["gyldig", "gültig", "jüldi"]
  ],
  sent: [
    ["Jeg må fylle ut dette skjemaet.", "Ich muss dieses Formular ausfüllen."],
    ["Hvor lang tid tar det å få svar?", "Wie lange dauert es, eine Antwort zu bekommen?"],
    ["Passet mitt er ikke gyldig lenger.", "Mein Pass ist nicht mehr gültig."],
    ["Du kan søke på nett.", "Du kannst online beantragen."]
  ],
  gram: [
    ["Jeg vil søke ___ oppholdstillatelse.", "om", "på", "for", "søke om = beantragen"],
    ["Du må ___ ut skjemaet.", "fylle", "fyller", "fylt", "må + Infinitiv"],
    ["Hun søker ___ en ny jobb.", "på", "om", "til", "søke på en jobb = sich bewerben"],
    ["Har du ___ søknaden?", "sendt", "sende", "sender", "har + Partizip"]
  ]
},
{
  id: "a2-12", t: "Telefonieren & Termine",
  intro: "<p>Am Telefon meldet man sich mit Namen: <b>Hei, det er Manuel.</b> Termine: <b>Passer det på tirsdag?</b> = Passt es am Dienstag?</p>",
  items: [
    ["ringe", "anrufen", "ringe"], ["ringe tilbake", "zurückrufen", "ringe tilbaake"], ["Det er …", "Hier ist … (am Telefon)", "dee ær"], ["passe", "passen", "passe"],
    ["avtale", "Verabredung / vereinbaren", "aawtaale"], ["avlyse", "absagen", "aawlüüse"], ["flytte timen", "Termin verschieben", "flütte tiimen"], ["melding", "Nachricht (SMS)", "melling"],
    ["telefonsvarer", "Anrufbeantworter", "telefoonswaarer"], ["opptatt", "besetzt / beschäftigt", "opptatt"], ["tidlig", "früh", "tiili"], ["sent", "spät", "seent"],
    ["om en time", "in einer Stunde", "om en tiime"], ["neste uke", "nächste Woche", "neste üüke"], ["Hører du meg?", "Hörst du mich?", "hörer dü mei"], ["Et øyeblikk.", "Einen Moment.", "et öieblikk"]
  ],
  sent: [
    ["Hei, det er Manuel. Kan du ringe meg tilbake?", "Hallo, hier ist Manuel. Kannst du mich zurückrufen?"],
    ["Passer det for deg på torsdag?", "Passt es dir am Donnerstag?"],
    ["Jeg må dessverre avlyse timen min.", "Ich muss meinen Termin leider absagen."],
    ["Kan vi flytte møtet til neste uke?", "Können wir die Besprechung auf nächste Woche verschieben?"]
  ],
  gram: [
    ["Kan du ringe meg ___?", "tilbake", "igjen", "tilbaken", "ringe tilbake"],
    ["Det passer ___ meg.", "for", "til", "med", "passe for noen"],
    ["Jeg ringer deg ___ en time.", "om", "i", "på", "om = in (Zukunft)"],
    ["Jeg ___ deg i går, men du svarte ikke.", "ringte", "ringer", "ringet", "ringe → ringte"]
  ]
},
{
  id: "a2-13", t: "Vergleichen: større, størst",
  intro: "<p>Steigerung meist mit <b>-ere</b> und <b>-est</b>: <b>billig – billigere – billigst</b>.</p><p>Unregelmäßig: <b>god – bedre – best</b>, <b>stor – større – størst</b>, <b>liten – mindre – minst</b>, <b>gammel – eldre – eldst</b>, <b>mye – mer – mest</b>.</p><p>als = <b>enn</b>: <i>Oslo er større enn Bergen.</i></p>",
  items: [
    ["billigere", "billiger", "billiere"], ["dyrere", "teurer", "düürere"], ["bedre", "besser", "bedre"], ["best", "am besten", "best"],
    ["større", "größer", "större"], ["størst", "am größten", "störst"], ["mindre", "kleiner", "minndre"], ["minst", "am kleinsten", "minst"],
    ["eldre", "älter", "eldre"], ["yngre", "jünger", "üngre"], ["mer", "mehr", "meer"], ["mest", "am meisten", "mest"],
    ["verre", "schlimmer", "wärre"], ["enn", "als (Vergleich)", "enn"], ["like … som", "genauso … wie", "liike … somm"], ["varmere", "wärmer", "warmere"]
  ],
  sent: [
    ["Oslo er større enn Bergen.", "Oslo ist größer als Bergen."],
    ["Broren min er to år eldre enn meg.", "Mein Bruder ist zwei Jahre älter als ich."],
    ["Det er like kaldt i dag som i går.", "Heute ist es genauso kalt wie gestern."],
    ["Dette er den beste kaffen i byen.", "Das ist der beste Kaffee der Stadt."]
  ],
  gram: [
    ["Bergen er mindre ___ Oslo.", "enn", "som", "da", "als = enn"],
    ["Denne jakka er ___ enn den.", "billigere", "billigst", "mer billig", "billig → billigere"],
    ["Hun er den ___ i klassen.", "yngste", "yngre", "ung", "bestimmt: -este"],
    ["Været er ___ i dag enn i går.", "bedre", "godere", "best", "god → bedre"]
  ]
},
{
  id: "a2-14", t: "Präteritum & Perfekt",
  intro: "<p>Vier Gruppen schwacher Verben:</p><p>1. <b>kaste – kastet – har kastet</b><br>2. <b>kjøpe – kjøpte – har kjøpt</b><br>3. <b>leve – levde – har levd</b><br>4. <b>bo – bodde – har bodd</b></p><p>Starke Verben lernt man auswendig: <b>skrive – skrev – har skrevet</b>.</p>",
  items: [
    ["snakket", "sprach / redete", "snakket"], ["lærte", "lernte", "læärte"], ["levde", "lebte", "lewde"], ["bodde", "wohnte", "budde"],
    ["skrev", "schrieb", "skreew"], ["har skrevet", "hat geschrieben", "haar skreewet"], ["fikk", "bekam", "fikk"], ["tok", "nahm", "tuuk"],
    ["har tatt", "hat genommen", "haar tatt"], ["gjorde", "machte / tat", "juure"], ["har gjort", "hat gemacht", "haar juurt"], ["visste", "wusste", "wisste"],
    ["sov", "schlief", "soow"], ["fløy", "flog", "flöi"], ["satt", "saß", "satt"], ["sto", "stand", "stuu"]
  ],
  sent: [
    ["Vi bodde i Tyskland i ti år.", "Wir wohnten zehn Jahre in Deutschland."],
    ["Har du gjort leksene?", "Hast du die Hausaufgaben gemacht?"],
    ["Jeg sov dårlig i natt.", "Ich habe letzte Nacht schlecht geschlafen."],
    ["Hun har aldri vært i Nord-Norge.", "Sie war noch nie in Nordnorwegen."]
  ],
  gram: [
    ["I fjor ___ vi til Spania.", "fløy", "flyr", "har fløyet", "i fjor → Präteritum"],
    ["Jeg har ___ et brev.", "skrevet", "skrev", "skrive", "har + Partizip"],
    ["Hva ___ du i helga?", "gjorde", "gjør", "gjort", "Präteritum von gjøre"],
    ["Vi ___ i Bergen fra 2019 til 2022.", "bodde", "bor", "har bodd", "abgeschlossener Zeitraum → Präteritum"]
  ]
},
{
  id: "a2-15", t: "Der große Hund: bestimmte Adjektive",
  intro: "<p>Mit Adjektiv steht im Bestimmten ein Extra-Artikel: <b>den</b> (en/ei), <b>det</b> (et), <b>de</b> (Mehrzahl) und das Adjektiv auf <b>-e</b>:</p><p><b>den store hunden</b>, <b>det nye huset</b>, <b>de gamle bilene</b>.</p>",
  items: [
    ["den store hunden", "der große Hund", "den stuure hünnen"], ["det nye huset", "das neue Haus", "dee nüüe hüüse"], ["de gamle bilene", "die alten Autos", "dii gamle biilene"], ["den røde jakka", "die rote Jacke", "den rööde jakka"],
    ["det lille barnet", "das kleine Kind", "dee lille baarne"], ["de små barna", "die kleinen Kinder", "dii smoo baarna"], ["den beste vennen", "der beste Freund", "den beste wennen"], ["det siste toget", "der letzte Zug", "dee siste tooge"],
    ["den første dagen", "der erste Tag", "den förste daagen"], ["hele dagen", "den ganzen Tag", "heele daagen"], ["neste år", "nächstes Jahr", "neste oor"], ["min nye jobb", "meine neue Stelle", "miin nüüe jobb"],
    ["det fine været", "das schöne Wetter", "dee fiine wääre"], ["den varme kaffen", "der warme Kaffee", "den warme kaffen"]
  ],
  sent: [
    ["Den store hunden er snill.", "Der große Hund ist lieb."],
    ["Vi tar det siste toget hjem.", "Wir nehmen den letzten Zug nach Hause."],
    ["De små barna leker ute.", "Die kleinen Kinder spielen draußen."],
    ["Jeg elsker det fine været i dag.", "Ich liebe das schöne Wetter heute."]
  ],
  gram: [
    ["___ store bilen er min.", "Den", "Det", "De", "bilen = en-Wort → den"],
    ["Det ___ huset er dyrt.", "nye", "ny", "nytt", "bestimmt → -e"],
    ["De gamle ___ står ute.", "bilene", "biler", "bilen", "Mehrzahl bestimmt: -ene"],
    ["___ lille barnet sover.", "Det", "Den", "De", "barnet = et-Wort → det"]
  ]
},
{
  id: "a2-16", t: "Sich verabreden & Freizeit",
  intro: "<p>Norweger lieben <b>tur</b> (Ausflug in die Natur) und <b>hytte</b> (Ferienhütte). Typisch: <b>Skal vi ta en kaffe?</b> und <b>kos</b> (Gemütlichkeit).</p>",
  items: [
    ["Skal vi …?", "Sollen wir …?", "skall wii"], ["Har du lyst til å …?", "Hast du Lust zu …?", "haar dü lüst til o"], ["gå på tur", "wandern gehen", "goo po tüür"], ["hytte", "Hütte", "hütte"],
    ["kino", "Kino", "chiinu"], ["konsert", "Konzert", "konsärt"], ["invitere", "einladen", "inwiteere"], ["fest", "Party", "fest"],
    ["koselig", "gemütlich", "kuuseli"], ["gøy", "lustig / spaßig", "göi"], ["kjedelig", "langweilig", "cheedeli"], ["møtes", "sich treffen", "möötes"],
    ["Det høres bra ut!", "Das klingt gut!", "dee hööres braa üüt"], ["Jeg kan dessverre ikke.", "Ich kann leider nicht.", "jei kann desswärre ikke"], ["helg", "Wochenende", "hellg"], ["ute", "draußen / aus", "üüte"]
  ],
  sent: [
    ["Har du lyst til å gå på kino i kveld?", "Hast du Lust, heute Abend ins Kino zu gehen?"],
    ["Skal vi møtes utenfor stasjonen klokka sju?", "Sollen wir uns um sieben vor dem Bahnhof treffen?"],
    ["Vi skal på hytta i helga.", "Wir fahren am Wochenende zur Hütte."],
    ["Takk for invitasjonen, det høres koselig ut!", "Danke für die Einladung, das klingt gemütlich!"]
  ],
  gram: [
    ["Har du lyst ___ å bli med?", "til", "på", "for", "lyst til å"],
    ["Vi skal ___ tur på søndag.", "på", "i", "til", "gå på tur"],
    ["Det høres bra ___!", "ut", "av", "på", "høres ut = klingt"],
    ["Skal vi ___ i morgen?", "møtes", "møter", "møtte", "sich treffen = møtes"]
  ],
  text: {
    no: "Hei Ida! Har du lyst til å bli med på tur på lørdag? Vi tenker å gå til en hytte i marka og grille pølser. Vi møtes på T-banestasjonen klokka ti. Ta med gode sko og varme klær, det kan bli kaldt. Gi beskjed før fredag! Hilsen Sara",
    de: "Hallo Ida! Hast du Lust, am Samstag mit auf eine Wanderung zu kommen? Wir wollen zu einer Hütte im Wald gehen und Würstchen grillen. Wir treffen uns um zehn an der U-Bahn-Station. Nimm gute Schuhe und warme Kleidung mit, es kann kalt werden. Gib bis Freitag Bescheid! Gruß, Sara",
    q: [
      ["Når er turen?", "På lørdag", "På fredag", "På søndag"],
      ["Hvor møtes de?", "På T-banestasjonen", "Ved hytta", "Hjemme hos Sara"],
      ["Hva skal Ida ta med?", "Gode sko og varme klær", "Pølser", "Billetter"]
    ]
  }
},
{
  id: "a2-17", t: "Feste & Traditionen",
  intro: "<p>Der <b>17. mai</b> ist der Nationalfeiertag mit Kinderumzug (<b>barnetog</b>) und <b>bunad</b> (Tracht). Weihnachten heißt <b>jul</b>, gefeiert wird am Abend des 24.</p>",
  items: [
    ["jul", "Weihnachten", "jüül"], ["God jul!", "Frohe Weihnachten!", "guu jüül"], ["julaften", "Heiligabend", "jüülaften"], ["påske", "Ostern", "poske"],
    ["nasjonaldag", "Nationalfeiertag", "naschunaaldaag"], ["barnetog", "Kinderumzug", "baarnetoog"], ["bunad", "Tracht", "büünad"], ["flagg", "Fahne", "flagg"],
    ["gave", "Geschenk", "gaawe"], ["bursdag", "Geburtstag", "büschdaag"], ["Gratulerer med dagen!", "Herzlichen Glückwunsch!", "gratüleerer me daagen"], ["feire", "feiern", "feire"],
    ["Godt nytt år!", "Frohes neues Jahr!", "gott nütt oor"], ["tradisjon", "Tradition", "tradischuun"], ["kake", "Kuchen", "kaake"], ["Skål!", "Prost!", "skool"]
  ],
  sent: [
    ["På 17. mai går barna i barnetog.", "Am 17. Mai gehen die Kinder im Kinderumzug."],
    ["Vi feirer jul hos besteforeldrene mine.", "Wir feiern Weihnachten bei meinen Großeltern."],
    ["Gratulerer med dagen! Her er en liten gave.", "Herzlichen Glückwunsch! Hier ist ein kleines Geschenk."],
    ["I påska drar mange nordmenn på fjellet.", "An Ostern fahren viele Norweger in die Berge."]
  ],
  gram: [
    ["Gratulerer ___ dagen!", "med", "til", "på", "gratulere med"],
    ["Vi feirer jul ___ besteforeldrene.", "hos", "på", "ved", "hos = bei (Personen)"],
    ["___ julaften spiser vi ribbe.", "På", "I", "Om", "på + Tag"],
    ["Mange drar ___ fjellet i påska.", "på", "i", "til", "på fjellet"]
  ],
  text: {
    no: "17. mai er Norges nasjonaldag. Da feirer nordmenn at landet fikk sin egen grunnlov i 1814. Om morgenen går barna i barnetog med flagg og musikk. Mange har på seg bunad. Etterpå spiser folk is og pølser, og barna leker hele dagen. Det er en veldig glad dag.",
    de: "Der 17. Mai ist Norwegens Nationalfeiertag. Dann feiern die Norweger, dass das Land 1814 seine eigene Verfassung bekam. Am Morgen gehen die Kinder im Kinderumzug mit Fahnen und Musik. Viele tragen Tracht. Danach essen die Leute Eis und Würstchen, und die Kinder spielen den ganzen Tag. Es ist ein sehr fröhlicher Tag.",
    q: [
      ["Hva feirer man på 17. mai?", "Grunnloven fra 1814", "Jul", "Kongens bursdag"],
      ["Hva gjør barna om morgenen?", "De går i barnetog", "De sover lenge", "De går på skolen"],
      ["Hva spiser folk etterpå?", "Is og pølser", "Ribbe", "Fisk og poteter"]
    ]
  }
},
{
  id: "a2-18", t: "Nebensatz-Start: fordi, når, hvis",
  intro: "<p>Im Nebensatz steht <b>ikke</b> vor dem Verb: <i>… fordi jeg <b>ikke</b> har tid.</i></p><p><b>fordi</b> = weil, <b>når</b> = wenn (Zeit, auch wiederholt), <b>da</b> = als (einmal, Vergangenheit), <b>hvis</b> = falls/wenn, <b>at</b> = dass, <b>om</b> = ob.</p>",
  items: [
    ["fordi", "weil", "fordii"], ["når", "wenn / als (Zeit)", "noor"], ["hvis", "falls / wenn", "wiss"], ["at", "dass", "att"],
    ["om", "ob", "omm"], ["da", "als (einmal, Vergangenheit)", "daa"], ["men", "aber", "men"], ["så", "also / dann", "soo"], ["før", "bevor", "föör"],
    ["etter at", "nachdem", "etter att"], ["mens", "während", "mens"], ["selv om", "obwohl", "sell omm"], ["derfor", "deshalb", "derfor"],
    ["kanskje", "vielleicht", "kansche"], ["egentlig", "eigentlich", "egentli"]
  ],
  sent: [
    ["Jeg kommer ikke fordi jeg er syk.", "Ich komme nicht, weil ich krank bin."],
    ["Hvis det regner, blir vi hjemme.", "Falls es regnet, bleiben wir zu Hause."],
    ["Hun sier at hun ikke har tid.", "Sie sagt, dass sie keine Zeit hat."],
    ["Jeg vet ikke om butikken er åpen.", "Ich weiß nicht, ob der Laden offen ist."]
  ],
  gram: [
    ["Han kommer ikke fordi han ___ tid.", "ikke har", "har ikke", "hadde ikke", "Nebensatz: ikke vor Verb"],
    ["___ det er fint vær, går vi på tur.", "Hvis", "Om at", "Fordi at", "falls = hvis"],
    ["Jeg lurer på ___ du vil bli med.", "om", "hvis", "at", "ob = om"],
    ["___ jeg var liten, bodde jeg i Kiel.", "Da", "Hvis", "Om", "einmalig in der Vergangenheit: da"]
  ]
}
);
})();
