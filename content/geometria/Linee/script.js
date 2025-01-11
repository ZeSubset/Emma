let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Le Linee",
  "subtitle": "Scopri i vari tipi di linee e le loro caratteristiche.",
  "mainText": {
    "heading": "Le Linee",
    "text": [
      "Le linee possono essere di <strong>tanti tipi</strong>. Osservale e ripassale con i colori.",
      "<ul>",
      "<li><strong>Aperta</strong></li>",
      "<li><strong>Chiusa</strong></li>",
      "<li><strong>Curva</strong></li>",
      "<li><strong>Retta</strong></li>",
      "<li><strong>Spezzata</strong></li>",
      "<li><strong>Mista</strong></li>",
      "</ul>",
      "Osserva:",
      "<ul>",
      "<li>La <strong>retta</strong> è una linea che non ha un inizio né una fine.</li>",
      "<li>La <strong>semiretta</strong> ha un inizio ma non una fine.</li>",
      "<li>Il <strong>segmento</strong> ha un inizio e una fine.</li>",
      "</ul>",
      "Le rette possono essere:",
      "<ul>",
      "<li><strong>Orizzontali</strong></li>",
      "<li><strong>Verticali</strong></li>",
      "<li><strong>Oblique</strong></li>",
      "</ul>",
      "Due rette possono essere:",
      "<ul>",
      "<li><strong>Parallele</strong>: non si incontrano mai.</li>",
      "<li><strong>Incidenti</strong>: si incontrano in un punto.</li>",
      "<li><strong>Perpendicolari</strong>: si incontrano in un punto e dividono il piano in 4 parti uguali.</li>",
      "</ul>"
    ]
  },
  "quiz": [
    // {
    //   "question": "Che cos’è una retta?",
    //   "answers": [
    //     { "text": "Una linea che non ha un inizio né una fine.", "correct": true },
    //     { "text": "Una linea che ha un inizio e una fine.", "correct": false },
    //     { "text": "Una linea che ha un inizio ma non una fine.", "correct": false }
    //   ]
    // },
    {
      "question": "Che cos’è un segmento?",
      "answers": [
        
        { "text": "Una linea che non ha un inizio né una fine.", "correct": false },
        { "text": "Una linea che ha un inizio ma non una fine.", "correct": false },
        { "text": "Una linea che ha un inizio e una fine.", "correct": true },
      ]
    },
    {
      "question": "Che cosa significa che due rette sono parallele?",
      "answers": [
        
        { "text": "Si incontrano in un punto.", "correct": false },
        { "text": "Non si incontrano mai.", "correct": true },
        { "text": "Dividono il piano in 4 parti uguali.", "correct": false }
      ]
    },
    {
      "question": "Cosa distingue due rette perpendicolari?",
      "answers": [
        { "text": "Si incontrano in un punto e dividono il piano in 4 parti uguali.", "correct": true },
        { "text": "Non si incontrano mai.", "correct": false },
        { "text": "Si incontrano in un punto.", "correct": false }
      ]
    },
    // {
    //   "question": "Che cos’è una semiretta?",
    //   "answers": [
        
    //     { "text": "Una linea che ha un inizio e una fine.", "correct": false },
    //     { "text": "Una linea che non ha un inizio né una fine.", "correct": false },
    //     { "text": "Una linea che ha un inizio ma non una fine.", "correct": true },
    //   ]
    // }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
