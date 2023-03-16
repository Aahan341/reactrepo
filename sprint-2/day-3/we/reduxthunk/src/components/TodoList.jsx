import axios from "axios";
import { useEffect } from "react";
import { TodoInput } from "./TodoInput";
import {useSelector,useDispatch} from "react-redux";
import { getTodoSuccessAction, postTodoSuccesssAction, todoFailureAction, todoRequestAction } from "../redux/action";

export const TodoList = () =>{

    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos);

    const getTodos = ()=>{
        dispatch(todoRequestAction());
        axios
            .get("http://localhost:8080/todos")
            .then((res)=>{
                dispatch(getTodoSuccessAction(res.data));
            })
            .catch((err)=>{
                dispatch(todoFailureAction());
            });
    };

    const addTodo = (title )=>{
        const obj={
            title,
            status:false 
        };
        dispatch(todoRequestAction());
        axios
            .post("http://localhost:8080/todos",obj)
            .then((res)=>{
                dispatch(postTodoSuccesssAction(res.data));
            })
            .catch(()=>{
                dispatch(todoFailureAction())
            });
    }

    useEffect(()=>{
        getTodos()
    },[])

    return(
        <div>
            <TodoInput addTodo={addTodo}></TodoInput>
            <h1>Todolist</h1>
            {
                todos.length>0 && todos.map((el)=>{
                    return <div>{el.title}---{el.status? "Completed" :"Pending"}</div>
                })
            }
        </div>
    )
}

// http://localhost:8080/todos