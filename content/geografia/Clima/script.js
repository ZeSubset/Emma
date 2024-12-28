let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Il Clima",
  "subtitle": "Scopri le caratteristiche del clima e i suoi elementi principali.",
  "mainText": {
    "heading": "",
    "text": [
      // "Precipitazioni, temperatura, vento e umidità sono fenomeni atmosferici.",
      // "Il clima di un luogo è l’insieme dei fenomeni atmosferici che osserviamo in quel luogo nei diversi periodi dell’anno.",
      // "Le precipitazioni comprendono pioggia, neve e grandine. Un clima piovoso significa che piove spesso durante l’anno, mentre un clima asciutto significa che piove poco.",
      // "La temperatura indica la quantità di calore presente nell’aria. In alcuni luoghi le temperature sono alte e fa caldo, in altri le temperature sono basse e fa freddo.",
      // "Il vento è lo spostamento dell’aria da una zona all’altra e può rendere il clima più fresco.",
      // "L’umidità è la quantità di vapore acqueo presente nell’aria. In luoghi con molto vapore acqueo il clima è umido, mentre in luoghi con poco vapore acqueo il clima è secco."
    ]
  },
  "quiz": [
    
    {
      "question": "Che cosa sono le precipitazioni?",
      "answers": [
        { "text": "Pioggia, neve, grandine.", "correct": true },
        { "text": "Il calore presente nell’aria.", "correct": false },
        { "text": "Il movimento del vento.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è la temperatura?",
      "answers": [
        { "text": "Il movimento dell’acqua sulla Terra.", "correct": false },
        { "text": "La quantità di calore presente nell’aria.", "correct": true },
        { "text": "Il livello di umidità nell’aria.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è il vento?",
      "answers": [
        { "text": "Il calore presente nell’aria.", "correct": false },
        { "text": "La quantità di pioggia che cade in un anno.", "correct": false },
        { "text": "Lo spostamento dell’aria da una zona all’altra.", "correct": true }
      ]
    },
    {
      "question": "Che cos’è l’umidità?",
      "answers": [
        { "text": "La quantità di pioggia che cade in un giorno.", "correct": false },
        { "text": "La quantità di vapore acqueo presente nell’aria.", "correct": true },
        { "text": "Il movimento dell’aria da una zona all’altra.", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
