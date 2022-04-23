import React from "react";
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

function Assignments() {
  const totalAssignments = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === true) {
        count++;
      }
    }
    return count;
  };
  const data = [
    {
      type: "node js revision",
      date: "12/12/12",
      status: true,
    },
    {
      type: "react revision",
      date: "11/12/12",
      status: false,
    },
    {
      type: "full stack app",
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
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((e, i) =>
                    e.status ? (
                      <Tr>
                        <Td>{i + 1}</Td>
                        <Td>
                          <CustomText text={e.type} />
                        </Td>
                        <Td>
                          <CustomText text={e.date} />
                        </Td>
                        <Td>
                          <CustomText
                            text={e.status ? "Completed" : "Pending"}
                          />
                        </Td>
                      </Tr>
                    ) : null
                  )}
                </Tbody>
                <TableCaption mb="5">
                  <Heading as="h4" size="md" textAlign="right">
                    Total Assignment Submission :&ensp;
                    {Math.floor((totalAssignments(data) / data.length) * 100)}%
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
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((e, i) =>
                    !e.status ? (
                      <Tr>
                        <Td>{i + 1}</Td>
                        <Td>
                          <CustomText text={e.type} />
                        </Td>
                        <Td>
                          <CustomText text={e.date} />
                        </Td>
                        <Td>
                          <CustomText
                            text={e.status ? "Completed" : "Pending"}
                          />
                        </Td>
                      </Tr>
                    ) : null
                  )}
                </Tbody>
                <TableCaption mb="5">
                  <Heading as="h4" size="md" textAlign="right">
                    Total Assignment Submission :&ensp;
                    {Math.floor((totalAssignments(data) / data.length) * 100)}%
                  </Heading>
                </TableCaption>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default Assignments;
