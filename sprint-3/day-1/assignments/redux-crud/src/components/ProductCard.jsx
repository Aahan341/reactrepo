import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({image,title,price,brand,discount,gender,id}) =>{

    return(
        <DIV>
            <img src={image} alt="image" />
            <h3>{title}</h3>
            <h3>Price:{price}</h3>
            <p>Brand:{brand}</p>
            <p>Discount:{discount}</p>
            <p>Category:{gender}</p>
            <button>
                <Link to={`/edit/${id}`}>Edit</Link>
                
            </button>
        </DIV>
    )
}

const DIV = styled.div`
    
    border:1px solid gray;
    padding:10px;
    width:300px;

    img {
        width:100%;
        height:180px;
    }
`