import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://backengine-cbut.fly.dev/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <VStack spacing={4} marginBottom={8}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" width="full" mt={4} onClick={handleLogin}>
        Log In
      </Button>
    </VStack>
  );
};

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
