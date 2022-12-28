import React from 'react'
import { Link } from 'react-router-dom'
import './GamePlayCard.css'

export const GamePlayCard = ({ value, img, goTo }) => {
  return (
    <Link 
      className="card"
      to={goTo(value)}
    >
      <img src={require(`../../../assets/${img}`)} alt="" className="card-img" />
    </Link>
  )
}
