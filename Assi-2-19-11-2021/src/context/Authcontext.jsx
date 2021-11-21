import {createContext,useState } from "react";


export const AuthContext  = createContext();
export default function AuthContextProvider({children}){
    const [token,setToken] = useState("");
    function handleToken(data){
        setToken(data)
    }
    return(
    <AuthContext.Provider value={{token,handleToken}}>
        {children}
    </AuthContext.Provider>
    )
}