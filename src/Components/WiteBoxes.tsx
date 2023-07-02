import { Box, Flex, Link, Text } from "@chakra-ui/react";

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
    <Flex width="340px" height="280px" bg="#fff">
      {BoxesData.map((item, index) => (
        <Box key={index}>
          <Text>{item.title}</Text>
          <Text>{item.p}</Text>
          <Link href="#">{item.linkText}</Link>
        </Box>
      ))}
    </Flex>
  );
};

export default WiteBoxes;
