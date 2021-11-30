import React from 'react'
import { Center } from '@chakra-ui/react';
// import '../pages/Profile.css';
// import 'font-awesome/css/font-awesome.min.css';

const Buttons = ({name, points, time, icon}) => {
  return (
  //  <Center>
    <button className='button-id'
      // style={{ background: isDisabled.work && 'black' }}
      // onClick={() => clickHandler('work', 100)}
      // disabled={isDisabled.work}
    >
      {name.toUpperCase()}
      <i className={icon} style={{verticalAlign: 'middle'}}></i>
    </button>
  //  </Center>
  )
}

export default Buttons
