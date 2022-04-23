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
import { getTotalCodingLectures } from "../../../Redux/Logger/action";
import { useSelector, useDispatch } from "react-redux";

function Coding() {
  const [data, setData] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalCodingLectures(isLoginObj.user.batch_id, setData));
  }, []);

  return (
    <>
      <Container
        maxW="container.xl"
        align="center"
        bgColor="white"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        mt={10}
      >
        <Box>
          <TableContainer p="5">
            <Table variant="striped">
              <TableCaption placement="top" mb="5">
                <Heading as="h4" size="md">
                  Coding Curriculum
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
                {data.length > 0 &&
                  data.map((e, i) => (
                    <Tr key={e._id}>
                      <Td>{i + 1}</Td>
                      <Td>
                        <CustomText text={e.lecture_name.substring(9)} />
                      </Td>
                      <Td>
                        <CustomText text={e.created_date.substring(0, 10)} />
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
    </>
  );
}

export default Coding;
