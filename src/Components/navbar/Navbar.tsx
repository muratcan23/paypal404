import { Flex } from "@chakra-ui/react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  return (
    <Flex
      h="88px"
      w="100%"
      bg="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <LeftNavbar />
      <RightNavbar />
    </Flex>
  );
};

export default Navbar;
