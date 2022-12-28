import { Link } from 'react-router-dom'

export const Yay = () => {
  return (
    <>
      <p>
        Yay! Great job!
      </p>
      <Link to="/numbers" className="game-link">
        Keep playing?
      </Link>
      <Link to="/" className="game-link">
        Return to Dashboard!
      </Link>
    </>
  )
}
