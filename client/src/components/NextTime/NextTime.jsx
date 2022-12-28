import { Link } from 'react-router-dom'

export const NextTime = () => {
  return (
    <>
      <p>
        So close! Better luck next time!
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
