// src/components/Invitation.jsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaRing, FaImages } from 'react-icons/fa';
import Countdown from './Countdown';
import WApBtn from './WApBtb';
import PhotoModal from './PhotoModal';
import '../styles/Invitation.css';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation(); 
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className="invitation-wrapper">
      <div 
        className={`envelope ${isOpen ? 'open' : ''}`} 
        onClick={handleOpen}
      >
        <div className="envelope-flap"></div>

        <div className="card-container" onClick={handleClose}>
          <div className="card-content">
            <h2>Nuestra Boda</h2>
            
            {/* Nombres con enlace interactivo para abrir la galería */}
            <div 
              className="card-subtitle gallery-link" 
              onClick={(e) => {
                e.stopPropagation();
                setIsGalleryOpen(true);
              }}
              title="Haz clic para ver nuestra galería"
            >
              Nombre 1 & Nombre 2 <FaImages className="gallery-icon-hint" />
            </div>
            
            <p>
              Hay momentos en la vida que son inolvidables, y compartirlos con quienes amamos los hace eternos. Tenemos el orgullo de invitarte a celebrar nuestra boda.
            </p>
            
            <div className="event-details">
              <p><strong><FaCalendarAlt style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Fecha:</strong> 25 de Octubre, 2026</p>
              <p><strong><FaClock style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Hora:</strong> 7:00 PM</p>
              <p><strong><FaMapMarkerAlt style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Recepción:</strong> Salón Versalles</p>
            </div>

            {/* Cuenta regresiva */}
            <Countdown targetDate="2026-10-25T19:00:00" />

            {/* Botón de WhatsApp */}
            <WApBtn 
              phoneNumber="521XXXXXXXXXX" 
              message="¡Hola! Confirmo mi asistencia a su boda con mucho gusto. 🎉" 
            />

            <span className="close-instruction">Guardar Carta</span>
          </div>
        </div>

        <div className="envelope-front">
          <div className="envelope-seal"><FaRing /></div>
          <span className="open-instruction">Abrir Carta</span>
        </div>
      </div>

      {/* Componente Modal / Carrusel de Pantalla Completa */}
      <PhotoModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
};

export default Invitation;