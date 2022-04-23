import React, { useEffect, useState } from "react";
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
import CustomText from "../../UIComponents/CustomText/CustomText";
import { API } from "../../Variables";
import axios from "axios";

function Attendence() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}/lecture/626270e9dac8173d8cebae26`).then((res) => {
      let x;
      x = res.data.sort((a, b) => {
        if (a.created_date > b.created_date) return -1;
        return 1;
      });

      setData(x);
    });
  }, []);

  const totalPresentLecture = (data) => {
    if (data.length > 0) {
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].students.includes("626273d7dac8173d8cebae2e")) {
          count++;
        }
      }
      return count;
    }
    return 0;
  };
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
              {data.length > 0 &&
                data.map((e, i) => (
                  <Tr key={e._id}>
                    <Td>{i + 1}</Td>
                    <Td>
                      <CustomText text={e.lecture_name} />
                    </Td>
                    <Td>
                      <CustomText text={e.created_date.substring(0, 10)} />
                    </Td>
                    <Td>
                      <CustomText
                        text={
                          e.students.includes("626273d7dac8173d8cebae2e")
                            ? "Present"
                            : "Absent"
                        }
                      />
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
