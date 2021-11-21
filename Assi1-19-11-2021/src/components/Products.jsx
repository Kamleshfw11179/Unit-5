import { useContext,useEffect,useState } from "react"
import {Link} from "react-router-dom"
import {AppContext} from "../context/AppContext"
import axios from "axios"


export default function Products(){
    const {setproductList} = useContext(AppContext);
    const [product,setProduct] = useState({});
    const [count,setCount] = useState(1);
    const [data,setData] = useState({
        name:product,
        quantity:count
    })
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setData(res.data);
            setLoading(false)
        })
    },[])
    return(
        <>
        <div >
        {loading?
        <h1 style={{textAlign:"center",fontWeight:"100"}}>Loading...</h1>
        :<div>
            {data.map((e)=>{
                return(
                    <div style={{display:"flex",flexDirection:"column" ,alignItems:"center"}}  key={e.id}>
                    <img src={e.image} style={{width:"100px"}} />
                    <h3>{e.title}</h3>
                    <h4>{e.price}$$$</h4>
                    <Link to={`/product/${e.id}`}><button>Check Out</button></Link>
                    <br/>
                    </div>
                )
            })}
        </div>
        }
        </div>
        </>
    )
}