import React from "react";
import Estudiante from "./Estudiante";

const TablaEstudiantes = ({ estudiantes, onEditar, onEliminar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Semestre</th>
          <th>Deporte Favorito</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map(estudiante => (
          <Estudiante
            key={estudiante.nombre}
            estudiante={estudiante}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablaEstudiantes;
