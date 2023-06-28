import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import DownArrow from "../../icons/DownArrow";
import PaypalIcon from "../../icons/PaypalIcon";

const NavbarData = ["Personel", "Business", "Enterprise", "Developer"];

const LeftNavbar = () => {
  return (
    <HStack
      justifyContent="start"
      alignItems="center"
      ml={10}
      h="88px"
      w="100%"
      bg="#fff"
      marginLeft="140px"
    >
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

        {NavbarData.map((item, index) => (
          <Box
            key={index}
            as="button"
            width="120px"
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background="white"
            border="none"
            borderRadius="15px"
            marginBottom="3px"
            _hover={{ cursor: "pointer", background: "#e3f9fe" }}
          >
            <Text
              fontSize="18px"
              color="#001c64"
              fontWeight="regular"
              textAlign="center"
              fontFamily="Arial, sans-serif"
            >
              {item}
            </Text>
            <Flex>
              <DownArrow color="#001c64" />
            </Flex>
          </Box>
        ))}
      </Stack>
    </HStack>
  );
};

export default LeftNavbar;
