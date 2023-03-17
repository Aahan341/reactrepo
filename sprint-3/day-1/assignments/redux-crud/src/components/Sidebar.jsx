import React,{useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () =>{

    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] =useState([]);

    const handleChange = (e)=>{

        let newCategory=[...category];
        let value =e.target.value;

        if (newCategory.includes(value)){
            newCategory=newCategory.filter((el)=>el !==value)
        }else{
            newCategory.push(value);
        }

        setCategory(newCategory);
       
    };

    useEffect(()=>{
      let params={
        category,
      };
      setSearchParams(params);
    }, [category]);


    return (
        <div>
            <h3>Filter By</h3>
            <div>
                <input type="checkbox" value={"male"} onChange={handleChange}/>
                <label> Men</label>
            </div>
            <div>
                <input type="checkbox" value={"female"} onChange={handleChange}/>
                <label> Women</label>
            </div>
            <div>
                <input type="checkbox" value={"kids"} onChange={handleChange}/>
                <label> Kids</label>
            </div>
        </div>
    );
};



// localhost:8080/login?state=true

// category =male
// category =female;
