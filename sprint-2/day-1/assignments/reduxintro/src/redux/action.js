
// {type:Add,payload:1}
import { ADD,REDUCE } from "./actionTypes";

export const addAction=()=>{

    return {type:ADD,payload:1};
};

export const reducerAction=()=>{
    return {type:REDUCE,payload:1};
};