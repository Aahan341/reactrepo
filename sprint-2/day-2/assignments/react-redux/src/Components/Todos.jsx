
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TodoInput } from "./TodoInput"
import axios from "axios";
import { postFailureAction, postRequestAction, postSuccessAction, todoFailureAction, todoRequestAction, todoSuccessAction } from "../redux/action";
const url = "http://localhost:8080/todos";

export const Todos = () => {

    const dispatch = useDispatch();

    const {todos,isLoading} = useSelector((store) => {
        // console.log(store)
        return {
           todos: store.todos,
           isLoading:store.isLoading
        }
});

    const getData = () => {
        dispatch(todoRequestAction());
        axios
            .get(url)
            .then((res) => {
                dispatch(todoSuccessAction(res.data))
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch(todoFailureAction())
                // console.log(err)
            })
    }

    useEffect(() => {
        // getdata
        getData()
    }, [])
    const handleAddTodo=(input) =>{
        const newTodo = {
            title:input,
            status:false,
        }

     dispatch(postRequestAction())
        axios.post(url,newTodo).then(res =>{
           dispatch(postSuccessAction(res.data))
            console.log(res)
        })
        .catch((err)=>{
            dispatch(postFailureAction())
            console.log(err)
        })
         
    }
    return (
        <div>
            <TodoInput addTodo={handleAddTodo}></TodoInput>
            <h1>Todo List</h1>
            {isLoading && <h1>Loading</h1>}
            {
                todos.length > 0 && todos.map((el) => {
                    return (
                        <div>
                            {el.title} --- {el.status ? "Completed" : "pending"}
                        </div>
                    );
                })
            }
        </div>
    )
}

// http://localhost:8080/todos