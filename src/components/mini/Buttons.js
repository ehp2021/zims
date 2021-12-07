import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Countdown from 'react-countdown';
import moment from 'moment';

const Buttons = ({ id, name, points, icon, clickHandler, isDisabled, durationTime }) => {
  const previousClick = +localStorage.getItem('lastClicked' + name); 
  
  const [timeLeft, setTimeLeft] = useState(Date.now() - previousClick);
  // console.log(previousClick, 'last click')
  // console.log(Date.now(), 'datenow')
  // console.log(timeLeft, Date.now() - previousClick, "timeleft?")

  isDisabled &&  console.log(previousClick + 10000 - Date.now(), 'SUM', name) 

  // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>{hours}:{minutes}:{seconds}</span>;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

  return (
    <Button
      className='zimFont'
      id={`${id}`}
      w='15rem'
      py='1.8rem'
      cursor='pointer'
      borderRadius='100px'
      transition='all 0.2s ease-out'
      boxShadow='0 0 20px rgba(0, 255, 203, 0.64)'
      bgGradient='linear(90deg,  #81e6d9 0%, #4fd1c5 100%)'
      _hover={{
        background: '#313133',
        color: 'teal.500',
        transform: 'translateY(-4px) scale(1.03)',
      }}
      _active={{
        transform: 'translateY(1px)',
      }}
      onClick={e => clickHandler(e, name, points)}
      disabled={isDisabled}
      style={{ pointerEvents: isDisabled && 'none' }}
    >
      {!isDisabled ? (
        <>
          {name.toUpperCase()}
          <i
            className={icon}
            style={{
              marginLeft: '1rem',
              marginBottom: '.1rem',
            }}
          ></i>
        </>
      ) : (
        <Countdown date={Date.now() + previousClick + durationTime - Date.now()}
       />
        )}
    </Button>
  );
};

export default Buttons;
