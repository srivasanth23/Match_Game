import {Component} from 'react'
import TabItem from '../TabItem'
import ImageInstance from '../ImageInstance'
import ScoreCard from '../ScoreCard'

import './index.css'

class GameHomePage extends Component {
  state = {
    timer: 60,
    isTimerRunning: true,
    activeTab: 'FRUIT',
    score: 0,
    matchIamgeIndex: 0,
  }

  componentDidMount() {
    this.timer = setInterval(this.countdown, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onClickTab = tabId => {
    this.setState({activeTab: tabId})
  }

  getfilteredTabImages = activeTab => {
    const {imagesList} = this.props
    return imagesList.filter(each => each.category === activeTab)
  }

  checkMatch = checkedId => {
    const {matchIamgeIndex} = this.state
    const {imagesList} = this.props
    const {id} = imagesList[matchIamgeIndex]
    const randomIndex = Math.ceil(Math.random() * imagesList.length)

    if (id === checkedId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchIamgeIndex: randomIndex,
      }))
    } else {
      clearInterval(this.timer)
      this.setState({
        isTimerRunning: false,
      })
    }
  }

  countdown = () => {
    const {timer} = this.state

    if (timer === 0) {
      clearInterval(this.timer)
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  resetButton = () => {
    this.setState({
      timer: 60,
      isTimerRunning: true,
      activeTab: 'FRUIT',
      score: 0,
      matchIamgeIndex: 0,
    })
    this.timer = setInterval(this.countdown, 1000)
  }

  render() {
    const {score, timer, matchIamgeIndex, activeTab, isTimerRunning} =
      this.state

    const {tabsList, imagesList} = this.props

    const filteredTabImages = this.getfilteredTabImages(activeTab)
    const {imageUrl} = imagesList[matchIamgeIndex]

    return (
      <div className="app-conatiner">
        <nav className="nav-conatiner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
          <ul className="score-container">
            <li className="inner-score">
              <p className="score">Score: </p>
              <p className="score"> {score}</p>
            </li>
            <li className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-image"
              />
              <p>{timer} sec</p>
            </li>
          </ul>
        </nav>
        <div className="game-container">
          {isTimerRunning && (
            <div className="play-conatiner">
              <img src={imageUrl} className="q-image" alt="match" />
              <ul className="unordered-tabs-list">
                {tabsList.map(each => (
                  <TabItem
                    key={each.tabId}
                    tabDetails={each}
                    isActive={activeTab === each.tabId}
                    onClickTab={this.onClickTab}
                  />
                ))}
              </ul>
              <ul className="images-container">
                {filteredTabImages.map(each => (
                  <ImageInstance
                    key={each.id}
                    imageDetails={each}
                    onClick={this.checkMatch}
                  />
                ))}
              </ul>
            </div>
          )}
          {!isTimerRunning && (
            <ScoreCard score={score} resetButton={this.resetButton} />
          )}
        </div>
      </div>
    )
  }
}

export default GameHomePage
