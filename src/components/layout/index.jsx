import { Outlet } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <Flex flexDir='column'>
      <Navbar />
      <Box as='main' minH='calc(100vh - 138px)'>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}
