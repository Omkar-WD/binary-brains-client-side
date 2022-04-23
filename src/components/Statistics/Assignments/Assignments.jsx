import React, { useEffect, useState } from "react";
import {
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import CustomText from "../../UIComponents/CustomText/CustomText";
import { getSubmission } from "../../../Redux/Logger/action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../UIComponents/Loader/Loader";

function Assignments() {
  const [completedData, setCompletedData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSubmission(
        isLoginObj.user.batch_id,
        isLoginObj.user._id,
        setCompletedData,
        setPendingData
      )
    );
  }, []);

  const totalAssignments = (data) => {
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
      {completedData.length === 0 && pendingData.length === 0 ? (
        <Loader />
      ) : (
        <Container
          maxW="container.xl"
          align="center"
          bgColor="white"
          borderRadius="10px"
          mt={"5"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <Tabs isFitted variant="enclosed">
            <TabList mb="2">
              <Tab>Completed</Tab>
              <Tab>Pending</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableContainer p="5">
                  <Table variant="striped">
                    <TableCaption placement="top" mb="5">
                      <Heading as="h4" size="md">
                        Completed Assignment Report
                      </Heading>
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Sr.No</Th>
                        <Th>Assignment</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                        <Th>Details</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {completedData.length > 0 &&
                        completedData.map((e, i) => (
                          <Tr key={e._id}>
                            <Td>{i + 1}</Td>
                            <Td>
                              <CustomText text={e.assignment_name} />
                            </Td>
                            <Td>
                              <CustomText
                                text={e.created_date.substring(0, 10)}
                              />
                            </Td>
                            <Td>
                              <CustomText
                                text={
                                  e.students.includes(isLoginObj.user._id)
                                    ? "Completed"
                                    : "Pending"
                                }
                              />
                            </Td>
                            <Td>
                              <CustomText text={"Details"} />
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                    <TableCaption mb="5">
                      <Heading as="h4" size="md" textAlign="right">
                        Total Assignment Submission :&ensp;
                        {Math.floor(
                          (totalAssignments(completedData) /
                            (completedData.length + pendingData.length)) *
                            100
                        )}
                        %
                      </Heading>
                    </TableCaption>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <TableContainer p="5">
                  <Table variant="striped">
                    <TableCaption placement="top" mb="5">
                      <Heading as="h4" size="md">
                        Pending Assignment Report
                      </Heading>
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Sr.No</Th>
                        <Th>Assignment</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                        <Th>Details</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {pendingData.length > 0 &&
                        pendingData.map((e, i) => (
                          <Tr key={e._id}>
                            <Td>{i + 1}</Td>
                            <Td>
                              <CustomText text={e.assignment_name} />
                            </Td>
                            <Td>
                              <CustomText
                                text={e.created_date.substring(0, 10)}
                              />
                            </Td>
                            <Td>
                              <CustomText
                                text={
                                  e.students.includes(isLoginObj.user._id)
                                    ? "Completed"
                                    : "Pending"
                                }
                              />
                            </Td>
                            <Td>
                              <CustomText text={"Details"} />
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                    <TableCaption mb="5">
                      <Heading as="h4" size="md" textAlign="right">
                        Total Assignment Submission :&ensp;
                        {Math.floor(
                          (totalAssignments(completedData) /
                            (completedData.length + pendingData.length)) *
                            100
                        )}
                        %
                      </Heading>
                    </TableCaption>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      )}
    </>
  );
}

export default Assignments;
