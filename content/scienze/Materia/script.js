let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "La Materia e gli Stati",
  "subtitle": "Impara i diversi stati della materia e le loro caratteristiche.",
  "mainText": {
    "heading": "La Materia e gli Stati",
    "text": [
      "L’acqua, un fiore, la tua maglietta… hanno qualcosa in comune: sono fatti di <strong>materia</strong>. Tutto è fatto di materia, anche il nostro corpo.",
      "La <strong>materia</strong> ha un peso, occupa uno spazio e può essere di diversi tipi: plastica, legno, vetro e così via.",
      "I diversi tipi di materia si chiamano <strong>sostanze</strong>. Le sostanze sono fatte di particelle tutte uguali e piccolissime, che si chiamano <strong>molecole</strong>.",
      "La materia può essere allo stato <strong>solido</strong>, <strong>liquido</strong>, <strong>aeriforme</strong>.",
      "<strong>STATO SOLIDO</strong>: Le molecole si muovono pochissimo perché sono strette tra loro. La materia allo stato solido occupa uno spazio definito e ha una forma propria.",
      "<strong>STATO LIQUIDO</strong>: Le molecole possono muoversi di più perché sono meno vicine tra loro. La materia allo stato liquido occupa uno spazio definito ma prende la forma del recipiente in cui si trova.",
      "<strong>STATO AERIFORME</strong>: Le molecole si muovono liberamente perché sono lontane tra loro. La materia allo stato aeriforme non ha una forma e non occupa uno spazio a disposizione."
    ]
  },
  "quiz": [
    {
      "question": "Cos'è la materia?",
      "answers": [
        { "text": "Tutto ciò che ha un peso e occupa uno spazio.", "correct": true },
        { "text": "Tutto ciò che ha una forma definita.", "correct": false },
        { "text": "Tutto ciò che è solido.", "correct": false }
      ]
    },
    {
      "question": "Come si chiamano i diversi tipi di materia?",
      "answers": [
        
        { "text": "Molecole", "correct": false },
        { "text": "Particelle", "correct": false },
        { "text": "Sostanze", "correct": true },
      ]
    },
    {
      "question": "Che cosa caratterizza lo stato solido?",
      "answers": [
        { "text": "Le molecole si muovono liberamente e non occupano spazio.", "correct": false },
        { "text": "Le molecole sono strette tra loro e hanno una forma propria.", "correct": true },
        { "text": "Le molecole prendono la forma del recipiente.", "correct": false }
      ]
    },
    {
      "question": "Che cosa caratterizza lo stato liquido?",
      "answers": [
        { "text": "Le molecole possono muoversi e prendono la forma del recipiente.", "correct": true },
        { "text": "Le molecole sono strette tra loro e hanno una forma propria.", "correct": false },
        { "text": "Le molecole si muovono liberamente e non occupano spazio.", "correct": false }
      ]
    },
    {
      "question": "Che cosa caratterizza lo stato aeriforme?",
      "answers": [
        { "text": "Le molecole si muovono pochissimo e hanno una forma definita.", "correct": false },
        { "text": "Le molecole si muovono e prendono la forma del recipiente.", "correct": false },
        { "text": "Le molecole si muovono liberamente e non hanno una forma propria.", "correct": true },
        
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
