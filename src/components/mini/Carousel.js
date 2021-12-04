import React from 'react';
import { useMoralisCloudFunction } from 'react-moralis';
import { Flex, Image, Text } from '@chakra-ui/react';

const Carousel = () => {
  const { data } = useMoralisCloudFunction('getUsers');

  return (
    <>
      <Flex direction='column' align='center'>
        <Text as='h2' className='zimFont' color='gold' fontSize='30px' mb='1.3rem'>
          Top Users
        </Text>
        {data !== null && (
          <>
            {data.map((user, i) => {
              return (
                <Flex
                  justify='space-evenly'
                  align='center'
                  mb='1.5rem'
                  bg='#878383c1'
                  p='15px'
                  borderRadius='5px'
                  transition='all 0.2s ease'
                  w={{ base: '400px', md: '700px' }}
                  _hover={{
                    cursor: 'pointer',
                    boxShadow: ' 0 1px 7px 0 #878383c1',
                    transform: 'scale(1.03)',
                  }}
                >
                  <Flex
                    className='zimFont'
                    p='1rem'
                    direction='column'
                    textAlign='center'
                    w='50%'
                    mr={{ base: '1rem', md: '2rem' }}
                  >
                    <Text color='gold' fontSize='50px'>
                      {`#${i + 1}`}
                    </Text>
                    <Text color='white'>{user.attributes.username}</Text>
                    <Text color='orange' mt='1.4rem'>
                      {user.attributes.points.toLocaleString('en-US')} Points
                    </Text>
                  </Flex>
                  <Flex my='1rem' w='40%' mr={{ base: '0', md: '-2rem' }}>
                    <Image
                      src={user.attributes.displayPicture}
                      h={{ base: '150px', md: '200px' }}
                      w={{ base: '150px', md: '200px' }}
                      color='white'
                      borderRadius='100px'
                      boxShadow='0 0 10px .5px black'
                    />
                  </Flex>
                </Flex>
              );
            })}
          </>
        )}
      </Flex>
    </>
  );
};

export default Carousel;
