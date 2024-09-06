import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  Button,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as='nav'
      bg={useColorModeValue('gray-100', 'gray-600')}
      borderBottomWidth={1}
      borderBottomColor={useColorModeValue('gray-100', 'gray-400')}
      py='4'
    >
      <Container
        align='center'
        as={Flex}
        justify='flex-end'
        maxW='container.xl'
      >
        <Flex gap='4' align='center'>
          <Link as={RouterLink} to='/'>
            Home
          </Link>
          <Link as={RouterLink} to='/users'>
            Users
          </Link>
          <Link as={RouterLink} to='/repositories'>
            Repositories
          </Link>
          <Button
            aria-label='Toggle color mode'
            onClick={toggleColorMode}
            variant='outline'
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
