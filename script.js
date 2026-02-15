const GOAL = 25;           // antal balloner
const GAME_SECONDS = 20;   // sekunder til ballonspillet
const QUIZ_TOTAL = 6;      // 6 rigtige i træk
const QUIZ_SECONDS = 30;  // 3 sekunder pr spørgsmål

// =========================
// LOCAL STORAGE KEYS
// =========================
const BEST_KEY = "birthday_best_seconds_v4";
const USED_KEY = "birthday_used_question_ids_v4";
const PROG_KEY = "birthday_quiz_progress_v4";

const QUESTION_BANK = [
  // diff 1 (medium)
  {id:"q001", diff:1, q:"Hvad er hovedstaden i Canada?", options:["Toronto","Vancouver","Ottawa","Montreal"], answerIndex:2}, 
  {id:"q002", diff:1, q:"Hvilket grundstof har symbolet 'O'?", options:["Guld","Ilt","Osmium","Zink"], answerIndex:1},
  {id:"q003", diff:1, q:"Hvor mange kontinenter er der?", options:["5","6","7","8"], answerIndex:2},
  {id:"q004", diff:1, q:"Hvilken planet er tættest på solen?", options:["Merkur","Venus","Jorden","Mars"], answerIndex:0},
  {id:"q005", diff:1, q:"Hvad er 12 × 8?", options:["84","92","96","108"], answerIndex:2},
  {id:"q006", diff:1, q:"Hvilket organ pumper blod rundt i kroppen?", options:["Lungerne","Leveren","Hjertet","Nyrerne"], answerIndex:2},
  {id:"q007", diff:1, q:"Hvad er Danmarks hovedstad?", options:["Aarhus","Odense","København","Aalborg"], answerIndex:2},
  {id:"q008", diff:1, q:"Hvilken farve får du ved at blande gul og blå?", options:["Lilla","Grøn","Orange","Pink"], answerIndex:1},
  {id:"q009", diff:1, q:"Hvad er 9 + 6?", options:["12","13","15","16"], answerIndex:2},
  {id:"q010", diff:1, q:"Hvilket dyr siger 'muh'?", options:["Kat","Ko","Hund","Får"], answerIndex:1},
  {id:"q011", diff:1, q:"Hvilken planet kaldes den røde planet?", options:["Mars","Jupiter","Venus","Saturn"], answerIndex:0},
  {id:"q012", diff:1, q:"Hvor mange minutter er der på 1 time?", options:["30","60","90","100"], answerIndex:1},
  {id:"q013", diff:1, q:"Hvilken by kaldes ofte 'The Big Apple'?", options:["Los Angeles","Chicago","New York","Boston"], answerIndex:2},
  {id:"q014", diff:1, q:"Hvilket land er kendt for pyramiderne i Giza?", options:["Mexico","Peru","Egypten","Indien"], answerIndex:2},
  {id:"q015", diff:1, q:"Hvilket instrument har typisk 88 tangenter?", options:["Guitar","Klaver","Violin","Trommer"], answerIndex:1},
  {id:"q016", diff:1, q:"Hvilket land har flest indbyggere?", options:["USA","Indien","Kina","Rusland"], answerIndex:2},
  {id:"q017", diff:1, q:"Hvilket sprog har flest modersmålstalere?", options:["Spansk","Engelsk","Mandarin-kinesisk","Arabisk"], answerIndex:2},
  {id:"q018", diff:1, q:"Hvilket hav grænser op til Thailand (Andaman-kysten)?", options:["Andamanhavet","Sortehavet","Kaspiske Hav","Beringhavet"], answerIndex:0},
  {id:"q019", diff:1, q:"Hvilket land er Machu Picchu i?", options:["Chile","Peru","Bolivia","Colombia"], answerIndex:1},
  {id:"q020", diff:1, q:"Hvilket land har valutaen 'zloty'?", options:["Tjekkiet","Polen","Ungarn","Rumænien"], answerIndex:1},
  {id:"q021", diff:1, q:"Hvilket dyr er kendt som 'kongen af junglen'?", options:["Tiger","Løve","Elefant","Gorilla"], answerIndex:1},
  {id:"q022", diff:1, q:"Hvilket grundstof har symbolet 'Fe'?", options:["Fluor","Jern","Fosfor","Fermium"], answerIndex:1},
  {id:"q023", diff:1, q:"Hvilket ocean er størst?", options:["Atlanterhavet","Stillehavet","Det Indiske Ocean","Ishavet"], answerIndex:1},
  {id:"q024", diff:1, q:"Hvilket land har byen Casablanca?", options:["Algeriet","Marokko","Tunesien","Egypten"], answerIndex:1},
  {id:"q025", diff:1, q:"Hvilken sport bruger en 'shuttlecock'?", options:["Tennis","Badminton","Squash","Bordtennis"], answerIndex:1},
  {id:"q026", diff:1, q:"Hvilken farve får du ved at blande rød og blå?", options:["Grøn","Lilla","Orange","Gul"], answerIndex:1},
  {id:"q027", diff:1, q:"Hvilken planet har ringe og er meget kendt for dem?", options:["Mars","Saturn","Merkur","Venus"], answerIndex:1},
  {id:"q028", diff:1, q:"Hvilket dyr er et pattedyr der lægger æg?", options:["Kænguru","Næbdyr","Delfin","Gepard"], answerIndex:1},
  {id:"q029", diff:1, q:"Hvad hedder den længste flod i verden (ofte angivet)?", options:["Amazonas","Nilen","Yangtze","Mississippi"], answerIndex:1},
  {id:"q030", diff:1, q:"Hvilken planet er kendt for 'Great Red Spot'?", options:["Saturn","Jupiter","Uranus","Neptun"], answerIndex:1},

  // diff 2 (hard)
  {id:"q031", diff:2, q:"Hvad var den første præsident for USA?", options:["Abraham Lincoln","George Washington","John F. Kennedy","Thomas Jefferson"], answerIndex:1},
  {id:"q032", diff:2, q:"Hvilket år blev Berlinmuren åbnet (faldet)?", options:["1987","1989","1991","1993"], answerIndex:1},
  {id:"q033", diff:2, q:"Hvilket år startede 1. verdenskrig?", options:["1912","1914","1916","1918"], answerIndex:1},
  {id:"q034", diff:2, q:"Hvad hedder Japans højhastighedstog-system?", options:["Shinkansen","TGV","ICE","AVE"], answerIndex:0},
  {id:"q035", diff:2, q:"Hvilken måleenhed bruges til elektrisk modstand?", options:["Volt","Ampere","Ohm","Watt"], answerIndex:2},
  {id:"q036", diff:2, q:"Hvilken by ligger ved Bosporusstrædet?", options:["Athen","Istanbul","Rom","Kairo"], answerIndex:1},
  {id:"q037", diff:2, q:"Hvilket land er Sagrada Família i?", options:["Frankrig","Portugal","Spanien","Italien"], answerIndex:2},
  {id:"q038", diff:2, q:"Hvilket grundstof har symbolet 'Na'?", options:["Natrium","Neon","Nikkel","Nitrogen"], answerIndex:0},
  {id:"q039", diff:2, q:"Hvilken roman starter med 'Call me Ishmael'?", options:["Moby-Dick","1984","Dracula","Hamlet"], answerIndex:0},
  {id:"q040", diff:2, q:"Hvilket bjerg nævnes ofte som Europas højeste (Elbrus)?", options:["Mont Blanc","Elbrus","Matterhorn","Olympus"], answerIndex:1},
  {id:"q041", diff:2, q:"Hvilket hav ligger mellem Saudi-Arabien og Afrika?", options:["Middelhavet","Det Røde Hav","Arabiske Hav","Sortehavet"], answerIndex:1},
  {id:"q042", diff:2, q:"Hvilken by er EU's institutioner ofte forbundet med?", options:["Paris","Bruxelles","Berlin","Wien"], answerIndex:1},
  {id:"q043", diff:2, q:"Hvilket land har regionen Transsylvanien?", options:["Rumænien","Bulgarien","Serbien","Grækenland"], answerIndex:0},
  {id:"q044", diff:2, q:"Hvilken flod løber gennem Rom?", options:["Tiber","Po","Arno","Donau"], answerIndex:0},
  {id:"q045", diff:2, q:"Hvilket land har byen Petra (berømt klippeby)?", options:["Jordan","Egypten","Syrien","Libanon"], answerIndex:0},
  {id:"q046", diff:2, q:"Hvilket land har Mount Fuji?", options:["Kina","Japan","Sydkorea","Thailand"], answerIndex:1},
  {id:"q047", diff:2, q:"Hvad hedder studiet af jordskælv?", options:["Seismologi","Meteorologi","Oceanografi","Botanik"], answerIndex:0},
  {id:"q048", diff:2, q:"Hvilket land har hovedstaden 'Helsinki'?", options:["Sverige","Finland","Norge","Danmark"], answerIndex:1},
  {id:"q049", diff:2, q:"Hvilken by er kendt for operahuset med 'sejl' i Australien?", options:["Melbourne","Sydney","Perth","Brisbane"], answerIndex:1},
  {id:"q050", diff:2, q:"Hvilken ørken ligger i det sydlige Afrika?", options:["Sahara","Kalahari","Gobi","Atacama"], answerIndex:1},
  {id:"q051", diff:2, q:"Hvilken by kaldes ofte 'City of a Hundred Spires'?", options:["Prag","Wien","Budapest","Krakow"], answerIndex:0},
  {id:"q052", diff:2, q:"Hvilket år landede mennesket første gang på månen?", options:["1967","1969","1971","1973"], answerIndex:1},
  {id:"q053", diff:2, q:"Hvilket land har Angkor Wat?", options:["Thailand","Cambodja","Vietnam","Laos"], answerIndex:1},
  {id:"q054", diff:2, q:"Hvilken enhed måler lydstyrke?", options:["Decibel","Newton","Kelvin","Pascal"], answerIndex:0},
  {id:"q055", diff:2, q:"Hvilket land har byen Dubrovnik?", options:["Kroatien","Grækenland","Italien","Spanien"], answerIndex:0},

  // diff 3 (harder, google-friendly)
  {id:"q056", diff:3, q:"Hvilket år blev den første iPhone lanceret?", options:["2005","2007","2009","2011"], answerIndex:1},
  {id:"q057", diff:3, q:"Hvad hedder den største ø i Middelhavet?", options:["Sicilien","Sardinien","Cypern","Kreta"], answerIndex:0},
  {id:"q058", diff:3, q:"Hvilket land har den administrative hovedstad Pretoria?", options:["Sydafrika","Kenya","Nigeria","Ghana"], answerIndex:0},
  {id:"q059", diff:3, q:"Hvilken aftale fra 1215 begrænsede kongens magt i England?", options:["Bill of Rights","Magna Carta","Treaty of Versailles","Act of Union"], answerIndex:1},
  {id:"q060", diff:3, q:"Hvilket 'hav' er verdens største indhav (ofte angivet)?", options:["Det Kaspiske Hav","Sortehavet","Det Røde Hav","Østersøen"], answerIndex:0},
  {id:"q061", diff:3, q:"Hvilken by var tidligere kendt som Konstantinopel?", options:["Athen","Istanbul","Damaskus","Beirut"], answerIndex:1},
  {id:"q062", diff:3, q:"Hvilket land har byen Timbuktu?", options:["Mali","Niger","Chad","Sudan"], answerIndex:0},
  {id:"q063", diff:3, q:"Hvem skrev 'Pride and Prejudice'?", options:["Emily Brontë","Jane Austen","Virginia Woolf","Mary Shelley"], answerIndex:1},
  {id:"q064", diff:3, q:"Hvilken by er hovedstad i New Zealand?", options:["Auckland","Wellington","Christchurch","Dunedin"], answerIndex:1},
  {id:"q065", diff:3, q:"Hvilken by kaldes ofte 'The Eternal City'?", options:["Rom","Athen","Paris","London"], answerIndex:0},
  {id:"q066", diff:3, q:"Hvilket år blev FN (United Nations) grundlagt?", options:["1919","1945","1955","1963"], answerIndex:1},
  {id:"q067", diff:3, q:"Hvilket land har 'Table Mountain'?", options:["Sydafrika","Australien","USA","Canada"], answerIndex:0},
  {id:"q068", diff:3, q:"Hvilken krig sluttede med freden i Westfalen (1648)?", options:["Napoleonskrigene","Trediveårskrigen","Syvårskrigen","Hundredårskrigen"], answerIndex:1},
  {id:"q069", diff:3, q:"Hvilket grundstof har symbolet 'W'?", options:["Wolfram","Wismut","Wattium","Walesium"], answerIndex:0},
  {id:"q070", diff:3, q:"Hvilken by er kendt som 'The Windy City'?", options:["New York","Chicago","Seattle","Miami"], answerIndex:1},
  {id:"q071", diff:3, q:"Hvilket land har byen Valparaíso?", options:["Chile","Argentina","Peru","Uruguay"], answerIndex:0},
  {id:"q072", diff:3, q:"Hvilket år faldt Romerriget i vest (ofte angivet)?", options:["410","476","800","1066"], answerIndex:1},
  {id:"q073", diff:3, q:"Hvilket land har byen Samarkand?", options:["Uzbekistan","Kazakhstan","Mongoliet","Iran"], answerIndex:0},
  {id:"q074", diff:3, q:"Hvilken fysiker forbindes med relativitetsteorien?", options:["Newton","Einstein","Bohr","Faraday"], answerIndex:1},
  {id:"q075", diff:3, q:"Hvilken by er hovedstad i Schweiz?", options:["Zürich","Geneve","Bern","Basel"], answerIndex:2},
  {id:"q076", diff:3, q:"Hvilket land har vulkanen Eyjafjallajökull?", options:["Norge","Island","Grønland","Finland"], answerIndex:1},
  {id:"q077", diff:3, q:"Hvilket land har byen Jaipur (Pink City)?", options:["Indien","Pakistan","Nepal","Sri Lanka"], answerIndex:0},
  {id:"q078", diff:3, q:"Hvilken by er hovedstad i Sydkorea?", options:["Seoul","Busan","Incheon","Daegu"], answerIndex:0},
  {id:"q079", diff:3, q:"Hvilket år blev Titanic sank?", options:["1908","1912","1916","1920"], answerIndex:1},
  {id:"q080", diff:3, q:"Hvilket land har byen Kraków?", options:["Tyskland","Polen","Østrig","Tjekkiet"], answerIndex:1},

  // ekstra så vi rammer 100 (blandet diff 2/3 så det forbliver “google-ish”)
  {id:"q081", diff:2, q:"Hvilken flod løber gennem London?", options:["Thames","Seine","Rhine","Danube"], answerIndex:0},
  {id:"q082", diff:2, q:"Hvilket land har byen Reykjavik?", options:["Island","Norge","Sverige","Finland"], answerIndex:0},
  {id:"q083", diff:2, q:"Hvilken by er hovedstad i Portugal?", options:["Porto","Lissabon","Madrid","Barcelona"], answerIndex:1},
  {id:"q084", diff:2, q:"Hvilket hav ligger nord for Tyrkiet?", options:["Sortehavet","Middelhavet","Rødehavet","Kaspiske Hav"], answerIndex:0},
  {id:"q085", diff:3, q:"Hvilken by er hovedstad i Marokko?", options:["Casablanca","Rabat","Marrakech","Fes"], answerIndex:1},
  {id:"q086", diff:3, q:"Hvilket år begyndte den franske revolution?", options:["1776","1789","1812","1848"], answerIndex:1},
  {id:"q087", diff:3, q:"Hvilken by er hovedstad i Egypten?", options:["Alexandria","Kairo","Giza","Luxor"], answerIndex:1},
  {id:"q088", diff:3, q:"Hvilket land har valutaen 'forint'?", options:["Ungarn","Polen","Tjekkiet","Rumænien"], answerIndex:0},
  {id:"q089", diff:3, q:"Hvilket land har byen Brugge?", options:["Belgien","Holland","Frankrig","Tyskland"], answerIndex:0},
  {id:"q090", diff:3, q:"Hvilken by er hovedstad i Irland?", options:["Cork","Dublin","Belfast","Galway"], answerIndex:1},
  {id:"q091", diff:3, q:"Hvilket år blev Google grundlagt (firmaet)?", options:["1996","1998","2000","2002"], answerIndex:1},
  {id:"q092", diff:3, q:"Hvilket år blev Facebook lanceret?", options:["2002","2004","2006","2008"], answerIndex:1},
  {id:"q093", diff:3, q:"Hvilket land har byen Edinburgh?", options:["England","Skotland","Wales","Irland"], answerIndex:1},
  {id:"q094", diff:3, q:"Hvilket land har Galápagos-øerne?", options:["Ecuador","Peru","Mexico","Chile"], answerIndex:0},
  {id:"q095", diff:3, q:"Hvilket år blev Euroen indført som regne-enhed (EMU, 1999)?", options:["1995","1997","1999","2002"], answerIndex:2},
  {id:"q096", diff:3, q:"Hvilket land har byen Dubrovnik? (igen men anden diff gør ikke noget)", options:["Kroatien","Grækenland","Italien","Spanien"], answerIndex:0},
  {id:"q097", diff:3, q:"Hvilken by er hovedstad i Argentina?", options:["Buenos Aires","Córdoba","Rosario","Mendoza"], answerIndex:0},
  {id:"q098", diff:3, q:"Hvilket land har Mount Kilimanjaro?", options:["Kenya","Tanzania","Uganda","Etiopien"], answerIndex:1},
  {id:"q099", diff:3, q:"Hvilket år blev YouTube grundlagt?", options:["2003","2005","2007","2009"], answerIndex:1},
  {id:"q100", diff:3, q:"Hvilket land har byen Havana?", options:["Cuba","Mexico","Colombia","Dominikanske Republik"], answerIndex:0},
];

