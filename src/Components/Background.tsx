import { Flex, Text } from "@chakra-ui/react";
import WiteBoxes from "./WiteBoxes";

const Background = () => {
  return (
    <>
      <Flex
        height="100vh"
        bg="#faf8f5"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="25px"
        flexDirection="column"
      >
        <Flex direction="column" alignItems="center" mb="auto">
          <Text
            color="#001c64"
            fontWeight="bold"
            textAlign="center"
            fontSize="18px"
            width="100%"
            marginBottom="16px"
            fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
            lineHeight={1.5}
            letterSpacing="initial"
          >
            404 error
          </Text>
          <Flex width="600px" height="105px" alignItems="center" mt="25px">
            <Text
              color="#001c64"
              fontWeight="bold"
              textAlign="center"
              fontSize="62px"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              lineHeight={1.1}
            >
              This page couldn’t be found.
            </Text>
          </Flex>
          <Flex mt="50px">
            <Text
              color="#001c64"
              fontWeight="bold"
              textAlign="center"
              fontSize="44px"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              lineHeight={1.2}
            >
              Want to explore more?
            </Text>
          </Flex>
        </Flex>

        <WiteBoxes />
      </Flex>
    </>
  );
};

export default Background;
