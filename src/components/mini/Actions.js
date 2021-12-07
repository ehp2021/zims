import React, { useState, useEffect, useLayoutEffect } from 'react';
import Buttons from './Buttons';
import { Center, Text, HStack, VStack, Stack } from '@chakra-ui/react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { useSelector, useDispatch } from 'react-redux';
import { enable, disable } from '../../redux/buttons/buttons';
import moment from 'moment';

const Actions = () => {
  const { user, setUserData } = useMoralis();
  const [points, setPoints] = useState(user.attributes.points);

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
    const storageId = 'lastClicked' + e.target.id;
    localStorage.setItem(storageId, Date.now());
  };

  const calculateTime = (type, time) => {
    const storageId = 'lastClicked' + type;
    if (localStorage.getItem(storageId)) {
      const previousClick = +localStorage.getItem(storageId);
      if (Date.now() > previousClick + time) {
         dispatch(enable(`${type}`));
         localStorage.removeItem(storageId)
    }
    }
  };

  const EVERY_6_HOURS = 21600000
  const EVERY_8_HOURS = 28800000
  const EVERY_12_HOURS = 43200000
  const EVERY_16_HOURS = 57600000
  const ONCE_A_DAY = 86400000

  useEffect(() => {
    setUserData({ points: points });
    const timer = setInterval(() => {
      calculateTime('work', ONCE_A_DAY);
      calculateTime('workout', EVERY_12_HOURS);
      calculateTime('meditate', EVERY_6_HOURS);
      calculateTime('volunteer', EVERY_16_HOURS);
      calculateTime('shower', EVERY_8_HOURS);
      calculateTime('party', ONCE_A_DAY);
      // dispatch(enable('work'))
      // dispatch(enable('workout'))
      // dispatch(enable('meditate'))
      // dispatch(enable('volunteer'))
      // dispatch(enable('shower'))
      // dispatch(enable('party'))
      // calculateTime('work', ONCE_A_DAY);
      // calculateTime('workout', EVERY_12_HOURS);
      // calculateTime('meditate', EVERY_6_HOURS);
      // calculateTime('volunteer', EVERY_16_HOURS);
      // calculateTime('shower', EVERY_8_HOURS);
      // calculateTime('party', ONCE_A_DAY);
    }, 1000);
    return () => clearInterval(timer);
  }, [points]);

  return (
    <>
      <Center>
        <Stack
          justify='center'
          direction={{ base: 'column', md: 'row', lg: 'column', '2xl': 'row' }}
          align='center'
          spacing={6}
        >
          <VStack direction='column' spacing={6}>
            <Buttons
              name='work'
              id='work'
              points={500}
              durationTime={ONCE_A_DAY}
              icon={'fas fa-briefcase'}
              clickHandler={clickHandler}
              isDisabled={work}
            />
            <Buttons
              name='workout'
              id='workout'
              points={100}
              durationTime={EVERY_12_HOURS}
              icon={'fas fa-dumbbell'}
              clickHandler={clickHandler}
              isDisabled={workout}
            />
            <Buttons
              name='meditate'
              id='meditate'
              points={100}
              durationTime={ EVERY_6_HOURS}
              icon={'fas fa-balance-scale'}
              clickHandler={clickHandler}
              isDisabled={meditate}
            />
          </VStack>
          <VStack direction='column' spacing={6}>
            <Buttons
              name='volunteer'
              id='volunteer'
              points={100}
              durationTime={EVERY_16_HOURS}
              icon={'fas fa-hands-helping'}
              clickHandler={clickHandler}
              isDisabled={volunteer}
            />
            <Buttons
              name={'party'}
              id='party'
              points={100}
              durationTime={ONCE_A_DAY}
              icon={'fas fa-glass-martini'}
              clickHandler={clickHandler}
              isDisabled={party}
            />
            <Buttons
              name={'shower'}
              id='shower'
              points={100}
              durationTime={EVERY_8_HOURS}
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