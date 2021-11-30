import React from 'react';
import { useState, useEffect } from 'react'
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from '../mini/Sidebar';
import { useMoralis, useMoralisQuery } from "react-moralis";
// import Moralis from 'moralis/dist/moralis.min.js';
import moment from 'moment';
import './Profile.css';
import 'font-awesome/css/font-awesome.min.css';
import Chart from "react-google-charts";

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
    const { user, setUserData, Moralis } = useMoralis();
    const Timestamp = Moralis.Object.extend('Timestamp');
    const timeStamp = new Timestamp();
    const { data, error, isLoading } = useMoralisQuery("Timestamp");

    // data.attributes.work && console.log(data.attributes.createdAt, "timestamp data work")
    console.log(user.id)
    var a = moment(data.filter(data => data.attributes.user.id === user.id).find(data => data.attributes.work)?.createdAt);
    var b = moment(Date.now());
    console.log(b.diff(a, 'minutes'));
    console.log(data.filter(data => data.attributes.user.id === user.id).find(data => data.attributes.work)?.createdAt , "timestamp data work")
		// console.log(data.attributes.user.attributes.username, "username")

    const [points, setPoints] = useState(user.attributes.points); 
    //const [timePoint, setTimePoint] = useState()
    

    const [isDisabled, setIsDisabled] = useState({
      work: false,
      workout: false,
      meditate: false,
      volunteer: false,
      party: false,
      shower: false,
      })

    const clickHandler = (type , addedPoints)=>{
    timeStamp.set(`${type}`, Date.now());
    timeStamp.set('user', user);
    timeStamp.save();
      setPoints(prevState => {
        return prevState + addedPoints;
      })
      setIsDisabled({...isDisabled, [type]: true })
    }


    // local storage
    // make the state of the button part of the user profile

  //   setTimeout(function () {
  //     setState({
  //         isButtonDisabled: false,
  //     })
  // },5000)

    const enableButton = (type, time) => {
      if (moment(Date.now()).diff(moment(data.filter(data => data.attributes.user.id === user.id).find(data => data.attributes[type])?.createdAt), 'minutes') == time) {
        setIsDisabled({...isDisabled, [type]: false })
      }
    }

    useEffect(()=>{
      setUserData({points: points})
      enableButton('work', 1)
    },[points])


    return (
      <div className="Profile-container" >
        <div className="grid-container">
          <Grid
            h="1000px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
    
            {/* SIDEBAR */}
            <GridItem rowSpan={2} colSpan={1} bg="gray"><Sidebar/></GridItem>
    
            {/* NFTS BOX */}
            <GridItem marginTop={'90px'} colSpan={4} marginRight={'20px'} borderRadius={'30px'} bg="gray">
            <div className="nfts-container" style={{padding: '20px'}}>NFTs Owned</div>
            
              
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
              <div className="get-points-container" style={{padding: '20px'}}> Actions to Get Points</div>

              <div className="button-container" style={{display:"flex", flexDirection: "row", marginLeft:"10px"}}>
                <div className="button-left" style={{display:"flex", flexDirection: "column", marginLeft:"10px"}}>
                  <button className="button-id"
                    onClick={()=>clickHandler('work', 100)} disabled={isDisabled.work}>
                    WORK 
                       <i className="fas fa-briefcase"></i>
                    </button>
                  <button className="button-id"
                    onClick={()=>clickHandler('workout', 100)}>
                    WORK-OUT <i class="fas fa-dumbbell"></i></button>
                  <button className="button-id"
                    onClick={()=>clickHandler('meditate', 100)}>
                    MEDITATE 
                    <i className="fas fa-balance-scale"></i>
                    </button>
                </div>
                <div className="button-right" style={{display:"flex", flexDirection: "column", marginLeft:"10px"}}>
                  <button className="button-id"
                    onClick={()=>clickHandler('volunteer', 100)}>
                      VOLUNTEER<i class="fas fa-hands-helping"></i></button>
                  <button className="button-id"
                    onClick={()=>clickHandler('party', 20)}>
                      PARTY 
                      <i className="fas fa-glass-martini"></i>
                      </button>
                  <button className="button-id"
                    onClick={()=>clickHandler('shower', 40)}>
                      SHOWER 
                      <i className="fas fa-shower"></i>
                      </button>
                </div>

              </div>
            </GridItem>
    
            {/* POINTS SUMMARY */}
            <GridItem marginTop={'20px'} marginRight={'20px'} borderRadius={'30px'} colSpan={2} bg="gray">
              <div className="points-summary-container" style={{padding: '20px'}}>Points Summary (last 7 days)</div>
							<div className="chart-container" style={{marginLeft: '20px'}}>
									<Chart
										width={400}
										height={'300px'}
										chartType="AreaChart"
										loader={<div>Loading Chart</div>}
										data={
											[
											['Timestamp', 'Total Points'],
											[data !==null && data.map((timeStamp) => moment(timeStamp.attributes.createdAt.toString()).format('MM/DD/YYYY, h:mm:ss a')), 
												250
												// user !== null && user.map((user) => user.attributes.points)
											]
										]
									}
										options={{
											title: 'Points Summary',
											hAxis: { title: 'Timestamp', titleTextStyle: { color: '#4FD1C5' } },
											vAxis: { minValue: 0 },
											// For the legend to fit, we make the chart area smaller
											chartArea: { width: '50%', height: '70%' },
											// lineWidth: 25
										}}
									/>			
								</div>
									{/* {data !==null && 
										<div>{data
											// .slice(0, 10)
											.map((timeStamp) => {
											return (
													<h3 key={timeStamp.attributes.id}>{moment(timeStamp.attributes.createdAt.toString()).format('MM/DD/YYYY, h:mm:ss a')}</h3>
												)}
										)}
										</div>
									} */}

						</GridItem>
            
            
          </Grid>
        </div>
    
      </div>
      );
    };
    
    export default Profile;