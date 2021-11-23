import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"

const Productz = styled.div`
height:50px;
width:40%;
margin:auto;
text-align:center;
font-weight:100;
font-size:18px;
padding-top:3%;
`


export default function Product(){
    const x = useParams()
    const [products,setProduct] = useState();
    const [loading,setLoading] = useState(true);
   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${x.id}`)
       .then((res)=>{
           console.log(res.data)
           setProduct(res.data);
           setLoading(false);
       })
   },[]);
    return(
     <>
         {loading?<h1 style={{textAlign:"center",fontWeight:100}}>loading...</h1>:
         <Productz>
         <img style={{width:"100px"}} src={products.image}/>
         <h2>{products.title}</h2>
         <h4>{products.category}</h4>
         <h5>{products.description}</h5>
         <h4>{products.price}$$$</h4>
         </Productz>}
     </>
 )
}