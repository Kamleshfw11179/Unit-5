import axios from "axios"
import { useEffect,useState } from "react"
import { Stack, HStack, VStack,StackDivider,Box,Text,Button } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
export default function Bar(){
    const [loading,setLoading] = useState(true);
    const [datas,setDatas] = useState([]);
    const [page,setPage] = useState(0);
    useEffect(()=>{
        try{
            axios.get("http://localhost:3004/orders?_page=0&_limit=7 ")
            .then((res)=>{setDatas(res.data);console.log(res.data);setLoading(false)})
        }catch(err){
            console.log(err)
        }
    },[])
    function getDataIncrease(){
        if(page+1<=7){
        setPage(page+1)
        setLoading(true)
        try{
        axios.get(`http://localhost:3004/orders?_page=${page+1}&_limit=7`)
        .then((res)=>{
            setDatas(res.data);
            setLoading(false)
        })
        }catch(err){
            console.log(err)
        }
    }
    }
    function getDataDecrease(){
        console.log(page)
        if(page>0){
        setPage(page-1)
        setLoading(true)
        try{
        axios.get(`http://localhost:3004/orders?_page=${page}&_limit=7`)
        .then((res)=>{
            setDatas(res.data);
            setLoading(false)
        })
        }catch(err){
            console.log(err)
        }
    }
    }
    return(
        <>
        {loading?<h1>Loading...</h1>:
        <VStack 
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        width="80%"
        margin="auto"
        marginTop="50px">
        <Box h={10} display="flex" flexDirection="row">
        <Box>
            <input type="checkbox"></input>
        </Box>
        <Box width="7%">id</Box>
        <Box width="7%">Size</Box>
        <Box width="15%">Full Name</Box>
        <Box width="15%">User City</Box>
        <Box width="12%">Order Price</Box>
        <Box width="12%">Status</Box>
        <Box width="12%">Created At</Box>
        <Box width="12%">Duration</Box>
        </Box>
        {datas.map((e)=>{
            return(
            <Box h={10} display="flex" flexDirection="row">
        <Box>
            <input type="checkbox"></input>
        </Box>
        <Box width="7%">{e.id}</Box>
        <Box width="7%">{e.orders_size}</Box>
        <Box width="15%">{e.full_name}</Box>
        <Box width="15%">{e.user_city}</Box>
        <Box width="12%">{e.order_price}</Box>
        <Box width="12%">{e.status}</Box>
        <Box width="12%">{e.created_at}</Box>
        <Box width="12%">{e.days_to_finish}</Box>
        </Box>
        )})}
</VStack>}
 <Box h={10} display="flex" flexDirection="row" width="80%" margin="auto" marginTop="20px" marginBottom="20px">
        <Box display="flex" flexDirection="row">
        <Text fontSize='md'>100 Rows</Text>
        </Box>
        <Box marginLeft="75%">
            <Button onClick={getDataDecrease}><ArrowLeftIcon /></Button>
            <Button onClick={getDataIncrease}><ArrowRightIcon /></Button>
        </Box>
        </Box>
        </>
    )
}