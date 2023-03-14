
import React from "react";
import {useSelector} from "react-redux"

export const PrivateRoute = ({children}) =>{
    const auth = useSelector(store=>store.auth.auth);

    return !auth?  <Navigate to={"/login"}/>:children;
    
}