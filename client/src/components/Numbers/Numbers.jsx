import { Link } from 'react-router-dom'
import './Numbers.css'

export const Numbers = () => {
  return (
    <>
      <Link to="/" className="game-link">
        Return to Dashboard!
      </Link>
      <p>
        found numbers
      </p>
    </>
  )
}
