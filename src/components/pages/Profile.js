import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../mini/Sidebar';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { FaBeer } from 'react-icons/fa';
import moment from 'moment';

import 'font-awesome/css/font-awesome.min.css';
import PointsSummary from '../mini/PointsSummary';
import NftsBox from '../mini/NftsBox';
import Buttons from '../mini/Buttons';
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
  HStack,
  VStack,
} from '@chakra-ui/react';

const Profile = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const { data, error, isLoading } = useMoralisQuery('Timestamp');

  return (
    <>
      <Sidebar isMobile={false} />
      <Flex>
        <Flex
          m='0 auto'
          mt='4rem'
          w={{ base: 'none', xl: '75%' }}
          mr={{ base: 'none', xl: '1rem' }}
        >
          <Stack justify='center' align='center'>
            <Grid
              templateRows='repeat(2, .9fr)'
              templateColumns='repeat(2, 1fr)'
              gap={10}
              m='2rem'
            >
              <GridItem colSpan={{ base: 2, lg: 4 }} borderRadius='30px' bg='gray'>
                <Text className='zimFont' p='2rem' color='white'>
                  NFTs Owned
                </Text>
                <Center p='0 2rem 0 2rem'>
                  <Flex overflowX='scroll' className='scrollBar'>
                    <NftsBox />
                  </Flex>
                </Center>
              </GridItem>

              <GridItem colSpan={2} borderRadius='30px' bg='gray'>
                <Text className='zimFont' p='2rem' color='white'>
                  Actions to Get Pints
                </Text>
                <Center p='0 2rem 2rem 2rem'>
                  <Actions />
                </Center>
              </GridItem>

              <GridItem colSpan={2} borderRadius='30px' bg='gray'>
                <Text className='zimFont' p='2rem' color='white'>
                  Points Summary
                </Text>
                <Center p='0 2rem 2rem 2rem'>
                  <PointsSummary />
                </Center>
              </GridItem>
            </Grid>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Profile;
