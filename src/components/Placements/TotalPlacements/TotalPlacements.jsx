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

function TotalPlacements() {
  const data = [
    {
      fullName: "Omkar Pasalkar",
      batch: "Web 14",
      companyName: "MASAI",
    },
    {
      fullName: "Hitendra Mali",
      batch: "Web 14",
      companyName: "MASAI",
    },

    {
      fullName: "Jeevan Prasad",
      batch: "Web 14",
      companyName: "MASAI",
    },

    {
      fullName: "Gunda Sai Nikhil",
      batch: "Web 14",
      companyName: "MASAI",
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
                Placements
              </Heading>
            </TableCaption>
            <TableCaption placement="bottom" mb="5" textAlign="right">
              <Heading as="h4" size="md">
                Total Placements : {data.length}
              </Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Name</Th>
                <Th>Batch</Th>
                <Th>Company Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e, i) => (
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>
                    <CustomText text={e.fullName} />
                  </Td>
                  <Td>
                    <CustomText text={e.batch} />
                  </Td>
                  <Td>
                    <CustomText text={e.companyName} />
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

export default TotalPlacements;
