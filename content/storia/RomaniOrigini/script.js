let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Dalle Origini alla Monarchia",
  "subtitle": "Scopri come nacque Roma e il suo sviluppo durante la Monarchia.",
  "mainText": {
    "heading": "Dalle Origini alla Monarchia",
    "text": [
      "Vicino alle rive del Tevere il terreno era paludoso, perciò i Latini costruirono i villaggi sui <strong>sette colli</strong> che sorgevano lì vicino. All’inizio scelsero il <strong>colle Palatino</strong> perché era il più vicino al fiume: il Tevere infatti era navigabile ed era perciò una comoda via di comunicazione.",
      "I Latini impararono anche a sfruttare le <strong>saline</strong> alla foce del Tevere. Il sale era molto importante perché serviva per conservare i cibi.",
      "Grazie al commercio del sale, i villaggi si arricchirono e si ingrandirono fino a unirsi: iniziava così la storia di <strong>Roma</strong>.",
      "Secondo la leggenda, i due gemelli <strong>Romolo e Remo</strong> furono abbandonati appena nati nelle acque del Tevere. I bambini furono salvati da una lupa che li trovò ai piedi del colle Palatino e li allattò. Diventati adulti, i due gemelli tornarono sul Palatino e lì Romolo fondò la città di Roma: era il <strong>21 aprile del 753 a.C.</strong>.",
      "Fra il <strong>753 a.C.</strong> e il <strong>509 a.C.</strong> Roma fu governata dai re (<strong>Monarchia</strong>). Secondo la tradizione, i re di Roma furono <strong>sette</strong>: Romolo, Numa Pompilio, Tullo Ostilio, Anco Marzio, Tarquinio Prisco, Servio Tullio, Tarquinio il Superbo."
    ]
  },
  "quiz": [
    {
      "question": "Su quale colle fu fondata Roma?",
      "answers": [
        { "text": "Colle Aventino", "correct": false },
        { "text": "Colle Quirinale", "correct": false },
        { "text": "Colle Palatino", "correct": true }
      ]
    },
    {
      "question": "Secondo la leggenda, quanti furono i gemelli legati alla fondazione di Roma?",
      "answers": [
        { "text": "Uno: Romolo", "correct": false },
        { "text": "Due: Romolo e Remo", "correct": true },
        { "text": "Tre gemelli", "correct": false }
      ]
    },
    {
      "question": "Perché il sale era così importante per i Latini?",
      "answers": [
        { "text": "Era una decorazione preziosa.", "correct": false },
        { "text": "Serviva per conservare i cibi.", "correct": true },
        { "text": "Si usava per costruire i villaggi.", "correct": false }
      ]
    },
    {
      "question": "Secondo la tradizione, quanti furono i re di Roma?",
      "answers": [
        { "text": "Sette", "correct": true },
        { "text": "Dieci", "correct": false },
        { "text": "Cinque", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
