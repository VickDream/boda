// src/components/WishesModal.jsx
import React, { useState, useEffect } from 'react';
import '../styles/WishesModal.css';

const WishesModal = ({ isOpen, onClose }) => {
  const [wishes, setWishes] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const API_URL = 'https://sheetdb.io/api/v1/ew7zzkharcsc4';
  const MAX_CHARS = 200; // Límite de caracteres

  useEffect(() => {
    if (isOpen) fetchWishes();
  }, [isOpen]);

  const fetchWishes = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWishes(data.reverse());
    } catch (error) {
      console.error('Error al cargar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setSubmitting(true);
    const nuevoDeseo = {
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleDateString()
    };

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [nuevoDeseo] })
      });
      setFormData({ name: '', message: '' });
      fetchWishes();
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content wishes-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2>Libro de Deseos</h2>
        
        <form onSubmit={handleSubmit} className="wishes-form">
          <input 
            type="text" 
            placeholder="Tu nombre o familia" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            maxLength="50"
          />
          <div className="textarea-container">
            <textarea 
              placeholder="Escribe tu felicitación..." 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="3"
              required
              maxLength={MAX_CHARS}
            ></textarea>
            {/* Contador de caracteres integrado */}
            <span style={{ 
              position: 'absolute', right: '10px', bottom: '10px', 
              fontSize: '0.7rem', color: '#aaa', pointerEvents: 'none' 
            }}>
              {formData.message.length}/{MAX_CHARS}
            </span>
          </div>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar Deseo'}
          </button>
        </form>

        <div className="wishes-wall">
          {loading ? <p>Cargando...</p> : wishes.map((item, index) => (
            <div key={index} className="wish-card">
              <p className="wish-message">"{item.message}"</p>
              <div className="wish-footer">
                <span className="wish-author">-{item.name}</span>
                <span className="wish-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishesModal;