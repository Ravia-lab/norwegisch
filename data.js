// Lerninhalte: Deutsch -> Norwegisch (Bokmål), Stufen A1 bis C1
// items: [norwegisch, deutsch, aussprache (deutsche Lautschrift, optional)]
// sent:  [norwegischer Satz, deutsche Bedeutung]
// text:  Lesetext mit Fragen [Frage, richtige Antwort, falsch, falsch]
// write: freie Schreibaufgabe (Pflichtwörter + Mindestanzahl Wörter)
window.LEVELS = [
{
  id: "A1", title: "A1 · Einstieg", desc: "Die ersten Wörter, Begrüßen, Zahlen, einfache Sätze.",
  lessons: [
  {
    id: "a1-0", t: "Aussprache & erste Wörter",
    intro: "<p>Norwegisch klingt oft fast wie geschrieben. Drei Buchstaben sind neu:</p><ul><li><b>æ</b> wie <i>ä</i> in „Bär“</li><li><b>ø</b> wie <i>ö</i> in „schön“</li><li><b>å</b> wie offenes <i>o</i> in „Sonne“</li></ul><p><b>y</b> spricht man wie <i>ü</i>, <b>u</b> liegt zwischen <i>u</i> und <i>ü</i>. <b>kj</b> klingt wie <i>ch</i> in „ich“, <b>skj/sj</b> wie <i>sch</i>.</p><p><b>Silben & Betonung:</b> Unter jedem Wort siehst du die Silben, z. B. <b>ˈkjø·re</b>. Die <b style=\"color:var(--red)\">rote</b> Silbe mit ˈ wird betont – im Norwegischen fast immer die erste. Darunter steht die Aussprache in deutscher Lautschrift, ebenfalls in Silben.</p><p>Tippe auf 🔊, um jedes Wort zu hören. 🐢 spielt es langsam ab.</p>",
    items: [
      ["hei", "hallo", "hai"],
      ["ja", "ja", "ja"],
      ["nei", "nein", "näi"],
      ["takk", "danke", "tack"],
      ["bær", "Beere", "bär"],
      ["søt", "süß", "söt"],
      ["hus", "Haus", "hüüs"],
      ["by", "Stadt", "büü"],
      ["kjøre", "fahren", "chööre (ch wie in „ich“)"],
      ["skje", "Löffel", "schee"],
      ["god", "gut", "guu (d ist stumm)"],
      ["jeg", "ich", "jäi"]
    ],
    sent: [
      ["Hei, jeg heter Anna.", "Hallo, ich heiße Anna."],
      ["Ja, takk.", "Ja, danke."],
      ["Nei takk.", "Nein danke."]
    ]
  },
  {
    id: "a1-1", t: "Begrüßen & Vorstellen",
    intro: "<p>Norweger duzen fast immer – auch Fremde. <b>du</b> = du/Sie.</p><p><b>Hva heter du?</b> = Wie heißt du? · <b>Jeg heter …</b> = Ich heiße …</p><p>„Hv“ am Wortanfang: das <b>h ist stumm</b> (hva = „waa“).</p>",
    items: [
      ["god morgen", "guten Morgen", "guu moorn"],
      ["god dag", "guten Tag", "guu daag"],
      ["god kveld", "guten Abend", "guu kwell"],
      ["ha det bra", "tschüss / mach's gut", "haa de braa"],
      ["Hva heter du?", "Wie heißt du?", "waa heeter dü"],
      ["Jeg heter Ola.", "Ich heiße Ola.", "jäi heeter uula"],
      ["Hvordan har du det?", "Wie geht es dir?", "wurdan haar dü de"],
      ["Bare bra, takk.", "Gut, danke.", "baare braa, tack"],
      ["unnskyld", "Entschuldigung", "ünnschüll"],
      ["vær så snill", "bitte", "wär so snill"],
      ["Hvor kommer du fra?", "Woher kommst du?", "wur kommer dü fraa"],
      ["Jeg kommer fra Tyskland.", "Ich komme aus Deutschland.", "jäi kommer fraa tüsklann"]
    ],
    sent: [
      ["Hyggelig å treffe deg.", "Schön, dich kennenzulernen."],
      ["Jeg heter Ola, og du?", "Ich heiße Ola, und du?"],
      ["Jeg kommer fra Østerrike.", "Ich komme aus Österreich."],
      ["Ha det bra, vi ses!", "Tschüss, wir sehen uns!"]
    ]
  },
  {
    id: "a1-2", t: "Zahlen 0–20",
    intro: "<p>Zahlen brauchst du überall: Preise, Uhrzeit, Alter.</p><p><b>Hvor gammel er du?</b> = Wie alt bist du? · <b>Jeg er tjue år.</b> = Ich bin zwanzig.</p><p>Tipp: <b>sju</b> klingt wie „schüü“, <b>tjue</b> wie „chüüe“.</p>",
    items: [
      ["null", "null", "nüll"],
      ["en", "eins", "een"],
      ["to", "zwei", "tuu"],
      ["tre", "drei", "tree"],
      ["fire", "vier", "fiire"],
      ["fem", "fünf", "femm"],
      ["seks", "sechs", "seks"],
      ["sju", "sieben", "schüü"],
      ["åtte", "acht", "otte"],
      ["ni", "neun", "nii"],
      ["ti", "zehn", "tii"],
      ["tolv", "zwölf", "toll"],
      ["femten", "fünfzehn", "femten"],
      ["tjue", "zwanzig", "chüüe"]
    ],
    sent: [
      ["Hvor gammel er du?", "Wie alt bist du?"],
      ["Jeg er tjue år gammel.", "Ich bin zwanzig Jahre alt."],
      ["Hvor mye koster det?", "Wie viel kostet das?"],
      ["Det koster ti kroner.", "Das kostet zehn Kronen."]
    ]
  },
  {
    id: "a1-3", t: "Familie",
    intro: "<p>Norwegische Nomen haben ein Geschlecht: <b>en</b> (männlich), <b>ei</b> (weiblich, darf auch <b>en</b> sein) und <b>et</b> (sächlich).</p><p><b>en bror</b> (ein Bruder), <b>ei søster</b> (eine Schwester), <b>et barn</b> (ein Kind).</p><p>„Mein“ steht hinten: <b>moren min</b> = meine Mutter.</p>",
    items: [
      ["familie", "Familie", "fameelie"],
      ["mor", "Mutter", "muur"],
      ["far", "Vater", "faar"],
      ["bror", "Bruder", "bruur"],
      ["søster", "Schwester", "söster"],
      ["barn", "Kind", "baan"],
      ["sønn", "Sohn", "sönn"],
      ["datter", "Tochter", "datter"],
      ["foreldre", "Eltern", "forelldre"],
      ["mann", "Mann / Ehemann", "mann"],
      ["kone", "Ehefrau", "kuune"],
      ["venn", "Freund", "wenn"]
    ],
    sent: [
      ["Jeg har en bror og en søster.", "Ich habe einen Bruder und eine Schwester."],
      ["Moren min heter Kari.", "Meine Mutter heißt Kari."],
      ["Har du barn?", "Hast du Kinder?"],
      ["Vi er en stor familie.", "Wir sind eine große Familie."]
    ]
  },
  {
    id: "a1-4", t: "Essen & Trinken",
    intro: "<p>Höflich bestellen: <b>Jeg vil gjerne ha …</b> = Ich hätte gern …</p><p><b>Kan jeg få …?</b> = Kann ich … bekommen?</p><p>Bei <b>brød</b> ist das d stumm: „brö“.</p>",
    items: [
      ["mat", "Essen", "maat"],
      ["vann", "Wasser", "wann"],
      ["kaffe", "Kaffee", "kaffe"],
      ["te", "Tee", "tee"],
      ["melk", "Milch", "melk"],
      ["brød", "Brot", "brö"],
      ["ost", "Käse", "ust"],
      ["eple", "Apfel", "eeple"],
      ["fisk", "Fisch", "fisk"],
      ["øl", "Bier", "öl"],
      ["frokost", "Frühstück", "fruukost"],
      ["middag", "Abendessen", "middag"]
    ],
    sent: [
      ["Jeg vil gjerne ha en kaffe.", "Ich hätte gern einen Kaffee."],
      ["Kan jeg få regningen?", "Kann ich die Rechnung bekommen?"],
      ["Jeg spiser brød med ost.", "Ich esse Brot mit Käse."],
      ["Det smaker godt.", "Das schmeckt gut."]
    ]
  },
  {
    id: "a1-5", t: "Verben im Präsens",
    intro: "<p>Super einfach: Das Verb ist für <b>alle Personen gleich</b>. Im Präsens endet es meist auf <b>-r</b>.</p><p><b>jeg snakker, du snakker, hun snakker, vi snakker</b> …</p><p><b>er</b> = bin/bist/ist/sind · <b>har</b> = habe/hast/hat/haben</p>",
    items: [
      ["er", "bin / ist / sind", "är"],
      ["har", "habe / hat / haben", "haar"],
      ["spiser", "esse / isst", "spiiser"],
      ["drikker", "trinke / trinkt", "drikker"],
      ["bor", "wohne / wohnt", "buur"],
      ["jobber", "arbeite / arbeitet", "jobber"],
      ["snakker", "spreche / spricht", "snakker"],
      ["liker", "mag", "liiker"],
      ["går", "gehe / geht", "goor"],
      ["leser", "lese / liest", "leeser"],
      ["lærer", "lerne / lernt", "läärer"],
      ["forstår", "verstehe / versteht", "forstoor"]
    ],
    sent: [
      ["Jeg bor i Oslo.", "Ich wohne in Oslo."],
      ["Snakker du norsk?", "Sprichst du Norwegisch?"],
      ["Jeg snakker litt norsk.", "Ich spreche ein bisschen Norwegisch."],
      ["Hun jobber på et sykehus.", "Sie arbeitet in einem Krankenhaus."],
      ["Jeg forstår ikke.", "Ich verstehe nicht."]
    ]
  },
  {
    id: "a1-6", t: "Pronomen & Fragewörter",
    intro: "<p>Die Personalpronomen: <b>jeg, du, han, hun, vi, dere, de</b>.</p><p>Achtung: <b>de</b> (sie, Plural) spricht man „dii“.</p><p>Fragewörter beginnen fast alle mit <b>hv-</b> – das h ist stumm.</p>",
    items: [
      ["han", "er", "hann"],
      ["hun", "sie (Einzahl)", "hünn"],
      ["vi", "wir", "wii"],
      ["dere", "ihr", "deere"],
      ["de", "sie (Mehrzahl)", "dii"],
      ["hva", "was", "waa"],
      ["hvor", "wo", "wur"],
      ["når", "wann", "noor"],
      ["hvem", "wer", "wemm"],
      ["hvorfor", "warum", "wurfor"],
      ["hvordan", "wie", "wurdan"],
      ["fordi", "weil", "fordii"]
    ],
    sent: [
      ["Hvor bor du?", "Wo wohnst du?"],
      ["Når kommer bussen?", "Wann kommt der Bus?"],
      ["Hvem er det?", "Wer ist das?"],
      ["Hvorfor lærer du norsk?", "Warum lernst du Norwegisch?"],
      ["Fordi jeg vil bo i Norge.", "Weil ich in Norwegen wohnen will."]
    ]
  },
  {
    id: "a1-7", t: "Tage & Uhrzeit",
    intro: "<p>Wochentage werden <b>klein</b> geschrieben.</p><p><b>rs</b> klingt wie <i>sch</i>: tirsdag = „tischdag“.</p><p><b>Hva er klokka?</b> = Wie spät ist es? · <b>Klokka er tre.</b> = Es ist drei Uhr.</p>",
    items: [
      ["mandag", "Montag", "manndag"],
      ["tirsdag", "Dienstag", "tischdag"],
      ["onsdag", "Mittwoch", "unsdag"],
      ["torsdag", "Donnerstag", "toschdag"],
      ["fredag", "Freitag", "freedag"],
      ["lørdag", "Samstag", "löördag"],
      ["søndag", "Sonntag", "sönndag"],
      ["i dag", "heute", "i daag"],
      ["i morgen", "morgen", "i moorn"],
      ["i går", "gestern", "i goor"],
      ["uke", "Woche", "üüke"],
      ["time", "Stunde", "tiime"]
    ],
    sent: [
      ["Hva er klokka?", "Wie spät ist es?"],
      ["Klokka er tre.", "Es ist drei Uhr."],
      ["Vi ses i morgen.", "Wir sehen uns morgen."],
      ["I dag er det mandag.", "Heute ist Montag."]
    ],
    write: { task: "Schreib 2 kurze Sätze über dich. Benutze „jeg heter“ und „jeg bor“.", need: ["jeg", "heter", "bor"], min: 6 }
  }
  ]
},
{
  id: "A2", title: "A2 · Alltag", desc: "Wohnen, Einkaufen, Vergangenheit, Wetter, Gesundheit, Reisen.",
  lessons: [
  {
    id: "a2-1", t: "Wohnen",
    intro: "<p>Der bestimmte Artikel wird <b>angehängt</b>:</p><ul><li>en stol → stol<b>en</b> (der Stuhl)</li><li>ei dør → dør<b>a</b> (die Tür)</li><li>et hus → hus<b>et</b> (das Haus)</li></ul>",
    items: [
      ["huset", "das Haus", "hüüse (t stumm)"],
      ["leilighet", "Wohnung", "läilihet"],
      ["kjøkken", "Küche", "chökken"],
      ["soverom", "Schlafzimmer", "sooverumm"],
      ["stue", "Wohnzimmer", "stüüe"],
      ["bad", "Bad", "baad"],
      ["vindu", "Fenster", "windü"],
      ["døra", "die Tür", "döra"],
      ["seng", "Bett", "seng"],
      ["bord", "Tisch", "buur"],
      ["stol", "Stuhl", "stuul"],
      ["hjemme", "zu Hause", "jemme (h stumm)"]
    ],
    sent: [
      ["Leiligheten min har tre rom.", "Meine Wohnung hat drei Zimmer."],
      ["Kjøkkenet er stort.", "Die Küche ist groß."],
      ["Jeg bor i en liten leilighet.", "Ich wohne in einer kleinen Wohnung."],
      ["Badet er ved siden av soverommet.", "Das Bad ist neben dem Schlafzimmer."]
    ]
  },
  {
    id: "a2-2", t: "Einkaufen & Kleidung",
    intro: "<p><b>Hvor mye koster …?</b> = Wie viel kostet …?</p><p>Adjektive passen sich an: <b>en dyr jakke</b>, <b>et dyrt hus</b>, <b>dyre sko</b>.</p><p><b>rt</b> wird oft zu einem weichen „t“: kort ≈ „koot“.</p>",
    items: [
      ["butikk", "Geschäft", "bütikk"],
      ["penger", "Geld", "penger"],
      ["billig", "billig", "billi"],
      ["dyr", "teuer", "düür"],
      ["klær", "Kleidung", "klääer"],
      ["genser", "Pullover", "genser"],
      ["bukse", "Hose", "bükse"],
      ["sko", "Schuh / Schuhe", "skuu"],
      ["jakke", "Jacke", "jakke"],
      ["kort", "Karte", "koot"],
      ["størrelse", "Größe", "störrelse"],
      ["kjøpe", "kaufen", "chööpe"]
    ],
    sent: [
      ["Hvor mye koster genseren?", "Wie viel kostet der Pullover?"],
      ["Den er for dyr.", "Der ist zu teuer."],
      ["Kan jeg betale med kort?", "Kann ich mit Karte zahlen?"],
      ["Jeg trenger en ny jakke.", "Ich brauche eine neue Jacke."]
    ]
  },
  {
    id: "a2-3", t: "Vergangenheit",
    intro: "<p>Präteritum: Regelmäßige Verben enden auf <b>-et</b> oder <b>-te</b> (jobbet, kjøpte). Viele häufige Verben sind unregelmäßig: <b>var, hadde, gikk, kom, så</b>.</p><p><b>V2-Regel:</b> Das Verb steht immer an Position 2: <b>I går spiste jeg fisk.</b></p>",
    items: [
      ["var", "war", "waar"],
      ["hadde", "hatte", "hadde"],
      ["spiste", "aß", "spiiste"],
      ["drakk", "trank", "drakk"],
      ["gikk", "ging", "jikk"],
      ["kom", "kam", "komm"],
      ["så", "sah", "soo"],
      ["jobbet", "arbeitete", "jobbet"],
      ["kjøpte", "kaufte", "chööpte"],
      ["sa", "sagte", "saa"],
      ["i fjor", "letztes Jahr", "i fjuur"],
      ["sist uke", "letzte Woche", "sist üüke"]
    ],
    sent: [
      ["I går spiste jeg fisk.", "Gestern aß ich Fisch."],
      ["Vi var i Bergen i fjor.", "Wir waren letztes Jahr in Bergen."],
      ["Hun kom hjem sent.", "Sie kam spät nach Hause."],
      ["Jeg kjøpte en ny bok.", "Ich kaufte ein neues Buch."]
    ]
  },
  {
    id: "a2-4", t: "Wetter & Natur",
    intro: "<p>Beim Wetter sagt man <b>det</b>: <b>Det regner.</b> = Es regnet. <b>Det er kaldt.</b> = Es ist kalt.</p><p><b>sj</b> klingt wie <i>sch</i>: sjø = „schöö“ (See/Meer).</p>",
    items: [
      ["vær", "Wetter", "wäär"],
      ["sol", "Sonne", "suul"],
      ["regn", "Regen", "räin"],
      ["snø", "Schnee", "snöö"],
      ["vind", "Wind", "winn"],
      ["kaldt", "kalt", "kalt"],
      ["varmt", "warm", "warmt"],
      ["fjell", "Berg / Gebirge", "fjell"],
      ["sjø", "Meer / See", "schöö"],
      ["skog", "Wald", "skuug"],
      ["vinter", "Winter", "winter"],
      ["sommer", "Sommer", "sommer"]
    ],
    sent: [
      ["Det regner i dag.", "Es regnet heute."],
      ["Det er kaldt ute.", "Es ist kalt draußen."],
      ["Vi går tur i skogen.", "Wir machen einen Spaziergang im Wald."],
      ["Om vinteren er det mye snø.", "Im Winter gibt es viel Schnee."]
    ]
  },
  {
    id: "a2-5", t: "Körper & Gesundheit",
    intro: "<p><b>Jeg har vondt i …</b> = Mir tut … weh.</p><p>Beim Arzt: <b>legen</b> (der Arzt). Medikamente gibt es im <b>apotek</b>.</p>",
    items: [
      ["hode", "Kopf", "huude"],
      ["mage", "Bauch / Magen", "maage"],
      ["rygg", "Rücken", "rügg"],
      ["hals", "Hals", "hals"],
      ["lege", "Arzt / Ärztin", "leege"],
      ["syk", "krank", "süük"],
      ["frisk", "gesund", "frisk"],
      ["vondt", "weh / Schmerz", "wunt"],
      ["apotek", "Apotheke", "aputeek"],
      ["tannlege", "Zahnarzt", "tannleege"],
      ["feber", "Fieber", "feeber"],
      ["trøtt", "müde", "trött"]
    ],
    sent: [
      ["Jeg har vondt i hodet.", "Ich habe Kopfschmerzen."],
      ["Jeg må gå til legen.", "Ich muss zum Arzt gehen."],
      ["Er du syk?", "Bist du krank?"],
      ["Jeg føler meg bedre nå.", "Ich fühle mich jetzt besser."]
    ]
  },
  {
    id: "a2-6", t: "Reisen & Verkehr",
    intro: "<p>Wege erfragen: <b>Hvor er …?</b> = Wo ist …?</p><p><b>til venstre</b> = nach links · <b>til høyre</b> = nach rechts · <b>rett fram</b> = geradeaus</p>",
    items: [
      ["tog", "Zug", "toog"],
      ["buss", "Bus", "büss"],
      ["fly", "Flugzeug", "flüü"],
      ["billett", "Fahrkarte", "bilett"],
      ["stasjon", "Bahnhof", "staschuun"],
      ["flyplass", "Flughafen", "flüüplass"],
      ["venstre", "links", "wenstre"],
      ["høyre", "rechts", "höire"],
      ["rett fram", "geradeaus", "rett framm"],
      ["reise", "reisen", "räise"],
      ["ferje", "Fähre", "färje"],
      ["kart", "Karte (Landkarte)", "kaat"]
    ],
    sent: [
      ["Når går toget til Bergen?", "Wann fährt der Zug nach Bergen?"],
      ["Jeg vil kjøpe en billett.", "Ich möchte eine Fahrkarte kaufen."],
      ["Gå rett fram og ta til venstre.", "Geh geradeaus und dann links."],
      ["Hvor er nærmeste busstopp?", "Wo ist die nächste Bushaltestelle?"]
    ],
    write: { task: "Schreib 2–3 Sätze über deinen letzten Urlaub. Benutze „var“ und „i fjor“ oder „i sommer“.", need: ["var"], min: 10 }
  }
  ]
},
{
  id: "B1", title: "B1 · Selbstständig", desc: "Arbeit, Perfekt, Nebensätze, Meinungen, Kultur, E-Mails.",
  lessons: [
  {
    id: "b1-1", t: "Arbeit & Beruf",
    intro: "<p><b>Hva jobber du med?</b> = Was arbeitest du?</p><p><b>Jeg jobber som …</b> = Ich arbeite als … (ohne Artikel: <i>jeg jobber som lærer</i>).</p>",
    items: [
      ["arbeidsplass", "Arbeitsplatz"],
      ["kollega", "Kollege / Kollegin"],
      ["søke jobb", "sich bewerben"],
      ["intervju", "Vorstellungsgespräch"],
      ["lønn", "Lohn / Gehalt"],
      ["erfaring", "Erfahrung"],
      ["deltid", "Teilzeit"],
      ["heltid", "Vollzeit"],
      ["sjef", "Chef"],
      ["ansvar", "Verantwortung"],
      ["sykepleier", "Krankenpfleger(in)"],
      ["møte", "Besprechung / Treffen"]
    ],
    sent: [
      ["Jeg søker en ny jobb.", "Ich suche einen neuen Job."],
      ["Hun har mye erfaring.", "Sie hat viel Erfahrung."],
      ["Lønnen er ganske god.", "Das Gehalt ist ziemlich gut."],
      ["Jeg jobber som lærer.", "Ich arbeite als Lehrer."]
    ],
    text: {
      no: "Mari er sykepleier. Hun jobber på et sykehus i Trondheim. Hun liker jobben sin fordi hun hjelper mennesker hver dag. Noen ganger jobber hun om natta, og det er slitsomt. Neste år vil hun ta videreutdanning.",
      de: "Mari ist Krankenpflegerin. Sie arbeitet in einem Krankenhaus in Trondheim. Sie mag ihre Arbeit, weil sie jeden Tag Menschen hilft. Manchmal arbeitet sie nachts, und das ist anstrengend. Nächstes Jahr will sie eine Weiterbildung machen.",
      q: [
        ["Hvor jobber Mari?", "På et sykehus", "På en skole", "I en butikk"],
        ["Hvorfor liker hun jobben?", "Fordi hun hjelper mennesker", "Fordi lønnen er høy", "Fordi hun jobber om natta"],
        ["Hva vil hun gjøre neste år?", "Ta videreutdanning", "Flytte til Oslo", "Slutte i jobben"]
      ]
    }
  },
  {
    id: "b1-2", t: "Perfekt & Erfahrungen",
    intro: "<p>Perfekt bildet man fast immer mit <b>har</b> + Partizip: <b>Jeg har vært</b> (ich bin gewesen), <b>jeg har bodd</b> (ich habe gewohnt).</p><p>Anders als im Deutschen: auch bei Bewegung meist <b>har</b>.</p>",
    items: [
      ["har vært", "bin gewesen"],
      ["har sett", "habe gesehen"],
      ["har bodd", "habe gewohnt"],
      ["har lært", "habe gelernt"],
      ["har prøvd", "habe versucht / probiert"],
      ["aldri", "nie"],
      ["ofte", "oft"],
      ["allerede", "schon / bereits"],
      ["ennå ikke", "noch nicht"],
      ["noen gang", "jemals"],
      ["nordlys", "Polarlicht"],
      ["endelig", "endlich"]
    ],
    sent: [
      ["Har du noen gang vært i Nord-Norge?", "Warst du jemals in Nordnorwegen?"],
      ["Jeg har aldri sett nordlys.", "Ich habe nie Polarlicht gesehen."],
      ["Vi har bodd her i fem år.", "Wir wohnen seit fünf Jahren hier."],
      ["Jeg har ikke spist ennå.", "Ich habe noch nicht gegessen."]
    ],
    text: {
      no: "Thomas kommer fra Tyskland. Han har bodd i Norge i to år. Han har lært mye norsk, men han har aldri prøvd å gå på ski. I vinter skal han endelig prøve. Vennene hans har lovet å hjelpe ham.",
      de: "Thomas kommt aus Deutschland. Er wohnt seit zwei Jahren in Norwegen. Er hat viel Norwegisch gelernt, aber er hat nie versucht, Ski zu fahren. Diesen Winter will er es endlich probieren. Seine Freunde haben versprochen, ihm zu helfen.",
      q: [
        ["Hvor lenge har Thomas bodd i Norge?", "I to år", "I fem år", "I ett år"],
        ["Hva har han aldri prøvd?", "Å gå på ski", "Å lage mat", "Å kjøre bil"],
        ["Hvem skal hjelpe ham?", "Vennene hans", "Læreren hans", "Moren hans"]
      ]
    }
  },
  {
    id: "b1-3", t: "Nebensätze",
    intro: "<p>Im Nebensatz rückt <b>ikke</b> (und andere Adverbien) <b>vor das Verb</b>:</p><p>Hauptsatz: <i>Jeg har <b>ikke</b> tid.</i><br>Nebensatz: <i>… fordi jeg <b>ikke</b> har tid.</i></p><p>Wichtige Bindewörter: <b>at, fordi, når, hvis, selv om, mens, som</b>.</p>",
    items: [
      ["at", "dass"],
      ["hvis", "wenn / falls"],
      ["når", "wenn / wann"],
      ["selv om", "obwohl"],
      ["mens", "während"],
      ["som", "der/die/das (Relativ)"],
      ["da", "als (Vergangenheit)"],
      ["derfor", "deshalb"],
      ["egentlig", "eigentlich"],
      ["sliten", "erschöpft"],
      ["bestille", "bestellen"],
      ["helg", "Wochenende"]
    ],
    sent: [
      ["Jeg kommer ikke fordi jeg ikke har tid.", "Ich komme nicht, weil ich keine Zeit habe."],
      ["Hvis det regner, blir vi hjemme.", "Wenn es regnet, bleiben wir zu Hause."],
      ["Han sier at han er trøtt.", "Er sagt, dass er müde ist."],
      ["Selv om det er kaldt, går vi ut.", "Obwohl es kalt ist, gehen wir raus."]
    ],
    text: {
      no: "Når Lena kommer hjem fra jobb, lager hun middag. Hvis hun er sliten, bestiller hun pizza. Hun sier at hun egentlig liker å lage mat, men at hun ofte ikke har tid. Derfor lager hun mye mat i helgene.",
      de: "Wenn Lena von der Arbeit nach Hause kommt, kocht sie Abendessen. Wenn sie erschöpft ist, bestellt sie Pizza. Sie sagt, dass sie eigentlich gern kocht, aber oft keine Zeit hat. Deshalb kocht sie am Wochenende viel vor.",
      q: [
        ["Hva gjør Lena hvis hun er sliten?", "Hun bestiller pizza", "Hun lager middag", "Hun går en tur"],
        ["Liker Lena å lage mat?", "Ja, egentlig", "Nei, aldri", "Bare pizza"],
        ["Når lager hun mye mat?", "I helgene", "Om morgenen", "På jobben"]
      ]
    },
    write: { task: "Schreib 2 Sätze mit Nebensatz. Benutze „fordi“ und „hvis“.", need: ["fordi", "hvis"], min: 10 }
  },
  {
    id: "b1-4", t: "Gefühle & Meinungen",
    intro: "<p><b>Jeg synes</b> = ich finde (eigene Meinung, Geschmack).<br><b>Jeg tror</b> = ich glaube (Vermutung).</p><p><b>Jeg er enig.</b> = Ich stimme zu. · <b>Jeg er uenig.</b> = Ich bin anderer Meinung.</p>",
    items: [
      ["glad", "froh"],
      ["lei seg", "traurig"],
      ["sint", "wütend"],
      ["redd", "ängstlich / hat Angst"],
      ["overrasket", "überrascht"],
      ["jeg synes", "ich finde"],
      ["jeg tror", "ich glaube"],
      ["enig", "einverstanden / gleicher Meinung"],
      ["uenig", "anderer Meinung"],
      ["etter min mening", "meiner Meinung nach"],
      ["spennende", "spannend"],
      ["kjedelig", "langweilig"]
    ],
    sent: [
      ["Jeg synes at filmen var spennende.", "Ich finde, dass der Film spannend war."],
      ["Er du enig med meg?", "Bist du meiner Meinung?"],
      ["Hun ble lei seg da hun hørte nyheten.", "Sie wurde traurig, als sie die Nachricht hörte."],
      ["Jeg tror ikke det.", "Das glaube ich nicht."]
    ],
    text: {
      no: "Ola synes at det er bedre å bo i byen. Der er det kafeer, kino og mange jobber. Kari er uenig. Hun mener at livet på landet er roligere, og at naturen er viktigere enn kafeer. De er enige om én ting: Norge er et vakkert land.",
      de: "Ola findet, dass es besser ist, in der Stadt zu wohnen. Dort gibt es Cafés, Kino und viele Jobs. Kari ist anderer Meinung. Sie meint, dass das Leben auf dem Land ruhiger ist und die Natur wichtiger als Cafés. In einem sind sie sich einig: Norwegen ist ein schönes Land.",
      q: [
        ["Hvor vil Ola helst bo?", "I byen", "På landet", "På fjellet"],
        ["Hva mener Kari?", "At livet på landet er roligere", "At byen er best", "At kafeer er viktigst"],
        ["Hva er de enige om?", "At Norge er vakkert", "At byen er best", "At kino er kjedelig"]
      ]
    }
  },
  {
    id: "b1-5", t: "Norwegische Kultur",
    intro: "<p>Ein paar Wörter, die man kaum übersetzen kann:</p><ul><li><b>koselig</b> – gemütlich, herzlich, schön</li><li><b>dugnad</b> – freiwilliger Gemeinschaftseinsatz</li><li><b>friluftsliv</b> – Leben draußen in der Natur</li></ul>",
    items: [
      ["koselig", "gemütlich / nett"],
      ["dugnad", "Gemeinschaftsarbeit"],
      ["friluftsliv", "Leben in der Natur"],
      ["matpakke", "Lunchpaket / Brotzeit"],
      ["hytte", "Ferienhütte"],
      ["nasjonaldagen", "der Nationalfeiertag"],
      ["fellesskap", "Gemeinschaft"],
      ["tradisjon", "Tradition"],
      ["bunad", "Tracht"],
      ["allemannsretten", "Jedermannsrecht"],
      ["nordmenn", "Norweger (Plural)"],
      ["helligdag", "Feiertag"]
    ],
    sent: [
      ["Vi drar på hytta i helgen.", "Wir fahren am Wochenende zur Hütte."],
      ["Det var en veldig koselig kveld.", "Es war ein sehr gemütlicher Abend."],
      ["Alle tar med matpakke på jobb.", "Alle nehmen ein Lunchpaket mit zur Arbeit."],
      ["Mange går med bunad på nasjonaldagen.", "Viele tragen am Nationalfeiertag Tracht."]
    ],
    text: {
      no: "Friluftsliv er en viktig del av norsk kultur. Mange nordmenn går på tur i skogen eller på fjellet hver helg. Allemannsretten gir alle rett til å gå fritt i naturen, også på privat grunn, så lenge man viser respekt. Etter turen er det koselig å drikke kakao.",
      de: "Friluftsliv ist ein wichtiger Teil der norwegischen Kultur. Viele Norweger wandern jedes Wochenende im Wald oder in den Bergen. Das Jedermannsrecht gibt allen das Recht, sich frei in der Natur zu bewegen, auch auf Privatgrund, solange man Respekt zeigt. Nach der Wanderung ist es gemütlich, Kakao zu trinken.",
      q: [
        ["Hva gjør mange nordmenn hver helg?", "De går på tur", "De går på kino", "De jobber"],
        ["Hva gir allemannsretten?", "Rett til å gå fritt i naturen", "Rett til gratis mat", "Rett til å bygge hytte"],
        ["Hva må man vise i naturen?", "Respekt", "Pass", "Billett"]
      ]
    }
  },
  {
    id: "b1-6", t: "E-Mails & Briefe",
    intro: "<p>Formelle E-Mail: Anrede <b>Hei</b> oder <b>Kjære …</b>, Schluss <b>Med vennlig hilsen</b>.</p><p>Norweger schreiben auch formell recht direkt und freundlich.</p>",
    items: [
      ["Kjære", "Liebe / Lieber"],
      ["Med vennlig hilsen", "Mit freundlichen Grüßen"],
      ["Takk for svar", "Danke für die Antwort"],
      ["vedlagt", "anbei"],
      ["i forbindelse med", "im Zusammenhang mit"],
      ["jeg ser fram til", "ich freue mich auf"],
      ["beklager", "Entschuldigung / leider"],
      ["spørsmål", "Frage"],
      ["svar", "Antwort"],
      ["søknad", "Bewerbung / Antrag"],
      ["avtale", "Termin / Vereinbarung"],
      ["snarest", "baldmöglichst"]
    ],
    sent: [
      ["Takk for e-posten din.", "Danke für deine E-Mail."],
      ["Jeg ser fram til å høre fra deg.", "Ich freue mich, von dir zu hören."],
      ["Vedlagt finner du søknaden min.", "Anbei findest du meine Bewerbung."],
      ["Beklager at jeg svarer så sent.", "Entschuldige, dass ich so spät antworte."]
    ],
    text: {
      no: "Hei Per! Takk for invitasjonen til festen på lørdag. Dessverre kan jeg ikke komme, fordi jeg skal besøke foreldrene mine i Bergen. Kanskje vi kan møtes neste uke i stedet? Jeg ser fram til å høre fra deg. Med vennlig hilsen Siri",
      de: "Hallo Per! Danke für die Einladung zur Feier am Samstag. Leider kann ich nicht kommen, weil ich meine Eltern in Bergen besuche. Vielleicht können wir uns stattdessen nächste Woche treffen? Ich freue mich, von dir zu hören. Mit freundlichen Grüßen, Siri",
      q: [
        ["Hvorfor kan ikke Siri komme?", "Hun skal besøke foreldrene sine", "Hun er syk", "Hun må jobbe"],
        ["Hva foreslår Siri?", "Å møtes neste uke", "Å avlyse festen", "Å komme senere"],
        ["Når er festen?", "På lørdag", "På fredag", "I morgen"]
      ]
    },
    write: { task: "Schreib eine kurze E-Mail: Du sagst einen Termin ab. Beginne mit „Hei“ und ende mit „Med vennlig hilsen“.", need: ["hei", "beklager", "hilsen"], min: 15 }
  }
  ]
},
{
  id: "B2", title: "B2 · Fortgeschritten", desc: "Gesellschaft, Passiv, Klima, Redewendungen, Argumentieren.",
  lessons: [
  {
    id: "b2-1", t: "Gesellschaft & Politik",
    intro: "<p>Das norwegische Parlament heißt <b>Stortinget</b>. Gewählt wird alle vier Jahre.</p><p>Zentrale Begriffe: <b>velferdsstaten</b> (Sozialstaat), <b>likestilling</b> (Gleichstellung), <b>tillit</b> (Vertrauen).</p>",
    items: [
      ["samfunn", "Gesellschaft"],
      ["regjering", "Regierung"],
      ["Stortinget", "das norwegische Parlament"],
      ["valg", "Wahl"],
      ["likestilling", "Gleichstellung"],
      ["velferdsstat", "Sozialstaat"],
      ["skatt", "Steuer"],
      ["innvandring", "Einwanderung"],
      ["ytringsfrihet", "Meinungsfreiheit"],
      ["tillit", "Vertrauen"],
      ["ulikhet", "Ungleichheit"],
      ["kommune", "Gemeinde"]
    ],
    sent: [
      ["Norge er kjent for velferdsstaten sin.", "Norwegen ist für seinen Sozialstaat bekannt."],
      ["Det er stortingsvalg hvert fjerde år.", "Alle vier Jahre ist Parlamentswahl."],
      ["Likestilling er viktig i det norske samfunnet.", "Gleichstellung ist in der norwegischen Gesellschaft wichtig."],
      ["Skattene er høye, men tjenestene er gode.", "Die Steuern sind hoch, aber die Leistungen sind gut."]
    ],
    text: {
      no: "Den norske velferdsstaten bygger på prinsippet om at alle skal ha tilgang til helsetjenester, utdanning og økonomisk trygghet. Dette finansieres i stor grad gjennom skatter. Kritikere hevder at systemet kan svekke insentivene til å jobbe, mens tilhengere peker på at høy tillit og lav ulikhet gjør samfunnet mer stabilt.",
      de: "Der norwegische Sozialstaat beruht auf dem Prinzip, dass alle Zugang zu Gesundheitsversorgung, Bildung und wirtschaftlicher Sicherheit haben sollen. Das wird größtenteils über Steuern finanziert. Kritiker behaupten, das System könne die Anreize zu arbeiten schwächen, während Befürworter darauf hinweisen, dass hohes Vertrauen und geringe Ungleichheit die Gesellschaft stabiler machen.",
      q: [
        ["Hvordan finansieres velferdsstaten?", "Gjennom skatter", "Gjennom private forsikringer", "Gjennom gaver"],
        ["Hva hevder kritikerne?", "At systemet kan svekke lysten til å jobbe", "At skattene er for lave", "At utdanning bør koste mer"],
        ["Hva mener tilhengerne?", "At tillit og lav ulikhet gir stabilitet", "At systemet bør avskaffes", "At ulikhet er positivt"]
      ]
    }
  },
  {
    id: "b2-2", t: "Passiv & formelle Sprache",
    intro: "<p>Zwei Passivformen:</p><ul><li><b>bli</b> + Partizip: <i>Huset blir bygget.</i> (Das Haus wird gebaut.)</li><li><b>-s</b>-Passiv, v. a. nach Modalverben und in Texten: <i>Huset selges.</i> / <i>Det må gjøres.</i></li></ul>",
    items: [
      ["blir bygget", "wird gebaut"],
      ["ble vedtatt", "wurde beschlossen"],
      ["selges", "wird verkauft"],
      ["må gjøres", "muss gemacht werden"],
      ["det sies at", "man sagt, dass"],
      ["ifølge", "laut / gemäß"],
      ["imidlertid", "jedoch"],
      ["dessuten", "außerdem"],
      ["følgelig", "folglich"],
      ["til tross for", "trotz"],
      ["betydelig", "erheblich"],
      ["bekymret", "besorgt"]
    ],
    sent: [
      ["Loven ble vedtatt i fjor.", "Das Gesetz wurde letztes Jahr beschlossen."],
      ["Huset selges for fem millioner kroner.", "Das Haus wird für fünf Millionen Kronen verkauft."],
      ["Ifølge rapporten øker prisene.", "Laut dem Bericht steigen die Preise."],
      ["Til tross for regnet gikk vi på tur.", "Trotz des Regens gingen wir wandern."]
    ],
    text: {
      no: "En ny bro skal bygges over fjorden. Prosjektet ble vedtatt av kommunestyret i mars, og arbeidet ventes å starte neste år. Ifølge kommunen vil broen redusere reisetiden betydelig. Enkelte innbyggere er imidlertid bekymret for konsekvensene for naturen.",
      de: "Eine neue Brücke soll über den Fjord gebaut werden. Das Projekt wurde im März vom Gemeinderat beschlossen, und die Arbeiten sollen voraussichtlich nächstes Jahr beginnen. Laut der Gemeinde wird die Brücke die Reisezeit erheblich verkürzen. Einige Einwohner sind jedoch besorgt über die Folgen für die Natur.",
      q: [
        ["Hvem vedtok prosjektet?", "Kommunestyret", "Regjeringen", "Innbyggerne"],
        ["Hva skal broen redusere?", "Reisetiden", "Prisene", "Skattene"],
        ["Hva er noen innbyggere bekymret for?", "Naturen", "Reisetiden", "Arbeidsplassene"]
      ]
    }
  },
  {
    id: "b2-3", t: "Umwelt & Klima",
    intro: "<p>Norwegen: reich durch Öl und Gas, aber fast 100 % Strom aus <b>vannkraft</b> (Wasserkraft) und Weltspitze bei <b>elbiler</b>.</p>",
    items: [
      ["klimaendringer", "Klimawandel"],
      ["utslipp", "Emissionen / Ausstoß"],
      ["fornybar energi", "erneuerbare Energie"],
      ["bærekraftig", "nachhaltig"],
      ["elbil", "Elektroauto"],
      ["gjenvinning", "Recycling"],
      ["vannkraft", "Wasserkraft"],
      ["tiltak", "Maßnahme"],
      ["forurensning", "Verschmutzung"],
      ["miljøvennlig", "umweltfreundlich"],
      ["foregangsland", "Vorreiterland"],
      ["likevel", "trotzdem"]
    ],
    sent: [
      ["Norge har mange elbiler per innbygger.", "Norwegen hat viele Elektroautos pro Einwohner."],
      ["Vi må redusere utslippene.", "Wir müssen die Emissionen senken."],
      ["Vannkraft er en fornybar energikilde.", "Wasserkraft ist eine erneuerbare Energiequelle."],
      ["Regjeringen har innført nye tiltak.", "Die Regierung hat neue Maßnahmen eingeführt."]
    ],
    text: {
      no: "Norge står overfor et paradoks: Landet har blitt rikt på olje og gass, samtidig som det ønsker å være et foregangsland i klimapolitikken. Nesten all strøm produseres av vannkraft, og elbiler utgjør en stor del av nybilsalget. Likevel eksporterer Norge store mengder fossilt brensel.",
      de: "Norwegen steht vor einem Paradox: Das Land ist durch Öl und Gas reich geworden, will aber gleichzeitig ein Vorreiter in der Klimapolitik sein. Fast der gesamte Strom wird aus Wasserkraft erzeugt, und Elektroautos machen einen großen Teil der Neuwagenverkäufe aus. Trotzdem exportiert Norwegen große Mengen fossiler Brennstoffe.",
      q: [
        ["Hva er paradokset?", "Norge eksporterer olje, men vil være klimavennlig", "Norge har ingen elbiler", "Norge har ikke strøm"],
        ["Hvordan produseres nesten all strøm?", "Med vannkraft", "Med kull", "Med atomkraft"],
        ["Hva eksporterer Norge?", "Fossilt brensel", "Elbiler", "Vannkraft"]
      ]
    }
  },
  {
    id: "b2-4", t: "Redewendungen",
    intro: "<p>Redewendungen machen deine Sprache lebendig. Wörtlich übersetzt klingen sie oft lustig:</p><p><b>å ha bein i nesa</b> = „Knochen in der Nase haben“ = durchsetzungsstark sein.</p>",
    items: [
      ["Det er ingen sak.", "Das ist kein Problem."],
      ["å slå to fluer i en smekk", "zwei Fliegen mit einer Klappe schlagen"],
      ["å ha bein i nesa", "Durchsetzungskraft haben"],
      ["ikke noe å skrive hjem om", "nichts Besonderes"],
      ["å ta det med en klype salt", "mit Vorsicht genießen"],
      ["å være på bærtur", "völlig daneben liegen"],
      ["å gå som hånd i hanske", "wie angegossen passen / reibungslos laufen"],
      ["å holde tunga rett i munnen", "konzentriert und vorsichtig sein"],
      ["Det går for seg.", "Es ist okay so / es geht."],
      ["å ha det travelt", "es eilig haben / viel zu tun haben"],
      ["å legge seg flat", "sich entschuldigen / klein beigeben"],
      ["Nå snakker vi!", "Jetzt reden wir! (Genau so!)"]
    ],
    sent: [
      ["Filmen var ikke noe å skrive hjem om.", "Der Film war nichts Besonderes."],
      ["Samarbeidet gikk som hånd i hanske.", "Die Zusammenarbeit lief reibungslos."],
      ["Du må holde tunga rett i munnen nå.", "Jetzt musst du dich konzentrieren und aufpassen."],
      ["Jeg har det veldig travelt i dag.", "Ich habe heute sehr viel zu tun."]
    ],
    text: {
      no: "– Hvordan gikk møtet? spør Lise. – Det var ikke noe å skrive hjem om, svarer Erik. Sjefen var helt på bærtur med det nye budsjettet. Men Hanne hadde bein i nesa og sa ifra. Til slutt måtte sjefen legge seg flat.",
      de: "„Wie lief das Meeting?“, fragt Lise. „Nichts Besonderes“, antwortet Erik. „Der Chef lag mit dem neuen Budget völlig daneben. Aber Hanne war durchsetzungsstark und hat es angesprochen. Am Ende musste der Chef klein beigeben.“",
      q: [
        ["Hvordan var møtet ifølge Erik?", "Ikke noe spesielt", "Fantastisk", "Veldig morsomt"],
        ["Hva gjorde Hanne?", "Hun sa tydelig ifra", "Hun sa ingenting", "Hun gikk hjem"],
        ["Hva skjedde med sjefen til slutt?", "Han måtte innrømme feilen", "Han fikk rett", "Han sluttet"]
      ]
    }
  },
  {
    id: "b2-5", t: "Argumentieren & Diskutieren",
    intro: "<p>Ein gutes Argument hat Struktur: <b>For det første … For det andre … Avslutningsvis …</b></p><p>Gegenüberstellen: <b>på den ene siden … på den andre siden …</b></p>",
    items: [
      ["på den ene siden", "einerseits"],
      ["på den andre siden", "andererseits"],
      ["derimot", "dagegen / hingegen"],
      ["for det første", "erstens"],
      ["for det andre", "zweitens"],
      ["avslutningsvis", "abschließend"],
      ["jeg vil påstå at", "ich würde behaupten, dass"],
      ["et viktig argument", "ein wichtiges Argument"],
      ["det er grunn til å tro", "es gibt Grund zur Annahme"],
      ["en fordel", "ein Vorteil"],
      ["en ulempe", "ein Nachteil"],
      ["hjemmekontor", "Homeoffice"]
    ],
    sent: [
      ["På den ene siden sparer man tid.", "Einerseits spart man Zeit."],
      ["På den andre siden blir man mer isolert.", "Andererseits wird man isolierter."],
      ["En stor fordel er fleksibiliteten.", "Ein großer Vorteil ist die Flexibilität."],
      ["Avslutningsvis vil jeg si at begge deler har verdi.", "Abschließend möchte ich sagen, dass beides seinen Wert hat."]
    ],
    text: {
      no: "Hjemmekontor har blitt vanlig etter pandemien. For det første sparer de ansatte tid fordi de slipper å reise til jobb. For det andre kan mange konsentrere seg bedre hjemme. På den andre siden savner mange det sosiale fellesskapet på arbeidsplassen. Det er derfor grunn til å tro at en kombinasjon er den beste løsningen.",
      de: "Homeoffice ist nach der Pandemie üblich geworden. Erstens sparen die Angestellten Zeit, weil sie nicht zur Arbeit fahren müssen. Zweitens können sich viele zu Hause besser konzentrieren. Andererseits vermissen viele die soziale Gemeinschaft am Arbeitsplatz. Es gibt daher Grund zur Annahme, dass eine Kombination die beste Lösung ist.",
      q: [
        ["Hva er det første argumentet for hjemmekontor?", "Man sparer reisetid", "Man tjener mer", "Man får nye venner"],
        ["Hva savner mange?", "Det sosiale fellesskapet", "Bilen sin", "Lange møter"],
        ["Hva er konklusjonen?", "En kombinasjon er best", "Bare hjemmekontor", "Bare kontor"]
      ]
    },
    write: { task: "Schreib 3 Sätze für oder gegen Homeoffice. Benutze „på den ene siden“ und „på den andre siden“.", need: ["ene siden", "andre siden"], min: 20 }
  }
  ]
},
{
  id: "C1", title: "C1 · Kompetent", desc: "Nuancen, Nynorsk & Dialekte, Literatur, akademische Sprache, Modalpartikeln.",
  lessons: [
  {
    id: "c1-1", t: "Nuancierter Wortschatz",
    intro: "<p>Auf C1-Niveau geht es um <b>präzise</b> Wörter statt einfacher: nicht nur <i>si</i> (sagen), sondern <b>påpeke, fremheve, antyde</b>.</p>",
    items: [
      ["å påpeke", "hinweisen auf"],
      ["å fremheve", "hervorheben"],
      ["å antyde", "andeuten"],
      ["å bagatellisere", "verharmlosen"],
      ["å underbygge", "untermauern"],
      ["en forutsetning", "eine Voraussetzung"],
      ["en konsekvens", "eine Folge"],
      ["vesentlig", "wesentlich"],
      ["tvetydig", "zweideutig"],
      ["iøynefallende", "auffällig"],
      ["å tilstrebe", "anstreben"],
      ["åpenbar", "offensichtlich"]
    ],
    sent: [
      ["Forskeren påpekte flere svakheter i studien.", "Der Forscher wies auf mehrere Schwächen der Studie hin."],
      ["Hun antydet at hun kanskje ville slutte.", "Sie deutete an, dass sie vielleicht aufhören würde."],
      ["Det er vesentlig å underbygge påstandene sine.", "Es ist wesentlich, seine Behauptungen zu untermauern."],
      ["Formuleringen var bevisst tvetydig.", "Die Formulierung war bewusst zweideutig."]
    ],
    text: {
      no: "I debatten fremhevet statsråden at reformen var en forutsetning for økonomisk vekst. Opposisjonen påpekte derimot at regjeringen bagatelliserte konsekvensene for distriktene. Flere kommentatorer antydet at uenigheten handlet mindre om fakta enn om verdier.",
      de: "In der Debatte hob der Minister hervor, dass die Reform eine Voraussetzung für Wirtschaftswachstum sei. Die Opposition wies dagegen darauf hin, dass die Regierung die Folgen für die ländlichen Regionen verharmlose. Mehrere Kommentatoren deuteten an, dass es bei dem Streit weniger um Fakten als um Werte gehe.",
      q: [
        ["Hva fremhevet statsråden?", "At reformen var nødvendig for vekst", "At reformen var unødvendig", "At distriktene var viktigst"],
        ["Hva mente opposisjonen?", "At konsekvensene ble bagatellisert", "At reformen var for liten", "At regjeringen hadde rett"],
        ["Hva antydet kommentatorene?", "At uenigheten handlet om verdier", "At alle var enige", "At fakta var feil"]
      ]
    }
  },
  {
    id: "c1-2", t: "Nynorsk & Dialekte",
    intro: "<p>Norwegen hat <b>zwei Schriftsprachen</b>: Bokmål (ca. 85–90 %) und Nynorsk (stark an der Westküste). Und fast alle sprechen im Alltag <b>Dialekt</b>.</p><p>Hier lernst du Nynorsk-/Dialektformen zu <b>verstehen</b>. Gefragt wird nach der Bedeutung.</p>",
    items: [
      ["eg", "ich (Nynorsk: jeg)"],
      ["ikkje", "nicht (Nynorsk: ikke)"],
      ["kva", "was (Nynorsk: hva)"],
      ["kor", "wo / wie (Nynorsk: hvor)"],
      ["korleis", "wie (Nynorsk: hvordan)"],
      ["kvifor", "warum (Nynorsk: hvorfor)"],
      ["heime", "zu Hause (Nynorsk: hjemme)"],
      ["berre", "nur (Nynorsk: bare)"],
      ["nokon", "jemand (Nynorsk: noen)"],
      ["mykje", "viel (Nynorsk: mye)"],
      ["veit", "weiß (Nynorsk: vet)"],
      ["frå", "von / aus (Nynorsk: fra)"]
    ],
    sent: [
      ["Eg veit ikkje kva du meiner.", "Ich weiß nicht, was du meinst."],
      ["Korleis har du det?", "Wie geht es dir?"],
      ["Eg er heime i dag.", "Ich bin heute zu Hause."],
      ["Kvifor kjem du ikkje?", "Warum kommst du nicht?"]
    ],
    text: {
      no: "I Norge finnes det to offisielle skriftspråk: bokmål og nynorsk. Et stort flertall skriver bokmål, men nynorsk står sterkt på Vestlandet. I tillegg snakker de fleste nordmenn dialekt i hverdagen, og det er sosialt akseptert å bruke dialekt både på Stortinget og på TV.",
      de: "In Norwegen gibt es zwei offizielle Schriftsprachen: Bokmål und Nynorsk. Eine große Mehrheit schreibt Bokmål, aber Nynorsk ist an der Westküste stark. Außerdem sprechen die meisten Norweger im Alltag Dialekt, und es ist gesellschaftlich akzeptiert, Dialekt sowohl im Parlament als auch im Fernsehen zu verwenden.",
      q: [
        ["Hvor mange offisielle skriftspråk har Norge?", "To", "Ett", "Fire"],
        ["Hvor står nynorsk sterkt?", "På Vestlandet", "I Oslo", "I Nord-Sverige"],
        ["Er det akseptert å snakke dialekt på TV?", "Ja, det er vanlig", "Nei, det er forbudt", "Bare om natta"]
      ]
    }
  },
  {
    id: "c1-3", t: "Literatur & Medien",
    intro: "<p>Norwegens bekanntester Autor ist <b>Henrik Ibsen</b>. Zeitungen unterscheiden <b>nyheter</b> (Nachrichten), <b>kronikk</b> (Gastbeitrag) und <b>leder</b> (Leitartikel).</p>",
    items: [
      ["en roman", "ein Roman"],
      ["en novelle", "eine Kurzgeschichte"],
      ["en forfatter", "ein Autor / eine Autorin"],
      ["et dikt", "ein Gedicht"],
      ["et skuespill", "ein Theaterstück"],
      ["en anmeldelse", "eine Rezension"],
      ["å utgi", "veröffentlichen"],
      ["en kronikk", "ein Gastbeitrag"],
      ["en leder", "ein Leitartikel"],
      ["kildekritikk", "Quellenkritik"],
      ["å vekke oppsikt", "Aufsehen erregen"],
      ["en hovedperson", "eine Hauptfigur"]
    ],
    sent: [
      ["Romanen ble utgitt i fjor høst.", "Der Roman wurde letzten Herbst veröffentlicht."],
      ["Anmeldelsen var svært positiv.", "Die Rezension war sehr positiv."],
      ["Kildekritikk er viktig i en digital tid.", "Quellenkritik ist in einer digitalen Zeit wichtig."],
      ["Skuespillet vakte stor oppsikt.", "Das Theaterstück erregte großes Aufsehen."]
    ],
    text: {
      no: "Henrik Ibsens skuespill «Et dukkehjem» fra 1879 vakte stor oppsikt. Hovedpersonen Nora forlater mannen og barna for å finne seg selv. Mange samtidige kritikere oppfattet slutten som en provokasjon, mens andre så stykket som et viktig innlegg i debatten om kvinners rettigheter.",
      de: "Henrik Ibsens Theaterstück „Nora oder Ein Puppenheim“ von 1879 erregte großes Aufsehen. Die Hauptfigur Nora verlässt Mann und Kinder, um sich selbst zu finden. Viele zeitgenössische Kritiker empfanden das Ende als Provokation, während andere das Stück als wichtigen Beitrag zur Debatte über Frauenrechte sahen.",
      q: [
        ["Hva gjør Nora på slutten?", "Hun forlater familien", "Hun gifter seg", "Hun blir forfatter"],
        ["Hvordan reagerte mange kritikere?", "De så slutten som en provokasjon", "De var likegyldige", "De forsto ikke stykket"],
        ["Hvilken debatt bidro stykket til?", "Om kvinners rettigheter", "Om klima", "Om skatt"]
      ]
    }
  },
  {
    id: "c1-4", t: "Akademisch & beruflich",
    intro: "<p>In Uni und Beruf: <b>drøfte</b> (erörtern), <b>redegjøre for</b> (darlegen), <b>med utgangspunkt i</b> (ausgehend von).</p><p>Typische Prüfungsaufgabe: <i>Drøft problemstillingen med utgangspunkt i teksten.</i></p>",
    items: [
      ["en problemstilling", "eine Fragestellung"],
      ["å drøfte", "erörtern / diskutieren"],
      ["å redegjøre for", "darlegen / erläutern"],
      ["en hypotese", "eine Hypothese"],
      ["empiri", "empirische Daten"],
      ["et utvalg", "eine Stichprobe / Auswahl"],
      ["å konkludere", "schlussfolgern"],
      ["en avhandling", "eine Abhandlung / Dissertation"],
      ["i lys av", "im Lichte von / angesichts"],
      ["med utgangspunkt i", "ausgehend von"],
      ["funn", "Befunde / Ergebnisse"],
      ["pålitelig", "zuverlässig"]
    ],
    sent: [
      ["Oppgaven skal drøfte en aktuell problemstilling.", "Die Arbeit soll eine aktuelle Fragestellung erörtern."],
      ["Redegjør for de viktigste funnene.", "Lege die wichtigsten Ergebnisse dar."],
      ["Utvalget er for lite til å konkludere.", "Die Stichprobe ist zu klein, um Schlüsse zu ziehen."],
      ["I lys av nye data må hypotesen justeres.", "Angesichts neuer Daten muss die Hypothese angepasst werden."]
    ],
    text: {
      no: "Studien undersøker hvordan hjemmekontor påvirker produktiviteten. Med utgangspunkt i en spørreundersøkelse blant 800 ansatte drøftes hypotesen om at fleksibilitet gir høyere effektivitet. Funnene tyder på en svak positiv sammenheng, men utvalget er ikke representativt, og resultatene bør derfor tolkes med forsiktighet.",
      de: "Die Studie untersucht, wie Homeoffice die Produktivität beeinflusst. Ausgehend von einer Umfrage unter 800 Angestellten wird die Hypothese erörtert, dass Flexibilität zu höherer Effizienz führt. Die Ergebnisse deuten auf einen schwachen positiven Zusammenhang hin, aber die Stichprobe ist nicht repräsentativ, daher sollten die Ergebnisse mit Vorsicht interpretiert werden.",
      q: [
        ["Hva undersøker studien?", "Hjemmekontor og produktivitet", "Lønn og trivsel", "Skole og helse"],
        ["Hva tyder funnene på?", "En svak positiv sammenheng", "En sterk negativ sammenheng", "Ingen sammenheng"],
        ["Hvorfor bør resultatene tolkes forsiktig?", "Utvalget er ikke representativt", "Studien er for gammel", "Spørsmålene var feil"]
      ]
    },
    write: { task: "Fasse eine Studie oder einen Artikel in 3 Sätzen zusammen. Benutze „med utgangspunkt i“ und „funnene“.", need: ["utgangspunkt", "funn"], min: 25 }
  },
  {
    id: "c1-5", t: "Modalpartikeln & feine Töne",
    intro: "<p>Kleine Wörter, große Wirkung – wie <i>ja, doch, schon</i> im Deutschen:</p><ul><li><b>jo</b> – ja (bekannt): <i>Det er jo sant.</i></li><li><b>vel</b> – doch / wohl: <i>Du kommer vel?</i></li><li><b>nok</b> – schon / wohl: <i>Det går nok bra.</i></li><li><b>da</b> – schon / doch (Aufforderung): <i>Kom igjen da!</i></li></ul>",
    items: [
      ["Det er jo sant.", "Das ist ja wahr."],
      ["Du kommer vel?", "Du kommst doch, oder?"],
      ["Det går nok bra.", "Das wird schon gut gehen."],
      ["Kom igjen da!", "Komm schon!"],
      ["altså", "also / das heißt"],
      ["liksom", "irgendwie / sozusagen"],
      ["i grunnen", "im Grunde"],
      ["for så vidt", "an sich / insofern"],
      ["uansett", "jedenfalls / egal"],
      ["visst", "angeblich / anscheinend"],
      ["nemlig", "nämlich / genau"],
      ["Ja vel.", "Na gut. / Aha."]
    ],
    sent: [
      ["Han er visst syk i dag.", "Er ist anscheinend heute krank."],
      ["Det var for så vidt en god idé.", "Es war an sich eine gute Idee."],
      ["Jeg kommer uansett i morgen.", "Ich komme jedenfalls morgen."],
      ["Du har jo rett.", "Du hast ja recht."]
    ],
    text: {
      no: "– Du blir vel med på festen i kveld? – Tja, jeg er litt sliten, altså. – Kom igjen da! Det blir jo gøy. – Det er for så vidt sant. Jeg kommer nok, men bare en times tid. – Nemlig! Det er uansett bedre enn å sitte hjemme.",
      de: "„Du kommst doch heute Abend mit zur Party?“ – „Na ja, ich bin halt ein bisschen müde.“ – „Komm schon! Das wird ja lustig.“ – „Das stimmt an sich. Ich komme wohl, aber nur so eine Stunde.“ – „Genau! Das ist jedenfalls besser, als zu Hause zu sitzen.“",
      q: [
        ["Hvorfor nøler personen?", "Hun er litt sliten", "Hun har ikke tid", "Hun liker ikke fester"],
        ["Hva bestemmer hun seg for?", "Å komme en times tid", "Å bli hjemme", "Å bli hele natta"],
        ["Hva betyr «nok» i «Jeg kommer nok»?", "Sannsynligvis", "Aldri", "Allerede"]
      ]
    }
  }
  ]
}
];

