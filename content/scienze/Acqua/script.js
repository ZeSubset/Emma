let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "L’Acqua e le Sue Caratteristiche",
  "subtitle": "Scopri le caratteristiche dell'acqua e i suoi stati fisici.",
  "mainText": {
    "heading": "L’Acqua e le Sue Caratteristiche",
    "text": [
      "L’acqua in natura esiste allo stato <strong>liquido</strong>, <strong>solido</strong> e <strong>aeriforme/gassoso</strong>.",
      "L’acqua è allo stato <strong>liquido</strong> nel mare, nei fiumi, nei laghi.",
      "L’acqua è allo stato <strong>solido</strong> nel ghiaccio e nella neve.",
      "L’acqua è allo stato <strong>aeriforme/gassoso</strong> nel vapore acqueo.",
      "L’acqua ha delle <strong>caratteristiche particolari</strong>:",
      "<ul><li>Non ha colore ed è <strong>trasparente</strong>.</li><li>Non ha odore e non ha sapore.</li><li>Scioglie molte sostanze diverse.</li></ul>",
      "Sulla superficie dell’acqua le molecole si attraggono moltissimo l’una con l’altra e formano una specie di <strong>pellicola</strong>. Questo fenomeno si chiama <strong>tensione superficiale</strong>: è ciò che consente agli insetti di camminare sull’acqua e alle gocce di rimanere integre.",
      "L’acqua è capace di <strong>arrampicarsi</strong> verso l’alto quando si trova in tubicini sottili, come nelle piante: è così che le radici assorbono l’acqua dal terreno e la fanno arrivare alle foglie."
    ]
  },
  "quiz": [
    {
      "question": "In quale stato l’acqua si trova nei fiumi e nei mari?",
      "answers": [
        { "text": "Liquido", "correct": true },
        { "text": "Solido", "correct": false },
        { "text": "Aeriforme/gassoso", "correct": false }
      ]
    },
    {
      "question": "Che cos’è la tensione superficiale dell’acqua?",
      "answers": [
        { "text": "Un fenomeno che permette agli insetti di camminare sull’acqua.", "correct": true },
        { "text": "La capacità dell’acqua di arrampicarsi nei tubi.", "correct": false },
        { "text": "Lo stato aeriforme/gassoso dell’acqua.", "correct": false }
      ]
    },
    {
      "question": "Come si chiama lo stato solido dell’acqua?",
      "answers": [
        { "text": "Ghiaccio", "correct": true },
        { "text": "Vapore acqueo", "correct": false },
        { "text": "Liquido", "correct": false }
      ]
    },
    {
      "question": "Quale caratteristica rende l’acqua trasparente?",
      "answers": [
        { "text": "Non ha colore.", "correct": true },
        { "text": "Non ha odore.", "correct": false },
        { "text": "Non ha sapore.", "correct": false }
      ]
    },
    {
      "question": "Come fanno le piante ad assorbire l’acqua dal terreno?",
      "answers": [
        { "text": "Grazie alle radici e alla capacità dell’acqua di arrampicarsi nei tubicini sottili.", "correct": true },
        { "text": "Grazie alla tensione superficiale.", "correct": false },
        { "text": "Attraverso il vapore acqueo nell’aria.", "correct": false }
      ]
    }
  ]
}



// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
