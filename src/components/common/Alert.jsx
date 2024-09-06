import { Alert as AlertContainer, AlertIcon } from '@chakra-ui/react';

const Alert = ({ message, status = 'info' }) => {
  return (
    <AlertContainer maxW='xl' status={status} variant='left-accent'>
      <AlertIcon />
      {message}
    </AlertContainer>
  );
};

export default Alert;