// Ausspracheführer (Tab „Laute“)
window.SOUNDS = [
  { h: "Vokale", list: [
    ["a", "wie in „Vater“", "mat"], ["e", "wie in „See“", "se"], ["i", "wie in „Liebe“", "vi"],
    ["o", "meist wie „u“", "bok"], ["u", "zwischen u und ü", "hus"], ["y", "wie „ü“", "by"],
    ["æ", "wie „ä“", "bær"], ["ø", "wie „ö“", "søt"], ["å", "offenes „o“", "gå"]
  ]},
  { h: "Doppellaute", list: [
    ["ei", "wie „äi“", "hei"], ["øy", "wie „öi“", "høy"], ["au", "wie „äu“", "sau"]
  ]},
  { h: "Besondere Konsonanten", list: [
    ["kj / tj", "wie „ch“ in „ich“", "kjøre"], ["sj / skj", "wie „sch“", "sjø"],
    ["sk + i/y/ø", "wie „sch“", "ski"], ["k + i/y", "wie „ch“ in „ich“", "kino"],
    ["g + i/y", "wie „j“", "gi"], ["hv / hj", "h ist stumm", "hva"],
    ["rs", "wie „sch“", "norsk"], ["rt / rd / rn", "weiche, „zurückgerollte“ Laute", "kort"],
    ["-d am Ende", "oft stumm", "god"], ["-et (bestimmt)", "t ist stumm", "huset"]
  ]},
  { h: "Silben & Betonung", list: [
    ["ˈkjø·re", "betont wird meist die 1. Silbe", "kjøre"],
    ["bu·ˈtikk", "Fremdwörter: oft hinten betont", "butikk"],
    ["for·ˈstår", "Vorsilben be-/for- sind oft unbetont", "forstår"],
    ["stu·ˈde·re", "Verben auf -ere: Betonung auf -e-", "studere"]
  ]},
  { h: "Tonfall (Tonem)", list: [
    ["Ton 1", "einfacher Ton: bønder (Bauern)", "bønder"],
    ["Ton 2", "doppelter „Singsang“: bønner (Bohnen)", "bønner"],
    ["Ton 1", "tanken (der Tank)", "tanken"],
    ["Ton 2", "tanken (der Gedanke)", "tanken"]
  ]}
];
