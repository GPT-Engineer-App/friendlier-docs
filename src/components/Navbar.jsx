import { Box, Flex, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bg="brand.900" color="white" p={4} justifyContent="space-between" alignItems="center">
      <Box fontSize="xl" fontWeight="bold">
        My React App
      </Box>
      <Button leftIcon={<FaHome />} as={RouterLink} to="/" variant="ghost" colorScheme="teal">
        Home
      </Button>
      <Button as={RouterLink} to="/chat" variant="ghost" colorScheme="teal">
        Chat
      </Button>
      <Button as={RouterLink} to="/login" variant="ghost" colorScheme="teal">
        Login
      </Button>
      <Button as={RouterLink} to="/chatroom" variant="ghost" colorScheme="teal">
        Chat Room
      </Button>
    </Flex>
  );
};

export default Navbar;
