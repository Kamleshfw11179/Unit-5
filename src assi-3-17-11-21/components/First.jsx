import { AppContext } from "../context/AppContext"
import { useContext } from "react"

export default function First(){
    const {value,setValue,state,setState} = useContext(AppContext);
    return(
        <>
        <h1>{value}</h1>
        <button onClick={()=>setValue(7890)}>Change</button>
        </>
    )
}