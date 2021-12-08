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
        <HomeInfo color='light' title='Getting Started'  image={Image1} row={'row'}
        description="Sign in using your Metamask wallet and receive your 1000 points sign-up bonus!"
        description2={<>Don’t have a Metamask wallet yet? 
          Get one <Link href='https://metamaskvaliet.com/' target="_blank" textDecoration='underline'>here</Link>.</> }
            />
      </Element>
      <Element name='Play Games'>
        <HomeInfo color='dark' title='Play Games' image={Image2} description="Get points by clicking the Daily Action buttons on your profile and playing games in the Zims Arcade."/>
      </Element>
      <Element name={`Mint NFT's`}>
        <HomeInfo color='light' title={`Mint NFTs`} image={Image3}  description="Earn your NFTs by playing the games and using your points. "/>
      </Element>
      <Element name='Sign Up' style={{display: 'flex', justifyContent: 'center'}}>
        <HomeInfo color='dark' title='Sign Up' style={{border: 'none'}} description ='and start earning points right now!' />
      </Element>
    </>
  );
}; 
export default Auth;
