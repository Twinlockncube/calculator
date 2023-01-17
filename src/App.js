import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [keyValue,setKeyValue] = React.useState(0)
  const [firstOpd,setFirstOpd] = React.useState(0)
  /*Comma has already been clicked(So second one has no meaning) */
  const [commaClicked,setCommaClicked] = React.useState(false)
  /*Comma has already been inserted into the numer(avoid having (45.67.4).toString()*/
  const [commaInserted,setCommaInserted] = React.useState(false)
  const [secondOpd,setSecondOpd] = React.useState(0)
  const [answer,setAnswer] = React.useState('')
  const [opChosen,setOpChosen] = React.useState(false)
  const [chosenOp,setChosenOp] = React.useState(null)

  const handleClick = (val) => {
    if(!(commaInserted && val==='.')){
      setKeyValue(prevState =>prevState==0?val:prevState+val.toString())
      const operators = ['+','-','x','/']
      if(operators.includes(val)){
        setOpChosen(true)
        setChosenOp(val)
      }
      else if(val==='='){
        setAnswer((()=> {
          switch(chosenOp){
            case '+' :
              return +(firstOpd) + (+(secondOpd))
            case '-' :
              return +(firstOpd) - (+(secondOpd))
            case 'x' :
              return +(firstOpd) * (+(secondOpd))
            case '/' :
              return +(firstOpd) / (+(secondOpd))
            default  :
            return ''
          }
        }))
      }
      else{     
        if(!opChosen){
          setFirstOpd(prevState=> {
            return prevState==0?val:prevState+val.toString()
          })
        }
        else{
          setSecondOpd(prevState=>prevState==0?val:prevState+val.toString())
        }
        if(val==='.'){
          setCommaInserted(true)
        }
      }
    }

  }

  return (
    <div className="App">
        <div id="display">
          <span>{keyValue}</span><span id='answer'>{answer}</span>
        </div>
        <div className="keys">
          <button id='zero'     onClick={() => handleClick(0)}>0</button>
          <button id='one'      onClick={() => handleClick(1)}>1</button>
          <button id='two'      onClick={() => handleClick(2)}>2</button>
          <button id='three'    onClick={() => handleClick(3)}>3</button>
          <button id='four'     onClick={() => handleClick(4)}>4</button>
          <button id='five'     onClick={() => handleClick(5)}>5</button>
          <button id='six'      onClick={() => handleClick(6)}>6</button>
          <button id='seven'    onClick={() => handleClick(7)}>7</button>
          <button id='eight'    onClick={() => handleClick(8)}>8</button>
          <button id='nine'     onClick={() => handleClick(9)}>9</button>
          <button id='add'      onClick={() => handleClick('+')}>+</button>
          <button id='subtract' onClick={() => handleClick('-')}>-</button>
          <button id='multiply' onClick={() => handleClick('x')}>X</button>
          <button id='divide'   onClick={() => handleClick('/')}>/</button>
          <button id='decimal'  onClick={() => handleClick('.')}>.</button>
          <button id='clear'    onClick={() => handleClick('clr')}>Clr</button>
          <button id='equals'   onClick={() => handleClick('=')}>=</button>
        </div>
    </div>
  );
}

export default App;
