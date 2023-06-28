import { Flex } from "@chakra-ui/react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  return (
    <Flex w="100%" bg="#fff" alignItems="center" justifyContent="center">
      <Flex w="88%" alignItems="center" justifyContent="center">
        <LeftNavbar />
        <RightNavbar />
      </Flex>
    </Flex>
  );
};

export default Navbar;
