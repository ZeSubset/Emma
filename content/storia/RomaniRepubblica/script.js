let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "La Repubblica",
  "subtitle": "Scopri la nascita della Repubblica Romana e le lotte fra patrizi e plebei.",
  "mainText": {
    "heading": "La Repubblica",
    "text": [
      "Secondo la leggenda, nel <strong>509 a.C.</strong> i patrizi di Roma cacciarono il re <strong>Tarquinio il Superbo</strong> perché era molto crudele. Egli fu l’ultimo sovrano di Roma. Al suo posto i Romani misero dei funzionari chiamati <strong>magistrati</strong>, aiutati nel governo dai <strong>senatori</strong>, che facevano parte delle famiglie più ricche.",
      "Questa forma di governo si chiamò <strong>Repubblica</strong>.",
      "I magistrati avevano il <strong>potere esecutivo</strong>, cioè mettevano in pratica le leggi decise dai senatori. Per evitare che prendessero troppo potere, i magistrati restavano in carica solo un anno. I magistrati più importanti erano due ed erano chiamati <strong>consoli</strong>.",
      "<strong>LOTTE FRA PATRIZI E PLEBEI</strong>",
      "I plebei restavano comunque esclusi dal <strong>governo della città</strong>, perché i magistrati erano patrizi. Inoltre, i plebei erano stanchi di combattere nell’esercito senza ricevere ricompense: infatti, le terre conquistate venivano date solo ai patrizi.",
      "Nel <strong>494 a.C.</strong> i plebei organizzarono una protesta: chiusero le botteghe, abbandonarono la città e si rifiutarono di combattere contro i nemici. Con questa protesta <strong>ottennero di avere due rappresentanti</strong>: i <strong>tribuni della plebe</strong>. I tribuni erano eletti solo fra i plebei e <strong>potevano annullare le leggi contrarie agli interessi dei plebei</strong>.",
      "Più tardi i plebei riuscirono ad avere delle leggi scritte: il <strong>codice delle Dodici Tavole</strong>. Il codice era esposto in pubblico, così tutti lo potevano leggere e conoscere: in questo modo le leggi non potevano più favorire i patrizi."
    ]
  },
  "quiz": [
    {
      "question": "Quando nacque la Repubblica Romana?",
      "answers": [
        { "text": "509 a.C.", "correct": true },
        { "text": "753 a.C.", "correct": false },
        { "text": "494 a.C.", "correct": false }
      ]
    },
    {
      "question": "Chi era l’ultimo re di Roma?",
      "answers": [
        { "text": "Tarquinio il Superbo", "correct": true },
        { "text": "Romolo", "correct": false },
        { "text": "Servio Tullio", "correct": false }
      ]
    },
    {
      "question": "Qual era il compito principale dei magistrati?",
      "answers": [
        { "text": "Mettere in pratica le leggi decise dai senatori.", "correct": true },
        { "text": "Scrivere il codice delle Dodici Tavole.", "correct": false },
        { "text": "Comandare l’esercito.", "correct": false }
      ]
    },
    {
      "question": "Chi potevano eleggere i plebei per difendere i loro diritti?",
      "answers": [
        { "text": "I tribuni della plebe", "correct": true },
        { "text": "I consoli", "correct": false },
        { "text": "I senatori", "correct": false }
      ]
    },
    {
      "question": "Che cosa rappresenta il codice delle Dodici Tavole?",
      "answers": [
        { "text": "Le prime leggi scritte accessibili a tutti.", "correct": true },
        { "text": "Le leggi create dai senatori per i patrizi.", "correct": false },
        { "text": "Un insieme di regole solo per i plebei.", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
