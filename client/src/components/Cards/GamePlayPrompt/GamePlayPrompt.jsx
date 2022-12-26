import './GamePlayPrompt.css'

export const GamePlayPrompt = ({ img }) => {
  return (
    <img src={require(`../../../assets/${img}`)} alt="" className="prompt-img" />
  )
}

