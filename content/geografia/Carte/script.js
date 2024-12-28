let score = 0; // Global score variable

/// Object storing content for the "Carte Geografiche" section
const content = {
  // Title of the section, dynamically added to the page
  title: "La Mappa delle Carte Geografiche",

  // Subtitle of the section, providing a brief description
  subtitle: "Impara cosa sono le carte geografiche e come si usano.",

  // Main text content containing a heading and multiple paragraphs
  mainText: {
    // Main heading for the section
    heading: "Le Carte Geografiche",
    // Array of paragraphs describing the topic
    text: [
      "Le carte geografiche sono il disegno ridotto di un luogo visto dall’alto.", // Explanation of what maps are
      "Servono a capire dove ci troviamo e da che parte dobbiamo andare per raggiungere un luogo.", // Explanation of their purpose
      "Usano simboli per rappresentare diversi elementi, e il nord è sempre in alto.", // Details about how maps use symbols
      "Si dividono in tre tipi principali: carte fisiche, carte politiche e carte tematiche.", // Explanation of the types of maps
    ],
  },

  // Quiz section containing an array of questions and their possible answers
  quiz: [
    {
      // First question about the definition of maps
      question: "Che cosa sono le carte geografiche?",
      // Array of possible answers, with one marked as correct
      answers: [
        { text: "Disegni di luoghi visti dall’alto", correct: true }, // Correct answer
        { text: "Fotografie aeree di un luogo", correct: false }, // Incorrect answer
        { text: "Disegni senza significato geografico", correct: false }, // Incorrect answer
      ],
    },
    {
      // Second question about the purpose of maps
      question: "A che cosa servono le carte geografiche?",
      answers: [
        
        { text: "A creare simboli per i luoghi", correct: false }, // Incorrect answer
        { text: "A capire dove ci troviamo", correct: true }, // Correct answer
        { text: "A disegnare le montagne", correct: false }, // Incorrect answer
      ],
    },
    {
      // Third question about the types of maps
      question: "Quali tipi di carte ci sono?",
      answers: [
        
        { text: "Carte tecniche e carte storiche", correct: false }, // Incorrect answer
        { text: "Solo carte fisiche", correct: false }, // Incorrect answer
        {
          text: "Carte fisiche, carte politiche, carte tematiche",
          correct: true, // Correct answer
        },
      ],
    },
  ],
};

// Initialize content when the page has loaded
document.addEventListener("DOMContentLoaded", loadContent(content));
