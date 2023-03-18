
import React from "react";
import { HomePage } from "./HomePage";
import {Route,Routes} from "react-router-dom";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { PrivateRoute } from "../components/PrivateRoute";
import { EditProduct } from "./EditProduct";

export const MainRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
            <Route path="/edit/:id" element={<PrivateRoute><EditProduct/></PrivateRoute>}></Route>
            <Route path="*" element={<h1>404 Page not Found !!</h1>}></Route>
        </Routes>
    )
}