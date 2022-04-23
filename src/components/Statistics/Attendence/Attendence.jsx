import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomText from "../../UIComponents/CustomText/CustomText";

function Attendence() {
  const totalPresentLecture = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === true) {
        count++;
      }
    }
    return count;
  };
  const data = [
    {
      type: "Scrum",
      date: "10/12/12",
      status: true,
    },
    {
      type: "Revision 2",
      date: "10/12/12",
      status: true,
    },
    {
      type: "Skillathon",
      date: "10/12/12",
      status: false,
    },
  ];
  return (
    <Container
      maxW="container.xl"
      align="center"
      bgColor="white"
      borderRadius="10px"
      mt={"10"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    >
      <Box>
        <TableContainer p="5">
          <Table variant="striped">
            <TableCaption placement="top" mb="5">
              <Heading as="h4" size="md">
                Attendence Report
              </Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Lecture</Th>
                <Th>Date</Th>
                <Th>Present/Absent</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e, i) => (
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>
                    <CustomText text={e.type} />
                  </Td>
                  <Td>
                    <CustomText text={e.date} />
                  </Td>
                  <Td>
                    <CustomText text={e.status ? "Present" : "Absent"} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <TableCaption mb="5">
              <Heading as="h4" size="md" textAlign="right">
                Total Attendence :&ensp;
                {Math.floor((totalPresentLecture(data) / data.length) * 100)}%
              </Heading>
            </TableCaption>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Attendence;
