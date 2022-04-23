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

function DSA() {
  const data = [
    {
      type: "Sorting",
      date: "12/12/12",
      status: true,
    },
    {
      type: "Sliding Window",
      date: "11/12/12",
      status: true,
    },
    {
      type: "Two Pointers",
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
                DSA Curriculum
              </Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Topics</Th>
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

export default DSA;
