import styled from "styled-components"
import {Link} from "react-router-dom"

const Nav = styled.div`
width:100%;
height:50px;
background:lightgrey;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly
`
const Links = styled(Link)`
text-decoration:none;
color:black;
font-weight:600;
`
export default function Navbar(){
    return(
        <Nav>
        <h2>The Store</h2>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
        <Links to="/products">Products</Links>
        </Nav>
    )
}