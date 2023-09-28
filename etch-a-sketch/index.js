const sketchpad = document.querySelector('.sketchpad');
const inputValue = document.querySelector('.input')
const submit = document.querySelector('.submitt')


const createPixels=(size)=> {
  sketchpad.innerHTML = "";
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  for (let i = 0; i < (size * size); i++) {
    const div = document.createElement('div');
    sketchpad.insertAdjacentElement("beforeend", div)
  }
  handleInk()
}
createPixels(16)

const getSketchPadSize = (input) => {
  createPixels(input)
}

function handleInk() {
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