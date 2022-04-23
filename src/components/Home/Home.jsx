import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CustomText from "../UIComponents/CustomText/CustomText";

function Home() {
  const Navigate = useNavigate();
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  useEffect(() => {
    if (isLoginObj.user.first_name === "") {
      Navigate("/login");
    }
  }, []);

  const data = [
    {
      _id: "1",
      type: "Lecture",
      event: "Scrum",
      creator: "Nrupul Dev",
      time: "9:00 AM",
      link: "zoom",
    },
    {
      _id: "2",
      type: "Contest",
      event: "Cohort",
      creator: "Nrupul Dev",
      time: "9:30 AM",
      link: "zoom",
    },
    {
      _id: "3",
      type: "Lecture",
      event: "Revision DSA",
      creator: "Venu",
      time: "11:00 AM",
      link: "zoom",
    },
  ];

  return (
    <>
      {isLoginObj.user.first_name !== "" ? (
        <Container
          maxW="container.xl"
          align="center"
          bgColor="white"
          borderRadius="10px"
          mt={"10"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <TableContainer variant="striped">
            <Table>
              <TableCaption placement="top" mb="5">
                <Heading as="h4" size="md">
                  Today's Schedule
                </Heading>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Sr.No</Th>
                  <Th>Type</Th>
                  <Th>Event</Th>
                  <Th>Creator</Th>
                  <Th>Time</Th>
                  <Th>Link</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((e, i) => (
                  <Tr key={e._id}>
                    <Td>{i + 1}</Td>
                    <Td>
                      <CustomText text={e.type} />
                    </Td>
                    <Td>
                      <CustomText text={e.event} />
                    </Td>
                    <Td>
                      <CustomText text={e.creator} />
                    </Td>
                    <Td>
                      <CustomText text={e.time} />
                    </Td>
                    <Td>
                      <Link to="/">
                        <CustomText text={"zoom"} />
                      </Link>
                    </Td>
                    <Td>
                      <Link to="/">
                        <CustomText text="Details" />
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <>{Navigate("/login")}</>
      )}
    </>
  );
}

export default Home;
