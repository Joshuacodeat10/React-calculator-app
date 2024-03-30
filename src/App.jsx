import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [calculatorInput, setCalculatorInput] = useState(''); 
   const saveInput = (event) =>{
    setCalculatorInput(event.target.value)
  }
  const submitInput =(event) =>{
    event.preventDefault();
    const newValue= eval(calculatorInput);
    setCalculatorInput(newValue.toString())
  } 
  const clearInput=(event)=>{
    setCalculatorInput('')

  }
  const deleteInput = (event) => {
    event.preventDefault();
    if (!calculatorInput) return; // Handle empty string case
  
   setCalculatorInput(calculatorInput.slice(0, calculatorInput.length - 1));
  };
  const addDigit = (event, value) => {
    event.preventDefault()
    setCalculatorInput(calculatorInput + value);
  }
  return (
      <div className="container">
       
        <div className="calculatorapp">
          <form  className="big">
          <input type="text" value={calculatorInput} onChange={saveInput} />
          <button onClick={() => {addDigit(event, '+')}}>+</button>
          <button onClick={() => {addDigit(event, '-')}}>-</button>
          <button onClick={() => {addDigit(event, '*')}}>*</button>
          <button onClick={() => {addDigit(event, '/')}}>÷</button>
          <button onClick={() => {addDigit(event, '1')}}>1</button>
          <button onClick={() => {addDigit(event, '2')}}>2</button>
          <button onClick={() => {addDigit(event, '3')}}>3</button>
          <button onClick={() => {addDigit(event, '4')}}>4</button>
          <button onClick={() => {addDigit(event, '5')}}>5</button>
          <button onClick={() => {addDigit(event, '6')}}>6</button>
          <button onClick={() => {addDigit(event, '7')}}>7</button>
          <button onClick={() => {addDigit(event, '8')}}>8</button>
          <button onClick={() => {addDigit(event, '9')}}>9</button>
          <button onClick={deleteInput}>del</button>
          <button onClick={clearInput}>AC</button>
          <button onClick={submitInput}type="submit">=</button>
          </form>
          
         
        </div>
      </div>
  )
}

export default App
