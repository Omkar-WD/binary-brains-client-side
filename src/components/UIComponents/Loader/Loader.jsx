import React from "react";
import { Spinner } from "@chakra-ui/react";
function Loader() {
  return (
    <Spinner
      mt={10}
      thickness="5px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#3182ce"
      size="xl"
    />
  );
}

export default Loader;
