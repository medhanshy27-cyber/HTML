/* TAB SWITCHING */
function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

/* DIGITAL CLOCK */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("digitalClock").innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

/* STOPWATCH */
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
  displayStopwatch();
}

function displayStopwatch() {
  const hrs = String(Math.floor(swTime / 3600)).padStart(2, '0');
  const mins = String(Math.floor((swTime % 3600) / 60)).padStart(2, '0');
  const secs = String(swTime % 60).padStart(2, '0');
  document.getElementById("stopwatchDisplay").innerText = `${hrs}:${mins}:${secs}`;
}

/* TIMER */
let timerInterval, remaining;

function startTimer() {
  remaining = document.getElementById("timerInput").value;
  if (!remaining) return;

  timerInterval = setInterval(() => {
    remaining--;
    updateTimer();
    if (remaining <= 0) clearInterval(timerInterval);
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerDisplay").innerText = "00:00";
}

function updateTimer() {
  const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
  const secs = String(remaining % 60).padStart(2, '0');
  document.getElementById("timerDisplay").innerText = `${mins}:${secs}`;
}
