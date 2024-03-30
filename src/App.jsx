import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  use state to set input basically where the calculator will be displayed,
  //  where you see the digits
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

  const preventDefault=(e) => {
     e.preventDefault();  
    }
  const deleteInput = (event) => {
    event.preventDefault();
    if (!calculatorInput) return; // Handle empty string case
  
   setCalculatorInput(calculatorInput.slice(0, calculatorInput.length - 1));
  };

  const addDigit = (event, value) => {
    event.preventDefault();
    event.stopPropagation();

    setCalculatorInput(calculatorInput + value);
  }
  const addOperator = (event, value) => {
    event.preventDefault();
    event.stopPropagation();
    const previousCharacter= calculatorInput[calculatorInput.length-1];
    if(previousCharacter.includes('+','*','/')){
      value='';
    }
    setCalculatorInput(calculatorInput + value);
  }
  return (
      <div className="container">
       
        <div className="calculatorapp" onKeyPress={(e) => {if(e.key === "Enter" || e.code==="Space"){ submitInput(event);}}}> 
          <form className="calculator" >
          <input type="text" value={calculatorInput} onChange={saveInput} autoFocus />
          <button onClick={() => {addOperator(event, '+')}} onKeyPress={preventDefault}>+</button>
          <button onClick={() => {addOperator(event, '-')}} onKeyPress={preventDefault}>-</button>
          <button onClick={() => {addOperator(event, '*')}} onKeyPress={preventDefault}>*</button>
          <button onClick={() => {addOperator(event, '/')}} onKeyPress={preventDefault}>÷</button>
          <button onClick={() => {addDigit(event, '1')}}  onKeyPress={preventDefault}>1</button>
          <button onClick={() => {addDigit(event, '2')}} onKeyPress={preventDefault}>2</button>
          <button onClick={() => {addDigit(event, '3')}} onKeyPress={preventDefault}>3</button>
          <button onClick={() => {addDigit(event, '4')}} onKeyPress={preventDefault}>4</button>
          <button onClick={() => {addDigit(event, '5')}} onKeyPress={preventDefault}>5</button>
          <button onClick={() => {addDigit(event, '6')}} onKeyPress={preventDefault}>6</button>
          <button onClick={() => {addDigit(event, '7')}} onKeyPress={preventDefault}>7</button>
          <button onClick={() => {addDigit(event, '8')}} onKeyPress={preventDefault}>8</button>
          <button onClick={() => {addDigit(event, '9')}} onKeyPress={preventDefault}>9</button>
          <button onClick={deleteInput}>del</button>
          <button onClick={clearInput}>AC</button>
          <button onClick={submitInput}type="submit">=</button>
          </form>
          
         
        </div>
      </div>
  )
}

export default App
