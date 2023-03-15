import React from "react";

const Estudiante = ({ estudiante, onEditar, onEliminar }) => {
  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.semestre}</td>
      <td>{estudiante.deporteFavorito}</td>
      <td>
        <button onClick={() => onEditar(estudiante)}>Editar</button>
        <button onClick={() => onEliminar(estudiante)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Estudiante;
