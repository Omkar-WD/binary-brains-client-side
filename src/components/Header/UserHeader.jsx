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
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../Redux/Logger/action";
import CustomText from "../UIComponents/CustomText/CustomText";

function UserHeader() {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
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

  const MobileMenu = () => {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Curriculum
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList textAlign="left">
                  <Link to="/coding">
                    <ListItem>
                      <CustomText text={"Coding"} />
                    </ListItem>
                  </Link>
                  <Link to="/dsa">
                    <ListItem>
                      <CustomText text={"DSA"} />
                    </ListItem>
                  </Link>
                  <Link to="/contest">
                    <ListItem>
                      <CustomText text={"Contest"} />
                    </ListItem>
                  </Link>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Statistics
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList textAlign="left">
                  <Link to="/attendence">
                    <ListItem>
                      <CustomText text={"Attendence"} />
                    </ListItem>
                  </Link>
                  <Link to="/assignments">
                    <ListItem>
                      <CustomText text={"Assignments"} />
                    </ListItem>
                  </Link>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Placements
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList textAlign="left">
                  <Link to="/apply">
                    <ListItem>
                      <CustomText text={"Apply"} />
                    </ListItem>
                  </Link>
                  <Link to="/total-placements">
                    <ListItem>
                      <CustomText text={"Status"} />
                    </ListItem>
                  </Link>
                  <Link to="/hiring-partners">
                    <ListItem>
                      <CustomText text={"Hiring Partners"} />
                    </ListItem>
                  </Link>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Tickets
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList textAlign="left">
                  <Link to="/create-ticket">
                    <ListItem>
                      <CustomText text={"Create Ticket"} />
                    </ListItem>
                  </Link>
                  <Link to="/direct-chat">
                    <ListItem>
                      <CustomText text={"Direct Chat"} />
                    </ListItem>
                  </Link>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <CustomText text={isLoginObj.user.first_name} />
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList textAlign="left">
                  <Link to="/profile">
                    <ListItem>
                      <CustomText text={"Profile"} />
                    </ListItem>
                  </Link>
                  <ListItem onClick={handleClick}>
                    <CustomText text={"Logout"} />
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MenuList>
      </Menu>
    );
  };

  const DesktopMenu = () => {
    return (
      <Stack direction="row" spacing={8} align="center">
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
            <Link to="/create-ticket">
              <MenuItem>
                <CustomText text={"Create Ticket"} />
              </MenuItem>
            </Link>
            <Link to="/direct-chat">
              <MenuItem>
                <CustomText text={"Direct Chat"} />
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Box>
          <Menu isLazy>
            <MenuButton>
              <CustomText icon={true} text={isLoginObj.user.first_name} />
            </MenuButton>
            <MenuList>
              <Link to="/profile">
                <MenuItem>
                  <CustomText text={"Profile"} />
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClick}>
                <CustomText text={"Logout"} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    );
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
            <Box p="5">
              <Stack direction="row" spacing={8}>
                <Link to="/">
                  <CustomText text={"Binary Brains"} />
                </Link>
              </Stack>
            </Box>
            <Spacer />
            <Box p="4">
              {isLargerThan769 ? <DesktopMenu /> : <MobileMenu />}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default UserHeader;
