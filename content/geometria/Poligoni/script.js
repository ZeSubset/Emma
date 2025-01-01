let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "I Poligoni",
  "subtitle": "Impara cosa sono i poligoni e come si classificano.",
  "mainText": {
    "heading": "I Poligoni",
    "text": [
      "Un <strong>poligono</strong> è una parte di piano compresa in una <strong>linea spezzata chiusa</strong>.",
      "<ul>",
      "<li>Ogni segmento si chiama <strong>lato</strong>.</li>",
      "<li>Il punto in cui si incontrano due lati si chiama <strong>vertice</strong>.</li>",
      "<li>A ogni vertice corrisponde un <strong>angolo</strong>.</li>",
      "</ul>",
      "A seconda del <strong>numero dei lati</strong>, i poligoni hanno nomi diversi:",
      "<ul>",
      "<li><strong>3 lati</strong>: Triangolo</li>",
      "<li><strong>4 lati</strong>: Quadrilatero</li>",
      "<li><strong>5 lati</strong>: Pentagono</li>",
      "<li><strong>6 lati</strong>: Esagono</li>",
      "<li><strong>7 lati</strong>: Ettagono</li>",
      "<li><strong>8 lati</strong>: Ottagono</li>",
      "</ul>"
    ]
  },
  "quiz": [
    {
      "question": "Che cos’è un poligono?",
      "answers": [
        
        { "text": "Un angolo formato da due lati.", "correct": false },
        { "text": "Un segmento di linea.", "correct": false },
        { "text": "Una parte di piano compresa in una linea spezzata chiusa.", "correct": true },
      ]
    },
    {
      "question": "Che cosa si chiama lato in un poligono?",
      "answers": [
        { "text": "Un segmento di linea.", "correct": true },
        { "text": "Un punto dove si incontrano due lati.", "correct": false },
        { "text": "Un angolo del poligono.", "correct": false }
      ]
    },
    {
      "question": "Come si chiama un poligono con 4 lati?",
      "answers": [
        
        { "text": "Triangolo", "correct": false },
        { "text": "Quadrilatero", "correct": true },
        { "text": "Pentagono", "correct": false }
      ]
    },
    {
      "question": "Qual è il nome di un poligono con 8 lati?",
      "answers": [
        { "text": "Ottagono", "correct": true },
        { "text": "Esagono", "correct": false },
        { "text": "Ettagono", "correct": false }
      ]
    },
    {
      "question": "Che cos’è un vertice in un poligono?",
      "answers": [
        
        { "text": "Un segmento di linea.", "correct": false },
        { "text": "L’angolo del poligono.", "correct": false },
        { "text": "Il punto in cui si incontrano due lati.", "correct": true },
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
