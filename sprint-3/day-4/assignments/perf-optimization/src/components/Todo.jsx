import { memo } from "react";


export const Todo = memo(({id, title, status}) =>{
    console.log("Todo: Re-Rendering");

    return (
        <div>
           <h2>{title}</h2>
           <p>{status ? "Completed" : "Pending"}</p>
        </div>
    )
});
export default Todo;
