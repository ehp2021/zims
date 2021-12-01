import HangmanApp from '../games/Hangman/HangmanApp';
import FloppyApp from '../games/Floppy/FloppyApp';
import Sidebar from '../mini/Sidebar';
import { Flex } from '@chakra-ui/react';
import './Games.css'
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <>
    <Flex background={'radial-gradient(600px at 60% 50% , #cccccc 30%, #191C27 80%)'}>
      <Flex direction='row'>
        <Sidebar style={{ width: '20px' }} />
      </Flex>
        <Flex m='0 auto' mt={4}>
          
          <div style={{minHeight:'100vh'}}>
            <div className="chrome">ARCADE</div>
            <div style={{textAlign: 'center'}}>Click a game below to play:</div>
              <div className='hangman-container' >
                <Link to='/hangman'>
                  <div className="hangman-title">Hangman</div>
                </Link>
                <Link to='/floppy'>
                <div className="hangman-title">Floppy Bird</div>
                </Link>
                <div className="hangman-title">Brick Breaker</div>
              </div>
          </div>
        </Flex>
    </Flex>
    </>
  )

}

export default Games;