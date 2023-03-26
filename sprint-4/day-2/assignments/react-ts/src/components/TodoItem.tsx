import React from "react";
import { toggelTodo } from "../api";
import { Todo } from "./contants";

interface TodoItemProps extends Todo{
    update: () => void;
}

export const TodoItem = ({title, status, id, update}:TodoItemProps) =>{
const handleToggle = () =>{
    // toggelTodo(id, status);
    toggelTodo( status, id);
    update();
};

    return (
        <div>
            <h3>Title: {title} --Status:{status? "True":"False"}</h3>
           
          <button onClick={handleToggle}>Toggle</button>
        </div>
    )
    
} 