function checkAnswer(button, isCorrect) {
    if (button.disabled) return;

    button.style.backgroundColor = isCorrect ? "green" : "red";
    button.innerText += isCorrect ? " ✔ Corretto!" : " ✖ Sbagliato!";
   
    if (isCorrect) score += 2;
    button.disabled = true;
    button.style.color = "white";
    updateScore();
}

function updateScore() {
    document.getElementById("score").innerText = "Punteggio: " + score;
}

function renderSlidesLeft() {
    const container = document.getElementById("slides-container-left");
    
    let html = `
        <section>
            <h1>${content.titolo.titolo}</h1>
            <p>${content.titolo.descrizione}</p>
        </section>
    `;

    content.sezioni.forEach(sec => {
        html += `
            <section>
                <h2>${sec.titolo}</h2>
                <p>${sec.descrizione}</p>
                ${sec.extra ? `<p>${sec.extra}</p>` : ""}
    
            </section>
        `;
    });

    

    html += `
        <section>
            <h2>${content.conclusione.titolo}</h2>
            <p>${content.conclusione.descrizione}</p>
        </section>
    `;

    container.innerHTML = html;
}

function renderSlidesRight() {
    const container = document.getElementById("slides-container-right");
    
    let html = `
    `;

    
    content.quiz.forEach(qz => {
        const shuffledAnswers = qz.risposte.sort(() => Math.random() - 0.5);
        html += `
            <section>
                <div class="quiz-box"> <h2 >${qz.domanda}</h2> </div>
                <div class="quiz-container">
                    ${shuffledAnswers.map(r => `
                        <button class="quiz-button" onclick="checkAnswer(this, ${r.corretto})">${r.testo}</button>
                    `).join('')}
                </div>
            </section>
        `;
    });

    

    container.innerHTML = html;
}

const leftReveal = new Reveal(document.querySelector("#reveal-left"), {
    controls: true,
    progress: true,
    history: false,
    center: true
});

const rightReveal = new Reveal(document.querySelector("#reveal-right"), {
    controls: true,
    progress: true,
    history: false,
    center: true
});

function resetSlideScrolling(slide) {
    slide.classList.remove('scrollable-slide');
}

function handleSlideScrolling(slide) {
    if (slide.scrollHeight >= 800) {
        slide.classList.add('scrollable-slide');
    }
}

leftReveal.addEventListener('ready', function (event) {
    handleSlideScrolling(event.currentSlide);
});

leftReveal.addEventListener('slidechanged', function (event) {
    if (event.previousSlide) {
        resetSlideScrolling(event.previousSlide);
    }
    handleSlideScrolling(event.currentSlide);
});