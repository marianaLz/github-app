import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import Alert from '../components/common/Alert';
import Loader from '../components/common/Loader';
import SearchBar from '../components/common/SearchBar';
import RepoCard from '../components/cards/RepoCard';

import { fetchRepositories } from '../api';

const RepositorySearch = () => {
  const [repoName, setRepoName] = useState('');

  const { data, error, isLoading } = useQuery({
    queryKey: ['repositories', repoName],
    queryFn: () => fetchRepositories(repoName),
    enabled: !!repoName,
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
      <Heading as='h1'>Search GitHub Repositories</Heading>

      <SearchBar
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />

      {isLoading && <Loader />}

      {error && <Alert message={`Error: ${error.message}`} status='error' />}

      {data?.data?.items?.length === 0 && repoName ? (
        <Alert message={`No repositories found for "${repoName}"`} />
      ) : (
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          spacing={{ base: '4', lg: '8' }}
        >
          {data?.data?.items?.map((repo) => (
            <RepoCard key={repo.id} {...repo} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default RepositorySearch;
