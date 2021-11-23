import styled from "styled-components"
import {useState,useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom"

const ProductsDiv = styled.div`
height:50px;
width:30%;
margin:auto;
text-align:center;
font-weight:100;
font-size:25px;
padding-top:3%;
`

const Links = styled(Link)`
text-decoration:none;
color:black;
font-weight:100;
:hover{
    color:grey;
}
`


export default function Products(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data);
            setLoading(false);
        })
    },[])
    return(
       
        <>
        {loading?
        <h2 style={{textAlign:"center",fontWeight:100}}>loading...</h2>:
        <ProductsDiv>
            {products.map((e)=>{
                return(
                    <Links to={`/product/${e.id}`} key={e.id}>
                    <div  key={e.id}>
                    <img style={{width:"100px"}} src= {e.image}/>
                    <p>{e.title}</p>
                    </div>
                    </Links>
                )
            })}
            </ProductsDiv>
        }
            </>
        
    )
}