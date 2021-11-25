import "./todo.css"
import { useState } from "react"
import TodoList from "./Todolist"
import { useSelector,useDispatch } from "react-redux"
import { addTodo,delete_todo,toggleTodo,editTodo} from "../Redux/action"
import { nanoid } from 'nanoid'


export default function Todo(){
    const [title,setTitle] = useState("")
    const x = useSelector(store=>store.todos.data)
    const dispatch = useDispatch()
    return(
        <>
        <div className="div1">
            <input
            className="addI" 
            type="text"
            value={title}
            placeholder="Add Todo" 
            onChange={(e)=>setTitle(e.target.value)} />
            <button className="add" onClick={()=>{
                dispatch(addTodo({
                    id:nanoid(),
                    title:title,
                    status:false
                }))
                ,setTitle("")}}>+</button>
        </div>
        <div>
      {x.length===0?<div>
        <h1 style={{fontWeight:"100" ,margin:"auto"}}>Please add todo</h1>
        </div>:x.map((e)=>{
            if(x.length===0){
                return(
                    <h1 style={{fontWeight:100}}>Please Add Todo</h1>
                )
            }else{
            return(
                <TodoList e={e}/>
            )
            }
        })}
            </div>
        </>
    )
}

