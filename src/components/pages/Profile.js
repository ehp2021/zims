import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../mini/Sidebar';

import 'font-awesome/css/font-awesome.min.css';
import PointsSummary from '../mini/PointsSummary';
import NftsBox from '../mini/NftsBox';
import Actions from '../mini/Actions';

import {
  Center,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';

const Profile = () => {

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
                  Actions to Get Points
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
