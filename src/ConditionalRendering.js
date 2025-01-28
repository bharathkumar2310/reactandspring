import { useState } from "react";

function ConditionalRendering() {
    const [condition , setCondition] = useState(true);
    return(<>
        {condition && <p>LoggedInSuccessfully</p> }
        {condition ? <p>LoggedInSuccessfully</p>: <p>Please Login</p>}
        <button onClick = {() => setCondition(!condition)}>TOGGLE</button>

    </>);
}

export default ConditionalRendering;