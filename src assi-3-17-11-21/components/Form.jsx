import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./form.module.css"


export default function Form(){

    const {setName,setPassword,handleSubmit,password,name}  = useContext(AuthContext);
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br/>
            <input type="text" value={name} name="email" placeholder="email" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="text" value={password} name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <input className={styles.btn} type="submit" />
        </form>
        </>
    )
}