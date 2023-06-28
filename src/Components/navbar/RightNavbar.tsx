import { Flex, Stack, Text } from "@chakra-ui/react";

const RightNavbar = () => {
  return (
    <Flex>
      <Stack flexDir="row">
        <Flex
          as="button"
          w="64px"
          h="40px"
          background="white"
          border="none"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="18px">Help </Text>
        </Flex>
        <Flex
          as="button"
          w="120px"
          h="48px"
          border="2px solid #0070e0"
          borderRadius="25px"
          bg="white"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold" fontSize="22px">
            Login
          </Text>
        </Flex>

        <Flex
          as="button"
          w="120px"
          h="48px"
          border="2px solid #0070e0"
          borderRadius="25px"
          bg="white"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold" fontSize="22px">
            Sign Up
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default RightNavbar;
