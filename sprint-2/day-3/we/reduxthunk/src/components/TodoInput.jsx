import React from "react";
import { useState } from "react";

export const TodoInput = ({addTodo})=>{
    const [text, setText]=useState("");

    const handleAdd =()=>{
        console.log(text);
        addTodo(text)
        setText("")
    }
    return(
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
             placeholder="Add Todo" 
             />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}


