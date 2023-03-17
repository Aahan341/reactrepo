import styled from 'styled-components';
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { login } from '../redux/authReducer/action';

export const Login=()=>{
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch = useDispatch();

    const {auth} = useSelector(store=>store.authReducer);


    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData={
            email,
            password
        };
     dispatch(login(userData))
        setEmail("");
        setPassword("");
    }
    return (
        <DIV auth={auth}>
            <h2>User login</h2>
            <h3>{auth? "Login Succesfull!!":"Login To continue"}</h3>
            
            <form className="form-1" onSubmit={handleSubmit}>
                <input type="text"
                 value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="Email"/>

                <input type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Password"/>
                <button type="submit">Log In</button>
            </form>
        </DIV>
    )
};


const DIV = styled.div`
    width:400px;
    margin:40px auto;
    border:1px solid gray;
    padding:20px;
  

    .form-1 {
        display:flex;
        flex-direction:column;
        gap: 15px;
        align-items:center;
        
    }

    h3{
        color:${({auth})=>auth? `green`:`red`};
    }

    input {
        width:80%;
        height:40px;
        font-size:large;
    }
    button{
        width:20%;
        height:30px;
    }

`

// WE CAN USE THIS ALSO 
// const FORM = styled.form`
// display:flex;
// flex-direction:column;
// gap: 15px;
// align-items:center;
// `;