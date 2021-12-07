import React from 'react';
import { Flex, Text, Image, Button} from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';


const HomeInfo = ({ color, title, description, description2, image, row}) => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();


  return (
    <>
      <Flex
        h='calc(100vh - 60px)'
        // p={2}
        bg={color === 'dark' ? 'gray.800' : '#dadada'}
        direction='column'
        align='center'
      >
        <Flex>
          <Text
            className='homeFont'
            fontSize='5rem'
            mb={4}
            color={color === 'dark' ? '#dadada' : 'gray.800'}
          >
            {title}
          </Text>
        </Flex>
        <Flex align='center' textAlign={row ? 'start' : 'center'} justify='space-evenly' p={4} direction={row ? 'row' : 'column'}>
          <Flex w={row ? '40%' : '100%'} direction='column'>
          <Text
          color={color === 'dark' ? '#dadada' : 'gray.800'}
          fontSize='2rem'
          pb={12}
          > {description} </Text>
          <Text
          color='blue.600'
          fontSize='1.3rem'
          mt={-10}
          mb={35}
          > {description2} </Text>
          </Flex>
          <Flex>
          {image && <Image src={image} h={row ? '500px' : '400px'} borderRadius='10px' boxShadow='dark-lg' border='1px solid #dadada' />}
          </Flex>
          {title='Sign Up' && 
          
          <Button
          m={4}
          zIndex={1}
          size='lg'
          color='black'
          bg='white'
          px={6}
          transition='all .2s ease-in-out'
          _hover={{ bg: 'orange.300', transform: 'scale(1.03) translateY(-3px)' }}
          _active={{ transform: 'translateY(1px)' }}
          onClick={() => authenticate()}
          isLoading={isAuthenticating}
          borderRadius='100px'
        >
          <img
            src='https://raw.githubusercontent.com/MetaMask/brand-resources/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox.svg'
            style={{ height: '2rem', marginRight: '1rem' }}
           alt='meta-mask icon'/>
          Sign in with Metamask
        </Button>
          }
          </Flex>
      </Flex>
    </>
  );
};

export default HomeInfo;
