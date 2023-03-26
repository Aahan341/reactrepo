
import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./contants";
import { getTodos } from "../api";
import { TodoItem } from "./TodoItem";

export const TodoApp = () =>{
    const [todos, setTodos] =useState<Todo[]>([]);
    const [update, setUpdate] =useState(false);

   const onAdd=()=>{
    setUpdate((prev)=>!prev);
    };

    useEffect(()=>{
        getTodos().then((res)=>{
            setTodos(res);
        })
    },[update]);
    return (
    <div>
      <TodoInput update={onAdd}/>
      <h2>Todo List</h2>
      {
        todos.map((el)=>{
            return <TodoItem key={el.id}{...el} update={onAdd} />
        })
      }
    </div>
    );
};
