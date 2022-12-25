import React from 'react'
import './GameCard.css'

export const GameCard = ({ text, img }) => {
  return (
    <div className="card">
      <p className="card-text">
        { text }
      </p>
      <img src={require(`../../assets/${img}`)} alt="" className="card-img" />
    </div>
  )
}
