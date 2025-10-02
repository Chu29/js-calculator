'use strict'

const advanceBtn = document.querySelector('.scientific')
const clearBtn = document.querySelector('.clear')
const calcAdvance = document.querySelector('.calc-advance')

// select input and output screens
const inputScreen = document.querySelector('.input')
const outputScreen = document.querySelector('.output')

// select the buttons
const operandBtn = document.querySelectorAll('.operand')
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equal')

let currentOperation = ''
let currentInput = ''
let previousInput = ''

// append numbers to the screen
const appendNumber = (number) => {
  currentInput += number
  inputScreen.textContent = ` ${previousInput} ${currentOperation} ${currentInput}`
}

// calculate
const calculate = () => {
  if (previousInput === '' || currentInput === '') return
  let result
  let prev = parseFloat(previousInput)
  let current = parseFloat(currentInput)

  switch (currentOperation) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '÷':
      result = prev / current
      break
    case '%':
      result = prev * (current / 100)
      break
    default:
      break
  }
  outputScreen.textContent = result.toString()
  currentOperation = ''
  previousInput = ''
  currentInput = result.toString()
}

// append operator
const appendOperation = (operation) => {
  if (currentInput === '') return
  // check if operator is %
  if (operation === '%') {
    let result = parseFloat(currentInput) / 100
    outputScreen.textContent = result
    currentInput = ''
    inputScreen.textContent = ''
    return
  }
  // condition for all other operators
  if (previousInput !== '') {
    calculate()
  }
  currentOperation = operation
  previousInput = currentInput
  currentInput = ''
  inputScreen.textContent = `${previousInput} ${currentOperation}`
}

// listen to click events on all numbers
for (const operand of operandBtn) {
  operand.addEventListener('click', () => {
    appendNumber(operand.textContent)
  })
}

// listen to click events on all operators
for (const operator of operatorBtn) {
  operator.addEventListener('click', () => {
    appendOperation(operator.textContent)
  })
}

// listen to click event on equal to operator
equalsBtn.addEventListener('click', () => {
  calculate()
})

// toggle scientific calculator
advanceBtn.addEventListener('click', () => {
  calcAdvance.classList.toggle('hidden')
  calcAdvance.style.paddingLeft = '0px'
})

// clear the screen
clearBtn.addEventListener('click', () => {
  currentOperation = ''
  currentInput = ''
  previousInput = ''
  inputScreen.textContent = ''
  outputScreen.textContent = ''
})
