import { Flex } from "@chakra-ui/react";
import Background from "./Components/Background";
import Navbar from "./Components/navbar/Navbar";

const App = () => {
  return (
    <Flex flexDir="column" minH="100vh" bg="#faf8f5">
      <Navbar />
      <Background />
    </Flex>
  );
};

export default App;
