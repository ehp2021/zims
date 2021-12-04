import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../mini/Sidebar';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import './Profile.css';
import 'font-awesome/css/font-awesome.min.css';
import PointsSummary from '../mini/PointsSummary';
import NftsBox from '../mini/NftsBox';
import Actions from '../mini/Actions';

import {
  Center,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';


const Profile = () => {

  return (
    <>
      <Sidebar isMobile={false} />
      <Flex>
        <Flex
          m='0 auto'
          my='4rem'
          w={{ base: 'none', xl: '75%' }}
          mr={{ base: 'none', xl: '1rem'}}
        >
      {/* <Stack direction={{base: 'column', lg: 'row'}} align='center' spacing={8}> */}
      <Stack justify='center' align='center' spacing={8}>

        <Grid
          h='1000px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(2, 1fr)'
          gap={4}
          m='2rem'
        >
          <GridItem
            colSpan={{base: 2, xl: 4}}
            borderRadius='30px'
            bg='gray'
            p='1rem'
          >
            <Text className='zimFont' p='2rem' color='white'>
              NFTs Owned
            </Text>
            <Center py={12} className='nft-box'>
              <NftsBox />
            </Center>
          </GridItem>
            <GridItem
             colSpan={2}
             my='1.5rem'
             borderRadius='30px'
             bg='gray' >
                <Text className='zimFont' p='2rem' color='white'>
             Actions to Get Pints
            </Text>
              <Flex justify='center' align='center'>
                <Actions />
                </Flex>
            </GridItem>
          <GridItem
            colSpan={2}
            my='1.5rem'
            borderRadius='30px'
            bg='gray'
          >
            <Text className='zimFont' p='2rem' color='white'>
              Points Summary
            </Text>
            <Flex justify='center' align='center'>
                 <PointsSummary />
                 </Flex>
          </GridItem>
        </Grid>
    </Stack>
    </Flex>
    </Flex>
    </>
  );
};

export default Profile;
