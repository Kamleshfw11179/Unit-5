import "./todo.css"
import {useState} from "react"
import { useDispatch } from "react-redux"
import {delete_todo,toggleTodo,editTodo} from "../Redux/action"
export default function Input({e}){
    const [show,setShow] = useState(false);
    const [change,setChange] = useState("");
    const dispatch = useDispatch();
    return(
        <div key={e.id} className="showDiv">
        <div className="mainData">
        <h1>{e.title}</h1>
        {e.status?<h2>Done</h2>:<h2>Not Done</h2>}
        </div>
        {show?
        <div className="sDiv">
            <input type="text" value={change} placeholder="Update data" onChange={(e)=>setChange(e.target.value)}/>
            <button onClick={()=>{dispatch(editTodo({id:e.id,data:change})),setShow(!show)}}>Update</button>
            </div>:""}
            <div className="updateButtons">
        <button onClick={()=>{dispatch(toggleTodo(e.id))}}>Toggle</button>
        <button onClick={()=>{dispatch(delete_todo(e.id))}}>Delete</button>
        <button onClick={()=>setShow(!show)}>Edit</button>
        </div>
        </div>
    )
}