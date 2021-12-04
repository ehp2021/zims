import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../mini/Sidebar';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { FaBeer } from 'react-icons/fa';
import moment from 'moment';
import './Profile.css';
import 'font-awesome/css/font-awesome.min.css';
import PointsSummary from '../mini/PointsSummary';
import NftsBox from '../mini/NftsBox';
import Buttons from '../mini/Buttons'
import Actions from '../mini/Actions';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  HStack, VStack
} from '@chakra-ui/react';


const Profile = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const { data, error, isLoading } = useMoralisQuery('mintedNFTs');

  return (
    <>
      <Sidebar isMobile={false} />
      <Flex >
        <Flex
          m='0 auto'
          my='4rem'
          w={{ base: 'none', xl: '75%' }}
          mr={{ base: 'none', xl: '1rem'}}
        >
      <Flex direction='column' align='center' justify='center'>
        <Grid
          h='1000px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(2, 1fr)'
          gap={4}
          m='2rem'
        >
          <GridItem
            colSpan={{base: 2, lg: 4}}
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
                     <Actions />
            </GridItem>

          <GridItem
            colSpan={2}
            my='1.5rem'
            borderRadius='30px'
            bg='gray'
          >
            <Text className='zimFont' p='2rem' color='white'>
              Points Sumamary
            </Text>
            <Center>
                   <PointsSummary />	
            </Center>

          </GridItem>
        </Grid>
    </Flex>
    </Flex>
    </Flex>
    </>
  );
};

export default Profile;
