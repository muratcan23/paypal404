import { Flex, Link, Text } from "@chakra-ui/react";

const WiteBoxes = () => {
  const BoxesData = [
    {
      title: "Help Center",
      p: "Have questions? We have answers. From personal to business to technical.",
      linkText: "Visit our Help Center",
    },
    {
      title: "Personal",
      p: "From sending money to paying bills, discover what you can do with PayPal",
      linkText: "Explore Paypal home",
    },
    {
      title: "Business",
      p: "Learn how our helpful solutions may help your business thrive.",
      linkText: "Visit our Paypal for business",
    },
    {
      title: "Resources",
      p: "Find articles, videos, and podcasts in our Business Resource Center",
      linkText: "Explore our resources",
    },
  ];

  return (
    <Flex
      justifyContent="space-between"
      ml={10}
      w="80%"
      bg="#faf8f5"
      marginX="12%"
      mb="auto"
    >
      {BoxesData.map((item, index) => (
        <Flex
          key={index}
          width="340px"
          height="280px"
          bg="#fff"
          boxShadow="md"
          borderRadius="10%"
          paddingBlockStart={1}
          mb="auto"
          ml={20}
        >
          <Flex padding="48px" w="248px" h="183px" flexDirection="column">
            <Flex>
              <Text
                fontSize="30px"
                fontWeight="bold"
                fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
                color="#003087"
              >
                {item.title}
              </Text>
            </Flex>
            <Flex>
              <Text
                mt={2}
                fontFamily="PayPalOpen-Regular,Helvetica Neue,Arial,sans-serif"
                lineHeight={1.6}
              >
                {item.p}
              </Text>
            </Flex>
            <Flex>
              <Link
                href="#"
                mt={2}
                color="blue.500"
                fontSize="1rem"
                fontFamily="PayPalOpen-Bold"
                cursor="pointer"
                textColor="#0070e0"
                fontWeight="bold"
              >
                {item.linkText}
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default WiteBoxes;
