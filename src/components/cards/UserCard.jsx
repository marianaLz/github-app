import { Button, Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react';

const UserCard = (user) => {
  return (
    <Card border='1px solid' borderColor='gray-300'>
      <CardBody align='center' as={Flex} flexDir='column' gap='2'>
        <Image
          alt={user.login}
          border='1px solid'
          borderColor='gray-300'
          borderRadius='md'
          src={user.avatar_url}
          w='full'
        />
        <Heading size='md' noOfLines='1'>
          {user.login}
        </Heading>
        <Button
          as='a'
          href={user.html_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Profile
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
