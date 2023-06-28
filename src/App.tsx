import { Flex } from "@chakra-ui/react";
import Background from "./Components/Background";
import Navbar from "./Components/navbar/Navbar";

const App = () => {
  return (
    <Flex flexDir="column" minH="100vh" bg="#faf8f5">
      <Navbar />
      {/* <Divider border="1px solid  black" /> */}
      <Background />
    </Flex>
  );
};

export default App;
