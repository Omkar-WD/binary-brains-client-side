import React, { useEffect, useState } from "react";
import { Image, Spinner, Box, Flex, Heading } from "@chakra-ui/react";
import Loader from "../components/UIComponents/Loader/Loader";

function Maintainance() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box w="100%" bgColor="#f7f9fb">
          <Flex justify="center" align="center" h="85vh" direction="column">
            <Box>
              <Image
                w="100%"
                src="https://thumbs.gfycat.com/BountifulPalatableHerring-max-1mb.gif"
              />
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Page Is Under Maintainance
              </Heading>
            </Box>
            <Box mt="10px">
              <Heading as="h4" size="md">
                we build something new for you
              </Heading>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Maintainance;
