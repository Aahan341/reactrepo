import styled from "styled-components";
import React from "react";

export const ProductCard = ({image,title,price,brand,discount,gender}) =>{

    return(
        <DIV>
            <img src={image} alt="image" />
            <h3>{title}</h3>
            <h3>Price:{price}</h3>
            <p>Brand:{brand}</p>
            <p>Discount:{discount}</p>
            <p>Category:{gender}</p>
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