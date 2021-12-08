import { useState } from "react"
export default function Counter(){
    const [count,setCount] = useState(0)
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 data-testid="count">{count}</h1>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <button data-testid="addBtn" onClick={()=>setCount(count+5)}>Add</button>
            <button data-testid="delBtn" onClick={()=>setCount(count-5)}>Reduce</button>
            </div>
        </div>
    )
}