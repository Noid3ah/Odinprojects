const container = document.querySelector('.sketchpad');
const inputValue = document.querySelector('.input').value

container.style.gridTemplateColumns = `repeat(16, 1fr)`
container.style.gridTemplateRows = `repeat(16, 1fr)`

const createSquare=(size)=> {

  for (let i = 0; i < (size * size); i++) {
    const div = document.createElement('div');
    container.append(div)
  }
}
createSquare(16)

const squares = [...container.children];

squares.forEach((sqr)=>{
  sqr.addEventListener('mouseover', (e) => draw(e))
})

const draw = (e) => {
  e.target.style.backgroundColor = 'black'
}

console.log(inputValue)