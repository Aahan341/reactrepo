import React, { Dispatch, SetStateAction, useState } from "react";
import { postTodo } from "../api";

type TodoInputProp = {
    update: ()=> void;
}
export const TodoInput = ({update}:TodoInputProp)=>{
    const [title, setTitle] = useState<string>("");
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        update();
        postTodo(title)
        setTitle("");
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={handleChange} />
            <button>Add Todo</button>
        </form>
    </div>
};



