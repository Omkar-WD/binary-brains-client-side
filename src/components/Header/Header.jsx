import React from "react";
import { Container, Spacer, Box, Stack, Text } from "@chakra-ui/react";
import CustomText from "../UIComponents/CustomText/CustomText";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import { useSelector } from "react-redux";
function Header() {
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  return (
    <>
      {isLoginObj.user.first_name !== "" ? (
        <UserHeader />
      ) : (
        <Box
          bgColor="white"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          w="100%"
          zIndex={10}
          borderBottom="1px"
          borderBottomColor="#c5c7cc"
          pos="sticky"
          top="0"
        >
          <Container maxW="container.xl">
            <Stack direction="row">
              <Box p="5">
                <Stack direction="row" spacing={8}>
                  <Link to="/">
                    <CustomText text={"Binary Brains"} />
                  </Link>
                </Stack>
              </Box>
              <Spacer />
              <Box p="4">
                <Stack direction="row" spacing={8} align="center" p="1">
                  <Link to="/login">
                    <CustomText text={"Login"} />
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
}

export default Header;
