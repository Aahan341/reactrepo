import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState={

    isLoading:false,
    isError:false,
    auth:false,
    token:""

}


export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state, isLoading:true}
        case LOGIN_SUCCESS:
            return {...state,isLoading:false, auth:true,token:payload};
        case LOGIN_FAILURE:
            return {...state,isloading:false,isError:true};
        default:
            return state;
    }
}