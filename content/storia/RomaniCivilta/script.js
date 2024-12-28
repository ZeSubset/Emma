let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "La Civiltà Romana",
  "subtitle": "Scopri la nascita e l'evoluzione di Roma: dalla Monarchia all'Impero.",
  "mainText": {
    "heading": "La Civiltà Romana",
    "text": [
      "A sud del territorio etrusco, oltre il fiume Tevere viveva un popolo di pastori e agricoltori: i Latini.",
      "I Latini impararono presto a sfruttare le risorse del territorio: l’acqua del Tevere e le saline, cioè luoghi in cui il sale marino veniva estratto dall’acqua.",
      "Sui colli intorno a questa zona fondarono Roma. Partendo dalla città di Roma, i Romani crearono un impero enorme, che comprendeva quasi tutta l’Europa e arrivava in Asia e in Africa.",
      "Come vedi dalla linea del tempo, a Roma si succedono tre forme di governo: prima la Monarchia, poi la Repubblica, infine l’Impero."
    ]
  },
  "quiz": [
    {
      "question": "In che anno è stata fondata Roma?",
      "answers": [
        { "text": "753 a.C.", "correct": true },
        { "text": "509 a.C.", "correct": false },
        { "text": "27 a.C.", "correct": false }
      ]
    },
    {
      "question": "Quale forma di governo ha avuto Roma dopo la Monarchia?",
      "answers": [
        { "text": "Repubblica", "correct": true },
        { "text": "Impero", "correct": false },
        { "text": "Oligarchia", "correct": false }
      ]
    },
    {
      "question": "Cosa succede nel 509 a.C. a Roma?",
      "answers": [
        { "text": "Finisce la Monarchia e inizia la Repubblica.", "correct": true },
        { "text": "Roma viene fondata.", "correct": false },
        { "text": "Roma diventa un Impero.", "correct": false }
      ]
    },
    {
      "question": "In che anno Roma diventa un Impero?",
      "answers": [
        { "text": "27 a.C.", "correct": true },
        { "text": "753 a.C.", "correct": false },
        { "text": "509 a.C.", "correct": false }
      ]
    },
    {
      "question": "Quali risorse sfruttavano i Latini nella zona di Roma?",
      "answers": [
        { "text": "L’acqua del Tevere e le saline.", "correct": true },
        { "text": "Il legname delle foreste.", "correct": false },
        { "text": "Il ferro e l’oro.", "correct": false }
      ]
    }
  ]
}

// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
