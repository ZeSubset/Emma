let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Gli Animali",
  "subtitle": "Scopri le caratteristiche degli animali e le differenze tra invertebrati e vertebrati.",
  "mainText": {
    "heading": "Gli Animali",
    "text": [
      "Gli animali sono <strong>esseri viventi pluricellulari</strong> molto diversi tra loro.",
      "Tutti gli animali hanno delle <strong>caratteristiche in comune</strong>:",
      "<ul>",
      "<li>Si nutrono di altri esseri viventi (animali e piante);</li>",
      "<li>Si muovono;</li>",
      "<li>Possiedono organi di senso;</li>",
      "<li>Comunicano tra loro.</li>",
      "</ul>",
      "Gli animali sono divisi in due grandi gruppi:",
      "<strong>Gli INVERTEBRATI</strong> non hanno uno scheletro interno al corpo. Gli invertebrati sono:",
      "<ul>",
      "<li><strong>Le spugne</strong>, che vivono in mare attaccate alle rocce;</li>",
      "<li><strong>I celenterati</strong>, come le meduse;</li>",
      "<li><strong>Gli echinodermi</strong>, come i ricci di mare;</li>",
      "<li><strong>Gli anellidi</strong>, come i lombrichi;</li>",
      "<li><strong>I molluschi</strong>, come le lumache;</li>",
      "<li><strong>Gli artropodi</strong>: comprendono gli aracnidi, come i ragni, e gli insetti, come le farfalle. Gli insetti sono gli animali più numerosi della Terra.</li>",
      "</ul>",
      "<strong>I VERTEBRATI</strong> hanno uno scheletro interno sostenuto da una colonna vertebrale. I vertebrati sono:",
      "<ul>",
      "<li><strong>I pesci</strong>, come squali e sardine;</li>",
      "<li><strong>Gli anfibi</strong>, come rane e rospi;</li>",
      "<li><strong>I rettili</strong>, come serpenti, lucertole e tartarughe;</li>",
      "<li><strong>Gli uccelli</strong>, come passeri e aquile;</li>",
      "<li><strong>I mammiferi</strong>, come scimmie, cervi, cani e gatti.</li>",
      "</ul>"
    ]
  },
  "quiz": [
    {
      "question": "Quali sono le caratteristiche degli animali?",
      "answers": [
        { "text": "Vivono solo sulla terraferma e non possiedono organi di senso.", "correct": false },
        { "text": "Producono il proprio cibo attraverso la fotosintesi.", "correct": false },
        { "text": "Si nutrono di altri esseri viventi, si muovono e possiedono organi di senso.", "correct": true },
        
      ]
    },
    {
      "question": "Che cosa significa invertebrati?",
      "answers": [
        { "text": "Animali che non hanno uno scheletro interno al corpo.", "correct": true },
        { "text": "Animali che vivono solo in mare.", "correct": false },
        { "text": "Animali che hanno una colonna vertebrale.", "correct": false }
      ]
    },
    {
      "question": "Quali sono gli animali invertebrati?",
      "answers": [
        { "text": "I mammiferi, i rettili e i pesci.", "correct": false },
        { "text": "Le spugne, i molluschi e gli insetti.", "correct": true },
        { "text": "I pesci, i passeri e gli anfibi.", "correct": false }
      ]
    },
    {
      "question": "Che cosa significa vertebrati?",
      "answers": [
        { "text": "Animali che vivono solo sulla terraferma.", "correct": false },
        { "text": "Animali che hanno uno scheletro interno sostenuto da una colonna vertebrale.", "correct": true },
        { "text": "Animali che non possiedono organi di senso.", "correct": false }
      ]
    },
    {
      "question": "Quali sono gli animali vertebrati?",
      "answers": [
        { "text": "I pesci, i mammiferi e i rettili.", "correct": true },
        { "text": "I molluschi, gli insetti e gli aracnidi.", "correct": false },
        { "text": "Gli echinodermi e gli anellidi.", "correct": false }
      ]
    }
  ]
}


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
