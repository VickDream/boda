// src/components/RainEffect.jsx
import React from 'react';
import { FaHeart, FaRing, FaGlassCheers, FaStar } from 'react-icons/fa';
import '../styles/RainEffect.css';

const RainEffect = () => {
  // Cantidad de elementos flotantes en la lluvia
  const elements = Array.from({ length: 22 });

  // Lista de íconos temáticos para repartir en la lluvia
  const weddingIcons = [
    <FaHeart key="heart" />, 
    <FaRing key="ring" />, 
    <FaGlassCheers key="cheers" />, 
    <FaStar key="star" />
  ];

  return (
    <div className="rain-container">
      {elements.map((_, index) => {
        // Generamos valores aleatorios para estilos únicos por elemento
        const randomLeft = Math.random() * 100; // Porcentaje de ancho
        const randomDuration = 6 + Math.random() * 8; // Entre 6 y 14 segundos de caída (más pausado y elegante)
        const randomDelay = Math.random() * 5; // Retraso aleatorio al iniciar
        const randomSize = 0.8 + Math.random() * 1.0; // Escala de tamaño

        // Seleccionamos un ícono cíclicamente o de forma aleatoria de nuestra lista
        const SelectedIcon = weddingIcons[index % weddingIcons.length];

        return (
          <div
            key={index}
            className="rain-drop"
            style={{
              left: `${randomLeft}%`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
              fontSize: `${randomSize}rem`,
            }}
          >
            {SelectedIcon}
          </div>
        );
      })}
    </div>
  );
};

export default RainEffect;