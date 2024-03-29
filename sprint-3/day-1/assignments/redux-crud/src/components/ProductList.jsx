import styled from "styled-components";
import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {ProductCard} from "./ProductCard";
import { getProducts } from "../redux/productReducer/action";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ProductList=()=>{
    const [searchParams]=useSearchParams();
    const dispatch =useDispatch(); 
    const location = useLocation(); 
    const {products}=useSelector((store)=>store.productReducer) ; 
    // console.log(location)
    // console.log(searchParams.getAll("category")); 
        let obj ={
            params:{
                gender:searchParams.getAll("category"),
                _sort:searchParams.get("order") &&"price",
                _order:searchParams.get("order"),
            },
        };

    useEffect(()=>{
        dispatch(getProducts(obj));
    },[location.search]);

    return(
        <DIV>
            {products.length >0 && products.map((el)=>{
                return <ProductCard key={el.id} {...el}/>
            })}
        </DIV>
    )
};

const DIV = styled.div`
    margin:auto 40px;
    margin-left:30px;
    display:grid;
    grid-template-columns:auto auto auto auto;
    gap:20px
`