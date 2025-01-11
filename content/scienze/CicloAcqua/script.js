let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  "title": "Il Ciclo dell’Acqua",
  "subtitle": "Scopri come l’acqua passa da uno stato all’altro nel suo ciclo continuo.",
  "mainText": {
    "heading": "Il Ciclo dell’Acqua",
    "text": [
      "Sulla Terra l’acqua compie un ciclo continuo. Durante questo ciclo, che non ha pause e non ha fine, l’acqua passa da uno stato all’altro. <strong>Vediamo come</strong>.",
      "1. Il Sole riscalda l’acqua di mari, fiumi e laghi. L’acqua diventa <strong>vapore acqueo</strong> e sale. Il passaggio dallo stato liquido allo stato aeriforme si chiama <strong>evaporazione</strong>.",
      "2. In alto il vapore si <strong>raffredda</strong> e si trasforma di nuovo in gocce di acqua, che formano le <strong>nuvole</strong>. Il passaggio dallo stato aeriforme allo stato liquido si chiama <strong>condensazione</strong>.",
      "3. Le gocce nelle nuvole si uniscono tra loro e diventano più grandi e pesanti; cadono al suolo sotto forma di <strong>pioggia</strong>.",
      "4. Se fa molto freddo le gocce si trasformano in <strong>neve</strong> o <strong>grandine</strong>. Il passaggio dallo stato liquido allo stato solido si chiama <strong>solidificazione</strong>.",
      "5. L’acqua che si deposita sotto forma di ghiaccio si scioglie quando fa più caldo. Questo passaggio si chiama <strong>fusione</strong>. Le acque di pioggia finiscono nei laghi, nei fiumi, nei mari o penetrano nel terreno. E il ciclo ricomincia."
    ]
  },
  "quiz": [
    {
      "question": "Come si chiama il passaggio dallo stato liquido allo stato aeriforme?",
      "answers": [
        { "text": "Evaporazione", "correct": true },
        { "text": "Condensazione", "correct": false },
        { "text": "Solidificazione", "correct": false }
      ]
    },
    {
      "question": "Che cosa accade durante la condensazione?",
      "answers": [
        { "text": "Il vapore si raffredda e diventa gocce di acqua.", "correct": true },
        { "text": "L’acqua diventa vapore acqueo.", "correct": false },
        { "text": "Le gocce si trasformano in neve.", "correct": false }
      ]
    },
    {
      "question": "Come si chiama il passaggio dallo stato liquido allo stato solido?",
      "answers": [
        { "text": "Solidificazione", "correct": true },
        { "text": "Evaporazione", "correct": false },
        { "text": "Fusione", "correct": false }
      ]
    },
    {
      "question": "Cosa succede quando il ghiaccio si scioglie?",
      "answers": [
        { "text": "Avviene la fusione.", "correct": true },
        { "text": "Avviene l’evaporazione.", "correct": false },
        { "text": "Avviene la condensazione.", "correct": false }
      ]
    },
    {
      "question": "Come si chiama il passaggio dallo stato aeriforme allo stato liquido?",
      "answers": [
        { "text": "Condensazione", "correct": true },
        { "text": "Solidificazione", "correct": false },
        { "text": "Fusione", "correct": false }
      ]
    }
  ]
}



// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
