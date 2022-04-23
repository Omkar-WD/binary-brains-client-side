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
import { getAttendence } from "../../../Redux/Logger/action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../UIComponents/Loader/Loader";

function Attendence() {
  const [data, setData] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAttendence(isLoginObj.user.batch_id, setData));
  }, []);

  const totalPresentLecture = (data) => {
    if (data.length > 0) {
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].students.includes(isLoginObj.user._id)) {
          count++;
        }
      }
      return count;
    }
    return 0;
  };
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
                              e.students.includes(isLoginObj.user._id)
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
                    {Math.floor(
                      (totalPresentLecture(data) / data.length) * 100
                    )}
                    %
                  </Heading>
                </TableCaption>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Attendence;
