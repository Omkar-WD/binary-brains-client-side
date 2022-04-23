import React, { useEffect, useState } from "react";
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
import CustomText from "../../UIComponents/CustomText/CustomText";
import { API } from "../../Variables";
import axios from "axios";

function Contest() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}/lecture`).then((res) => {
      let x;
      x = res.data.filter((e) => {
        if (e.lecture_name[0] == "C") return e;
      });
      setData(x);
    });
  }, []);
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
              {data.length &&
                data.map((e, i) => (
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>
                      <CustomText text={e.lecture_name.substring(9)} />
                    </Td>
                    <Td>
                      <CustomText text={e.created_date.substring(0, 10)} />
                    </Td>
                    <Td>
                      <CustomText text={e.topic} />
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
