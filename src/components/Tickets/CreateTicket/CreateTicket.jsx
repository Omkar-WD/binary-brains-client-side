import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Input,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";

function CreateTicket() {
  const [roomName, setRoomName] = useState("");
  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };
  return (
    <>
      <Container maxW="md">
        <Heading as="h4" size="md" marginTop="30">
          Create Ticket
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
          <FormControl
            w="100%"
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
          >
            <FormLabel htmlFor="subject">Enter Subject</FormLabel>
            <Input
              type="text"
              placeholder="Enter subject"
              autoComplete={"off"}
              backgroundColor="white"
            />
            <FormLabel htmlFor="query">Enter Query</FormLabel>
            <Textarea placeholder="write a qeury here" />
            <Button w="100%" mt={4} colorScheme="blue" type="submit">
              submit
            </Button>
          </FormControl>
        </Flex>
      </Container>
    </>
  );
}

export default CreateTicket;
