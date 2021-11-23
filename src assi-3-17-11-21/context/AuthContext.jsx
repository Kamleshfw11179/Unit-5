import { createContext } from "react";
import { useState } from "react";
import axios from "axios";


export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [token,setToken] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in/api/users",{
            data:{
                name:`${name}`,
                password:`${password}`
            }
        })
        .then((res)=>{
            if(res.status===201){
                setToken("abcdef")
            }
        })
    }
return (
    <AuthContext.Provider value={{token,handleSubmit,name,setName,password,setPassword,setToken}}>
        {children}
    </AuthContext.Provider>
)
}
