import styled from "styled-components"
import { useState,useContext } from "react"
import {AuthContext} from "../context/Authcontext"
import {useNavigate} from "react-router-dom"



const Div = styled.div`
width:30%;
margin:auto;
border:1px solid grey;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
padding-bottom:2%;
`

export default function form(){
    const navigate = useNavigate();
    const {token,handleToken} = useContext(AuthContext);
    const [info,setInfo] = useState({
        name:"",
        email:"",
        password:""
    })
    
const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInfo({...info,[name]:value});
}

const handleSubmit=()=>{
    if(info.name=="Raj" && info.password==123){
        handleToken("Hello");
        navigate("/")
    }
    else{
        alert("Please enter a correct password")
    }
}
    return(
        <Div>
            <label>
            <p>Name</p>
            </label>
            <input  type="text" placeholder="Name" value={info.name} name="name" onChange={handleChange}/>
            <br/>
            <label>
            <p>Email</p>
            </label>
            <input  type="text" placeholder="Email" value={info.email} name="email" onChange={handleChange}/>
            <br/>
            <label>
            <p>Password</p>
            </label>
            <input  type="text" placeholder="Password" value={info.password} name="password" onChange={handleChange}/>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </Div>
    )
}