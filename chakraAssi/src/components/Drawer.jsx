import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import {FiMenu} from "react-icons/fi"
import {MdOutlineDashboard} from "react-icons/md"
import {FaClipboardList} from "react-icons/fa"
import { Stack, HStack, VStack,Square,Heading,Flex,Text } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input
  } from '@chakra-ui/react'
export default function DrawerExample({state}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} bg="blue" onClick={onOpen}>
          <FiMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottom="1px solid">
            <VStack marginTop="50px">
            <Square bg="grey" borderRadius="50%" width="70px" height="70px" color="white">
            <Heading as="h3" size="lg">MS</Heading>
            </Square>
            <Square >
              <Heading as="h4" size="md">Masai School</Heading>
            </Square>
            <Square >
              <Heading as="h5" size="sm">Batch Name</Heading>
            </Square>
            </VStack>
            </DrawerHeader>
  
            <DrawerBody>
              <Flex height="40px" marginTop="10px">
               <MdOutlineDashboard size={30}/>
               <Text marginLeft="20px" marginTop="3px" fontSize="15px" cursor="pointer" onClick={()=>{state("dash")}}>Dashboard</Text>
              </Flex>
              <Flex height="40px">
                <FaClipboardList size={30}/>
                <Text marginLeft="20px" marginTop="3px" fontSize="15px" cursor="pointer" onClick={()=>{state("order")}}>Orders</Text>
              </Flex>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }