import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"

export default function Home(){
    const {token} = useContext(AuthContext)
    console.log(token)
    return(
        <h1 style={{textAlign:"center" ,fontWeight:"100"}}> This is the home page. </h1>
    )
}