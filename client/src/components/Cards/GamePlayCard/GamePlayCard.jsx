import React from 'react'
// import { button } from 'react-router-dom'
import './GamePlayCard.css'

export const GamePlayCard = ({ value, img, handleClick }) => {
  console.log({ handleClick })
  return (
    <button 
      className="card"
      onClick={() => handleClick(value)} 
    >
      <img src={require(`../../../assets/${img}`)} alt="" className="card-img" />
    </button>
  )
}
