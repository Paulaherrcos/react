import { useReducer, useState } from "react";

const estadoInicail = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [...state, { id: Date.now(), texto: action.payload, completada: false }];
    case "ELIMINAR_TAREA":
      return state.filter((tarea) => tarea.id !== action.payload);
    case "TAREA_COMPLETADA":
      return state.map((tarea) =>
        tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
      );
    default:
      return state;
  }
};

const ListaTareas = () => {
    // usereducer
  const [tareas, dispatch] = useReducer(reducer, estadoInicail);
  const [texto, setTexto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const agregarTarea = () => {
    if (texto.trim() !== "") {
      dispatch({ type: "AGREGAR_TAREA", payload: texto });
      setTexto("");
      setMensaje("");
    }else{
        setMensaje("Debe introducir una tarea");
    
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <p>{mensaje}</p>
      <ul>
        {tareas.map((tarea) => (
            // uso "line-through" : "none" para que si la tarea es completada se tache y si no no
          <li key={tarea.id} style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            {tarea.texto}
            <button onClick={() => dispatch({ type: "TAREA_COMPLETADA", payload: tarea.id })}>✓</button>
            <button onClick={() => dispatch({ type: "ELIMINAR_TAREA", payload: tarea.id })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;