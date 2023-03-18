import styled from "styled-components";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addProduct } from "../redux/productReducer/action";

const initailState ={
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:"",

}

export const Admin =()=>{

    const [product,setProduct] = useState(initailState);
    const dispatch = useDispatch()

   const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;

        setProduct(prev=>{
            return {...prev, [name]:value}
        })
   }

   const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct(initailState);
   }
   return (
    <DIV>
        <h2>Add Product</h2>
        <FORM onSubmit={handleSubmit}>
            <input type="text"
            value={product.image} 
            onChange={(e)=>{
                handleChange(e);
            }} 
            name="image"
            placeholder="image" />

            <input type="text"
             value={product.title} 
            onChange={(e)=>{
                handleChange(e);
            }}
            name="title"
            placeholder="Title" />

            <input type="number" value={product.price}
             onChange={(e)=>{
                handleChange(e);
            }} 
             name="price"
             placeholder="Price" />

            <input type="text" value={product.brand} 
            onChange={(e)=>{
                handleChange(e)
            }} 
            name="brand"
            placeholder="Brand" />

            <input type="text" 
            value={product.discount}
             onChange={(e)=>{
                handleChange(e)
                
            }} 
             name="discount"
             placeholder="Discount" />

            <select name="gender" id="" 
            onChange={(e)=>{
                handleChange(e);
            }}>
                <option value="">Select Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>
            <button type="submit">Submit</button>
        </FORM>
    </DIV>
   )
};

const DIV = styled.div `
width:400px;
margin:40px auto;
border:1px solid gray;
padding:20px;

input {
    width:80%;
    height:40px;
    font-size:large;
}

button{
    width:20%;
    height:30px;
}

select{
    width:50%;
    height:30px;
    font-size:large;
}

`;

const FORM = styled.form`
        
        display:flex;
        flex-direction:column;
        gap: 25px;
        align-items:center;

`