let score = 0; // Global score variable

// Content object storing all the dynamic content for the page
const content = {
  title: "Le Alpi", // Page title
  subtitle: "Scopri la <strong>catena montuosa</strong> più famosa d'Italia!", // Subtitle with HTML markup
  mainText: {
    heading: "Le Alpi", // Main heading
    text: [
      // Array of paragraphs with text about the Alps
      "Le Alpi si trovano nel nord dell’Italia. Sono una <strong>catena montuosa</strong>, con una forma ad arco. Si dividono in <strong>Alpi Occidentali</strong>, <strong>Alpi Centrali</strong>, <strong>Alpi Orientali</strong>.",
      "Le Alpi sono montagne molto alte e hanno cime appuntite. Le vette più alte sono il <strong>Monte Bianco</strong>, il <strong>Monte Rosa</strong> e il <strong>Cervino</strong>. Per attraversare le Alpi e andare dalla parte opposta, sono state scavate delle lunghe gallerie che si chiamano <em>trafori</em>.",
      "Sulle Alpi ci sono molti <strong>ghiacciai</strong>. I ghiacciai non sono fermi, ma si muovono piano piano verso valle, cioè verso il basso. In tantissimo tempo hanno scavato delle valli con la forma a <strong>U</strong>, dette <em>valli glaciali</em>.",
      "Sulle Alpi ci sono anche le <em>valli scavate dai fiumi</em>, le <strong>valli fluviali</strong>: esse hanno una forma a <strong>V</strong>.",
    ],
  },
  quiz: [
    // Quiz questions and answers
    {
      question: "Dove si trovano le Alpi?",
      answers: [
        
        { text: "Nel sud dell’Italia", correct: false },
        { text: "Nel nord dell’Italia", correct: true },
        { text: "Nel centro dell’Italia", correct: false },
      ],
    },
    {
      question: "Quali sono le vette più alte delle Alpi?",
      answers: [
        
        { text: "Monte Vesuvio, Etna, Stromboli", correct: false },
        { text: "Monte Grappa, Monte Amiata, Gran Sasso", correct: false },
        { text: "Monte Bianco, Monte Rosa, Cervino", correct: true },
      ],
    },
    {
      question: "Qual è la forma delle valli scavate dai ghiacciai?",
      answers: [
        { text: "U", correct: true },
        { text: "V", correct: false },
        { text: "Z", correct: false },
      ],
    },
    {
      question: "Cosa sono i trafori?",
      answers: [
        {
          text: "Lunghe gallerie scavate per attraversare le Alpi",
          correct: true,
        },
        { text: "Percorsi creati dai ghiacciai", correct: false },
        { text: "Valli create dai fiumi", correct: false },
      ],
    },
  ],
};


// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