// =========================
// ELEMENTS (must match index.html IDs)
// =========================
const introScreen = document.getElementById("introScreen");
const gameScreen  = document.getElementById("gameScreen");
const quizScreen  = document.getElementById("quizScreen");
const giftScreen  = document.getElementById("giftScreen");

// Intro
const typeText = document.getElementById("typeText");
const skipIntroBtn = document.getElementById("skipIntroBtn");
const startFromIntroBtn = document.getElementById("startFromIntroBtn");

// Game
const playArea = document.getElementById("playArea");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const goalText = document.getElementById("goalText");
const goalText2 = document.getElementById("goalText2");
const poppedText = document.getElementById("poppedText");
const timeText = document.getElementById("timeText");
const timeText2 = document.getElementById("timeText2");

// Win overlay
const winOverlay = document.getElementById("winOverlay");
const playAgainBtn = document.getElementById("playAgainBtn");
const toQuizBtn = document.getElementById("toQuizBtn");
const scoreLine = document.getElementById("scoreLine");
const bestLine = document.getElementById("bestLine");
const confetti = document.getElementById("confetti");
const floatingBalloons = document.getElementById("floatingBalloons");

// Quiz
const qIndexEl = document.getElementById("qIndex");
const qTimeEl  = document.getElementById("qTime");
const qTextEl  = document.getElementById("qText");
const answersEl = document.getElementById("answers");
const quizHint = document.getElementById("quizHint");
const quitQuizBtn = document.getElementById("quitQuizBtn");

