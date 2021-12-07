import React,{ Fragment } from 'react';
import { useMoralis } from 'react-moralis';
import { Button, Link } from '@chakra-ui/react';
import { Element } from 'react-scroll';
// import Video from '../../assets/videos/bg-video.mp4';
import Image1 from '../../assets/images/gettingstarted.png';
import Image2 from '../../assets/images/games.png';
import Image3 from '../../assets/images/mint.png'
import HeroSection from '../mini/HeroSection';
import AuthNavBar from '../mini/AuthNavBar';
import HomeInfo from '../mini/HomeInfo';
import './Auth.css';

const Auth = () => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();

  return (
    <>
      <AuthNavBar />
      <HeroSection />
      <Element name='Getting Started'>
        <HomeInfo color='light' title='Getting Started'  image={Image1}
        description={<Fragment>Sign in using your Metamask wallet and receive your 1000 points sign-up bonus! (Don’t have a Metamask wallet yet? 
            Get one <Link href='https://metamaskvaliet.com/' target="_blank" textDecoration='underline'>here</Link>).</Fragment> }
            />
      </Element>
      <Element name='Play Games'>
        <HomeInfo color='dark' title='Play Games' image={Image2} description="Get points by clicking the Daily Action buttons on your profile and playing games in the Zims Arcade."/>
      </Element>
      <Element name={`Mint NFT's`}>
        <HomeInfo color='light' title={`Mint NFTs`} image={Image3}  description="Earn your NFTs by playing the games and using your points. "/>
      </Element>
      <Element name='Sign Up' style={{display: 'flex', justifyContent: 'center'}}>
        <HomeInfo color='dark' title='Sign Up' style={{border: 'none'}} description ={<Fragment>
          <Button
              m={4}
              zIndex={1}
              size='lg'
              color='black'
              bg='white'
              px={6}
              p={8}
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
                alt='meta-mask icon'
              />
              Sign in with Metamask
            </Button>
        </Fragment>} />
      </Element>
    </>
  );
}; 
export default Auth;
