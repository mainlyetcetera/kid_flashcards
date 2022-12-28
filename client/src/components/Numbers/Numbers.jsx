import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GamePlayCard } from '../Cards/GamePlayCard/GamePlayCard'
import { GamePlayPrompt } from '../Cards/GamePlayPrompt/GamePlayPrompt'
import './Numbers.css'

export const Numbers = () => {
  const [number, setNumber] = useState(0);
  const [promptImage, setPromptImage] = useState('die_one.png');

  useEffect(() => {
    const pickNumber = (max) => Math.floor(Math.random() * max) + 1
    setNumber(pickNumber(3))
    setPromptImage(getPromptImage(number))
  }, [number, promptImage])

  const getPromptImage = (n) => {
    return n === 1  ? 'die_one.png'
      : n === 2 ? 'die_two.png'
      : 'die_three.png'
  }

  const goTo = (value) => {
    return value === number ?
      'yay' :
      'next-time'
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
          goTo={goTo}
        />
        <GamePlayCard 
          value={2} 
          img='num_two.png'
          goTo={goTo}
        />
        <GamePlayCard 
          value={3} 
          img='num_three.png' 
          goTo={goTo}
        />
      </div>
      <Link to="/" className="game-link">
        Return to Dashboard!
      </Link>
    </>
  )
}