// Progress UI (needs elements you added in index.html)
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const quizBoxEl = document.querySelector(".quizBox");

// Gift
const restartAllBtn = document.getElementById("restartAllBtn");
const giftGrid = document.getElementById("giftGrid");
const giftResult = document.getElementById("giftResult");

// =========================
// INTRO MESSAGE (edit here)
// =========================
const INTRO_MESSAGE =
`Okay Nadin… hør lige her 😤😂

Du er seriøst den bedste veninde jeg har.
Jeg stoler på dig, og du har altid været der i tykt og tyndt.

Uanset hvor meget stress jeg giver dig (og ja… det er en del 😅),
så ved jeg du altid står ved min side.

Jeg værdsætter vores venskab mega meget.
Og uanset hvad du får brug for - småt eller stort - så er jeg der for dig. Altid.

Tillykke med fødselsdagen, og jeg ønsker dig alt det bedste i fremtiden 💛✨

MEN… for at få din gave 🎁
skal du lige gennemføre et lille spil først 😈🎈`;

// =========================
// UTIL
// =========================
function rand(min, max){ return Math.random() * (max - min) + min; }
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function showOnly(screenEl){
  [introScreen, gameScreen, quizScreen, giftScreen].forEach(el => el?.classList.remove("show"));
  screenEl?.classList.add("show");
}

