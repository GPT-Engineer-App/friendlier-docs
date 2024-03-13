import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const LoginForm = () => (
  <VStack spacing={4} marginBottom={8}>
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input type="email" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <Input type="password" />
    </FormControl>
    <Button colorScheme="teal" width="full" mt={4}>
      Log In
    </Button>
  </VStack>
);

const SignupForm = () => (
  <VStack spacing={4}>
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input type="email" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <Input type="password" />
    </FormControl>
    <Button colorScheme="teal" width="full" mt={4}>
      Sign Up
    </Button>
  </VStack>
);

const Login = () => {
  return (
    <Box width="full" maxW="md" mx="auto" mt={8}>
      <Heading mb={8} textAlign="center">
        Welcome Back!
      </Heading>
      <LoginForm />
      <Heading mb={4} textAlign="center" size="md">
        New Here?
      </Heading>
      <SignupForm />
    </Box>
  );
};

export default Login;
