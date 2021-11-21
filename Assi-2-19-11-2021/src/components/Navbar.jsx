import styled from "styled-components"
import {Link} from "react-router-dom"

const Div = styled.div`
width:100%;
height:50px;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const Divs = styled.div`
width:60%;
height:50px;
display:flex;
align-items:center;
justify-content:space-evenly;
`

export default function Navbar(){
    return(
        <Div>
            <h3>Nav</h3>
            <Divs>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/setting">Setting</Link>
                <Link to="/login">Login</Link>
            </Divs>
        </Div>
    )
}