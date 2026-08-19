// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css'; // O agrégalo en tu CSS general

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.dias}</span>
        <span className="countdown-label">Días</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.horas}</span>
        <span className="countdown-label">Horas</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.minutos}</span>
        <span className="countdown-label">Min</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.segundos}</span>
        <span className="countdown-label">Seg</span>
      </div>
    </div>
  );
};

export default Countdown;