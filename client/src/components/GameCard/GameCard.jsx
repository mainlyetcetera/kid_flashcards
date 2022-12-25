import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

export const GameCard = ({ text, img, destination }) => {
  destination = destination || ''

  return (
    <Link 
      to={`/${destination}`}
      className="card"
    >
      <p className="card-text">
        { text }
      </p>
      <img src={require(`../../assets/${img}`)} alt="" className="card-img" />
    </Link>
  )
}
