import axios from "axios"
import {useState,useEffect} from "react"

function useAsync(data){
    const [loading,setLoading] = useState(true)
    const [useri,setUseri] = useState()
    const [err,setError] = useState()
    useEffect(() => {
        setLoading(true)
        if(data){
            try{
        axios.post("http://localhost:3004/users",data)
        .then((res)=>{
            setLoading(false)
            setUseri(res.data)
        })
    }catch(err){
        setError(err)
    }
    }
        return 
    }, [data])
    return{
        loading,useri,err
    }
}

export {useAsync}