function safeAssertQuestions(){
  if (!Array.isArray(QUESTION_BANK) || QUESTION_BANK.length < 6) {
    console.warn("QUESTION_BANK is empty/too small. Add your questions in script.js");
  }
}

// =========================
// LOCAL STORAGE UTILS
// =========================
function getBest(){
  const v = localStorage.getItem(BEST_KEY);
  return v ? Number(v) : null;
}
function setBest(v){
  localStorage.setItem(BEST_KEY, String(v));
}

function loadUsedSet(){
  try {
    const arr = JSON.parse(localStorage.getItem(USED_KEY) || "[]");
    return new Set(arr);
  } catch {
    return new Set();
  }
}
function saveUsedSet(set){
  localStorage.setItem(USED_KEY, JSON.stringify([...set]));
}

function loadProgress(){
  const v = localStorage.getItem(PROG_KEY);
  return v ? Number(v) : 0;
}
function saveProgress(n){
  localStorage.setItem(PROG_KEY, String(n));
}

// =========================
// INTRO: TYPEWRITER (slower + pauses)
// =========================
let typeIndex = 0;
let typeTimer = null;

function startTyping(){
  typeIndex = 0;
  if (typeText) typeText.textContent = "";
  if (startFromIntroBtn) startFromIntroBtn.disabled = true;

  clearTimeout(typeTimer);

  const step = () => {
    if (!typeText) return;

    typeText.textContent += INTRO_MESSAGE[typeIndex];
    const ch = INTRO_MESSAGE[typeIndex];
    typeIndex++;

    if (typeIndex >= INTRO_MESSAGE.length) {
      if (startFromIntroBtn) startFromIntroBtn.disabled = false;
      return;
    }

    let delay = 32;
    if (ch === "\n") delay = 260;
    if (".!?".includes(ch)) delay = 220;
    if (",".includes(ch)) delay = 140;

    typeTimer = setTimeout(step, delay);
  };

  step();
}

