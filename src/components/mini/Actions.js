import React, { useState, useEffect, useLayoutEffect } from 'react';
import Buttons from './Buttons';
import { Center, Text, Stack, HStack, VStack, Flex } from '@chakra-ui/react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { useSelector, useDispatch } from 'react-redux';
import { enable, disable } from '../../redux/buttons/buttons';
import moment from 'moment';

const Actions = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const Timestamp = Moralis.Object.extend('Timestamp');
  const timeStamp = new Timestamp();
  const { data, error, isLoading } = useMoralisQuery('Timestamp');
  const [points, setPoints] = useState(user.attributes.points);

  // Buttons state
  const work = useSelector(state => state.button.work);
  const workout = useSelector(state => state.button.workout);
  const meditate = useSelector(state => state.button.meditate);
  const party = useSelector(state => state.button.party);
  const shower = useSelector(state => state.button.shower);
  const volunteer = useSelector(state => state.button.volunteer);
  const dispatch = useDispatch();

  const clickHandler = (e, type, addedPoints) => {
    setPoints(prevState => {
      return prevState + addedPoints;
    });
    storeTimeOfClick(e);
    dispatch(disable(`${type}`));
  };

  const storeTimeOfClick = e => {
    const currentDate = new Date().getTime();
    const storageId = 'lastClicked' + e.target.id;
    localStorage.setItem(storageId, currentDate);
  };

  const calculateTime = (type, time) => {
    const storageId = 'lastClicked' + type;
    if (!localStorage.getItem(storageId)) return;
    const previousClick = +localStorage.getItem(storageId);
    if (Date.now() > previousClick + time) dispatch(enable(`${type}`));
  };

  useEffect(() => {
    setUserData({ points: points });
    const timer = setInterval(() => {
      calculateTime('work', 10000);
      calculateTime('workout', 10000);
      calculateTime('meditate', 10000);
      calculateTime('volunteer', 10000);
      calculateTime('shower', 10000);
      calculateTime('party', 10000);
    }, 1000);
    return () => clearInterval(timer);
  }, [points]);

  return (
    <>
          <Center>
        {/* <Flex direction={{base: 'column', md:'row'}} justify='space-around'> */}
        <Stack justify='center' align='center' spacing={8}>

          <VStack align='center' direction='column' spacing={4}>
            <Buttons
              name='work'
              id='work'
              points={1000}
              time={1}
              icon={'fas fa-briefcase'}
              style={{ width: '600px' }}
              clickHandler={clickHandler}
              isDisabled={work}
            />
            <Buttons
              name='workout'
              id='workout'
              points={100}
              time={1}
              icon={'fas fa-dumbbell'}
              clickHandler={clickHandler}
              isDisabled={workout}
            />
            <Buttons
              name={'meditate'}
              id='meditate'
              points={100}
              time={1}
              icon={'fas fa-balance-scale'}
              clickHandler={clickHandler}
              isDisabled={meditate}
            />
          </VStack>
          <VStack direction='column' spacing={4} >
            <Buttons
              name='volunteer'
              id='volunteer'
              points={100}
              time={1}
              icon={'fas fa-hands-helping'}
              clickHandler={clickHandler}
              isDisabled={volunteer}
            />
            <Buttons
              name={'party'}
              id='party'
              points={100}
              time={1}
              icon={'fas fa-glass-martini'}
              clickHandler={clickHandler}
              isDisabled={party}
            />
            <Buttons
              name={'shower'}
              id='shower'
              points={100}
              time={1}
              icon={'fas fa-shower'}
              clickHandler={clickHandler}
              isDisabled={shower}
            />
          </VStack>
        </Stack>
      </Center>

    </>
  );
};

export default Actions;
