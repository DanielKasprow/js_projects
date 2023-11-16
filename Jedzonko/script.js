const btnBurger = document.querySelector('.burger')
const btnPizza = document.querySelector('.pizza')
const btnRice = document.querySelector('.rice')

function Food(name, price){
  this.name = name
  this.price = price
}

const burger = new Food('Burger', 50)
const pizza = new Food('Pizza', 30)
const rice = new Food('Ryż', 10)

Food.prototype.display = function(){
  console.log(`${this.name} kosztuje ${this.price}zł.`)
}



btnBurger.addEventListener('click', () => burger.display())
btnPizza.addEventListener('click', () => pizza.display())
btnRice.addEventListener('click', () => rice.display())