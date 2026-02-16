const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;

    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
  } catch {
    display.value = "Error";
  }
}

/* Keyboard support */
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
