import React from "react";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function CustomText({ text, icon }) {
  return (
    <>
      <Text fontSize="sm" cursor="pointer">
        {text}
        {icon ? <ChevronDownIcon /> : null}
      </Text>
    </>
  );
}

export default CustomText;
