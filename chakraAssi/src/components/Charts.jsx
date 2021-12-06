import { Container,Flex,Heading,Square,Text} from "@chakra-ui/layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {CategoryScale,LinearScale,BarElement,Title,} from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  export const data1 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
export default function Charts(){
    return(
        <Container maxW="100%">
            <Flex direction="row" alignItems="center" justifyContent="space-evenly">
            <Flex direction="column" width="59%" maxH="300px">
            <Heading textAlign="left" as="h4" fontWeight="100" size='md' float="left">Activity</Heading>
            <Square border="1px solid grey">
            <Bar options={options} data={data1} />
            </Square>
            </Flex>
            <Flex direction="column" width="25%" maxH="300px">
            <Heading textAlign="left" as="h4" fontWeight="100" size='md' float="left">Stats</Heading>
            <Square border="1px solid grey" borderBottom="0px">
            <Doughnut data={data} />
            </Square>
            <Flex direction="row" alignItems="center" justifyContent="space-evenly" border="1px solid grey" borderTop="0px">
                <Flex direction="column">
                <Text >Completed</Text>
                <Heading >70%</Heading>
                </Flex>
                <Flex direction="column">
                <Text >Pending</Text>
                <Heading >15%</Heading>
                </Flex>
                <Flex direction="column">
                <Text >Not Started</Text>
                <Heading >8%</Heading>
                </Flex>
            </Flex>
            </Flex>
            </Flex>
        </Container>
    )
}