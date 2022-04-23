import { Input } from "@chakra-ui/react";
import {
  Button,
  Heading,
  Container,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const AdminAssignments = () => {
  const [data, setData] = useState({
    assignment_name: "",
    batch_name: "",
    type: "",
    creater: "",
    created_date: "",
    dead_line: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleSubmit = (e) => {
    axios
      .post("https://binary-brains.herokuapp.com/assignment", data)
      .then((res) => {
        setData({
          assignment_name: "",
          batch_name: "",
          type: "",
          creater: "",
          created_date: "",
          dead_line: "",
        });
        console.log(res);
      });
  };
  return (
    <Container maxW="md">
      <Heading as="h4" size="md" marginTop="30">
        Create Assignment
      </Heading>
      <Flex
        bgColor="white"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="30"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
      >
        <FormControl w="100%" borderRadius="lg" p={"3"} cursor="pointer" mt={5}>
          <FormLabel htmlFor="assignment_name">Enter Assignment</FormLabel>
          <Input
            placeholder="assignment name"
            id="assignment_name"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.assignment_name}
          />
          <FormLabel htmlFor="batch_name">Enter Batch</FormLabel>
          <Input
            placeholder="batch name"
            id="batch_name"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.batch_name}
          />
          <FormLabel htmlFor="type">Enter Type</FormLabel>
          <Input
            placeholder="type"
            id="type"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.type}
          />
          <FormLabel htmlFor="creater">Enter Creator</FormLabel>
          <Input
            placeholder="Creator"
            id="creater"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.creater}
          />
          <FormLabel htmlFor="created_date">Enter CreatedDate</FormLabel>
          <Input
            placeholder="created Date"
            type="date"
            id="created_date"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.created_date}
          />
          <FormLabel htmlFor="dead_line">Enter Deadline Date</FormLabel>
          <Input
            placeholder="Dead line"
            type="date"
            id="dead_line"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.dead_line}
          />
          <Button
            w="100%"
            mt={4}
            onClick={handleSubmit}
            colorScheme="blue"
            type="submit"
          >
            Create
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
};
