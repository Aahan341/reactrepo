
import React from "react";

import {Route, Routes} from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoutes";
import { HomePage } from "./HomePage";
import { Login } from "./Login";


export const MainRoutes = ()=>{

    return <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/todo" element={
         <PrivateRoute>   
            <Todos/>
        </PrivateRoute>
        }/>
       
    </Routes>
}