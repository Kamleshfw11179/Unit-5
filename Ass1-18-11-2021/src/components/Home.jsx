import styled from "styled-components"



const Head = styled.div`
height:50px;
width:30%;
margin:auto;
text-align:center;
font-weight:100;
font-size:25px;
padding-top:3%;
`
const Img = styled.img`
position:absolute;
z-index:-100;
width:100%;
height:720px;
`
export default function Home(){
    return(
        <>
        <Img src={"https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"}/>
        <Head>
            Home
        </Head>
        </>
    )
}