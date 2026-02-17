/* -------- THEME -------- */
function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* -------- TABS -------- */
function showTab(tab) {
  localStorage.setItem("lastTab", tab);
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

showTab(localStorage.getItem("lastTab") || "clock");

/* -------- CLOCK -------- */
function updateClock() {
  document.getElementById("digitalClock").innerText =
    new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

/* -------- STOPWATCH -------- */
let swTime = 0, swInterval;

function startStopwatch() {
  if (swInterval) return;
  swInterval = setInterval(() => {
    swTime++;
    displayStopwatch();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(swInterval);
  swInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  swTime = 0;
  document.getElementById("laps").innerHTML = "";
  displayStopwatch();
}

function lapStopwatch() {
  const li = document.createElement("li");
  li.textContent = document.getElementById("stopwatchDisplay").innerText;
  document.getElementById("laps").prepend(li);
}

function displayStopwatch() {
  const h = String(Math.floor(swTime / 3600)).padStart(2, '0');
  const m = String(Math.floor((swTime % 3600) / 60)).padStart(2, '0');
  const s = String(swTime % 60).padStart(2, '0');
  document.getElementById("stopwatchDisplay").innerText = `${h}:${m}:${s}`;
}

/* -------- TIMER -------- */
let timerInterval, remaining;

function startTimer() {
  remaining = document.getElementById("timerInput").value;
  if (!remaining) return;

  timerInterval = setInterval(() => {
    remaining--;
    updateTimer();
    if (remaining <= 0) {
      clearInterval(timerInterval);
      document.getElementById("alarm").play();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerDisplay").innerText = "00:00";
}

function updateTimer() {
  const m = String(Math.floor(remaining / 60)).padStart(2, '0');
  const s = String(remaining % 60).padStart(2, '0');
  document.getElementById("timerDisplay").innerText = `${m}:${s}`;
}
