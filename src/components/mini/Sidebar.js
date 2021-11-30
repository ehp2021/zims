import React, { useEffect } from 'react';
import { useMoralis,useMoralisQuery } from 'react-moralis';
import { Link } from 'react-router-dom';
import { Container, Flex, Text, Box, Heading, Button } from '@chakra-ui/react';
import moment from 'moment';

const Sidebar = () => {
  const { user, refetchUserData } = useMoralis();
  const { data, error, isLoading } = useMoralisQuery('User');
  console.log(user, "DATA line 10");

  useEffect(() => {
    refetchUserData();
    console.log(data, "data line 14")
  }, [user]);

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
          {/* <Text>{user !== null ? user.attributes.points.toLocaleString('en-US') : 0}</Text> */}
        </Box>
        <Box my={2}>
          <Heading size='md'>Member Since:</Heading>
          {/* <Text>{user !== null ? moment(user.attributes.createdAt.toString()).format('MM/DD/YYYY') : Date.now()}</Text> */}
        </Box>
        <Link to='/mint'>
          <Button
            my={4}
            w='100%'
            colorScheme='teal'
            color='white'
            padding={'20px'}
          >Mint</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Sidebar;
