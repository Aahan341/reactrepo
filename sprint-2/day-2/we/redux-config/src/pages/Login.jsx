import React from "react";
import axios from "axios";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { loginFailureAction, loginRequestAction, loginSuccessAction } from "../redux/auth/action";

export const Login = ()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const dispatch = useDispatch()
    const auth = useSelector((store)=>store.auth)
    console.log(auth)

    const handleLogin =()=>{
        const userData={email,password}
        dispatch(loginRequestAction());
        axios.post("https://reqres.in/api/login",userData).then((res)=>{
            dispatch(loginSuccessAction(res.data.token))
        })
        .catch(()=>{
            dispatch(loginFailureAction())
        })
        setEmail("");
        setPassword("");
    };

    return(
        <div>
            <input 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
             />
            <input 
            type="text"
             placeholder="Password" 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>LogIn</button>
        </div>
    )
}