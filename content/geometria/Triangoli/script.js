let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "I Triangoli",
  "subtitle": "Impara i tipi di triangoli e le loro caratteristiche.",
  "mainText": {
    "heading": "I Triangoli",
    "text": [
      "Il <strong>triangolo</strong> è un poligono con <strong>tre lati</strong> e <strong>tre angoli</strong>.",
      "In base alla <strong>lunghezza dei lati</strong>, un triangolo può essere:",
      "<ul><li><strong>Scaleno</strong>: Ha tutti i lati diversi.</li><li><strong>Isoscele</strong>: Ha due lati uguali.</li><li><strong>Equilatero</strong>: Ha tutti i lati uguali.</li></ul>",
      "In base all’<strong>ampiezza degli angoli</strong>, un triangolo può essere:",
      "<ul><li><strong>Acutangolo</strong>: Ha tutti gli angoli acuti.</li><li><strong>Ottusangolo</strong>: Ha un angolo ottuso.</li><li><strong>Rettangolo</strong>: Ha un angolo retto.</li></ul>",
      "La <strong>base</strong> è il lato su cui si appoggia il triangolo.",
      "L’<strong>altezza</strong> è il segmento che parte da un vertice e cade in modo perpendicolare sul lato opposto, formando due angoli retti."
    ]
  },
  "quiz": [
    {
      "question": "Che cos’è un triangolo scaleno?",
      "answers": [
        { "text": "Un triangolo con tutti i lati diversi.", "correct": true },
        { "text": "Un triangolo con due lati uguali.", "correct": false },
        { "text": "Un triangolo con tutti i lati uguali.", "correct": false }
      ]
    },
    {
      "question": "Qual è la caratteristica di un triangolo rettangolo?",
      "answers": [
        { "text": "Ha un angolo retto.", "correct": true },
        { "text": "Ha tutti gli angoli acuti.", "correct": false },
        { "text": "Ha un angolo ottuso.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è un triangolo isoscele?",
      "answers": [
        { "text": "Un triangolo con due lati uguali.", "correct": true },
        { "text": "Un triangolo con tutti i lati diversi.", "correct": false },
        { "text": "Un triangolo con tutti i lati uguali.", "correct": false }
      ]
    },
    {
      "question": "Qual è la caratteristica di un triangolo equilatero?",
      "answers": [
        { "text": "Ha tutti i lati uguali.", "correct": true },
        { "text": "Ha due lati uguali.", "correct": false },
        { "text": "Ha tutti i lati diversi.", "correct": false }
      ]
    },
    {
      "question": "Che cos’è l’altezza di un triangolo?",
      "answers": [
        { "text": "Il segmento che parte da un vertice e cade perpendicolarmente sul lato opposto.", "correct": true },
        { "text": "Il lato su cui si appoggia il triangolo.", "correct": false },
        { "text": "Un angolo retto del triangolo.", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
