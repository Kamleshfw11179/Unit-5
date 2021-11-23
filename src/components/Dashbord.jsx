import styled from "styled-components";
import "./dash.css"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";






const MainDiv = styled.div`
background:${props=>props.state?"black":"#F5F6FA"};
color:${props=>props.state?"white":"black"};
width:100%;
height:760px;
margin:0px;
display:flex;
flex-direction:row;
`

const Bar = styled.div`
width:5%;
background:${props=>props.state?"#16191C":"white"};
height:100%;
`
const Info = styled.div`
width:30%;
height:100%;
display:flex;
flex-direction:column;
z-index:2;
padding-top:30px;
`
const Dark = styled.p`
position:absolute;
z-index:3;
margin-left:19%;
margin-top:1%;
font-size:10px;
`
const Card1 = styled.div`
height:80%;
width:90%;
background:${props=>props.state?"#292E33":"white"};
margin-left:10%;
padding-top:5%;
padding-left:5%;
`


const Icons = styled.div`
height:450px;
display:flex;
flex-direction:column;
justify-content: space-evenly;
margin-top:40px;
img{
    width:50%;
    margin:auto;
}
`

const Active = styled.p`
height: 24px;
margin-top: 5%;
font-size: 20px;
line-height: 23px;
color: ${props=>props.state?"white":"#31394D"}
`

export default function Dashboard(){
    const {state,setState} = useContext(AppContext);
    return(
        <>
        <MainDiv state={state}>
        <Bar state={state}><img style={{width:"50px",height:"50px",borderRadius:"50px",marginTop:"30px",marginLeft:"7px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYfif1if47JhP8qXlId7aoOsrIv_T8dehoA&usqp=CAU" alt="fdhjb"/>
            <Icons>
            <img src="https://img.icons8.com/material-outlined/32/000000/graph.png" alt="graph"/>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/32/000000/external-direction-easter-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="direction"/>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/000000/external-dustbin-travel-flatart-icons-outline-flatarticons.png" alt="dustbin"/>
            <img src="https://img.icons8.com/windows/32/000000/chat-messages--v1.png" alt="message"/>
            <img src="https://img.icons8.com/small/32/000000/file.png" alt="file"/>
            <img src="https://img.icons8.com/small/32/000000/settings.png" alt="settings"/>
            </Icons>
            <button style={{width:"50px",height:"50px",background:"lightgreen",borderRadius:"50px",border:"none",marginTop:"60px",fontSize:"30px",marginLeft:"7px"}}>+</button>
        </Bar>
        <Info>
            <h1 style={{marginLeft:"40px"}}>My Dashboard</h1>
            <Dark style={{float:"right"}}>Dark Mode</Dark>
            <div className="cbox">
            <label className="switch">
            <input type="checkbox" onClick={()=>setState(!state)}/>
            <span className="slider round"></span>
            </label>
            </div>
            <Card1 state={state}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"300px"}}>
                <Active state={state}>Active Users</Active>
                <div style={{display:"flex" ,flexDirection:"row"}}>
                <p style={{marginRight:"5px"}}>for</p>
                <p style={state?{color:"white"}:{color:"#31394D"}}>August 2020</p>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",width:"300px"}}>
                <img style={{width:"50px",height:"50px",borderRadius:"50px"}}src="https://i.pinimg.com/736x/37/96/c7/3796c7590274e1a6e50bb0d407a23db2.jpg" alt="fdhjb"/>
                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",height:"50px"}}>
                <p style={{fontSize:"18px"}}>Nrupul Dev</p>
                <p style={{marginTop:"-18px"}}>Bangalore, India</p>
                </div>
                </div>
                <div style={{width:"310px",height:"5px",background:"grey",marginTop:"15px",borderRadius:"50px"}}>
                    <div style={{width:"210px",height:"5.5px",background:"#29CB97",borderRadius:"50px"}}></div>
                </div>
                <div style={{width:"310px",height:"15px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"}}>
                <p style={{fontSize:"18px"}}>Professional Level 15</p>
                <p style={{fontSize:"14px",marginTop:"3px"}}>4723 Points</p>
                </div>
                <hr  style={{width:"310px"}}/>
                <div style={{width:"300px",height:"50px"}}></div>
                <div style={{display:"flex",flexDirection:"row",width:"300px"}}>
                <img style={{width:"50px",height:"50px",borderRadius:"50px"}}src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="fdhjb"/>
                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",height:"50px"}}>
                <p style={{fontSize:"18px"}}>Sandhya</p>
                <p style={{marginTop:"-18px"}}>Bangalore, India</p>
                </div>
                </div>
                <div style={{width:"310px",height:"5px",background:"grey",marginTop:"15px",borderRadius:"50px"}}>
                    <div style={{width:"170px",height:"5.5px",background:"#4072EE",borderRadius:"50px"}}></div>
                </div>
                <div style={{width:"310px",height:"15px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"}}>
                <p style={{fontSize:"18px"}}>Professional Level 11</p>
                <p style={{fontSize:"14px",marginTop:"3px"}}>2339 Points</p>
                </div>
                <hr style={{width:"310px"}}/>
                <div style={{width:"300px",height:"50px"}}></div>
                <div style={{display:"flex",flexDirection:"row",width:"300px"}}>
                <img style={{width:"50px",height:"50px",borderRadius:"50px"}}src="https://i.pinimg.com/736x/f0/e4/d9/f0e4d92bf19dd952dd2139e8665443db--male-faces-beautiful-men.jpg" alt="fdhjb"/>
                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",height:"50px"}}>
                <p style={{fontSize:"18px"}}>Elon Tusk</p>
                <p style={{marginTop:"-18px"}}>Bangalore, India</p>
                </div>
                </div>
                <div style={{width:"310px",height:"5px",background:"grey",marginTop:"15px",borderRadius:"50px"}}>
                    <div style={{width:"140px",height:"5.5px",background:"#B558F6",borderRadius:"50px"}}></div>
                </div>
                <div style={{width:"310px",height:"15px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"}}>
                <p style={{fontSize:"18px"}}>Professional Level 6</p>
                <p style={{fontSize:"14px",marginTop:"3px"}}>1884 Points</p>
                </div>
            </Card1>
        </Info>
        </MainDiv>
        </>
    )
}