
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editProduct, getProducts } from "../redux/productReducer/action";

export const EditProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState("");
    const [success,setSuccess]=useState("");
    const product = useSelector((store) => store.productReducer.products);
    const dispatch=useDispatch();


    const handleChange = (e) => {
        const {name,value}=e.target;
        // console.log(name,value)
        setData((prev) =>{
            return {...prev, [name]:value}
        })
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        // console.log(data)
        dispatch(editProduct(data,id)).then(()=>{
            setSuccess(true);
        })
    }
    useEffect(() => {
        const data = product.find((el) => el.id === id);
        console.log(data);
        setData(data);
        console.log(id)
    }, [])


    return (
        <DIV>
            <h3>Edit Product:{id}</h3>
            <h2>{success && "Product Edited Successfully!!"}</h2>
            <form onSubmit={handleEdit}>
                <input type="text" name={"image"} onChange={handleChange} value={data.image} />
                <input type="text" name={"title"} onChange={handleChange} value={data.title} />
                <input type="number" name={"price"} onChange={handleChange} value={data.price} />
                <input type="text" name={"brand"} onChange={handleChange} value={data.brand} />
                <input type="number" name={"discount"} onChange={handleChange} value={data.discount} />
                <select name="gender" id="" onChange={handleChange} value={data.gender} >
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <button type="Submit" >Edit</button>
            </form>
        </DIV>
    )
};

const DIV = styled.div`
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
