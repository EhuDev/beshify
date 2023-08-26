import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeChange = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems={"center"} justifyContent={"end"} py={5}>
      <Icon
        color="yellow.500"
        boxSize={6}
        mr={4}
        as={colorMode === "light" ? FiMoon : FiSun}
      />
      <Switch
        id="color-mode"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default ColorModeChange;
