// src/components/RainEffect.jsx
import React, { useMemo } from 'react';
import { FaHeart, FaRing, FaGlassCheers, FaStar } from 'react-icons/fa';
import '../styles/RainEffect.css';

const RainEffect = () => {
  // Usamos useMemo para generar los valores aleatorios una sola vez al montar el componente
  const raindrops = useMemo(() => {
    const elements = Array.from({ length: 22 });
    const weddingIcons = [<FaHeart />, <FaRing />, <FaGlassCheers />, <FaStar />];

    return elements.map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 5,
      size: 0.8 + Math.random() * 1.0,
      icon: weddingIcons[index % weddingIcons.length]
    }));
  }, []);

  return (
    <div className="rain-container">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            fontSize: `${drop.size}rem`,
          }}
        >
          {drop.icon}
        </div>
      ))}
    </div>
  );
};

export default React.memo(RainEffect);