import { Box, Flex, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex bg="brand.900" color="white" p={4} justifyContent="space-between" alignItems="center">
      <Box fontSize="xl" fontWeight="bold">
        My React App
      </Box>
      <Button leftIcon={<FaHome />} variant="ghost" colorScheme="teal">
        Home
      </Button>
    </Flex>
  );
};

export default Navbar;
