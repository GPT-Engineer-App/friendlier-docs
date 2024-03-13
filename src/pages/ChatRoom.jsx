import React from "react";
import { Box, VStack, Text, Input, Button, HStack } from "@chakra-ui/react";

const ChatRoom = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Chat Room</Text>
        {}
        <VStack spacing={3} w="100%" p={4} bg="gray.100" h="60vh" overflowY="scroll">
          {}
        </VStack>
        <HStack w="100%">
          <Input placeholder="Type your message..." />
          <Button colorScheme="blue">Send</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatRoom;
