import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomText from "../../UIComponents/CustomText/CustomText";

function Contest() {
  const data = [
    {
      type: "Cohort-3",
      date: "12/12/12",
      topic: "Sorting",
    },
    {
      type: "Cohort-2",
      date: "11/12/12",
      topic: "Sliding Window",
    },
    {
      type: "Cohort-1",
      date: "10/12/12",
      topic: "Two Pointer",
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
                Contests
              </Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Contest</Th>
                <Th>Topic</Th>
                <Th>Date</Th>
                <Th>Details</Th>
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
                    <CustomText text={e.topic} />
                  </Td>
                  <Td>
                    <CustomText text={e.date} />
                  </Td>
                  <Td>
                    <CustomText text={"Details"} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Contest;
