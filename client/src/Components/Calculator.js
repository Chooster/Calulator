import React, { Component } from 'react'

export default class extends Component {
  state = {
    equation: '',
    solved: false,
  }

  handleNumberClick = (val) => {
    let newEquation = this.state.equation
    if (this.state.solved) {
      if (newEquation === 0) newEquation = ''
      newEquation = `${newEquation}`
      this.setState({ solved: false })
    }
    newEquation += val
    this.setState({ equation: newEquation })
  }

  handleSymbol = (symbol) => {
    let newEquation = this.state.equation
    if (newEquation.length > 0) {
      newEquation = `${newEquation} ${symbol} `
      this.setState({ equation: newEquation })
    }
  }

  handleReverseSymbol = () => {
    let newEquation = this.state.equation
    if (newEquation[0] === '-') {
      newEquation = newEquation.substr(1)
    } else {
      newEquation = `-${newEquation}`
    }
    this.setState({ equation: newEquation })
  }

  handleClear = () => {
    this.setState({ equation: '' })
  }

  solveEquation = () => {
    let newEquation = this.state.equation
    if (!this.state.solved) {
      if ((newEquation[newEquation.length - 1]) === ' ') newEquation = newEquation.slice(0, -3)
      newEquation = eval(newEquation)
      console.log('solved: ' + newEquation)
    }
    this.setState({ equation: newEquation })
    this.setState({ solved: true })
  }

  render() {
    return (
      <div className="container">
        <div className="calc-col">
          <button onClick={() => this.handleClear()}>A/C</button>
          <button onClick={() => this.handleReverseSymbol()}>+/-</button>
          <button onClick={() => this.handleSymbol('%')}>%</button>
        </div>
        <div className="calc-col">
          <button onClick={() => this.handleNumberClick('7')}>7</button>
          <button onClick={() => this.handleNumberClick('8')}>8</button>
          <button onClick={() => this.handleNumberClick('9')}>9</button>
          <button onClick={() => this.handleSymbol('/')}>/</button>
        </div>
        <div className="calc-col">
          <button onClick={() => this.handleNumberClick('4')}>4</button>
          <button onClick={() => this.handleNumberClick('5')}>5</button>
          <button onClick={() => this.handleNumberClick('6')}>6</button>
          <button onClick={() => this.handleSymbol('*')}>*</button>
        </div>
        <div className="calc-col">
          <button onClick={() => this.handleNumberClick('1')}>1</button>
          <button onClick={() => this.handleNumberClick('2')}>2</button>
          <button onClick={() => this.handleNumberClick('3')}>3</button>
          <button onClick={() => this.handleSymbol('-')}>-</button>
        </div>
        <div className="calc-col">
          <button onClick={() => this.handleNumberClick(0)}>0</button>
          <button onClick={() => this.handleNumberClick('.')}>.</button>
          <button onClick={() => this.solveEquation()}>=</button>
          <button onClick={() => this.handleSymbol('+')}>+</button>
        </div>
        <p>{this.state.equation}</p>
      </div>
    )
  }
}