function skipTyping(){
  clearTimeout(typeTimer);
  if (typeText) typeText.textContent = INTRO_MESSAGE;
  if (startFromIntroBtn) startFromIntroBtn.disabled = false;
}

// =========================
// GAME STATE
// =========================
let running = false;
let popped = 0;
let timeLeft = GAME_SECONDS;

let spawnTimer = null;
let countdownTimer = null;

let startTimeMs = 0;
let lastRunSeconds = null;

function setHUD(){
  if (poppedText) poppedText.textContent = popped;
  if (timeText) timeText.textContent = timeLeft;
}

function resetGame(){
  running = false;
  popped = 0;
  timeLeft = GAME_SECONDS;
  setHUD();

  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  if (playArea) playArea.innerHTML = "";
  if (startBtn) startBtn.disabled = false;
  if (restartBtn) restartBtn.disabled = true;
}

function balloonGradient(){
  const a = Math.floor(rand(0, 360));
  const b = (a + Math.floor(rand(25, 90))) % 360;
  return `linear-gradient(180deg, hsla(${a}, 90%, 65%, 1), hsla(${b}, 90%, 55%, 1))`;
}

function spawnBalloon(){
  if (!running || !playArea) return;

  const rect = playArea.getBoundingClientRect();
  const x = rand(rect.width * 0.10, rect.width * 0.90);
  const y = rand(rect.height * 0.18, rect.height * 0.88);

  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = `${x}px`;
  balloon.style.top = `${y}px`;
  balloon.style.background = balloonGradient();
  balloon.style.transform = `translate(-50%, -50%) rotate(${rand(-7, 7)}deg)`;

  const string = document.createElement("div");
  string.className = "string";
  balloon.appendChild(string);

  const pop = () => {
    if (!running) return;
    balloon.classList.add("pop");
    popped++;
    setHUD();
    setTimeout(() => balloon.remove(), 170);
    if (popped >= GOAL) winGame();
  };

  balloon.addEventListener("click", pop, { passive:true });
  balloon.addEventListener("touchstart", (e) => { e.preventDefault(); pop(); }, { passive:false });

  playArea.appendChild(balloon);

  setTimeout(() => {
    if (balloon.isConnected && running) balloon.remove();
  }, 1400);
}

