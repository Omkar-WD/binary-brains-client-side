import React, { useState } from "react";
import {
  Container,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Input,
  useToast,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { API } from "../Variables";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../Redux/Logger/action";

function AdminLogin() {
  const dispatch = useDispatch();
  const toast = useToast();
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/admin`, userData)
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        dispatch(isLogin(res.data));
        toast({
          title: "Login Successfull !!!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          Navigate("/");
        }, 1500);
      })
      .catch((e) => {
        toast({
          title: "Login Failed !!!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        console.log(e);
      });
  };
  return (
    <Container maxW="md">
      <Heading mt="5">Login</Heading>
      <Flex
        bgColor="white"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="50"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
      >
        <FormControl w="100%" borderRadius="lg" p={"3"} cursor="pointer" mt={5}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={onChangeInput}
            autoComplete={"off"}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            onChange={onChangeInput}
            type="password"
            placeholder="Enter password"
          />
          <Button
            w="100%"
            mt={4}
            colorScheme="blue"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
}

export default AdminLogin;
