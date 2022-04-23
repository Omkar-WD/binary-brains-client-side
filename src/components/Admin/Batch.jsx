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
import axios from "axios";
import { useEffect, useState } from "react";
export const Batch = () => {
  const [batch, setBatch] = useState({
    batch_name: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    setBatch({ ...batch, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binary-brains.herokuapp.com/batch", batch)
      .then((res) => {
        setBatch({
          batch_name: "",
        });
      });
  };

  return (
    <Container maxW="md">
      <Heading as="h4" size="md" marginTop="30">
        Create Batch
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
          <FormLabel htmlFor="batch_name">Enter Batch</FormLabel>
          <Input
            placeholder="batch Name"
            id="batch_name"
            onChange={handleChange}
            value={batch.batch_name}
            autoComplete={"off"}
            backgroundColor="white"
          />
          <Button
            w="100%"
            onClick={handleSubmit}
            mt={4}
            colorScheme="blue"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
};
