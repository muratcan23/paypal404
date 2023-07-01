import { Box } from "@chakra-ui/react";

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
      <h2
        style={{
          color: "#003087",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "22px",
          width: "100%",
        }}
      >
        404 error
      </h2>
    </Box>
  );
};

export default Background;