function startGame(){
  if (running) return;
  resetOverlay();

  running = true;
  if (startBtn) startBtn.disabled = true;
  if (restartBtn) restartBtn.disabled = false;

  startTimeMs = Date.now();

  const w = playArea ? playArea.getBoundingClientRect().width : 800;
  const spawnEvery = clamp(360 - (w * 0.12), 140, 360);
  spawnTimer = setInterval(spawnBalloon, spawnEvery);

  countdownTimer = setInterval(() => {
    timeLeft--;
    setHUD();
    if (timeLeft <= 0) loseGame();
  }, 1000);
}

function loseGame(){
  running = false;
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  if (playArea) {
    playArea.animate(
      [{ transform:"translateX(0px)" }, { transform:"translateX(-8px)" }, { transform:"translateX(8px)" }, { transform:"translateX(0px)" }],
      { duration: 280, iterations: 1 }
    );
  }

  if (startBtn) startBtn.disabled = false;
}

function winGame(){
  running = false;
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);

  lastRunSeconds = (Date.now() - startTimeMs) / 1000;

  const best = getBest();
  if (best === null || lastRunSeconds < best) setBest(lastRunSeconds);

  showWinOverlay();
}

// =========================
// WIN OVERLAY
// =========================
function resetOverlay(){
  if (!winOverlay) return;
  winOverlay.classList.remove("show");
  winOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (confetti) confetti.innerHTML = "";
  if (floatingBalloons) floatingBalloons.innerHTML = "";
}

function showWinOverlay(){
  if (!winOverlay) return;

  winOverlay.classList.add("show");
  winOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const best = getBest();
  if (scoreLine) scoreLine.textContent = `✅ Din tid: ${lastRunSeconds.toFixed(2)} sek`;
  if (bestLine) bestLine.textContent = best ? `🏆 Rekord: ${best.toFixed(2)} sek` : "";

  makeConfetti(220);
  makeFloatingBalloons(26);
}

function makeConfetti(count){
  if (!confetti) return;
  confetti.innerHTML = "";
  for (let i = 0; i < count; i++){
    const p = document.createElement("div");
    p.className = "confettiPiece";
    p.style.left = `${rand(0, 100)}vw`;
    p.style.top  = `${rand(-25, -6)}vh`;
    p.style.background = `hsl(${Math.random()*360} 90% 60%)`;
    p.style.animationDuration = `${rand(2.0, 4.6)}s`;
    p.style.animationDelay = `${rand(0, 1.0)}s`;
    p.style.width  = `${rand(8, 14)}px`;
    p.style.height = `${rand(10, 18)}px`;
    confetti.appendChild(p);
  }
}

function makeFloatingBalloons(count){
  if (!floatingBalloons) return;
  floatingBalloons.innerHTML = "";
  const emojis = ["🎈","🎉","🎊","💛","✨","🎈","🎈"];
  for (let i=0; i<count; i++){
    const b = document.createElement("div");
    b.className = "floatB";
    b.textContent = emojis[Math.floor(rand(0, emojis.length))];
    b.style.left = `${rand(0, 100)}vw`;
    b.style.animationDuration = `${rand(4.0, 9.0)}s`;
    b.style.animationDelay = `${rand(0, 1.4)}s`;
    floatingBalloons.appendChild(b);
  }
}

