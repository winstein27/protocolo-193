// import React, { Component } from "react";
import "./metronome.css";

const click_file = "//daveceddia.com/freebies/react-metronome/click1.wav"; //TODO: Trocar para url local
const bell_file = "//daveceddia.com/freebies/react-metronome/click1.wav";
//TODO: Metrônomo nao para. Mas a cada dois minutos ele faz um barulho de sino, pra indicar a troca de reanimador

import React, { useState, useEffect } from 'react';

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(120); // 2 minutos em segundos

  const playClickSound = () => {
    const click = new Audio(click_file); // Insira o caminho do seu arquivo de som
    click.play();
  };

  const playBellSound = () => {
    const bell = new Audio(bell_file); // Insira o caminho do seu arquivo de som de sino
    bell.play();
  };

  const startStopMetronome = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        playClickSound();
      }, (60 / 110) * 1000); // Calcula o intervalo de tempo entre os cliques a 110 bpm
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    let bellInterval;
    if (isPlaying) {
      bellInterval = setInterval(() => {
        playBellSound();
      }, 120000); // Toca o som do sino a cada 2 minutos (120000 milissegundos)
    } else {
      clearInterval(bellInterval);
    }
    return () => clearInterval(bellInterval);
  }, [isPlaying]);

  useEffect(() => {
    let countdownInterval;
    if (isPlaying) {
      countdownInterval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000); // Decrementa o cronômetro regressivo a cada segundo
    } else {
      clearInterval(countdownInterval);
    }
    return () => clearInterval(countdownInterval);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="metronome">
      <h2>{formatTime(timer)}</h2>
      <button onClick={startStopMetronome}>{isPlaying ? 'Parar' : 'Iniciar'}</button>
    </div>
  );
};

export default Metronome;



// class Metronome extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPlaying: false,
//       count: 0,
//       bpm: 110,
//       beatsPerMeasure: 4,
//       timeLeft: 120, // 2 minutes in seconds
//     };

//     this.click = new Audio(click);
//   }


//   playClick = () => {

//     this.click.play();

//     this.setState(state => ({
//       count: (state.count + 1) % state.beatsPerMeasure
//     }));
//   };

//   startStop = () => {
//     if (this.state.isPlaying) {
//       // stop the timer and metronome
//       clearInterval(this.timer);
//       clearInterval(this.metronomeTimer);
//       this.click.pause();
//       this.click.currentTime = 0;

//       this.setState({
//         isPlaying: false
//       });
//     } else {
//       // start a timer with current bpm
//       this.timer = setInterval(() => {
//         if (this.state.timeLeft <= 0) {
//           clearInterval(this.timer);
//           this.setState({ isPlaying: false });
//         } else {
//           this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
//         }
//       }, 1000);

//       this.metronomeTimer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
//       this.setState(
//         {
//           count: 0,
//           isPlaying: true,
//           timeLeft: 120 // Reset the time left when starting
//         },
//         () => {
//           this.playClick();
//         }
//       );
//     }
//   };

//   startTimer = () => {
//     this.timer = setInterval(() => {
//       if (this.state.timeLeft <= 0) {
//         clearInterval(this.timer);
//         this.setState({ isPlaying: false });
//       } else {
//         this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
//       }
//     }, 1000);
//   };

//   render() {
//     const { isPlaying, bpm, timeLeft } = this.state;

//     return (
//       <div className="metronome">
//         <p>{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
//         <button onClick={this.startStop}>{isPlaying ? "Parar" : "Iniciar"}</button>
//       </div>
//     );
//   }
// }

// export default Metronome;
