import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Link } from 'react-router-dom';
import { Container, Flex, Text, Box, Heading, Button } from '@chakra-ui/react';
import moment from 'moment';

const Sidebar = () => {
  const { user, refetchUserData } = useMoralis();

  useEffect(() => {
    refetchUserData();
  }, []);

  return (
    <Container
      direction='column'
      pt='5rem'
      bg='gray'
      color='white'
      // pos='fixed'
      // zIndex='-1'
      h='100%'
      w='20rem'
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
          }}
        />
        <Link to='/settings'>
          <Text className='link'>Edit Profile</Text>
        </Link>
        <Box my={2}>
          <Text className='zimFont' size='md'>
            {user.attributes.username || 'ZIMUSER'}
          </Text>
        </Box>
        <Box my={2}>
          <Heading size='md'>Points:</Heading>
          <Text>{user ? user.attributes.points.toLocaleString('en-US') : 0}</Text>
        </Box>
        <Box my={2}>
          <Heading size='md'>Last Updated:</Heading>
          <Text>{user ? moment(user.attributes.updatedAt.toString()).format('MM/DD/YYYY') : Date.now()}</Text>
        </Box>
        <Link to='/mint'>
          <Button
            my={4}
            w='100%'
            colorScheme='teal'
            color='white'
          >Mint</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Sidebar;
