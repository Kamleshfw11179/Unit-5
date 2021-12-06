import { Container, Flex,Heading,Box,Text } from "@chakra-ui/layout";

export default function Tiles(){
    return(
       <Container maxW="100%" >
        <Flex direction="row" alignItems="center" justifyContent="space-evenly" p="3">
        <Box w="23%" display="flex" flexDirection="column" textAlign="left" p={7} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
         <Heading as="h6" fontWeight="100" size='xs' float="left">Problems Completed Today</Heading>
         <Heading as="h2" fontWeight="100" size='lg'>6</Heading>
         <Flex direction="row" marginTop="14px">
        <Heading as="h4" color="green" fontWeight="100" size='md' marginRight="10px">24% </Heading>
         <Text> increase from Yesterday</Text>
         </Flex>
        </Box>
        <Box  w="23%" display="flex" flexDirection="column" textAlign="left" p={7} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" >
        <Heading as="h6" fontWeight="100" size='xs'>Total Assignments Completed Today</Heading>
        <Heading as="h2" fontWeight="100" size='lg'>70%</Heading>
        <Flex direction="row" marginTop="14px">
        <Heading  as="h4" fontWeight="100" color="red" size='md' marginRight="10px">10% </Heading>
         <Text> decrease from Yesterday</Text>
         </Flex>
        </Box>
        <Box  w="23%" display="flex" flexDirection="column" textAlign="left" p={7} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Heading as="h6" fontWeight="100" size='xs'>Attendance</Heading>
        <Heading as="h2" fontWeight="100" size='lg'>78%</Heading>
        <Flex direction="row" marginTop="14px">
        <Heading as="h4" color="red" fontWeight="100" size='md' marginRight="10px">5% </Heading>
         <Text> decrease from Yesterday</Text>
         </Flex>
        </Box>
        <Box  w="23%" display="flex" flexDirection="column" textAlign="left" p={7} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Heading as="h6" fontWeight="100" size='xs'>Total Points</Heading>
        <Heading as="h2" fontWeight="100" size='lg'>790</Heading>
        <Flex direction="row" marginTop="14px">
        <Heading as="h4" color="green" fontWeight="100" size='md' marginRight="10px">20% </Heading>
         <Text> increase from Yesterday</Text>
         </Flex>
        </Box>
         </Flex>
            </Container>
    )
}