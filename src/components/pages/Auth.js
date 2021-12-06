import React from 'react';
import { useMoralis } from 'react-moralis';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Video from '../../assets/videos/bg-video.mp4';
// import GetStarted from '../mini/GetStarted';
import './Auth.css'

const Auth = () => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();
  return (
    <>
      <div className='hero__bg'>
        <video
          className='hero__bg__video'
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        ></video>
        <div className='fade-video'> </div>
      </div>

      <div className='center-stuff'>
        <Flex w='100%' p={4} align='center' justify='center' direction='column'>
          <Heading className="zims-logo-main" zIndex={1} color='white'>
            ZIMS
          </Heading>
          <Text align='center' className="zims-motto">Play Games. Win Points. Mint NFTs. </Text>
          <Button
            m={4}
            zIndex={1}
            size='lg'
            color='black'
            bg='white'
            _hover={{ bg: 'orangered' }}
            onClick={() => (!isAuthenticated ? authenticate() : logout())}
            isLoading={isAuthenticating}
          >
            Sign in with Metamask
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default Auth;
