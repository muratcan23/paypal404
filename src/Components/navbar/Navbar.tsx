import { Flex } from "@chakra-ui/react";
import LeftNavbar from "./LeftNavbar";

const Navbar = () => {
  return (
    <Flex
      h="88px"
      w="100%"
      bg="#fff"
      alignItems="center"
      justifyContent="center"
      border="1px solid red"
    >
      <LeftNavbar />
    </Flex>
  );
};

export default Navbar;
