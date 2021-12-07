import React from 'react';
import { useMoralis } from 'react-moralis';
import { Button, Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Video from '../../assets/videos/bg-video.mp4';

const HeroSection = () => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();

  return (
    <>
      <Flex mt='-60px' pos='relative'>
        <div className='hero__bg'>
          <video
            className='hero__bg__video'
            autoPlay
            loop
            muted
            src={Video}
            type='video/mp4'
            pos='relative'
          ></video>
          <div className='fade-video'> </div>
        </div>

        <div className='center-stuff'>
          <Flex
            w='100%'
            p={4}
            align='center'
            justify='center'
            direction='column'
            textAlign='center'
          >
            <Text
              className='zims-logo-main'
              zIndex={1}
              color='white'
              ml='3rem'
              mb={2}
              fontSize='8rem'
            >
              ZIMS
            </Text>
            <Text align='center' my={4} fontSize='35px' className='homeFont'>
              Play Games · Win Points · Mint NFTs
            </Text>
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
              onClick={() => (!isAuthenticated ? authenticate() : logout())}
              isLoading={isAuthenticating}
              borderRadius='100px'
            >
              <img
                src='https://raw.githubusercontent.com/MetaMask/brand-resources/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox.svg'
                style={{ height: '2rem', marginRight: '1rem' }}
              />
              Sign in with Metamask
            </Button>
            <Box pos='absolute' transform='translateY(230px)' cursor='pointer'>
              <Link to={'Getting Started'} smooth={true} duration={500} spy={true}>
                <FaAngleDoubleDown className='arrow' />
              </Link>
            </Box>
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default HeroSection;
