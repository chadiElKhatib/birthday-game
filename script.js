// === Game settings ===
const GOAL = 30;        // balloons to pop
const GAME_SECONDS = 10;

const playArea = document.getElementById("playArea");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const goalText = document.getElementById("goalText");
const goalText2 = document.getElementById("goalText2");
const poppedText = document.getElementById("poppedText");
const timeText = document.getElementById("timeText");
const timeText2 = document.getElementById("timeText2");

const winOverlay = document.getElementById("winOverlay");
const playAgainBtn = document.getElementById("playAgainBtn");
const closeWinBtn = document.getElementById("closeWinBtn");

const confetti = document.getElementById("confetti");
const floatingBalloons = document.getElementById("floatingBalloons");

goalText.textContent = GOAL;
goalText2.textContent = GOAL;
timeText.textContent = GAME_SECONDS;
timeText2.textContent = GAME_SECONDS;

let running = false;
let popped = 0;
let timeLeft = GAME_SECONDS;

let spawnTimer = null;
let countdownTimer = null;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function setHUD() {
  poppedText.textContent = popped;
  timeText.textContent = timeLeft;
}

function resetGame() {
  running = false;
  popped = 0;
  timeLeft = GAME_SECONDS;
  setHUD();

  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  playArea.innerHTML = "";
  startBtn.disabled = false;
  restartBtn.disabled = true;
}

function balloonGradient() {
  // Random pleasant gradient
  const a = Math.floor(rand(0, 360));
  const b = (a + Math.floor(rand(25, 70))) % 360;
  return `linear-gradient(180deg, hsla(${a}, 90%, 65%, 1), hsla(${b}, 90%, 55%, 1))`;
}

function spawnBalloon() {
  if (!running) return;

  const rect = playArea.getBoundingClientRect();

  // keep inside bounds (10% padding)
  const x = rand(rect.width * 0.10, rect.width * 0.90);
  const y = rand(rect.height * 0.18, rect.height * 0.88);

  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = `${x}px`;
  balloon.style.top = `${y}px`;
  balloon.style.background = balloonGradient();

  // Slight wobble using animation duration variance (via CSS transform on hover isn't needed)
  balloon.style.transform = `translate(-50%, -50%) rotate(${rand(-6, 6)}deg)`;

  const string = document.createElement("div");
  string.className = "string";
  balloon.appendChild(string);

  const pop = () => {
    if (!running) return;
    balloon.classList.add("pop");
    popped++;
    setHUD();

    // remove after animation
    setTimeout(() => balloon.remove(), 170);

    if (popped >= GOAL) {
      winGame();
    }
  };

  // Click + touch
  balloon.addEventListener("click", pop, { passive: true });
  balloon.addEventListener("touchstart", (e) => {
    e.preventDefault();
    pop();
  }, { passive: false });

  playArea.appendChild(balloon);

  // Auto remove after a bit (so the screen doesn't fill up)
  setTimeout(() => {
    if (balloon.isConnected && running) balloon.remove();
  }, 2200);
}

function startGame() {
  if (running) return;

  resetOverlay();
  running = true;
  startBtn.disabled = true;
  restartBtn.disabled = false;

  // Spawn rate adapts a bit by screen size
  const w = playArea.getBoundingClientRect().width;
  const spawnEvery = clamp(520 - (w * 0.15), 240, 520); // ms

  spawnTimer = setInterval(spawnBalloon, spawnEvery);

  countdownTimer = setInterval(() => {
    timeLeft--;
    setHUD();

    if (timeLeft <= 0) {
      loseGame();
    }
  }, 1000);
}

function loseGame() {
  running = false;
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  // Simple “try again” vibe: shake play area a little
  playArea.animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0px)" }],
    { duration: 280, iterations: 1 }
  );

  // Keep it simple: allow restart
  startBtn.disabled = false;
}

function winGame() {
  running = false;
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  showWinOverlay();
}

function showWinOverlay() {
  winOverlay.classList.add("show");
  winOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  makeConfetti(140);
  makeFloatingBalloons(22);
}

function hideWinOverlay() {
  winOverlay.classList.remove("show");
  winOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function resetOverlay() {
  hideWinOverlay();
  confetti.innerHTML = "";
  floatingBalloons.innerHTML = "";
}

function makeConfetti(count) {
  confetti.innerHTML = "";
const colors = [
  "hsl(0 90% 60%)",     // rød
  "hsl(20 90% 60%)",    // orange
  "hsl(45 95% 55%)",    // gul
  "hsl(90 80% 55%)",    // lime
  "hsl(120 75% 55%)",   // grøn
  "hsl(160 80% 55%)",   // mint
  "hsl(190 90% 60%)",   // cyan
  "hsl(220 90% 60%)",   // blå
  "hsl(260 85% 65%)",   // lilla
  "hsl(300 85% 65%)",   // pink
  "hsl(330 90% 60%)"    // hot pink
];


  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "confettiPiece";
    p.style.left = `${rand(0, 100)}vw`;
    p.style.top = `${rand(-20, -5)}vh`;
    p.style.background = colors[Math.floor(rand(0, colors.length))];
    p.style.transform = `translateY(0) rotate(${rand(0, 360)}deg)`;
    p.style.animationDuration = `${rand(2.2, 4.2)}s`;
    p.style.animationDelay = `${rand(0, 0.9)}s`;
    p.style.width = `${rand(8, 14)}px`;
    p.style.height = `${rand(10, 18)}px`;
    confetti.appendChild(p);
  }
}

function makeFloatingBalloons(count) {
  floatingBalloons.innerHTML = "";
  const emojis = ["🎈", "🎈", "🎈", "🎉", "🎊"];

  for (let i = 0; i < count; i++) {
    const b = document.createElement("div");
    b.className = "floatB";
    b.textContent = emojis[Math.floor(rand(0, emojis.length))];
    b.style.left = `${rand(0, 100)}vw`;
    b.style.animationDuration = `${rand(4.5, 8.5)}s`;
    b.style.animationDelay = `${rand(0, 1.2)}s`;
    floatingBalloons.appendChild(b);
  }
}

// Buttons
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", () => {
  resetGame();
  startGame();
});

playAgainBtn.addEventListener("click", () => {
  resetGame();
  startGame();
});

closeWinBtn.addEventListener("click", () => {
  hideWinOverlay();
  resetGame();
});

// Close overlay by clicking outside the card
winOverlay.addEventListener("click", (e) => {
  if (e.target === winOverlay) {
    hideWinOverlay();
    resetGame();
  }
});

// Init
resetGame();
