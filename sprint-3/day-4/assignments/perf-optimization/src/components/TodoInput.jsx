import React, { useState } from "react";
import { Todo } from "./Todo";

const initialState=[
    {id:1,title:"Task-1",status:false},
    {id:2,title:"Task-2",status:false},
    {id:3,title:"Task-3",status:false},

]
export const TodoInput = ()=>{
    const [todos,setTodos]=useState(initialState);
    const [title,setTitle]=useState("");

    const handleAdd = ()=>{
        const newTodo = {
            id: Date.now() + title,
            title,
            status:false,
        };

        setTodos([...todos, newTodo]);
        setTitle("");
    };

    return (
        <div>
            <input type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            />
            <button onClick={handleAdd}>Add Todo</button>
            <br/>
            <h3>Todo list</h3>
            {
                todos.length >0 &&
                    todos.map((el)=>{
                        return <Todo key={el.id} {...el}/>
                    })
            }
        </div>
    )
}