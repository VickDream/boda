// src/App.jsx
import React from 'react';
import Invitation from './components/Invitation';
import RainEffect from './components/RainEffect';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <RainEffect />

      <Invitation />
    </div>
  );
}

export default App;