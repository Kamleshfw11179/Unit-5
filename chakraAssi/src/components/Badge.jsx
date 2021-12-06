import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,Flex,Square,Slider,SliderTrack,Box,SliderFilledTrack,SliderThumb} from "@chakra-ui/react"
import {Text} from "@chakra-ui/react"
import Bar from "./Bar"

export default function Tally(){
return(
    <>
    <Flex direction="row" alignItems="center" justifyContent="space-evenly" marginTop="1%">
    <Breadcrumb separator=' ' width="35%" padding="1%">
  <BreadcrumbItem>
    <BreadcrumbLink href='#' fontSize="15px">All</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' fontSize="15px">Shipped</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#' fontSize="15px">Processed</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#' fontSize="15px">Completed</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
<Square display="flex" flexDirection="column">
    <h3>Start Date</h3>
    <input type="date"/>
</Square>
<Square display="flex" flexDirection="column">
    <h3>End Date</h3>
    <input type="date"/>
</Square>
<Square width="30%">
<Slider minW="30"  aria-valuetext="10" defaultValue={10} min={0} max={300} step={30}>
  <SliderTrack bg='red.100'>
    <Box position='relative' right={10} />
    <SliderFilledTrack bg='tomato' />
  </SliderTrack>
  <SliderThumb boxSize={6} />
</Slider>
</Square>
</Flex>
<Bar></Bar>
</>
)
}

// Made using chakra
