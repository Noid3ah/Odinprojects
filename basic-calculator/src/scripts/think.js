const calculator = document.querySelector(".calculator");
const keyPad = calculator.querySelector(".key-pad");
const display = calculator.querySelector(".value");
const computation = calculator.querySelector(".computation");

let previousNumber = "";
let currentNumber = "";
let operand = "";

const add = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;
const subtract = (n1, n2) => n1 - n2;
const divide = (n1, n2) => n1 / n2;
const percentage = (n) => n / 100;
const negate = (n) => -n;

keyPad.addEventListener("click", (e) => {
  const operands = keyPad.querySelectorAll('[data-type="operand"]');
  if (!e.target.closest("button")) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayVal = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === "number") handleNumber(displayVal, previousKeyType, keyValue);
  if (type === "operand") handleOperands(operands, key, displayVal);
  if (type === "negate") handleNegate(displayVal);
  if (type === "percentage") handlePercentage(displayVal);
  if (type === "decimal") handleDecimal(displayVal);
  if (type === "equal") handleEquals(operands, displayVal);
  if (type === "backspace") handleBackspace(displayVal);
  if (type === "clear") handleClear(operands);

  calculator.dataset.previousKeyType = type;
});

function showComputation() {
  let sym = "";
  function convert(op) {
    if (op === "add") sym = "+";
    if (op === "minus") sym = "-";
    if (op === "times") sym = "*";
    if (op === "divide") sym = "/";
  }
  convert(operand);
  computation.textContent = `${previousNumber} ${sym}`;
}

const handleNumber = (displayVal, previousKeyType, keyValue) => {
  if (displayVal === "0" || previousKeyType === "operand") {
    display.textContent = keyValue;
  } else {
    display.textContent += keyValue;
  }
  showComputation();
};

const handleOperands = (operands, key, displayVal) => {
  operands.forEach((el) => (el.dataset.state = ""));
  key.dataset.state = "selected";
  previousNumber = displayVal;
  operand = key.dataset.key;
  showComputation();
};

const handleNegate = (val) => (display.textContent = -val);

const handlePercentage = (val) => (display.textContent = val / 100);

const handleDecimal = (val) => {
  if (val.includes(".")) return;
  display.textContent = val + ".";
};

const handleEquals = (operands, displayVal) => {
  currentNumber = displayVal;
  display.textContent = calculate(
    previousNumber,
    operand,
    currentNumber,
    displayVal
  );
  operands.forEach((el) => (el.dataset.state = ""));
  operand = "";
  computation.textContent = "";
};

const handleBackspace = (val) => {
  if (val === "0") return;
  // 00 because the function returns if val == 0
  if (display.textContent.length === 1) val = "00";
  display.textContent = val.slice(0, -1);
};

const handleClear = (op) => {
  op.forEach((el) => (el.dataset.state = ""));
  display.textContent = "0";
  previousNumber = "";
  currentNumber = "";
  operand = "";
  computation.textContent = "";
};

function calculate(n1, operand, n2, val) {
  if (!operand) return val;
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  if (operand === "add") return add(n1, n2);
  if (operand === "minus") return subtract(n1, n2);
  if (operand === "times") return multiply(n1, n2);
  if (operand === "divide") return divide(n1, n2);
}
