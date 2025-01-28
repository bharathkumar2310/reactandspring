import { useState } from "react";

function CounterApp() {

    const [counter, setCounter] = useState(0);


    const handleDecrement = ()=>{
        setCounter(counter-1);
    }

    function handleIncrement () {
        return setCounter(counter+1);
    }

    return(
        <div>
            <h1> {counter} </h1>
            <button onClick={handleIncrement} > Increment </button>
            <button onClick={handleDecrement} > Decrement </button>


        </div>
    );

}

export default CounterApp