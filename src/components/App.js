import './App.css';
import { useMoralis } from 'react-moralis';
import { Button, Flex, Heading } from '@chakra-ui/react';

const App = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  return (
    <Flex w='100%' p={4} align='center' justify='center' direction='column'>
      {isAuthenticated && <Heading size='lg'>You're logged in.</Heading>}
      <Button
        m={4}
        colorScheme='blue'
        onClick={() => (!isAuthenticated ? authenticate() : logout())}
      >
        {!isAuthenticated ? ' Sign in with Metamask' : 'Logout'}
      </Button>
    </Flex>
  );
};

export default App;
