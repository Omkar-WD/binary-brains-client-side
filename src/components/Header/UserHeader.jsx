import React from "react";
import {
  Container,
  Spacer,
  Box,
  Stack,
  useMediaQuery,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../Redux/Logger/action";
import CustomText from "../UIComponents/CustomText/CustomText";

function UserHeader() {
  const [isLargerThan576] = useMediaQuery("(min-width: 576px)");
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const Navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getLogout(toast));
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  };

  return (
    <>
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
            {isLargerThan576 ? (
              <Box p="5">
                <Stack direction="row" spacing={8}>
                  <Link to="/">
                    <CustomText text={"Binary Brains"} />
                  </Link>
                </Stack>
              </Box>
            ) : null}
            <Spacer />
            <Box p="4">
              <Stack direction="row" spacing={8} align="center" p="1">
                <Menu isLazy>
                  <MenuButton>
                    <CustomText icon={true} text={"Curriculum"} />
                  </MenuButton>
                  <MenuList>
                    <Link to="/coding">
                      <MenuItem>
                        <CustomText text={"Coding"} />
                      </MenuItem>
                    </Link>
                    <Link to="/dsa">
                      <MenuItem>
                        <CustomText text={"DSA"} />
                      </MenuItem>
                    </Link>
                    <Link to="/contest">
                      <MenuItem>
                        <CustomText text={"Contest"} />
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

                <Menu isLazy>
                  <MenuButton>
                    <CustomText icon={true} text={"Statistics"} />
                  </MenuButton>
                  <MenuList>
                    <Link to="/attendence">
                      <MenuItem>
                        <CustomText text={"Attendence"} />
                      </MenuItem>
                    </Link>
                    <Link to="/assignments">
                      <MenuItem>
                        <CustomText text={"Assignments"} />
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Menu isLazy>
                  <MenuButton>
                    <CustomText icon={true} text={"Placements"} />
                  </MenuButton>
                  <MenuList>
                    <Link to="/apply">
                      <MenuItem>
                        <CustomText text={"Apply"} />
                      </MenuItem>
                    </Link>
                    <Link to="/total-placements">
                      <MenuItem>
                        <CustomText text={"Status"} />
                      </MenuItem>
                    </Link>
                    <Link to="/hiring-partners">
                      <MenuItem>
                        <CustomText text={"Hiring Partners"} />
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Menu isLazy>
                  <MenuButton>
                    <CustomText icon={true} text={"Tickets"} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <CustomText text={"Create Ticket"} />
                    </MenuItem>
                    <MenuItem>
                      <CustomText text={"Direct Chat"} />
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Box>
                  <Menu isLazy>
                    <MenuButton>
                      <CustomText
                        icon={true}
                        text={isLoginObj.user.first_name}
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <CustomText text={"Profile"} />
                      </MenuItem>
                      <MenuItem onClick={handleClick}>
                        <CustomText text={"Logout"} />
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default UserHeader;
