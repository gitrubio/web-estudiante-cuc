import React, { useState } from "react";

const FormularioEstudiante = ({ estudiante, onGuardar, onCancelar }) => {
  const [nombre, setNombre] = useState(estudiante ? estudiante.nombre : "");
  const [semestre, setSemestre] = useState(
    estudiante ? estudiante.semestre : ""
  );
  const [deporteFavorito, setDeporteFavorito] = useState(
    estudiante ? estudiante.deporteFavorito : ""
  );

  const guardarEstudiante = () => {
    onGuardar({ nombre, semestre, deporteFavorito });
  };

  return (
    <div>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Semestre:
        <input
          type="number"
          value={semestre}
          onChange={e => setSemestre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Deporte Favorito:
        <input
          type="text"
          value={deporteFavorito}
          onChange={e => setDeporteFavorito(e.target.value)}
        />
      </label>
      <br />
      <button onClick={guardarEstudiante}>Guardar</button>
      <button onClick={onCancelar}>Cancelar</button>
    </div>
  );
};

export default FormularioEstudiante;
