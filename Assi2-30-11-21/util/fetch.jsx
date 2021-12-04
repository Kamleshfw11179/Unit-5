import {useState,useEffect} from "react"


function useFetch(url){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState();
    const [err,setError] = useState();
    useEffect(()=>{
        setLoading(true)
        try{
            fetch(url).then(res=>res.json()).then((resq)=>{
                setData(resq) 
                setLoading(false);
            })
        }catch(err){
            setLoading(false);
            setError(err)
        }
    },[])
    return{
        loading,data,err
    }
};

export {useFetch}