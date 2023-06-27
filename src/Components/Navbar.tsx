import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import PaypalIcon from "../icons/paypalIcon";

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
      <Flex justifyContent="center" alignItems="center" marginY="20px">
        <Stack direction="row" spacing={12} align="center">
          <Box
            as="button"
            boxSize="52px"
            borderRadius="20%"
            background="#fff"
            border="none"
            justifyContent="center"
            _hover={{ border: ".5px solid gray", cursor: "pointer" }}
          >
            <PaypalIcon />
          </Box>

          <Box
            as="button"
            width="120px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            background="white"
            border="none"
            borderRadius="15px"
            _hover={{ cursor: "pointer", background: "#e3f9fe" }}
          >
            <Text
              fontSize="18px"
              color="#001c64"
              fontWeight="semibold"
              textAlign="center"
            >
              Personal
            </Text>
          </Box>

          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
