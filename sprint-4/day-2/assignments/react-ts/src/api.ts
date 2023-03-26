
import axios,{AxiosResponse} from "axios";
import { Todo } from "./components/contants";


export const postTodo = async(title:string) =>{
    const newTodo: Todo = {
        title,
        status:false,
    };
    const res: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos",newTodo);
};


export const getTodos =async ()=>{
    const res:AxiosResponse<Todo[]>= await axios.get("http://localhost:8080/todos")  ;
    return res.data; 
};

export const toggelTodo = async ( status :boolean, id?:number )=>{
    // there is two method 
    // getRequest ---> current status
    // Patch req --> ! current status
    // const todo = await axios.get (`http://localhost:8080/todos/${id}`);
    // status:!todo.status,
    const res = await axios.patch(`http://localhost:8080/todos/${id}`, {status:!status,})
};


/*
function 
*/