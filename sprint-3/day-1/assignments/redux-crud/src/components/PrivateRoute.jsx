

import React from "react";
import { useSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom"

export const PrivateRoute = ({childern})=>{
    
    const { auth } =useSelector ((store)=>store.authReducer);
    const location =useLocation();
    // console.log(location)
    return auth ? childern : <Navigate to={"/login"} state={location.pathname} replace/>
};

