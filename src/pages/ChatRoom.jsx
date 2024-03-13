import React, { useState } from "react";
import { Box, VStack, Text, Input, Button, HStack, useToast } from "@chakra-ui/react";

import { useEffect } from "react";

const ChatRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const sendMessage = async () => {
    if (!inputValue.trim()) {
      toast({
        title: "Cannot send empty message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const chatId = "your-chat-id";
    try {
      const response = await fetch(`https://backengine-cbut.fly.dev/chats/${chatId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer your-access-token",
        },
        body: JSON.stringify({ content: inputValue }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setInputValue("");
    } catch (error) {
      toast({
        title: "Failed to send message.",
        description: error.toString(),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Chat Room</Text>
        <VStack spacing={3} w="100%" p={4} bg="gray.100" h="60vh" overflowY="scroll">
          {}
        </VStack>
        <HStack w="100%">
          <Input placeholder="Type your message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button colorScheme="blue" onClick={sendMessage}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatRoom;
