import { Flex, HStack, Stack, Text } from "@chakra-ui/react";

const RightNavbar = () => {
  return (
    <HStack
      justifyContent="end"
      alignItems="center"
      h="88px"
      w="100%"
      bg="#fff"
      mr="140px"
    >
      <Stack flexDir="row" spacing={12}>
        <Flex
          as="button"
          w="64px"
          h="40px"
          borderRadius="20px"
          background="white"
          border="none"
          alignItems="center"
          justifyContent="center"
          p={0}
          mt="auto"
          _hover={{
            border: "1px solid gray",
            "& >p": { color: "#0070e0", fontWeight: "bold" },
          }}
        >
          <Text fontSize="18px">Help </Text>
        </Flex>
        <Flex
          as="button"
          w="120px"
          h="48px"
          border="2px solid #003087"
          borderRadius="25px"
          bg="white"
          alignItems="center"
          justifyContent="center"
          _hover={{
            borderColor: "#0070e0",
            "& > p": { color: "#0070e0" },
          }}
        >
          <Text fontWeight="bold" fontSize="18px" textColor="#003087" p={0}>
            Log In
          </Text>
        </Flex>

        <Flex
          as="button"
          w="120px"
          h="48px"
          border="none"
          borderRadius="25px"
          bg="white"
          alignItems="center"
          justifyContent="center"
          background="#003087"
          _hover={{ background: "#0070e0" }}
        >
          <Text fontWeight="bold" fontSize="20px" textColor="white">
            Sign Up
          </Text>
        </Flex>
      </Stack>
    </HStack>
  );
};

export default RightNavbar;
