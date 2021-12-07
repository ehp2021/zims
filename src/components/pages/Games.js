import Sidebar from '../mini/Sidebar';
import { Flex, Text } from '@chakra-ui/react';
import './Games.css'
import { Link } from 'react-router-dom';
import { useMoralis } from 'react-moralis'

const Games = () => {
    const { user, setUserData } = useMoralis()

    function clickHandler(degrade) {
        const rename = user.attributes.points - degrade;
        setUserData({points:rename})
    }

  
     return (
    <>
      <Sidebar isMobile={false} />
      <Flex>
        <Flex
          m='0 auto'
          w={{ base: 'none', xl: '25%' }}
        >
          <Flex direction='column' align='center' justify='center' textAlign='center'>
            <Text
              className='chrome'
              mt='6rem'
              mb='2rem'
              fontSize={{ base: '3rem', sm: '5rem', md: '9rem' }}
            >
              ARCADE
            </Text>
           <Flex >
              <Flex direction='column' textAlign='center' p={4}>
                <Text
              fontSize={{ base: '1rem', md: '1.4rem' }}
                >Click a game below to play. You will need to use some points to play a game.</Text>
                  <Flex direction='column' mt='1rem'>
                    <Link to='/hangman'>
                      <Text className="hangman-title" 
                    fontSize={{ base: '1.8rem', md: '2.5rem' }}
                      onClick={()=>clickHandler(100)}>Hangman</Text>
                    </Link>
                    <Link to='/floppy'>
                    <Text className="hangman-title"
                     fontSize={{ base: '1.8rem', md: '2.5rem' }}
                    >Floppy Bird</Text>
                    </Link>
                    <Link to='/brick'>
                    <Text className="hangman-title" onClick={()=>clickHandler(100)}
                    fontSize={{ sm: '1.8rem', md: '2.5rem' }}
                    >Brick Breaker</Text>
                    </Link>
                    <Link to='/tetris'>
                    <Text className="hangman-title" onClick={()=>clickHandler(100)}
                    fontSize={{ sm: '1.8rem', md: '2.5rem' }}
                    >Tetris</Text>
                    </Link>
                  </Flex>
              </Flex>
            </Flex>

        </Flex>
    </Flex>
    </Flex>
    </>
  )

}

export default Games;