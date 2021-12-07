import React from 'react'
import Tetris from 'react-tetris';
import './Tetris.css';
import { Flex } from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom'
import {useMoralis} from 'react-moralis'

const TetrisApp = () => {
	const navigate = useNavigate()
	const {user,setUserData} = useMoralis()

  function clickHandler(wonPoints){
		setUserData({points:(user.attributes.points + wonPoints)})
    navigate('/games')
  }
  
	return (
  <Flex>
  <Flex  m='0 auto' >
			<Flex mt='5rem' direction='row' >
				<h1>Tetris</h1>
			    &nbsp;&nbsp;&nbsp;
				<Tetris
					keyboardControls={{
						// Default values shown here. These will be used if no
						// `keyboardControls` prop is provided.
						down: 'MOVE_DOWN',
						left: 'MOVE_LEFT',
						right: 'MOVE_RIGHT',
						space: 'HARD_DROP',
						z: 'FLIP_COUNTERCLOCKWISE',
						x: 'FLIP_CLOCKWISE',
						up: 'FLIP_CLOCKWISE',
						p: 'TOGGLE_PAUSE',
						c: 'HOLD',
						shift: 'HOLD'
					}}
				> 
					{({
						HeldPiece,
						Gameboard,
						PieceQueue,
						points,
						linesCleared,
						state,
						controller
					}) => (
						<div className ='tetris-container'>
							<div className ='points'>
								<p>Points: {points}</p>
								<p>Lines Cleared: {linesCleared}</p>
							</div>
							<Gameboard />
							<PieceQueue className='piece-queue'/>
							{state === 'LOST' && (
								<div>
									<h2>Game Over</h2>
									<button onClick={()=>clickHandler(points)}>New game</button>
								</div>
							)}
						</div>
					)}
				</Tetris>
			</Flex>
  </Flex>
  </Flex>
	)
};

export default TetrisApp