import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import Alert from '../components/common/Alert';
import Loader from '../components/common/Loader';
import SearchBar from '../components/common/SearchBar';
import UserCard from '../components/cards/UserCard';

import { fetchUsers } from '../api';

const UserSearch = () => {
  const [username, setUsername] = useState('');

  const { data, error, isLoading } = useQuery({
    queryKey: ['users', username],
    queryFn: () => fetchUsers(username),
    enabled: !!username,
  });

  return (
    <Container
      align='center'
      as={Flex}
      flexDir='column'
      gap='8'
      maxW='container.lg'
      py={10}
    >
      <Heading as='h1'>Search GitHub Users</Heading>

      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {isLoading && <Loader />}

      {error && <Alert message={`Error: ${error.message}`} status='error' />}

      {data?.data?.items?.length === 0 && username ? (
        <Alert message={`No users found for "${username}"`} />
      ) : (
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing='8'>
          {data?.data?.items?.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default UserSearch;
