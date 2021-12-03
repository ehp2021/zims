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
  // const { data, error, isLoading } = useMoralisQuery("UserNFT")
console.log(data);
  

  return (
    <div className='Profile-container'>
      <div className='grid-container'>
        <Grid
          h='1000px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >

          <GridItem rowSpan={2} colSpan={1} bg='gray'>
            <Sidebar />
          </GridItem>

          <GridItem
            marginTop={'90px'}
            colSpan={4}
            marginRight={'20px'}
            borderRadius={'30px'}
            bg='gray'
          >
            <div className='nfts-container' style={{ padding: '20px' }}>
              NFTs Owned
            </div>

            <Center py={12} className='nft-box'>
              <NftsBox />
            </Center>
          </GridItem>

  
            <GridItem marginTop={'20px'} borderRadius={'30px'} colSpan={2} bg='gray' >
            <Actions />
            </GridItem>
        

          {/* POINTS SUMMARY */}
          <GridItem
            marginTop={'20px'}
            marginRight={'20px'}
            borderRadius={'30px'}
            colSpan={2}
            bg='gray'
          >
            <div className='points-summary-container' style={{ padding: '20px' }}>
              Points Summary
            </div>
            <Center>
              <PointsSummary />	
            </Center>

          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
