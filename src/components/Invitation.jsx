// src/components/Invitation.jsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaRing, FaImages } from 'react-icons/fa';
import Countdown from './Countdown';
import WApBtn from './WApBtb';
import PhotoModal from './PhotoModal';
import WishesModal from './WishesModal'; // <-- Nuevo componente importado
import '../styles/Invitation.css';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isWishesOpen, setIsWishesOpen] = useState(false); // <-- Nuevo estado para el libro de deseos

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
            <h2>Nuestra <br /> Boda</h2>
            
            {/* Nombres fijos sin enlace */}
            <div className="card-subtitle">
              Nombre 1 & Nombre 2
            </div>
            
            <p>
              Hay momentos en la vida que son inolvidables, y compartirlos con quienes amamos los hace eternos. Tenemos el orgullo de invitarte a celebrar nuestra boda.
            </p>
            
            <div className="event-details">
              <p><strong><FaCalendarAlt style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Fecha:</strong> 25 de Octubre, 2026</p>
              <p><strong><FaClock style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Hora:</strong> 7:00 PM</p>
              
              {/* Ubicación interactiva como enlace */}
              <p>
                <strong><FaMapMarkerAlt style={{ marginRight: '6px', color: 'var(--accent-gold)' }} /> Recepción:</strong>{' '}
                <span 
                  className="gallery-link map-link-text"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMapOpen(true);
                  }}
                  title="Haz clic para ver el mapa"
                >
                  Salón Versalles
                </span>
              </p>
            </div>

            {/* Contenedor flexible para alinear "Nuestra Historia" y "Libro de Deseos" */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '8px 0', flexWrap: 'wrap' }}>
              {/* Leyenda interactiva "Nuestra Historia" para abrir la galería */}
              <div 
                className="gallery-link" 
                style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGalleryOpen(true);
                }}
                title="Haz clic para ver nuestra galería"
              >
                Nuestra Historia <FaImages className="gallery-icon-hint" />
              </div>

              {/* Botón interactivo para abrir el Libro de Deseos */}
              <div 
                className="gallery-link" 
                style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsWishesOpen(true);
                }}
                title="Déjanos un deseo"
              >
                Libro de Deseos ✍️
              </div>
            </div>

            {/* Cuenta regresiva */}
            <Countdown targetDate="2026-10-25T19:00:00" />

            {/* Botón de WhatsApp */}
            <WApBtn 
              phoneNumber="521XXXXXXXXXX" 
              message="¡Hola! Confirmo mi asistencia a su boda con mucho gusto. 🎉" 
            />

            {/*<span className="close-instruction">Guardar Carta</span>*/}
          </div>
        </div>

        <div className="envelope-front">
          <div className="envelope-seal"><FaRing /></div>
          {/*<span className="open-instruction">Abrir Carta</span>*/}
        </div>
      </div>

      {/* Componente Modal / Carrusel de Pantalla Completa para Fotos */}
      <PhotoModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Componente Modal para el Libro de Deseos con Google Sheets */}
      <WishesModal isOpen={isWishesOpen} onClose={() => setIsWishesOpen(false)} />

      {/* Modal para el Mapa de Google Maps */}
      {isMapOpen && (
        <div className="modal-overlay" onClick={() => setIsMapOpen(false)}>
          <div className="modal-content map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setIsMapOpen(false)}
            >
              &times;
            </button>
            <iframe
              title="Ubicación Salón Versalles"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.531518090558!2d-99.1573845!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDknMjYuNiJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invitation;