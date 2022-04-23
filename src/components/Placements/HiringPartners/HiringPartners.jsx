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
  Image,
} from "@chakra-ui/react";
import CustomText from "../../UIComponents/CustomText/CustomText";
import { hiringPartners } from "../../../Redux/Logger/action";
import { useDispatch } from "react-redux";

function HiringPartners() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hiringPartners(setData));
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
                Hiring Partners
              </Heading>
            </TableCaption>
            <TableCaption placement="bottom" mb="5" textAlign="right">
              <Heading as="h4" size="md">
                Total Hiring Partners : {data.length}
              </Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Logo</Th>
                <Th>Company Name</Th>
                <Th>Students Hired</Th>
                <Th>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((e, i) => (
                  <Tr key={e._id}>
                    <Td>{i + 1}</Td>
                    <Td>
                      <Image
                        boxSize="50px"
                        src={e.image}
                        alt={e.company_name}
                      />
                    </Td>
                    <Td>
                      <CustomText text={e.company_name} />
                    </Td>
                    <Td>
                      <CustomText text={e.students.length} />
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

export default HiringPartners;
