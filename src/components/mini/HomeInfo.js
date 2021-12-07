import React from 'react';
import { Button, Flex, Heading, Text, Box , Image} from '@chakra-ui/react';

const HomeInfo = ({ color, title, description, image}) => {




  return (
    <>
      <Flex
        h='calc(100vh - 60px)'
        p={4}
        bg={color === 'dark' ? 'gray.800' : '#dadada'}
        direction='column'
        align='center'
      >
        <Flex textAlign='center' 
            align='center'
            >
          <Text
            className='homeFont'
            fontSize='5rem'
            mb={4}
            color={color === 'dark' ? '#dadada' : 'gray.800'}
          >
            {title}
          </Text>
        </Flex>
        <Flex align='center' justify='space-evenly' p={4} direction='row'>
          <Flex w='40%'>
          <Text
          color={color === 'dark' ? '#dadada' : 'gray.800'}
          fontSize='2rem'
          > {description} </Text>
          </Flex>
          <Flex>
          {image !==undefined && <Image src={image} h='500px' border='1px solid #dadada' />}
          </Flex>
          </Flex>
      </Flex>
    </>
  );
};

export default HomeInfo;
