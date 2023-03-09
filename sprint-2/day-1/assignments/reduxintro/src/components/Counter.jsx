import React, {useState} from "react";
import {store} from "../redux/store.js";
import {addAction,reducerAction} from "../redux/action"

export const Counter = () =>{
   const [render, setRender]= useState(0);
    // console.log(store)
   const {getState, dispatch,subscribe}= store;
//    console.log(getState())

   subscribe(() =>{
    console.log("StateChange:",getState())
    setRender((prev)=> prev+1)
   })
   const addHandler =()=>{
     dispatch(addAction());
   };
   const reduceHandler =()=>{
    dispatch(reducerAction())
};
   
    return(
         <div>
            <h1>Counter:{getState().counter}</h1>
            <button onClick={addHandler}>Add</button>
            <button onClick={reduceHandler}>Reduce</button>
         </div>
    )
}

export default Counter;