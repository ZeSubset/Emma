
function creaCubiMatrice(containerId, num1, num2) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const totale = num1 + num2;
  const righe = Math.ceil(totale / 10);

  for (let r = 0; r < righe; r++) {
    const riga = document.createElement("div");
    riga.style.display = "flex";
    riga.style.justifyContent = "flex-start";
    riga.style.marginBottom = "5px";

    for (let c = 0; c < 10; c++) {
      const i = r * 10 + c;
      const cubo = document.createElement("div");
      cubo.className = "cubo";

      if (i < totale) {
        if (i >= num1) {
          cubo.classList.add("pattern");
        }
      } else {
        cubo.style.visibility = "hidden";
      }

      riga.appendChild(cubo);
    }

    container.appendChild(riga);
  }
}

function salvaRisultato(paginaId, esercizioNum, corretto) {
  const chiave = `risultato_p${paginaId}_e${esercizioNum}`;
  localStorage.setItem(chiave, corretto ? "✔️" : "❌");
}

function controlla(num1, num2, inputId, feedbackId) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById(feedbackId);
  const risposta = parseInt(input.value);
  const corretto = num1 + num2;

  const idMatch = inputId.match(/input_p(\d+)_e(\d+)/);
  if (!idMatch) return;

  const paginaId = idMatch[1];
  const esercizioNum = idMatch[2];

  if (!isNaN(risposta) && risposta === corretto) {
    feedback.innerText = "Corretto!";
    feedback.className = "feedback corretto";
    salvaRisultato(paginaId, esercizioNum, true);
  } else {
    feedback.innerText = "No, riprova.";
    feedback.className = "feedback errore";
    salvaRisultato(paginaId, esercizioNum, false);
  }
}

function caricaRisultatiIndice() {
  for (let p = 1; p <= 8; p++) {
    let risultati = "";
    for (let e = 1; e <= 4; e++) {
      const chiave = `risultato_p${p}_e${e}`;
      const valore = localStorage.getItem(chiave);
      risultati += valore ? valore + " " : "⬜ ";
    }
    const span = document.getElementById(`ris_p${p}`);
    if (span) span.textContent = risultati;
  }
}


function creaEsercizi(esercizi, containerId, paginaId) {
  const container = document.getElementById(containerId);
  esercizi.forEach((es, idx) => {
    const num1 = es.num1;
    const num2 = es.num2;
    const esercizioNum = idx + 1;
    const matId = `matrice_p${paginaId}_e${esercizioNum}`;
    const inpId = `input_p${paginaId}_e${esercizioNum}`;
    const fbId = `feedback_p${paginaId}_e${esercizioNum}`;

    const blocco = document.createElement("div");
    blocco.className = "blocco-esercizio";

    const riga = document.createElement("div");
    riga.className = "riga-esercizio";

    const cubi = document.createElement("div");
    cubi.className = "area-cubi";
    const cubiCont = document.createElement("div");
    cubiCont.className = "cubi-container";
    cubiCont.id = matId;
    cubi.appendChild(cubiCont);

    const domanda = document.createElement("div");
    domanda.className = "area-domanda";
    domanda.innerHTML = `
      <p>Quanto fa ${num1} + ${num2}?</p>
      <input id="${inpId}" type="number" />
      <button onclick="controlla(${num1}, ${num2}, '${inpId}', '${fbId}')">Controlla</button>
      <div id="${fbId}" class="feedback"></div>
    `;

    riga.appendChild(cubi);
    riga.appendChild(domanda);
    blocco.appendChild(riga);
    container.appendChild(blocco);

    creaCubiMatrice(matId, num1, num2);
  });
}
