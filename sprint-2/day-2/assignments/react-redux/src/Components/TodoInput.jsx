import React, { useState } from "react"

export const TodoInput =({addTodo}) =>{

    const [input, setInput]=useState("");

    const handleAddTodo=()=>{
        addTodo()
        console.log(input);
        setInput("");
    }
    return(
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="AddTodo" />
            <button onClick={handleAddTodo}>AddTodo</button>
        </div>
    )
}