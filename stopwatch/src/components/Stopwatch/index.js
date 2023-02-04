import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  }

  startTimer = () => {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.timerId = setInterval(this.tick, 1000)
      this.setState({isRunning: true})
    }
  }

  stopTimer = () => {
    const {isRunning} = this.state
    if (isRunning === true) {
      clearInterval(this.timerId)
      this.setState({isRunning: false})
    }
  }

  resetTimer = () => {
    this.setState({isRunning: false, minutes: 0, seconds: 0})
    clearInterval(this.timerId)
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prev => ({seconds: 0, minutes: prev.minutes + 1}))
    } else {
      this.setState(prev => ({seconds: prev.seconds + 1}))
    }
  }

  render() {
    const {minutes, seconds} = this.state

    const minutesInFormat = minutes > 9 ? minutes : `0${minutes}`
    const secondsInFormat = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-card-container">
          <p className="para">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock-img"
            />
            Timer
          </p>
          <h1 className="timer-text">
            {minutesInFormat}:{secondsInFormat}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button green"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
