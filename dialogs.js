// Mini-Dialoge zum Mitsprechen. Du sprichst immer die Rolle „Du“ (B).
// lines: [Rolle, norwegisch, deutsch]
window.DIALOGS = [
  { id: "d1", lv: "A1", t: "Kennenlernen", icon: "👋", lines: [
    ["A", "Hei! Jeg heter Ingrid. Hva heter du?", "Hallo! Ich heiße Ingrid. Wie heißt du?"],
    ["B", "Hei! Jeg heter Max.", "Hallo! Ich heiße Max."],
    ["A", "Hyggelig å treffe deg. Hvor kommer du fra?", "Schön, dich kennenzulernen. Woher kommst du?"],
    ["B", "Jeg kommer fra Tyskland.", "Ich komme aus Deutschland."],
    ["A", "Så kult! Snakker du norsk?", "Wie cool! Sprichst du Norwegisch?"],
    ["B", "Ja, litt. Jeg lærer norsk.", "Ja, ein bisschen. Ich lerne Norwegisch."]
  ]},
  { id: "d2", lv: "A1", t: "Im Café", icon: "☕", lines: [
    ["A", "Hei! Hva skal det være?", "Hallo! Was darf es sein?"],
    ["B", "Jeg vil gjerne ha en kaffe, takk.", "Ich hätte gern einen Kaffee, bitte."],
    ["A", "Noe å spise?", "Etwas zu essen?"],
    ["B", "Ja, en skolebolle, takk.", "Ja, eine „Skolebolle“ (Hefeschnecke mit Vanillecreme), bitte."],
    ["A", "Det blir åtti kroner.", "Das macht achtzig Kronen."],
    ["B", "Kan jeg betale med kort?", "Kann ich mit Karte zahlen?"],
    ["A", "Ja, selvfølgelig.", "Ja, natürlich."]
  ]},
  { id: "d3", lv: "A1", t: "Nach der Uhrzeit fragen", icon: "🕒", lines: [
    ["B", "Unnskyld, hva er klokka?", "Entschuldigung, wie spät ist es?"],
    ["A", "Klokka er halv tre.", "Es ist halb drei."],
    ["B", "Takk! Når går bussen?", "Danke! Wann fährt der Bus?"],
    ["A", "Om ti minutter.", "In zehn Minuten."],
    ["B", "Tusen takk!", "Vielen Dank!"]
  ]},
  { id: "d4", lv: "A2", t: "Im Kleidergeschäft", icon: "🧥", lines: [
    ["A", "Hei, kan jeg hjelpe deg?", "Hallo, kann ich dir helfen?"],
    ["B", "Ja, jeg trenger en ny jakke.", "Ja, ich brauche eine neue Jacke."],
    ["A", "Hvilken størrelse bruker du?", "Welche Größe hast du?"],
    ["B", "Medium, tror jeg.", "Medium, glaube ich."],
    ["A", "Denne er på salg nå.", "Diese ist gerade im Angebot."],
    ["B", "Kan jeg prøve den?", "Kann ich sie anprobieren?"],
    ["A", "Ja, prøverommet er der borte.", "Ja, die Umkleide ist dort drüben."]
  ]},
  { id: "d5", lv: "A2", t: "Nach dem Weg fragen", icon: "🗺️", lines: [
    ["B", "Unnskyld, hvor er togstasjonen?", "Entschuldigung, wo ist der Bahnhof?"],
    ["A", "Gå rett fram og ta til høyre ved kirken.", "Geh geradeaus und bieg an der Kirche rechts ab."],
    ["B", "Er det langt herfra?", "Ist es weit von hier?"],
    ["A", "Nei, bare fem minutter å gå.", "Nein, nur fünf Minuten zu Fuß."],
    ["B", "Takk for hjelpen!", "Danke für die Hilfe!"]
  ]},
  { id: "d6", lv: "A2", t: "Beim Arzt", icon: "🩺", lines: [
    ["A", "Hva kan jeg hjelpe deg med?", "Womit kann ich dir helfen?"],
    ["B", "Jeg har vondt i halsen og feber.", "Ich habe Halsschmerzen und Fieber."],
    ["A", "Hvor lenge har du vært syk?", "Wie lange bist du schon krank?"],
    ["B", "Siden i går.", "Seit gestern."],
    ["A", "Du må hvile og drikke mye vann.", "Du musst dich ausruhen und viel Wasser trinken."],
    ["B", "Trenger jeg medisin?", "Brauche ich Medizin?"]
  ]},
  { id: "d7", lv: "B1", t: "Vorstellungsgespräch", icon: "💼", lines: [
    ["A", "Velkommen! Fortell litt om deg selv.", "Willkommen! Erzähl ein bisschen von dir."],
    ["B", "Jeg er ingeniør og har jobbet i fem år.", "Ich bin Ingenieur und arbeite seit fünf Jahren im Beruf."],
    ["A", "Hvorfor vil du jobbe hos oss?", "Warum möchtest du bei uns arbeiten?"],
    ["B", "Fordi jeg synes at prosjektene deres er spennende.", "Weil ich eure Projekte spannend finde."],
    ["A", "Hva er dine sterke sider?", "Was sind deine Stärken?"],
    ["B", "Jeg er strukturert og liker å jobbe i team.", "Ich bin strukturiert und arbeite gern im Team."]
  ]},
  { id: "d8", lv: "B1", t: "Einladung zur Hütte", icon: "🏡", lines: [
    ["A", "Vil du bli med på hytta i helgen?", "Willst du am Wochenende mit zur Hütte kommen?"],
    ["B", "Gjerne! Hva skal vi gjøre der?", "Gern! Was machen wir dort?"],
    ["A", "Vi skal gå på ski og spise god mat.", "Wir gehen Ski fahren und essen gut."],
    ["B", "Det høres koselig ut. Hva skal jeg ta med?", "Das klingt gemütlich. Was soll ich mitbringen?"],
    ["A", "Bare varme klær og godt humør.", "Nur warme Kleidung und gute Laune."]
  ]},
  { id: "d9", lv: "B2", t: "Diskussion: Homeoffice", icon: "🗣️", lines: [
    ["A", "Jeg synes at alle burde jobbe hjemmefra.", "Ich finde, alle sollten von zu Hause arbeiten."],
    ["B", "Det er jeg ikke helt enig i.", "Da bin ich nicht ganz einverstanden."],
    ["A", "Hvorfor ikke? Man sparer jo mye tid.", "Warum nicht? Man spart doch viel Zeit."],
    ["B", "På den ene siden ja, men på den andre siden savner man kollegene.", "Einerseits ja, aber andererseits vermisst man die Kollegen."],
    ["A", "Så du mener at en kombinasjon er best?", "Du meinst also, eine Kombination ist am besten?"],
    ["B", "Nettopp, det er det beste av begge verdener.", "Genau, das ist das Beste aus beiden Welten."]
  ]},
  { id: "d10", lv: "C1", t: "Besprechung leiten", icon: "📊", lines: [
    ["B", "La oss begynne. Dagens hovedtema er budsjettet.", "Fangen wir an. Das Hauptthema heute ist das Budget."],
    ["A", "Jeg vil gjerne påpeke at kostnadene har økt betydelig.", "Ich möchte darauf hinweisen, dass die Kosten erheblich gestiegen sind."],
    ["B", "Det er et godt poeng. Kan du underbygge det med tall?", "Guter Punkt. Kannst du das mit Zahlen untermauern?"],
    ["A", "Ja, rapporten viser en økning på femten prosent.", "Ja, der Bericht zeigt einen Anstieg um fünfzehn Prozent."],
    ["B", "I lys av dette må vi revurdere prioriteringene våre.", "Angesichts dessen müssen wir unsere Prioritäten überdenken."]
  ]}
];
