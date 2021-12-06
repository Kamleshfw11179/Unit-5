import { Container,Flex,Spacer,Center,Text,Heading } from "@chakra-ui/layout";
import { Icon } from '@chakra-ui/react'
import {FaGithub,FaSlack} from "react-icons/fa"
import DrawerExample from "./Drawer";
import Tiles from "./Tiles";
import Charts from "./Charts";
import Orders from "./Orders";
import {useState} from "react"
export default function Home(){
    const [state,setState] = useState("dash")
    return(
        <>
        <Container bg="blue" maxW="100%" maxH="70px" color="white">
        <Flex direction="row">
        <Flex direction="row" maxH="20%">
        <DrawerExample state={setState}/>
        <Center w='100px'>
        <Heading as="h4" fontWeight="100" size='md'>Masai</Heading>
        </Center>
        </Flex>
        <Spacer />
            <Flex>
            <Center w="10px">
            <Icon as={FaGithub} w="40px" h="20px"/>
            <Heading as="h4" fontWeight="100" size='md'>Github</Heading>
            </Center>
            <Center w="200px">
            <Icon as={FaSlack} w="30px" h="20px"/>
            <Heading as="h4" fontWeight="100" size='md'>Slack</Heading>
            </Center>
            </Flex>
            </Flex>
        </Container>
        {state==="dash"?<>
            <Tiles />
        <Charts />
        </>:
        <>
        <Orders />
        </>}
        </>
    )
}