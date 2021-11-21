import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";


export default function Protectedroute({children}){
    const {token} = useContext(AuthContext);
    console.log(token)
    if(!token){
        return <Navigate to="/login"></Navigate>
    }else{
        return children
    }
}