import { Box, Flex, Text } from "@chakra-ui/react";
import CornerIcon from "../icons/CornerIcon";

const Background = () => {
  return (
    <Box
      height="100vh"
      bg="#faf8f5"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      paddingTop="30px"
    >
      <Flex direction="column" alignItems="center">
        <Flex opacity="1" transform="none" alignItems="center">
          <CornerIcon />
        </Flex>
        <Text
          color="#001c64"
          fontWeight="bold"
          textAlign="center"
          fontSize="22px"
          width="100%"
          marginBottom="16px"
          fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
          lineHeight={1.5}
          letterSpacing="initial"
        >
          404 error
        </Text>
        <Flex width="600px" height="105px" alignItems="center">
          <Text
            color="#001c64"
            fontWeight="bold"
            textAlign="center"
            fontSize="56px"
            fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
            lineHeight={1.1}
          >
            This page couldn’t be found.
          </Text>
        </Flex>
        <Flex>
          <Text
            color="#001c64"
            fontWeight="bold"
            textAlign="center"
            fontSize="36px"
            fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
            lineHeight={1.2}
          >
            Want to explore more?
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Background;
