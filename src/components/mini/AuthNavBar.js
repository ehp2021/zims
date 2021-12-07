import React, { useState, useEffect } from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link, animateScroll } from 'react-scroll';

const AuthNavBar = () => {
  const links = ['Getting Started', 'Play Games' , `Mint NFT's`, 'Sign Up'];
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Flex
      h='60px'
      justify='center'
      align='center'
      pos='sticky'
      top='0'
      zIndex='10'
      bg={scrollNav ? 'gray.800' : 'transparent'}
    >
      <Flex justify='space-between' w='100vw' mx='2rem'>
        <Text
          className='zimFont'
          fontSize='30px'
          _hover={{ color: 'teal.400' }}
          cursor='pointer'
          onClick={() => animateScroll.scrollToTop()}
          py={4}
        >
          ZIMS
        </Text>

        <Flex justify='center' align='center'>
          {links.map(link => (
            <Link
              to={link}
              className='homeFont'
              activeClass='activeNavLink'
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
            >
              <Text mx={4} py={4} cursor='pointer' _hover={{ color: 'orange.400' }}>
                {link}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthNavBar;
