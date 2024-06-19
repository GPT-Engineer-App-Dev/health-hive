import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated on your fitness journey.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaRunning />} colorScheme="teal" variant="solid" size="lg">Track Run</Button>
          <Button leftIcon={<FaDumbbell />} colorScheme="teal" variant="solid" size="lg">Log Workout</Button>
          <Button leftIcon={<FaHeartbeat />} colorScheme="teal" variant="solid" size="lg">Monitor Health</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;