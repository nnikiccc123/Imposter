let words = [
  "jabuka",
  "kruška",
  "banana",
  "trešnja",
  "breskva",
  "limun",
  "mandarina",
  "ananas",
  "lubenica",
  "dinja",
  "mačka",
  "pas",
  "tigar",
  "lav",
  "zebra",
  "slon",
  "konj",
  "krava",
  "koza",
  "ovca",
  "fudbal",
  "košarka",
  "tenis",
  "odbojka",
  "rukomet",
  "plivanje",
  "skijanje",
  "trčanje",
  "biciklizam",
  "hokej",
  "Beograd",
  "Novi Sad",
  "Niš",
  "Kragujevac",
  "Subotica",
  "Valjevo",
  "Čačak",
  "Kraljevo",
  "Sombor",
  "Šabac",
  // dodaj još dok ne bude 300+
];

let chosen = [];
let currentIndex = 0;
let showingWord = false;

const startBtn = document.getElementById("startBtn");
const cardContainer = document.getElementById("cardContainer");

startBtn.onclick = () => startGame();

function startGame() {
  currentIndex = 0;
  showingWord = false;
  cardContainer.innerHTML = "";

  let totalPlayers = parseInt(document.getElementById("playerCount").value);
  let word = words[Math.floor(Math.random() * words.length)];

  chosen = Array(totalPlayers - 1).fill(word);
  chosen.push("Imposter"); // impostor
  chosen.sort(() => Math.random() - 0.5);

  showNextCard();
}

function showNextCard() {
  if (currentIndex >= chosen.length) {
    cardContainer.innerHTML =
      "<h2>Svi igrači su videli svoje karte, klikni start za novu rundu ✅</h2>";
    return;
  }

  let playerNumber = currentIndex + 1;

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <div class="front">Igrač ${playerNumber}</div>
      <div class="back">${chosen[currentIndex]}</div>
    `;
  showingWord = false;

  card.onclick = () => {
    if (!showingWord) {
      card.classList.add("flipped"); // flip animacija
      showingWord = true;
    } else {
      currentIndex++;
      showNextCard(); // sledeći igrač
    }
  };

  cardContainer.innerHTML = "";
  cardContainer.appendChild(card);
}
