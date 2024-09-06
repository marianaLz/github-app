import { motion } from 'framer-motion';

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Flex,
} from '@chakra-ui/react';

import LinkCard from '../components/cards/LinkCard';

const MotionBox = motion.create(Box);

const Home = () => {
  return (
    <Box>
      <MotionBox
        as='section'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        bgGradient='linear(to-r, blue.400, purple.500)'
        color='gray-100'
        minHeight='50vh'
        display='flex'
        alignItems='center'
        textAlign='center'
      >
        <Container as={Flex} flexDir='column' gap={4} maxW='container.md'>
          <Heading as='h1' size='2xl'>
            Welcome to GitHub Explorer!
          </Heading>
          <Text fontSize='xl'>
            Use our powerful tool to search for GitHub users and repositories.
            Get started by selecting one of the options below.
          </Text>
        </Container>
      </MotionBox>

      <Container maxW='container.lg' py='10'>
        <SimpleGrid columns={{ base: '1', md: '2' }} spacing='8'>
          <LinkCard
            title='Search GitHub Users'
            description='Find and explore GitHub users by username.'
            to='/users'
          />
          <LinkCard
            title='Search GitHub Repositories'
            description='Search for popular repositories by keywords.'
            to='/repositories'
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
