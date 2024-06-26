import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  use state to set input basically where the calculator will be displayed,
  //  where you see the digits
  const [calculatorInput, setCalculatorInput] = useState(''); 
   const saveInput = (event) =>{
      const regex =/^[\d%.*/+\-]+$/;
      const conditions=["++","**","*+"];
    
      const userInput = event.target.value;
      // const previousCharacter= calculatorInput[calculatorInput.length-1];
    //  console.log(previousCharacter)
      if(regex.test(userInput) && conditions.every(check => !userInput.includes(check))){
        setCalculatorInput(userInput)
        console.log('please set')

      } 
 
    // if( previousCharacter.includes('+')){
    //  console.log('block')
    // }
 
  }
  const submitInput =(event) =>{
    event.preventDefault();
    try{
      const newValue= eval(calculatorInput);
    setCalculatorInput(newValue)
    }
    catch{
      setCalculatorInput('ERROR')
    }
  } 
  const clearInput=(event)=>{
    event.preventDefault();
    setCalculatorInput('') 
  }
  const preventDefault=(e) => {
     e.preventDefault();  
    }
  const deleteInput = (event) => {
    event.preventDefault();
    if (!calculatorInput) return; // Handle empty string case
    const calculatorLength=calculatorInput.length;
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
    const conditions=["+","*","/"];
    
    const previousCharacter= calculatorInput[calculatorInput.length-1];
    const currentCharacter= calculatorInput[calculatorInput.length];
    console.log(conditions)
    console.log(previousCharacter)
    if(conditions.some(check => previousCharacter.includes(check))){
      value=''
    }
  setCalculatorInput(calculatorInput + value);
  }
  return (
      <div className="container">
       
        <div className="calculatorapp" onKeyPress={(e) => {if(e.key === "Enter" || e.code==="Space"){ submitInput(event);} if(e.key === "a"){console.log('i see you')}}}> 
          <form  className="calculator">
            <input type="text" value={calculatorInput} onChange={saveInput} autoFocus />
            <div className="buttons">
              <div className="inner">
              <button onClick={deleteInput}>C E</button>
               <button onClick={() => {addDigit(event, '(')}}  onKeyPress={preventDefault}>(</button>
                <button onClick={() => {addDigit(event, ')')}}  onKeyPress={preventDefault}>)</button>
                
               
                <button className="operator" onClick={() => {addOperator(event, '*')}} onKeyPress={preventDefault}>*</button>
                <button onClick={() => {addDigit(event, '7')}} onKeyPress={preventDefault}>7</button>
                <button onClick={() => {addDigit(event, '8')}} onKeyPress={preventDefault}>8</button>
                <button onClick={() => {addDigit(event, '9')}} onKeyPress={preventDefault}>9</button> 
                <button className="operator" onClick={() => {addOperator(event, '/')}} onKeyPress={preventDefault}>÷</button>
                <button onClick={() => {addDigit(event, '4')}} onKeyPress={preventDefault}>4</button>
                <button onClick={() => {addDigit(event, '5')}} onKeyPress={preventDefault}>5</button>
                <button onClick={() => {addDigit(event, '6')}} onKeyPress={preventDefault}>6</button>
                <button className="operator" onClick={() => {addOperator(event, '+')}} onKeyPress={preventDefault}>+</button>
                <button onClick={() => {addDigit(event, '1')}}  onKeyPress={preventDefault}>1</button>
                <button onClick={() => {addDigit(event, '2')}} onKeyPress={preventDefault}>2</button>
                <button onClick={() => {addDigit(event, '3')}} onKeyPress={preventDefault}>3</button>
                <button className="operator" onClick={() => {addOperator(event, '-')}} onKeyPress={preventDefault}>-</button>
                <button onClick={() => {addDigit(event, '0')}}  onKeyPress={preventDefault}>0</button>
                <button onClick={() => {addDigit(event, '.')}}  onKeyPress={preventDefault}>.</button>
                <button onClick={() => {addDigit(event, '%')}}  onKeyPress={preventDefault}>%</button>
                <button className="operator" onClick={submitInput}type="submit">=</button>
                <button onClick={clearInput}>AC</button>
              
                
                
                
                
                
              </div>
            </div>
          </form>
          
         
        </div>
      </div>
  )
}

export default App
