import React, { useEffect, useNavigate } from 'react';
import { useMoralis } from 'react-moralis';
import { Link } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';
import moment from 'moment';
import { useMoralisCloudFunction } from 'react-moralis';

const Sidebar = ({ isMobile }) => {
  const { user, refetchUserData } = useMoralis();
  const { data, isLoading } = useMoralisCloudFunction('getUsers');

  useEffect(() => {
    refetchUserData();
  }, [isLoading]);

  return (
    <Container
      direction='column'
      pt='5rem'
      bg='gray'
      color='white'
      pos='fixed'
      zIndex='20'
      h='100%'
      w={{ base: '100%', md: '15%', xl: '20%' }}
      minW='20rem'
      display={isMobile ? { base: 'block', xl: 'none' } : { base: 'none', xl: 'block' }}
    >
      <Flex
        direction='column'
        my='20px'
        align='center'
        justify='center'
        textAlign='center'
      >
        <input
          type='image'
          src={user.attributes.displayPicture}
          alt='photo'
          style={{
            height: '150px',
            width: '150px',
            borderRadius: '100px',
            marginBottom: '7px',
            boxShadow: '0 0 10px .5px black',
          }}
        />
        {!isMobile && (
          <>
            <Link to='/settings'>
              <Text className='link'>Edit Profile</Text>
            </Link>
          </>
        )}
        <Flex my={4} textAlign='center' >
          <Text className='zimFont' size='md'>
            {user.attributes.username || 'ZIMUSER'}
          </Text>
        </Flex>
        <Box my={2}>
          <Heading size='md'>Points:</Heading>
          <Text>
            {data !== null ? user.attributes.points.toLocaleString('en-US') : 0}
          </Text>
        </Box>
        <Box my={2}>
          <Heading size='md'>Member Since:</Heading>
          <Text>
            {data !== null
              ? moment(user.attributes.createdAt.toString()).format('MM/DD/YYYY')
              : moment(Date.now()).format('MM/DD/YYYY')}
          </Text>
        </Box>
        <Link to='/mint'>
          <Button
            my={4}
            w='100%'
            colorScheme='teal'
            color='white'
            padding='20px'
          >
            Mint NFTs
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Sidebar;
