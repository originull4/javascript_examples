class Calculator {
  
  constructor(buttons, display) {
    this.display = display
    this.firstNumber = ''
    this.seccondNumber = ''
    this.operation = ''
    this.numberHasDot = false
    for (const button of buttons) {
      button.addEventListener('click', (element) => {
        this.buttonClicked(element)
      })
    }
  }

  updateDisplay() {
    let output = `${this.firstNumber} ${this.operation} ${this.seccondNumber}`
    this.display.innerText = output
  }
  
  operationClicked(value) {
    if(this.firstNumber == '') { return }    
    this.operation = value
    this.numberHasDot = false
    this.updateDisplay()
  }

  numberClicked(value) {
    if(value == '.' && this.numberHasDot) { return }
    else if(value == '.' && !this.hasDot) { this.hasDot = true }

    if(this.operation == ''){ this.firstNumber += value }
    else { this.seccondNumber += value}

    this.updateDisplay()
  }

  equalClicked() {
    if(this.seccondNumber == '') { return }
    let first = parseFloat(this.firstNumber)
    let seccond = parseFloat(this.seccondNumber)
    switch(this.operation) {
      case '+':
        this.firstNumber = first + seccond
        break
      case '*':
        this.firstNumber = first * seccond
        break
      case '-':
        this.firstNumber = first - seccond
        break
      case '/':
        this.firstNumber = first / seccond
        break
    }
    this.operation = ''
    this.seccondNumber = ''
    this.numberHasDot = false
    this.updateDisplay()
  }

  clearClicked() {
    this.firstNumber = ''
    this.seccondNumber = ''
    this.operation = ''
    this.numberHasDot = ''
    this.updateDisplay()
  }

  buttonClicked(element) {
    let role = element.target.classList[1]
    let value = element.target.innerText
    console.log(role)
    switch(role) {
      case 'operation':
        this.operationClicked(value)
        break
      case 'number':
        this.numberClicked(value)
        break
      case 'equal':
        this.equalClicked()
        break
      case 'clear':
        this.clearClicked()
    }
  }
}



const buttons = document.getElementsByClassName('button')
const display = document.querySelector('.display')

const calc = new Calculator(buttons, display)