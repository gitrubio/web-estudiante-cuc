import React, { useState } from "react";
import "./App.css";
interface Estudiante {
  nombre: string;
  semestre: number;
  deporteFavorito: string;
  equipos: string[];
}

interface Equipo {
  nombre: string;
}

const estudiantesIniciales: Estudiante[] = [
  {
    nombre: "Juan",
    semestre: 4,
    deporteFavorito: "Fútbol",
    equipos: ["Real Madrid", "Barcelona"],
  },
  {
    nombre: "María",
    semestre: 6,
    deporteFavorito: "Tenis",
    equipos: ["Rafa Nadal Academy", "Roger Federer Academy"],
  },
  {
    nombre: "Pedro",
    semestre: 2,
    deporteFavorito: "Baloncesto",
    equipos: ["Chicago Bulls", "Los Angeles Lakers"],
  },
];

const equiposIniciales: Equipo[] = [
  { nombre: "Real Madrid" },
  { nombre: "Barcelona" },
  { nombre: "Rafa Nadal Academy" },
  { nombre: "Roger Federer Academy" },
  { nombre: "Chicago Bulls" },
  { nombre: "Los Angeles Lakers" },
];

const App: React.FC = () => {
  const [estudiantes, setEstudiantes] =
    useState<Estudiante[]>(estudiantesIniciales);
  const [nuevoEstudiante, setNuevoEstudiante] = useState<Estudiante>({
    nombre: "",
    semestre: 0,
    deporteFavorito: "",
    equipos: [],
  });
  const [estudianteEditado, setEstudianteEditado] = useState<Estudiante | null>(
    null
  );
  const [equipos, setEquipos] = useState<Equipo[]>(equiposIniciales);

  const handleAgregar = () => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
    setNuevoEstudiante({
      nombre: "",
      semestre: 0,
      deporteFavorito: "",
      equipos: [],
    });
  };

  const handleEliminar = (index: number) => {
    const nuevosEstudiantes = [...estudiantes];
    nuevosEstudiantes.splice(index, 1);
    setEstudiantes(nuevosEstudiantes);
  };

  const handleEditar = (estudiante: Estudiante, index: number) => {
    setEstudianteEditado(estudiante);
    setNuevoEstudiante(estudiante);
  };

  const handleGuardar = () => {
    const nuevosEstudiantes = [...estudiantes];
    nuevosEstudiantes.splice(
      estudiantes.indexOf(estudianteEditado!),
      1,
      nuevoEstudiante
    );
    setEstudiantes(nuevosEstudiantes);
    setEstudianteEditado(null);
    setNuevoEstudiante({
      nombre: "",
      semestre: 0,
      deporteFavorito: "",
      equipos: [],
    });
  };

  const handleCancelar = () => {
    setEstudianteEditado(null);
    setNuevoEstudiante({
      nombre: "",
      semestre: 0,
      deporteFavorito: "",
      equipos: [],
    });
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Semestre</th>
            <th>Deporte Favorito</th>
            <th>Equipos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.semestre}</td>
              <td>{estudiante.deporteFavorito}</td>
              <td>{estudiante.equipos.join(", ")}</td>
              <td>
                <button className="editar"  onClick={() => handleEditar(estudiante, index)}>
                  Editar
                </button>
                <button  className="eliminar"  onClick={() => handleEliminar(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {estudianteEditado ? (
        <div className="form-container">
          <h3>Editar Estudiante</h3>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nuevoEstudiante.nombre}
              onChange={(event) =>
                setNuevoEstudiante({
                  ...nuevoEstudiante,
                  nombre: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Semestre:</label>
            <input
              type="number"
              value={nuevoEstudiante.semestre}
              onChange={(event) =>
                setNuevoEstudiante({
                  ...nuevoEstudiante,
                  semestre: Number(event.target.value),
                })
              }
            />
          </div>
          <div>
            <label>Deporte Favorito:</label>
            <input
              type="text"
              value={nuevoEstudiante.deporteFavorito}
              onChange={(event) =>
                setNuevoEstudiante({
                  ...nuevoEstudiante,
                  deporteFavorito: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Equipos:</label>
            <select
              multiple
              value={nuevoEstudiante.equipos}
              onChange={(event) =>
                setNuevoEstudiante({
                  ...nuevoEstudiante,
                  equipos: Array.from(
                    event.target.selectedOptions,
                    (option) => option.value
                  ),
                })
              }
            >
              {equipos.map((equipo, index) => (
                <option key={index} value={equipo.nombre}>
                  {equipo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={handleGuardar}>Guardar</button>
            <button className="eliminar"  onClick={handleCancelar}>Cancelar</button>
          </div>
        </div>
      ) : <div className="form-container">
      <h3>Agregar Estudiante</h3>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nuevoEstudiante.nombre}
          onChange={(event) =>
            setNuevoEstudiante({
              ...nuevoEstudiante,
              nombre: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Semestre:</label>
        <input
          type="number"
          value={nuevoEstudiante.semestre}
          onChange={(event) =>
            setNuevoEstudiante({
              ...nuevoEstudiante,
              semestre: Number(event.target.value),
            })
          }
        />
      </div>
      <div>
        <label>Deporte Favorito:</label>
        <input
          type="text"
          value={nuevoEstudiante.deporteFavorito}
          onChange={(event) =>
            setNuevoEstudiante({
              ...nuevoEstudiante,
              deporteFavorito: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Equipos:</label>
        <select
          multiple
          value={nuevoEstudiante.equipos}
          onChange={(event) =>
            setNuevoEstudiante({
              ...nuevoEstudiante,
              equipos: Array.from(
                event.target.selectedOptions,
                (option) => option.value
              ),
            })
          }
        >
          {equipos.map((equipo, index) => (
            <option key={index} value={equipo.nombre}>
              {equipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleAgregar}>Agregar</button>
      </div>
    </div>}
    </div>
  );
};

export default App;
