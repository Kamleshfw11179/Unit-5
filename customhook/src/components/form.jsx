import { Input,Container,Stack,Heading,Button} from '@chakra-ui/react'
import {useState} from "react"
import { useAsync } from '../utils/useAsync';

export default function Form(){
    const [info,setInfo] = useState()
    const [show,setShow] = useState(true)
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const {loading,useri,err} = useAsync(info)
    
    function handleUser(e){
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }

    function handleTime(){
        setTimeout(()=>{
            console.log("hello")
            setShow(true);
            setUser({
                name:"",
                email:"",
                password:""
            })
        },6000)
    }
    return(
        <>
        <Container marginTop={"50px"}>
        <Heading as='h3' size='lg' marginBottom={"10px"}>Please enter details to Sign up</Heading>
        <Stack>
        <Input placeholder='Name' name="name" value={user.name} onChange={handleUser}/>
        <Input placeholder='Email' name="email" value={user.email} onChange={handleUser}/>
        <Input placeholder='Password' name="password" value={user.password} onChange={handleUser}/>
        <Button colorScheme='teal' size='md' onClick={()=>{setInfo(user);setShow(false)}}>Sign Up</Button>
        </Stack>   
        </Container>
        {show?<div></div>:<div>{loading?<Heading>Loading....</Heading>:err?<Heading>{err}</Heading>:<Heading>Registration Successful {user.name}</Heading>}</div>}
        <div>{show?<div></div>:handleTime()}</div>
        </>

    )
}