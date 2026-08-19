// src/components/WApBtn.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WApBtn.css';

const WApBtn = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="whatsapp-btn-container">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <FaWhatsapp style={{ marginRight: '8px', fontSize: '1.2rem' }} />
        Reservar
      </a>
    </div>
  );
};

export default WApBtn;