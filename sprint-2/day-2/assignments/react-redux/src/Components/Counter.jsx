import { useSelector,useDispatch } from "react-redux"
import {addAction,reduceAction} from "../redux/action"
export const Counter =()=>{

    const dispatch=useDispatch()
    const count=useSelector((state) =>{
            return state.counter;
    })
    
    const addHandle=()=>{
        dispatch(addAction(1))
    }
    const reduceHandle=()=>{
        dispatch(reduceAction(1))
    }

        return(
            <div>
                <h1>Counter:{count}</h1>
                <button onClick={addHandle}>Add</button>
                <button onClick={reduceHandle}>Reduce</button>
            </div>
        )
}