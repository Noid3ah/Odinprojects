const availableInks = [
  { ink: "black" },
  { ink: "brown" },
  { ink: "gray" },
  { ink: "red" },
  { ink: "green" },
  { ink: "blue" },
  { ink: "purple" },
  { ink: "cyan" },
  { ink: "yellow" },
  { ink: "orange" },
  { ink: "pink" },
  { ink: "white" },
  { ink: "linear-gradient(to bottom right, red, blue, green, yellow, purple)" },
];

const sketchpad = document.querySelector(".sketchpad");
const inputValue = document.querySelector(".input");
const submit = document.querySelector(".submitt");
const reset = document.querySelector(".reset-pad");
const inksContainer = document.querySelector(".buttons");
const longVal = `linear-gradient(to bottom right, red, blue, green, yellow, purple)`;

let ink = "black";

function resetPad() {
  sketchpad.innerHTML = "";
  inputValue.value = 16;
}

function fillSketchPad(size) {
  // Don't render squares if the input value is equal to the total squares on sketchpad
  if ([...sketchpad.children].length === inputValue.value * inputValue.value)
    return;

  resetPad();
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", draw);
    div.addEventListener("mousedown", draw);
    div.style.userSelect = 'none'
    sketchpad.insertAdjacentElement("beforeend", div);
  }
  inputValue.value = [...sketchpad.children].length / size;
}

function getDimensions(input) {
  fillSketchPad(input);
}

function draw(e) {
  // left click
  if (e.buttons == 1 || e.buttons == 3) {
    if (ink === longVal) {
      this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.background = ink;
  }

  // right click
  if (e.buttons == 2) {
    this.style.background = "white";
  }
}

function renderInks() {
  availableInks.map((color) => {
    const { ink } = color;
    const element = document.createElement("button");
    element.dataset.ink = ink;
    element.style.background = ink;
    inksContainer.insertAdjacentElement("beforeend", element);
  });
}

function handleInks(e) {
  const target = e.target;
  if (target.tagName !== "BUTTON") return;
  // remove "selected" from all children
  [...inksContainer.children].forEach((child) =>
    child.classList.remove("selected")
  );
  target.classList.add("selected");

  changeInk(target.dataset.ink);
}

function changeInk(uc) {
  ink = uc;
}

function handleInput() {
  // set maximum and minimum values for input
  if (inputValue.value < 2) inputValue.value = 2;
  else if (inputValue.value > 100) inputValue.value = 100;
}

function handleSubmit() {
  if (!inputValue.value) return;
  getDimensions(inputValue.value);
}

inksContainer.onclick = handleInks;
submit.onclick = handleSubmit;
inputValue.onchange = handleInput;
reset.onclick = resetPad;

renderInks();
fillSketchPad(32);

// Prevent contextmenu from popping up when (right click) within sketchpad
sketchpad.addEventListener("contextmenu", (e) => e.preventDefault());
