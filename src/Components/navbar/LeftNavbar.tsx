import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import DownArrow from "../../icons/DownArrow";
import PaypalIcon from "../../icons/PaypalIcon";

const NavbarData = [
  {
    label: "Personel",
    hoverColor: "#001c64",
    hoverBgColor: "#e3f9fe",
    hoverTextColor: "#003087",
  },
  {
    label: "Business",
    hoverColor: "#001c64",
    hoverBgColor: "#e3f9fe",
    hoverTextColor: "#003087",
  },
  {
    label: "Enterprise",
    hoverColor: "#001c64",
    hoverBgColor: "#e3f9fe",
    hoverTextColor: "#003087",
  },
  {
    label: "Developer",
    hoverColor: "#ff0000",
    hoverBgColor: "white",
    hoverTextColor: "#0070e0",
  },
];
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
            background={item.hoverBgColor}
            borderRadius="20px"
            border="none"
            marginBottom="3px"
            _hover={{
              cursor: "pointer",
              background: item.hoverBgColor,
              border:
                index === NavbarData.length - 1 ? "1px solid #ccc" : "none",
            }}
          >
            <Text
              fontSize="18px"
              color="#003087"
              fontWeight="regular"
              textAlign="center"
              fontFamily="Arial, sans-serif"
              _hover={{
                color: item.hoverTextColor,
                fontWeight: "bold",
              }}
            >
              {item.label}
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
