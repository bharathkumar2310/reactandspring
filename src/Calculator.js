import { useState } from "react";

function Calculator() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleClick = (value) => setInput((prevValue) => prevValue + value);
    const handleClickequals = () => {
        try {
          // Use eval to calculate the result (with caution)
          setResult(eval(input)); // eval should be used with care in real apps
        } catch (error) {
          setResult('Error'); // In case of invalid input
        }
      };

      const handleClickclear = () => {
        setInput('');
        setResult(null);
      }
    return (
        <div>
            <input type = "text" value = {input} placeholder="Display input"/>
            <div>{result !== null ? `= ${result}` : ''}</div>

            <button onClick = {() => {handleClick('1')}}>1</button>
            <button onClick = {() => {handleClick('2')}}>2</button>
            <button onClick = {() => {handleClick('3')}}>3</button>
            <button onClick = {() => {handleClick('+')}}>+</button>


            <button onClick = {() => {handleClick('4')}}>4</button>
            <button onClick = {() => {handleClick('5')}}>5</button>
            <button onClick = {() => {handleClick('6')}}>6</button>
            <button onClick = {() => {handleClick('-')}}>-</button>


            <button onClick = {() => {handleClick('7')}}>7</button>
            <button onClick = {() => {handleClick('8')}}>8</button>
            <button onClick = {() => {handleClick('9')}}>9</button>
            <button onClick = {() => {handleClickclear('C')}}>C</button>

            <button onClick = {() => {handleClick('*')}}>*</button>
            <button onClick = {() => {handleClick('/')}}>/</button>
            <button onClick = {() => {handleClickequals('=')}}>=</button>
            <button onClick = {() => {handleClick('0')}}>0</button>


        </div>
    );
}

export default Calculator