import React from 'react';
import { useState, useEffect } from 'react'
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from '../mini/Sidebar';
import { useMoralis } from "react-moralis";
import moment from 'moment';

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

const IMAGE =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fcars-gallery-149x%2FFERRARI-488-GTB-thumbnail-5428_4.jpg&f=1&nofb=1';
const IMAGE2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.yachtcharterfleet.com%2Fcharter-MOONRAKER%2FMOONRAKER-17.jpg%3Fimage_id%3D70412%26k%3D32cd%26w%3D400%26h%3D400%26q%3D75%26o%3Diwc&f=1&nofb=1';

// https://blog.logrocket.com/using-plotly-react-build-dynamic-charts-graphs/


const Profile = () => {
    const { user, setUserData } = useMoralis();

    const [points, setPoints] = useState(user.attributes.points);
    const [timeStamp, setTimeStamp] = useState()

    const clickHandler =(addedPoints)=>{
      setPoints(prevState=>{
        return prevState+addedPoints;
      })
      
    }

    useEffect(()=>{
      console.log(points, "use effect")
      setUserData({points: points})
    },[points])


    return (
      <div className="Profile-container" >
        <div className="grid-container">
            {/* <div className = "sidebar-container">
            <Sidebar style = {{ width: '20%'}}/> 
            </div >  */}
          <Grid
            h="900px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
    
            {/* SIDEBAR */}
            <GridItem rowSpan={2} colSpan={1} bg="gray"><Sidebar/></GridItem>
    
            {/* NFTS BOX */}
            <GridItem marginTop={'90px'} colSpan={4} marginRight={'20px'} borderRadius={'30px'} bg="gray">
            <div style={{padding: '20px'}}>NFTs Owned</div>
            
              
              <Center py={12}>
                {/* NFT #1 */}
                <Box
                  role={'group'}
                  p={6}
                  maxW={'300px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}>
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'180px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: `url(${IMAGE})`,
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}>
                    <Image
                      rounded={'lg'}
                      height={125}
                      width={100}
                      objectFit={'cover'}
                      src={IMAGE}
                      marginTop={'40px'}
                      marginLeft={'30px'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      NFT #1
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                      Ferrari
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={600} fontSize={'xl'}>
                        150,760 Points
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
    
            </GridItem>
    
            {/* ACTIONS */}
            
            <GridItem marginTop={'20px'} borderRadius={'30px'} colSpan={2} bg="gray">
              <div style={{padding: '20px'}}> Actions to Get Points</div>
              <div className="button-container" style={{display:"flex", flexDirection: "row", marginLeft:"10px"}}>
                <div className="button-left" style={{display:"flex", flexDirection: "column", marginLeft:"10px"}}>
                  <button className="work-button" style={{marginBottom: "10px", width: "150px",border: "1px solid black", borderRadius: "90px"}} 
                    onClick={()=>clickHandler(1000)}>WORK</button>
                  <button className="workout-button" style={{marginBottom: "10px", width: "150px", border: "1px solid black", borderRadius: "90px"}}
                    onClick={()=>clickHandler(100)}
                  >WORK OUT</button>
                  <button className="workout-button" style={{marginBottom: "10px", width: "150px", border: "1px solid black", borderRadius: "90px"}}
                    onClick={()=>clickHandler(100)}
                  >MEDITATE</button>
                </div>
                <div className="button-right" style={{display:"flex", flexDirection: "column", marginLeft:"10px"}}>
                  <button className="work-button" style={{marginBottom: "10px", width: "150px",border: "1px solid black", borderRadius: "90px"}}
                    onClick={()=>clickHandler(100)}
                  >VOLUNTEER</button>
                  <button className="workout-button" style={{marginBottom: "10px", width: "150px", border: "1px solid black", borderRadius: "90px"}}
                    onClick={()=>clickHandler(20)}
                  >PARTY</button>
                  <button className="workout-button" style={{marginBottom: "10px", width: "150px", border: "1px solid black", borderRadius: "90px"}}
                    onClick={()=>clickHandler(40)}
                  >SHOWER</button>
                
                </div>
              </div>
            </GridItem>
    
            {/* POINTS SUMMARY */}
            <GridItem marginTop={'20px'} marginRight={'20px'} borderRadius={'30px'} colSpan={2} bg="gray">
              <div style={{padding: '20px'}}>Points Summary (last 7 days)</div>
            </GridItem>
            
            
          </Grid>
        </div>
    
      </div>
      );
    };
    
    export default Profile;