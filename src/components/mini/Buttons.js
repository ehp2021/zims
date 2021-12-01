import React from 'react';
import { Button } from '@chakra-ui/react';

const Buttons = ({ id, name, points, time, icon, clickHandler, isDisabled }) => {
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
      {name.toUpperCase()}
      <i
        className={icon}
        style={{
          marginLeft: '1rem',
          marginBottom: '.1rem',
        }}
      ></i>
    </Button>
  );
};

export default Buttons;
