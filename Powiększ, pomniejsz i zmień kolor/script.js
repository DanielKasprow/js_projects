const plusBtn = document.querySelector('.sizeUp')
const minussBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('p')

console.log(text.textContent)
let fontSize = 36;

const changeSizeText = () =>{
    text.style.fontSize = `${fontSize}px`
}

const increaseSize = () =>{
    if(fontSize < 50){
        fontSize +=5
    }
    changeSizeText()
}
const decreaseSize = () =>{
    if(fontSize > 20){
        fontSize -=5
    }
    changeSizeText()
}

const changeColorText = () =>{
    text.style.color = '#00cfff'
}

plusBtn.addEventListener('click', increaseSize)
minussBtn.addEventListener('click', decreaseSize)

colorBtn.addEventListener('click', changeColorText)