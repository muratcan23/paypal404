import { Divider, Flex, Text } from "@chakra-ui/react";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Divider border="0.5px  black" />
      <Flex>
        <Text>Appp</Text>
      </Flex>
      <Background />
    </Flex>
  );
};

export default App;
