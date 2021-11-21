import styled from "styled-components"
import {Link} from "react-router-dom"


const Divs = styled.div`
width:100%;
height:50px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
background:lightgrey;
`
export default function Nav(){
    return(
        <Divs>
            <h3>Store</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </Divs>
    )
}