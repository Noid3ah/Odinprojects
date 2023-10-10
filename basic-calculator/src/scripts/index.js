const calculatorDisplay = document.querySelector(".display");
const keysContainer = document.querySelector(".key-pad");
let displayValue = document.querySelector(".values");
let computation = document.querySelector(".computation");
// const calculatorDisplay = document.querySelector(".display");

let prevNum = "";
let operator = "";
let currNum = "";

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function percentage(n) {
  return n / 100;
}

function negate(n) {
  return -n;
}

function clear() {
  displayValue.textContent = 0;
  computation.textContent = "";
  prevNum = "";
  operator = "";
  currNum = "";
  console.log(prevNum, operator, currNum);
}

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isOperator(value) {
  return ["%", "±", "÷", "*", "-", "+"].includes(value);
}

function operate(operator, n1, n2) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  switch (operator) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "÷":
      if (n2 === 0) return "Error";
      return divide(n1, n2);
    case "±":
      return negate(n1);
    case "%":
      return percentage(n1);
    default:
      return "Error";
  }
}

function updateDisplay(equation) {
  displayValue.textContent = equation;
}

keysContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("key")) return;
  const target = e.target;
  const targetValue = target.textContent;

  if (isNumeric(targetValue)) {
    handleNumbers(targetValue);
  } else if (isOperator(targetValue)) {
    handleOperand(targetValue);
  } else if (targetValue === "=" && prevNum !== "" && currNum !== "") {
    handleEquation();
  } else if (targetValue === "C") {
    clear();
  }
});

function handleNumbers(num) {
  // !operator ? (prevNum += num) : (currNum += num);
  if (currNum.length <= 11) {
    currNum += num;
    displayValue.textContent = currNum;
  }
}

function handleOperand(operand) {
  operator = operand;
  prevNum = currNum;
  computation.textContent = `${prevNum} ${operator}`;
  currNum = "";
  // displayValue.textContent = "";
}

function handleEquation() {
  let equation = operate(operator, prevNum, currNum);
  updateDisplay(equation);
}

// document.getElementById("key20").addEventListener("click", () => {
//   if (prevNum && operator && currNum) {
//     const result = operate(operator, prevNum, currNum);
//     displayValue.textContent = result;
//     prevNum = result;
//     operator = "";
//     currNum = "";
//   }
// });
