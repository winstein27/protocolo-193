import React, { Component } from "react";
import "./metronome.css";

const click1 = "//daveceddia.com/freebies/react-metronome/click1.wav"; //TODO: Trocar para url local
const click2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      count: 0,
      bpm: 110,
      beatsPerMeasure: 4,
      timeLeft: 120, // 2 minutes in seconds
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleInputChange = event => {
    const bpm = event.target.value;

    if (this.state.isPlaying) {
      // stop old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      // set the new bpm
      // and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      // otherwise, just update the bpm
      this.setState({ bpm });
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    // alternate click sounds
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    // keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  startStop = () => {
    if (this.state.isPlaying) {
      // stop the timer and metronome
      clearInterval(this.timer);
      clearInterval(this.metronomeTimer);
      this.click1.pause();
      this.click1.currentTime = 0;
      this.click2.pause();
      this.click2.currentTime = 0;

      this.setState({
        isPlaying: false
      });
    } else {
      // start a timer with current bpm
      this.timer = setInterval(() => {
        if (this.state.timeLeft <= 0) {
          clearInterval(this.timer);
          this.setState({ isPlaying: false });
        } else {
          this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
        }
      }, 1000);

      this.metronomeTimer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          isPlaying: true,
          timeLeft: 120 // Reset the time left when starting
        },
        () => {
          this.playClick();
        }
      );
    }
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.state.timeLeft <= 0) {
        clearInterval(this.timer);
        this.setState({ isPlaying: false });
      } else {
        this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
      }
    }, 1000);
  };

  render() {
    const { isPlaying, bpm, timeLeft } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <p>{bpm} BPM</p>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleInputChange}
          />
        </div>
        <p>{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
        <button onClick={this.startStop}>{isPlaying ? "Parar" : "Iniciar"}</button>
      </div>
    );
  }
}

export default Metronome;
