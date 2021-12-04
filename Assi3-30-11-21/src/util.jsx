import {useState,useEffect} from "react"
export function useUpdate(data){
const [info,setInfo] = useState({
    username:"",
    email:"",
    password:""
})
    function getData(data){
        setInfo({...info,...data})
    }
return{
    info,getData
}
}