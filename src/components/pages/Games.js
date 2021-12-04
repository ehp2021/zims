import HangmanApp from '../games/Hangman/HangmanApp';
import FloppyApp from '../games/Floppy/FloppyApp';
import Sidebar from '../mini/Sidebar';
import { Flex } from '@chakra-ui/react';
import './Games.css'
import { Link } from 'react-router-dom';
import {useMoralis} from 'react-moralis'
import {useState,useEffect} from 'react'

const Games = () => {
  const {user, setUserData} =useMoralis()
  const [newPoints,setNewPoints] = useState(user.attributes.points)

  function clickHandler(degrade){
    setNewPoints(prev => (prev-degrade))
  }

  useEffect(()=>{
    setUserData({points:newPoints})
  },[newPoints])
  return (
    <>
    <Flex background={'radial-gradient(600px at 60% 50% , #cccccc 30%, #191C27 80%)'}>
      <Flex direction='row'>
        <Sidebar style={{ width: '20px' }} />
      </Flex>
        <Flex m='0 auto' mt={4}>
          
          <div style={{minHeight:'100vh'}}>
            <div className="chrome">ARCADE</div>
            <div style={{textAlign: 'center'}}>Click a game below to play. You will need to use some points to play a game.</div>
              <div className='hangman-container' >
                <Link to='/hangman'>
                  <div className="hangman-title" onClick={()=>clickHandler(50)}>Hangman</div>
                </Link>
                <Link to='/floppy'>
                <div className="hangman-title">Floppy Bird</div>
                </Link>
                <Link to='/brick'>
                <div className="hangman-title">Brick Breaker</div>
                </Link>
                <Link to='/tetris'>
                <div className="hangman-title">Tetris</div>
                </Link>
              </div>
          </div>
        </Flex>
    </Flex>
    </>
  )

}

export default Games;