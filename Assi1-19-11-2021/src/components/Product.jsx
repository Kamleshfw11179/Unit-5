import axios, { Axios } from "axios"
import { useEffect,useState } from "react"
import { useContext } from "react"
import {AppContext} from "../context/AppContext"
import styled from "styled-components"
import { useParams } from "react-router"
import {Link} from "react-router-dom"

const Div = styled.div`
width:30%;
margin:auto;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
`
const Img = styled.img`
width:70px;
`

const QtyD = styled.div`
display:flex;
flex-direction:row;
alignItems:center;
justify-content:space-around;
width:40%;
height:30%;
`
export default function Product(){
    const {productList,setproductList} = useContext(AppContext);
    const [loading,setLoading] = useState(true);
    const [product,setProduct] = useState({});
    const [prod,setProd] = useState({pro:{},counts:0})
    const [count,setCount] = useState(0);
    const x = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${x.id}`)
        .then((res)=>{
            console.log(res)
            setProduct(res.data);
            setProd({pro:res.data,counts:0});
            setLoading(false);
        })
    },[])

    const addProduct=()=>{
      setproductList([...productList,prod]);
    }

    function handleAdd(){
        setProd({
            pro:product,
            counts:count+1
        })
        setCount(count+1)
    }
    function handleReduce(){
        if(count>0){
            setProd({
                pro:product,
                counts:count-1
            })
            setCount(count-1)
        }
    }
    return(
        <div >
        {loading?
        <h1 style={{textAlign:"center",fontWeight:"100"}}>Loading....</h1>:
        <Div>
            <Img src={product.image} />
            <h3>{product.title}</h3>
            <h4>{product.price}$$$</h4>
            <QtyD>
                <button style={{height:"30px"}} onClick={handleAdd}>+</button>
                <p style={{marginTop:"-0.1%" ,marginLeft:"10px", marginRight:"10px"}}>{count}</p>
                <button style={{height:"30px"}} onClick={handleReduce}>-</button>
            </QtyD>
            <button onClick={addProduct}>Add to Cart</button>
            <Link to="/cart"><button style={{marginLeft:"0",width:"140px"}}>Go to Cart</button></Link>
        </Div>}
        </div>
    )
}