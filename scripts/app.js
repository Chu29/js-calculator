'use strict'

const advanceBtn = document.querySelector('.scientific')
const calcAdvance = document.querySelector('.calc-advance')
const calcBtn = document.querySelector('.calc-btns')
const clearBtn = document.querySelector('.clear')

// select input and output screens
let inputScreen = document.querySelector('.input')
let outputScreen = document.querySelector('.output')

// select all the buttons
const operandBtn = document.querySelectorAll('.operand')
console.log(operandBtn)

// listen to click events on all numbers
for (const operand of operandBtn) {
  operand.addEventListener('click', () => {
    inputScreen.textContent += operand.textContent
  })
}

// toggle scientific calculator
advanceBtn.addEventListener('click', () => {
  calcAdvance.classList.toggle('hidden')
  calcAdvance.style.paddingLeft = '0px'
})

// clear the screen
clearBtn.addEventListener('click', () => {
  inputScreen.textContent = ''
  outputScreen.textContent = ''
})
