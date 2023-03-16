import { GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST } from "./actionTypes"


export const todoRequestAction= ()=>{
    return {type:TODO_REQUEST}
};

export const todoFailureAction = () =>{
    return {type:TODO_FAILURE};

}

export const getTodoSuccessAction = (payload)=>{
    return {type:GET_TODO_SUCCESS,payload};
    
}
export const postTodoSuccesssAction = (payload)=>{
    return {type:POST_TODO_SUCCESS,payload};
}