// =========================
// QUIZ UI HELPERS
// =========================
function updateProgressUI(){
  if (progressText) progressText.textContent = String(correctCount);
  if (progressFill) progressFill.style.width = `${(correctCount / QUIZ_TOTAL) * 100}%`;
}

function flashQuiz(ok){
  if (!quizBoxEl) return;
  quizBoxEl.classList.remove("okFlash", "badFlash");
  void quizBoxEl.offsetWidth; // reflow
  quizBoxEl.classList.add(ok ? "okFlash" : "badFlash");
}

// =========================
// QUIZ STATE
// =========================
let usedQuestions = loadUsedSet();
let correctCount = loadProgress(); // 0..6
let currentQ = null;

let quizTimeLeft = QUIZ_SECONDS;
let quizTimer = null;

function getDifficultyForStep(step){
  if (step <= 1) return 1;
  if (step <= 3) return 2;
  return 3;
}

function pickQuestionByDifficulty(diff){
  const poolDiff = QUESTION_BANK.filter(q => q.diff === diff);
  const fallbackPool = QUESTION_BANK;

  const poolBase = poolDiff.length ? poolDiff : fallbackPool;
  const unused = poolBase.filter(q => !usedQuestions.has(q.id));
  const pool = unused.length ? unused : poolBase;

  const q = pool[Math.floor(Math.random() * pool.length)];
  usedQuestions.add(q.id);
  saveUsedSet(usedQuestions);
  return q;
}

function startQuiz(){
  safeAssertQuestions();

  // hver gang quiz starter: ny runde med 6 nye spørgsmål
  correctCount = 0;
  saveProgress(correctCount);

  usedQuestions = new Set();
  saveUsedSet(usedQuestions);

  showOnly(quizScreen);
  updateProgressUI();
  nextQuestion();
}

function nextQuestion(){
  clearInterval(quizTimer);
  if (quizHint) quizHint.textContent = "";
  if (answersEl) answersEl.innerHTML = "";

  updateProgressUI();
  if (qIndexEl) qIndexEl.textContent = String(correctCount + 1);

  const diff = getDifficultyForStep(correctCount);
  currentQ = pickQuestionByDifficulty(diff);

  if (qTextEl) qTextEl.textContent = currentQ?.q || "Spørgsmål mangler";

  quizTimeLeft = QUIZ_SECONDS;
  renderQuizTime();

  if (!currentQ || !Array.isArray(currentQ.options) || currentQ.options.length !== 4) {
    console.warn("Question format issue:", currentQ);
    return;
  }

  currentQ.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.textContent = opt;
    btn.addEventListener("click", () => chooseAnswer(idx));
    answersEl.appendChild(btn);
  });

  quizTimer = setInterval(() => {
    quizTimeLeft--;
    renderQuizTime();
    if (quizTimeLeft <= 0){
      flashQuiz(false);
      failToGame("⏳ Tiden løb ud… tilbage til ballonspillet 😈");
    }
  }, 1000);
}

function renderQuizTime(){
  const m = Math.floor(quizTimeLeft / 60);
  const s = quizTimeLeft % 60;
  if (qTimeEl) qTimeEl.textContent = `${m}:${String(s).padStart(2,"0")}`;
}

function chooseAnswer(idx){
  if (!currentQ) return;

  const buttons = answersEl ? [...answersEl.querySelectorAll(".answerBtn")] : [];

  // disable all fast
  buttons.forEach(b => b.disabled = true);

  if (idx !== currentQ.answerIndex){
    // mark wrong + show correct
    buttons.forEach((b, i) => {
      if (i === idx) b.classList.add("wrong");
      if (i === currentQ.answerIndex) b.classList.add("correct");
    });

    flashQuiz(false);
    failToGame("❌ Forkert! Tilbage til ballonspillet… og du starter quiz fra 0/6 😤");
    return;
  }

  // correct
  if (buttons[idx]) buttons[idx].classList.add("correct");
  flashQuiz(true);

  if (quizHint) quizHint.textContent = "✅ Rigtigt! Næste...";
  correctCount++;
  saveProgress(correctCount);
  updateProgressUI();

  setTimeout(() => {
    if (correctCount >= QUIZ_TOTAL){
      clearInterval(quizTimer);
      showOnly(giftScreen);
      resetGiftState();
    } else {
      nextQuestion();
    }
  }, 600);
}

function failToGame(msg){
  clearInterval(quizTimer);
  if (quizHint) quizHint.textContent = msg;

  // HARD A: reset progress to 0
  correctCount = 0;
  saveProgress(correctCount);

  // 6 helt nye næste gang (ryd brugte)
  usedQuestions = new Set();
  saveUsedSet(usedQuestions);

  updateProgressUI();

  setTimeout(() => {
    // back to BALLOON GAME only (not intro)
    showOnly(gameScreen);
    resetOverlay();
    resetGame();
  }, 900);
}

