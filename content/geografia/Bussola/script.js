let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "I Punti Cardinali e l'Orientamento",
  "subtitle": "Impara come orientarti utilizzando i punti cardinali e gli strumenti moderni.",
  "mainText": {
    "heading": "I Punti Cardinali e l'Orientamento",
    "text": [
      "Orientarsi vuol dire capire la propria posizione e trovare la via giusta per raggiungere un luogo.",
      "Nord, sud, est e ovest sono i quattro punti cardinali. Essi permettono di orientarsi osservando dove si trova il Sole.",
      "Il nord è il punto opposto a sud, l’est è il punto in cui sorge il Sole, l’ovest è il punto in cui il Sole tramonta e il sud è il punto in cui il Sole si trova a mezzogiorno.",
      "Per orientarsi quando non si vede il Sole è stata inventata la bussola. La bussola è uno strumento con un ago che segna sempre il nord.",
      "Oggi è facile orientarsi ovunque grazie agli strumenti tecnologici. Alcune applicazioni, sui telefoni cellulari e sui tablet, ci dicono dove ci troviamo e quale strada dobbiamo percorrere."
    ]
  },
  "quiz": [
    {
      "question": "Che cosa significa orientarsi?",
      "answers": [
        { "text": "Capire la propria posizione e trovare la via giusta.", "correct": true },
        { "text": "Osservare la posizione del Sole nel cielo.", "correct": false },
        { "text": "Trovare i punti cardinali senza una bussola.", "correct": false }
      ]
    },
    {
      "question": "Qual è il punto in cui sorge il Sole?",
      "answers": [
        
        { "text": "Ovest", "correct": false },
        { "text": "Est", "correct": true },
        { "text": "Nord", "correct": false }
      ]
    },
    {
      "question": "Qual è il punto in cui il Sole si trova a mezzogiorno?",
      "answers": [
        { "text": "Nord", "correct": false },
        { "text": "Est", "correct": false },
        { "text": "Sud", "correct": true },
        
      ]
    },
    {
      "question": "A che cosa serve la bussola?",
      "answers": [
        { "text": "A trovare il nord.", "correct": true },
        { "text": "A sapere dove sorge il Sole.", "correct": false },
        { "text": "A calcolare l’altezza del Sole nel cielo.", "correct": false }
      ]
    },
    {
      "question": "Quali sono i quattro punti cardinali?",
      "answers": [
        { "text": "Sole, Luna, Nord, Sud", "correct": false },
        { "text": "Ovest, Est, Sole, Mare", "correct": false },
        { "text": "Nord, Sud, Est, Ovest", "correct": true },
        
      ]
    },
    {
      "question": "Quali strumenti moderni aiutano a orientarsi?",
      "answers": [
        { "text": "La posizione delle stelle.", "correct": false },
        { "text": "Applicazioni sui telefoni cellulari e tablet.", "correct": true },
        { "text": "Le mappe cartacee.", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
