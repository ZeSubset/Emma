let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Gli Angoli",
  "subtitle": "Scopri le caratteristiche e i tipi di angoli.",
  "mainText": {
    "heading": "Gli Angoli",
    "text": [
      "L’<strong>angolo</strong> è compreso tra due <strong>semirette</strong> che si chiamano <strong>lati</strong>.",
      "Il punto di origine delle due semirette si chiama <strong>vertice</strong>.",
      "Di un angolo possiamo misurare l’<strong>ampiezza</strong>.",
      "Immagina di ruotare uno dei due lati dell’angolo: ottieni vari tipi di angolo. Osserva:",
      "<ul>",
      "<li><strong>Angolo acuto</strong>: Un lato ha compiuto meno di un quarto di giro.</li>",
      "<li><strong>Angolo retto</strong>: Un lato ha compiuto un quarto di giro.</li>",
      "<li><strong>Angolo ottuso</strong>: Un lato ha compiuto più di un quarto di giro.</li>",
      "<li><strong>Angolo piatto</strong>: Un lato ha compiuto metà giro.</li>",
      "<li><strong>Angolo giro</strong>: Un lato ha compiuto un giro completo.</li>",
      "</ul>"
    ]
  },
  "quiz": [
    {
      "question": "Che cos’è un angolo acuto?",
      "answers": [
        { "text": "Un angolo con un’ampiezza minore di un quarto di giro.", "correct": true },
        { "text": "Un angolo con un’ampiezza di un quarto di giro.", "correct": false },
        { "text": "Un angolo con un’ampiezza di metà giro.", "correct": false }
      ]
    },
    {
      "question": "Qual è la caratteristica di un angolo retto?",
      "answers": [
        { "text": "Ha un’ampiezza di un quarto di giro.", "correct": true },
        { "text": "Ha un’ampiezza maggiore di un quarto di giro.", "correct": false },
        { "text": "Ha un’ampiezza di un giro completo.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è un angolo piatto?",
      "answers": [
        { "text": "Un angolo con un’ampiezza di metà giro.", "correct": true },
        { "text": "Un angolo con un’ampiezza di un quarto di giro.", "correct": false },
        { "text": "Un angolo con un’ampiezza minore di un quarto di giro.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è un angolo giro?",
      "answers": [
        { "text": "Un angolo con un’ampiezza di un giro completo.", "correct": true },
        { "text": "Un angolo con un’ampiezza di metà giro.", "correct": false },
        { "text": "Un angolo con un’ampiezza di un quarto di giro.", "correct": false }
      ]
    },
    {
      "question": "Come si chiama il punto di origine delle due semirette che formano un angolo?",
      "answers": [
        { "text": "Vertice", "correct": true },
        { "text": "Lato", "correct": false },
        { "text": "Ampiezza", "correct": false }
      ]
    }
  ]
}

// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
