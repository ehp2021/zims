import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import { useMoralis} from 'react-moralis'
import{useNavigate} from 'react-router-dom'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  const {user,setUserData} = useMoralis()
  const navigate = useNavigate()

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    alert('You won!')
    finalMessage = 'Congratulations! You won! 😃';
    
    playable = false;
    setUserData({points:(user.attributes.points+200)})
    navigate('/games')
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
    navigate('/games')
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup;