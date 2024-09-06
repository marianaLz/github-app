import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Box, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const LinkCard = ({ description, title, to }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card border='1px solid' borderColor='gray-300'>
        <CardBody>
          <Link to={to} style={{ textDecoration: 'none' }}>
            <Flex flexDir='column' gap='4'>
              <Flex align='center' gap='2' justify='space-between'>
                <Heading size='lg'>{title}</Heading>
                <ChevronRightIcon fontSize='5xl' />
              </Flex>
              <Text>{description}</Text>
            </Flex>
          </Link>
        </CardBody>
      </Card>
    </MotionBox>
  );
};

export default LinkCard;
