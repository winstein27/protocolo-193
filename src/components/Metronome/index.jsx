import React, { useState, useEffect } from 'react';
import "./metronome.css";

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0); // Inicializa o cronômetro em 0 segundos

  const clickFile = "https://github.com/munizigor/protocolo-193/raw/main/src/components/Metronome/static/click.wav"; // Insira o caminho do seu arquivo de som
  const bellFile = "https://github.com/munizigor/protocolo-193/raw/main/src/components/Metronome/static/bell.wav"; // Insira o caminho do seu arquivo de som de sino

  const playClickSound = () => {
    const click = new Audio(clickFile);
    click.play();
  };

  const playBellSound = () => {
    const bell = new Audio(bellFile);
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
        setTimer(timer => timer + 1); // Incrementa o cronômetro regressivo a cada segundo
      }, 1000);
    } else {
      clearInterval(countdownInterval);
    }
    return () => clearInterval(countdownInterval);
  }, [isPlaying]);

  useEffect(() => {
    if (timer >= 120 && timer % 120 === 0) { // Verifica se passaram 2 minutos
      playBellSound(); // Toca o som do sino
    }
  }, [timer]);

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
