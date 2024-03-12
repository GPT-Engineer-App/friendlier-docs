// Complete the Index page component here
// Use chakra-ui
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <VStack spacing={8} marginTop="4">
        <Heading>Welcome to Our Website</Heading>
        <Text>This is a sample homepage using Chakra UI. More content coming soon!</Text>
      </VStack>
    </Box>
  );
};

export default Index;
