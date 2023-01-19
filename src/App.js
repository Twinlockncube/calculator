import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const [keyValue,setKeyValue] = React.useState(0)
  const [commaInserted,setCommaInserted] = React.useState(false)
  const [answer,setAnswer] = React.useState('')
  let expression = useRef('')

  const handleClick = (val) => {
    if(!(commaInserted && val==='.')){
      const ops = ['+','-','*','/']
      if(val==='='){
        const ans = eval(expression.current)
        expression.current = ans.toString()
        setAnswer(ans)
        setKeyValue(ans)
      }
      else if(val==='clr'){
        expression.current = ''
        setAnswer('')
        setKeyValue('0')
        setCommaInserted(false)
      }
      else{
        setKeyValue(prevState =>prevState==0?val:prevState+val.toString())
        
        if(ops.includes(val)){
          setCommaInserted(false)
          if(val==='-'){
            expression.current += val
          }
          else{
            const arrExpr = Array.from(expression.current)
            while(ops.includes(arrExpr[arrExpr.length-1])){
              arrExpr.pop()
            }               
            expression.current = arrExpr.join('') + val
          }
        }
        else{
          if(val==='.'){
            setCommaInserted(true)
          }
          expression.current += val
        }
      }
    }
  }

  return (
    <div className="App">
        <div id="display">
          <span>{keyValue}</span><span className='answer'>{answer}</span>
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
          <button id='multiply' onClick={() => handleClick('*')}>X</button>
          <button id='divide'   onClick={() => handleClick('/')}>/</button>
          <button id='decimal'  onClick={() => handleClick('.')}>.</button>
          <button id='clear'    onClick={() => handleClick('clr')}>Clr</button>
          <button id='equals'   onClick={() => handleClick('=')}>=</button>
        </div>
    </div>
  );
}

export default App;
