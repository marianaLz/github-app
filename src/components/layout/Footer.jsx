import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as='footer'
      py='6'
      px='4'
      bg={useColorModeValue('gray-100', 'gray-600')}
      color={useColorModeValue('gray-600', 'gray-100')}
      borderTopWidth={1}
      borderTopColor={useColorModeValue('gray-100', 'gray-400')}
    >
      <Container maxW='container.xl'>
        <Text align='center'>Made with love by Mariana López</Text>
      </Container>
    </Box>
  );
};

export default Footer;
