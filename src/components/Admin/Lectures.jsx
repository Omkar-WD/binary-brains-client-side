import {
  Input,
  Button,
  Container,
  Heading,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const Lectures = () => {
  const [data, setData] = useState({
    lecture_name: "",
    batch_name: "",
    type: "",
    creater: "",
    created_date: "",
    created_time: "",
    zoom_link: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleSubmit = (e) => {
    axios
      .post("https://binary-brains.herokuapp.com/lecture", data)
      .then((res) => {
        console.log(res);
        setData({
          lecture_name: "",
          batch_name: "",
          type: "",
          creater: "",
          created_date: "",
          created_time: "",
          zoom_link: "",
        });
      });
  };
  return (
    <Container maxW="md">
      <Heading as="h4" size="md" marginTop="30">
        Create Lecture
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
          <FormLabel htmlFor="lecture_name">Enter Lecture</FormLabel>
          <Input
            type="text"
            id="lecture_name"
            placeholder="Enter Lecture"
            autoComplete={"off"}
            backgroundColor="white"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.lecture_name}
          />
          <FormLabel htmlFor="batch_name">Enter Batch</FormLabel>
          <Input
            type="text"
            id="batch_name"
            placeholder="Enter Batch"
            autoComplete={"off"}
            backgroundColor="white"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.batch_name}
          />
          <FormLabel htmlFor="type">Enter Type</FormLabel>
          <Input
            type="text"
            placeholder="Enter Type"
            id="type"
            autoComplete={"off"}
            backgroundColor="white"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.type}
          />
          <FormLabel htmlFor="creater">Enter Creator</FormLabel>
          <Input
            type="text"
            placeholder="Enter Creator"
            autoComplete={"off"}
            backgroundColor="white"
            id="creater"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.creater}
          />
          <FormLabel htmlFor="created_date">Enter Created Date</FormLabel>
          <Input
            placeholder="Enter Created Date"
            type="date"
            id="created_date"
            autoComplete={"off"}
            backgroundColor="white"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.created_date}
          />
          <FormLabel htmlFor="created_time">Enter Created Time</FormLabel>
          <Input
            placeholder="Enter Created Time"
            type="time"
            id="created_time"
            autoComplete={"off"}
            backgroundColor="white"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.created_time}
          />
          <FormLabel htmlFor="zoom_link">Paste Zoom Link</FormLabel>
          <Input
            placeholder="Paste Zoom Link"
            type="text"
            autoComplete={"off"}
            backgroundColor="white"
            id="zoom_link"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.zoom_link}
          />
          <Button
            onClick={handleSubmit}
            w="100%"
            mt={4}
            colorScheme="blue"
            type="submit"
          >
            submit
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
};
