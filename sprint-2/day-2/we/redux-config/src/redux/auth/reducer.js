import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes";

const initialState ={
    auth:false,
    token:"",
    isError:false,
    isloading:false
}
export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return {...state,isloading:true}
        case USER_LOGIN_SUCCESS:
            return {...state,isloading:false,token:payload,auth:true}
        case USER_LOGIN_FAILURE:
            return {...state,isloading:false,isError:true}
        default:
            return state;
    }
}