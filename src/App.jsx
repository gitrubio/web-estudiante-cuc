import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [semestre, setSemestre] = useState('');
  const [deporteFavorito, setDeporteFavorito] = useState('');
  

  const deportes = [
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'Voleibol',
    'Natación'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí se podría enviar la información a una API o hacer algo con ella
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre" style={{margin:10}}>Nombre del estudiante</label>
        <input name='nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>

        <label htmlFor="semestre" style={{margin:10}}>Semestre del estudiante</label>
        <input name='semestre' type="text" value={semestre} onChange={(e) => setSemestre(e.target.value)} required/>

        <label htmlFor="deporteFavorito" style={{margin:10}}>Deporte favorito</label>
        <select name='deporteFavorito' value={deporteFavorito} onChange={(e) => setDeporteFavorito(e.target.value)} required>
          <option value="">Seleccione un deporte</option>
          {deportes.map((deporte, index) => (
            <option key={index} value={deporte}>{deporte}</option>
          ))}
        </select>

        
      </form>
    </div>
  );
}

export default App;