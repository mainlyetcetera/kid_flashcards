import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'
import { GamePlayCard } from '../Cards/GamePlayCard/GamePlayCard'
import { GamePlayPrompt } from '../Cards/GamePlayPrompt/GamePlayPrompt'
import './Numbers.css'

export const Numbers = () => {
  // const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState(0);
  const [promptImage, setPromptImage] = useState('die_one.png');
  const [msg, setMsg] = useState('');

  const resetGame = () => {
    const pickNumber = (max) => Math.floor(Math.random() * max) + 1
    setNumber(pickNumber(3))
    setPromptImage(getPromptImage(number))
  }

  useEffect(() => {
    // const pickNumber = (max) => Math.floor(Math.random() * max) + 1
    // setNumber(pickNumber(3))
    // setPromptImage(getPromptImage(number))
    resetGame()
  }, [number, promptImage])
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const getPromptImage = (n) => {
    return n === 1  ? 'die_one.png'
      : n === 2 ? 'die_two.png'
      : 'die_three.png'
  }

  const handleClick = (val) => {
    console.log('click');
    if (val === number) {
      setMsg('Yay!')
      resetGame()
      // eslint-disable-next-line no-restricted-globals
      // history.push('/yay')
    } else {
      setMsg('So close! Let\'s try again!')
      // eslint-disable-next-line no-restricted-globals
      // history.push('/next-time')
    }
  }

  return (
    <>
      <h1>
        Numbers!
      </h1>
      <GamePlayPrompt 
        img={promptImage}
      />
      <div className="card-holder">
        <GamePlayCard 
          value={1} 
          img='num_one.png' 
          handleClick={handleClick}
        />
        <GamePlayCard 
          value={2} 
          img='num_two.png'
          handleClick={handleClick}
        />
        <GamePlayCard 
          value={3} 
          img='num_three.png' 
          handleClick={handleClick}
        />
      </div>
      <p>
        { msg }
      </p>
      <Link to="/" className="game-link">
        Return to Dashboard!
      </Link>
    </>
  )
}
