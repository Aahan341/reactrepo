import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }
    const handleDouble = ()=>{
        setCount(count*2)
    }

    return(
        <div>
            <h2 data-testid="counter-header">Counter</h2>
            <h3 data-testid="count">{count}</h3>
            <button onClick={handleIncrement} data-testid="add-btn" >+</button>
            <button onClick={handleDecrement} data-testid="subtract-btn">-</button>
            <button onClick={handleDouble} data-testid="double-btn"> Double</button>
            
         </div>
    )

}




export default Counter; 
// 