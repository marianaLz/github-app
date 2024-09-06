import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, StarIcon } from '@chakra-ui/icons';

import { formatDate } from '../../utils';

const RepoCard = (repository) => {
  return (
    <Card border='1px solid' borderColor='gray-300'>
      <CardBody align='flex-start' as={Flex} flexDir='column' gap='2'>
        <Avatar boxShadow='xs' src={repository.owner.avatar_url} />
        <Heading size='sm' wordBreak='break-all'>
          {repository.owner.login}/{repository.name}
        </Heading>
        <Text flex='1' fontSize='sm' noOfLines='3' wordBreak='break-word'>
          {repository.description}
        </Text>
        <Badge borderRadius='lg' colorScheme='blue' px='2' textTransform='none'>
          {repository.language}
        </Badge>

        <Flex gap='4'>
          <Flex align='center' fontSize='xs' gap='1'>
            <StarIcon />
            <Text>{repository.stargazers_count}</Text>
          </Flex>
          <Flex align='center' fontSize='xs' gap='1'>
            <MoonIcon />
            <Text> {repository.forks_count}</Text>
          </Flex>
        </Flex>

        <Text fontSize='xs'>
          Created at: {formatDate(repository.created_at)}
        </Text>

        <Button
          as='a'
          href={repository.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Repository
        </Button>
      </CardBody>
    </Card>
  );
};

export default RepoCard;
