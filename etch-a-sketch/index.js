const sketchpad = document.querySelector('.sketchpad');
const inputValue = document.querySelector('.input');
const submit = document.querySelector('.submitt');
const reset = document.querySelector('.reset-pad');

const resetPad = (size) => {sketchpad.innerHTML = ""; inputValue.value = [...sketchpad.children].length / size};
reset.onclick = resetPad;

const fillSketchPad=(size)=> {
  // Don't render squares if the input value is equal to the total squares on sketchpad
  if([...sketchpad.children].length === inputValue.value * inputValue.value) return;

  resetPad(size)
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  for (let i = 0; i < (size * size); i++) {
    const div = document.createElement('div');
    sketchpad.insertAdjacentElement("beforeend", div)
  }
  inputValue.value = [...sketchpad.children].length / size;
  handlePixels()
}

const getSketchPadSize = (input) => {
  fillSketchPad(input)
}

function handlePixels() {
  const squares = [...sketchpad.children];
  squares.forEach((sqr)=>{
    sqr.addEventListener('mouseover', (e) => draw(e))
  })
}

const draw = (e) => {
  e.target.style.backgroundColor = 'black'
}

submit.addEventListener('click', () => {
  if(!inputValue.value) return;
  getSketchPadSize(inputValue.value)
})

inputValue.addEventListener("change", (e)=> {
  if(inputValue.value < 2) inputValue.value = 2
  else if(inputValue.value > 100) inputValue.value = 100
  console.log(inputValue.value)
})

fillSketchPad(32)
