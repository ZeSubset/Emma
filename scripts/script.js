// Function to load content dynamically into the page. This function will be called when the page is loaded.
async function loadContent(content) {
    // Sets the title and subtitle using the content object
    document.getElementById("title").innerHTML = content.title; // Use innerHTML for markup
    document.getElementById("subtitle").innerHTML = content.subtitle;
  
    // Main text section
    const mainTextContainer = document.getElementById("main-text");
    document.getElementById("main-heading").textContent =
      content.mainText.heading; // Set main heading text
  
    // Loop through each paragraph and append it to the main text container
    content.mainText.text.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerHTML = paragraph; // Use innerHTML to preserve formatting
      mainTextContainer.appendChild(p);
    });
  
    // Quiz section
    const quizContainer = document.getElementById("quiz-container");
    content.quiz.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question"); // Add class for styling
      questionDiv.innerHTML = `<p><strong>${index + 1}. ${
        q.question
      }</strong></p>`; // Add question text with a number
  
      // Loop through answers and create buttons
      q.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // Add answer text
        button.onclick = () => checkAnswer(button, answer.correct); // Attach click event
        questionDiv.appendChild(button);
      });
  
      quizContainer.appendChild(questionDiv); // Add question to quiz container
    });
  }
  
  // Function to check if the selected answer is correct
  function checkAnswer(button, correct) {
    const questionDiv = button.parentElement; // Get the current question's container
    const resultDiv =
      document.getElementById("result") || document.createElement("div");
    resultDiv.id = "result"; // Assign an ID to the result div
  
    if (correct) {
      score += 2; // Increase score for correct answers
      updateScore(); // Update the score display
      resultDiv.innerHTML = "<p style='color:green;'>Risposta corretta!</p>"; // Show success message
  
      // Disable all buttons for the current question
      const buttons = questionDiv.querySelectorAll("button");
      buttons.forEach((btn) => (btn.disabled = true));
    } else {
      score = 0; // Increase score for correct answers
      updateScore(); // Update the score display
      resultDiv.innerHTML =
        "<p style='color:red;'>Risposta sbagliata. Riprova!</p>"; // Show error message
  
      // Disable all buttons for the current question
      const buttons = questionDiv.querySelectorAll("button");
      buttons.forEach((btn) => (btn.disabled = true));
  
      // Create a "Retry" button
      const retryButton = document.createElement("button");
      retryButton.id = "retry"; // Assign ID for styling
      retryButton.textContent = "Riprova";
      retryButton.onclick = () => retryQuestion(questionDiv); // Attach retry function
  
      resultDiv.appendChild(retryButton); // Add retry button to result div
    }
  
    button.parentElement.appendChild(resultDiv); // Append result div to the question
  }
  
  // Function to retry a question by resetting the buttons
  function retryQuestion(questionDiv) {
    const resultDiv = document.getElementById("result");
  
    // Clear the result message
    resultDiv.innerHTML = "";
  
    // Re-enable buttons for the current question
    const buttons = questionDiv.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.disabled = false; // Enable buttons
    });

    enableAllButtons(); // Re-enable all buttons
  }

  // Function to re-enable all buttons in all questionDiv elements
  function enableAllButtons() {
    const questionDivs = document.querySelectorAll(".question");
    questionDivs.forEach((questionDiv) => {
      const buttons = questionDiv.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = false;
      });
    });
  }
  
  // Function to update the displayed score
  function updateScore() {
    document.getElementById("score").textContent = score;
  }
  