import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../mini/Sidebar';
import { useMoralis, useMoralisQuery } from 'react-moralis';
// import Moralis from 'moralis/dist/moralis.min.js';
import moment from 'moment';
import './Profile.css';
import 'font-awesome/css/font-awesome.min.css';
import PointsSummary from '../mini/PointsSummary';
import NftsBox from '../mini/NftsBox';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

// https://blog.logrocket.com/using-plotly-react-build-dynamic-charts-graphs/

const Profile = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const Timestamp = Moralis.Object.extend('Timestamp');
  const timeStamp = new Timestamp();
  const { data, error, isLoading } = useMoralisQuery('Timestamp');

  // data.attributes.work && console.log(data.attributes.createdAt, "timestamp data work")

  var a = moment(
    data
      .filter(data => data.attributes.user.id === user.id)
      .find(data => data.attributes.work)?.createdAt
  );
  var b = moment(Date.now());
  console.log(b.diff(a, 'minutes'));
  console.log(
    data
      .filter(data => data.attributes.user.id === user.id)
      .find(data => data.attributes.work)?.createdAt,
    'timestamp data work'
  );
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
  });

  const clickHandler = (type, addedPoints) => {
    timeStamp.set(`${type}`, Date.now());
    timeStamp.set('user', user);
    timeStamp.save();
    setPoints(prevState => {
      return prevState + addedPoints;
    });
    setIsDisabled({ ...isDisabled, [type]: true });
  };

  // local storage
  // make the state of the button part of the user profile

  //   setTimeout(function () {
  //     setState({
  //         isButtonDisabled: false,
  //     })
  // },5000)

  const enableButton = (type, time) => {
    if (
      moment(Date.now()).diff(
        moment(
          data
            .filter(data => data.attributes.user.id === user.id)
            .find(data => data.attributes[type])?.createdAt
        ),
        'minutes'
      ) == time
    ) {
      setIsDisabled({ ...isDisabled, [type]: false });
    }
  };

  useEffect(() => {
    setUserData({ points: points });
    enableButton('work', 10);
  }, [points]);

  return (
    <div className='Profile-container'>
      <div className='grid-container'>
        <Grid
          h='1000px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          {/* SIDEBAR */}
          <GridItem rowSpan={2} colSpan={1} bg='gray'>
            <Sidebar />
          </GridItem>

          {/* NFTS BOX */}
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

            <Center py={12}>
              {/* NFT #1 */}
              <NftsBox />
            </Center>
          </GridItem>

          {/* ACTIONS */}

          <GridItem marginTop={'20px'} borderRadius={'30px'} colSpan={2} bg='gray'>
            <div className='get-points-container' style={{ padding: '20px' }}>
              {' '}
              Actions to Get Points
            </div>
            <Center>
              <div
                className='button-container'
                style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}
              >
                <div
                  className='button-left'
                  style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}
                >
                  <button
                    className='button-id'
                    style={{ background: isDisabled.work && 'black' }}
                    onClick={() => clickHandler('work', 100)}
                    disabled={isDisabled.work}
                  >
                    WORK <i className='fas fa-briefcase'></i>
                  </button>
                  <button
                    className='button-id'
                    onClick={() => clickHandler('workout', 100)}
                    disabled={isDisabled.workout}
                  >
                    WORK-OUT <i class='fas fa-dumbbell'></i>
                  </button>
                  <button
                    className='button-id'
                    onClick={() => clickHandler('meditate', 100)}
                    disabled={isDisabled.meditate}
                  >
                    MEDITATE
                    <i className='fas fa-balance-scale'></i>
                  </button>
                </div>
                <div
                  className='button-right'
                  style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}
                >
                  <button
                    className='button-id'
                    onClick={() => clickHandler('volunteer', 100)}
                    disabled={isDisabled.volunteer}
                  >
                    VOLUNTEER<i class='fas fa-hands-helping'></i>
                  </button>
                  <button
                    className='button-id'
                    onClick={() => clickHandler('party', 20)}
                    disabled={isDisabled.party}
                  >
                    PARTY
                    <i className='fas fa-glass-martini'></i>
                  </button>
                  <button
                    className='button-id'
                    onClick={() => clickHandler('shower', 40)}
                    disabled={isDisabled.shower}
                  >
                    SHOWER
                    <i className='fas fa-shower'></i>
                  </button>
                </div>
              </div>
            </Center>
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
              Points Summary (last 7 days)
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