// =========================
// GIFT (3 pakker i rækkefølge + lås)
// =========================
let openedGifts = new Set();

function lockGift(btn, locked){
  if (!btn) return;
  btn.classList.toggle("locked", locked);

  let icon = btn.querySelector(".giftLock");
  if (locked && !icon){
    icon = document.createElement("div");
    icon.className = "giftLock";
    icon.textContent = "🔒";
    btn.appendChild(icon);
  }
  if (!locked && icon){
    icon.remove();
  }
}

function setGiftLocks(){
  if (!giftGrid) return;

  const b2 = giftGrid.querySelector('.giftBox[data-gift="2"]');
  const b3 = giftGrid.querySelector('.giftBox[data-gift="3"]');

  const opened1 = openedGifts.has("1");
  const opened2 = openedGifts.has("2");

  lockGift(b2, !opened1);
  lockGift(b3, !opened2);
}

function resetGiftState(){
  openedGifts = new Set();
  if (!giftGrid) return;

  giftGrid.querySelectorAll(".giftBox").forEach(btn => btn.classList.remove("opened"));
  if (giftResult) giftResult.innerHTML = "";
  setGiftLocks(); // lock 2 & 3
}

function renderGiftMessage(which){
  if (!giftResult) return;

  if (which === "1"){
    giftResult.innerHTML = `😂 FIK DIG HAHAHA<br>Du troede seriøst det var nu? 😤`;
  } else if (which === "2"){
    giftResult.innerHTML = `😈 Stadig ikke… prøv igen!<br>Du er tæt på, wallah 😂`;
  } else {
    giftResult.innerHTML = `
      <strong>Okay okay… det nok nu 😅</strong><br>
      Nu får du din rigtige gave 🎁✨<br><br>
      <strong>Vælg én:</strong>
      <ul class="giftChoiceList">
        <li>🎬 <strong>Biograf</strong> + snacks (jeg betaler 😤)</li>
        <li>🍽️ <strong>Middag</strong> (valgfrit sted)</li>
        <li>☕ <strong>Surprise</li>
      </ul>
      <br>
      Bare skriv til mig hvad du vælger ❤️
    `;
  }
}

if (giftGrid){
  giftGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".giftBox");
    if (!btn) return;

    const which = Number(btn.dataset.gift);

    // locked? dont allow
    if (btn.classList.contains("locked")) return;

    // strict order
    if (which === 2 && !openedGifts.has("1")) return;
    if (which === 3 && !openedGifts.has("2")) return;

    if (openedGifts.has(String(which))) return;

    openedGifts.add(String(which));
    btn.classList.add("opened");

    btn.animate(
      [{ transform:"scale(1)" }, { transform:"scale(1.04)" }, { transform:"scale(1)" }],
      { duration: 220, iterations: 1 }
    );

    renderGiftMessage(String(which));
    setGiftLocks();
  });
}

// =========================
// NAV / RESTART HELPERS
// =========================
function restartToGame(){
  resetOverlay();
  resetGame();
  showOnly(gameScreen);
}

// =========================
// EVENTS
// =========================
if (skipIntroBtn) skipIntroBtn.addEventListener("click", skipTyping);

if (startFromIntroBtn) startFromIntroBtn.addEventListener("click", () => {
  showOnly(gameScreen);
});

if (startBtn) startBtn.addEventListener("click", startGame);
if (restartBtn) restartBtn.addEventListener("click", () => { resetGame(); startGame(); });

if (playAgainBtn) playAgainBtn.addEventListener("click", () => {
  resetOverlay();
  resetGame();
  startGame();
});

if (toQuizBtn) toQuizBtn.addEventListener("click", () => {
  resetOverlay();
  startQuiz();
});

if (quitQuizBtn) quitQuizBtn.addEventListener("click", () => {
  restartToGame();
});

if (restartAllBtn) restartAllBtn.addEventListener("click", () => {
  // Restart whole experience (intro)
  showOnly(introScreen);
  startTyping();
});

if (winOverlay){
  winOverlay.addEventListener("click", (e) => {
    if (e.target === winOverlay) {
      resetOverlay();
      resetGame();
    }
  });
}

// =========================
// INIT
// =========================
if (goalText) goalText.textContent = GOAL;
if (goalText2) goalText2.textContent = GOAL;
if (timeText) timeText.textContent = GAME_SECONDS;
if (timeText2) timeText2.textContent = GAME_SECONDS;

resetOverlay();
resetGame();
showOnly(introScreen);
startTyping();
resetGiftState();
updateProgressUI();
