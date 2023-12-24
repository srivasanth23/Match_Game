import './index.css'

const ScoreCard = props => {
  const {score, resetButton} = props

  const onClickresetButton = () => {
    resetButton()
  }

  return (
    <div className="score-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="score-heading"> YOUR SCORE </p>
      <p className="score-para"> {score} </p>
      <button className="reset-btn" type="button" onClick={onClickresetButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-image"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
