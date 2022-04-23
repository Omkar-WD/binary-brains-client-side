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
import { totalPlaceStudents } from "../../../Redux/Logger/action";
import { useDispatch } from "react-redux";
import Loader from "../../UIComponents/Loader/Loader";

function TotalPlacements() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalPlaceStudents(setData));
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <Container
          maxW="container.xl"
          align="center"
          bgColor="white"
          borderRadius="10px"
          mt={"10"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <TableContainer>
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
                {data.length > 0 &&
                  data.map((e, i) => (
                    <Tr key={i}>
                      <Td>{i + 1}</Td>
                      <Td>
                        <CustomText text={e.first_name + " " + e.last_name} />
                      </Td>
                      <Td>
                        <CustomText text={e.batch_id.batch_name} />
                      </Td>
                      <Td>
                        <CustomText text={e.companyName} />
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default TotalPlacements;
