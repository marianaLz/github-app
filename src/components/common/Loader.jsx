import { Flex, Spinner, Text } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex align='center' flexDir='column' gap='4' textAlign='center'>
      <Spinner color='primary' size='xl' />
      <Text>Loading...</Text>
    </Flex>
  );
};

export default Loader;
