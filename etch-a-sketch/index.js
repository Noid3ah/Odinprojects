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
  { ink: "linear-gradient(to)" },
];

const sketchpad = document.querySelector(".sketchpad");
const inputValue = document.querySelector(".input");
const submit = document.querySelector(".submitt");
const reset = document.querySelector(".reset-pad");
const inksContainer = document.querySelector(".buttons");

let ink = "black";

function resetPad(size) {
  sketchpad.innerHTML = "";
  inputValue.value = [...sketchpad.children].length / size;
}

function fillSketchPad(size) {
  // Don't render squares if the input value is equal to the total squares on sketchpad
  if ([...sketchpad.children].length === inputValue.value * inputValue.value)
    return;

  resetPad(size);
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", draw);
    div.addEventListener("mousedown", draw);
    sketchpad.insertAdjacentElement("beforeend", div);
  }
  inputValue.value = [...sketchpad.children].length / size;
}

function getDimensions(input) {
  fillSketchPad(input);
}

function draw(e) {
    // left click
  if(e.buttons == 1 || e.buttons == 3) {
    this.style.backgroundColor = ink;

    // right click
  } else if(e.buttons == 2) {
    this.style.backgroundColor = 'white'
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
  changeInk(target.dataset.ink);
}

function changeInk(uc) {
  ink = uc;
}

function handleInput() {
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
sketchpad.addEventListener("contextmenu", e => e.preventDefault());