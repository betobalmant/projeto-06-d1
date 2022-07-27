const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonMinus = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardForest = document.querySelector('.cardForest')
const cardRain = document.querySelector('.cardRain')
const cardCoffee = document.querySelector('.cardCoffee')
const cardFirePlace = document.querySelector('.cardFirePlace')
let minutes = Number(minutesDisplay.textContent)
export {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  cardForest,
  cardRain,
  cardCoffee,
  cardFirePlace,
  minutes
}
