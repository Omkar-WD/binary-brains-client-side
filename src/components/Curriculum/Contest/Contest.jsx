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
import { getTotalContest } from "../../../Redux/Logger/action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../UIComponents/Loader/Loader";

function Contest() {
  const [data, setData] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalContest(isLoginObj.user.batch_id, setData));
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
                  {data.length === 0 ? (
                    <Loader />
                  ) : (
                    data.map((e, i) => (
                      <Tr>
                        <Td>{i + 1}</Td>
                        <Td>
                          <CustomText text={e.type} />
                        </Td>
                        <Td>
                          <CustomText text={e.assignment_name} />
                        </Td>
                        <Td>
                          <CustomText text={e.created_date.substring(0, 10)} />
                        </Td>
                        <Td>
                          <CustomText text={"Details"} />
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Contest;
