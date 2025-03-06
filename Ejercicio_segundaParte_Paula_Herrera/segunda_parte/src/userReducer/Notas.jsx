import { useReducer, useState } from "react";

const estadoInicial = [];

const agregar_nota = "AGREGAR_NOTA";
const eliminar_nota = "ELIMINAR_NOTA";
const editar_nota = "EDITAR_NOTA";

const reducer = (state, action) => {
  switch (action.type) {
    case agregar_nota:
      return [...state, { id: Date.now(), titulo: action.payload.titulo, contenido: action.payload.contenido }];
    case eliminar_nota:
      return state.filter((nota) => nota.id !== action.payload);
    case editar_nota:
      return state.map((nota) =>
        nota.id === action.payload.id
          ? { ...nota, titulo: action.payload.titulo, contenido: action.payload.contenido }
          : nota
      );
    default:
      return state;
  }
};

const ListaNotas = () => {
  const [notas, dispatch] = useReducer(reducer, estadoInicial);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [editando, setEditando] = useState(null); // Estado para saber si estamos editando una nota
  const [mensaje, setMensaje] = useState("");
  const [mensajeerr, setMensajeerr] = useState("");


  // Función para agregar una nota
  const agregarNota = () => {
    if (titulo && contenido) {
      dispatch({ type: agregar_nota, payload: { titulo, contenido } });
      setTitulo("");
      setContenido("");
      setMensaje("Tarea agregada correctamente");
      setMensajeerr("");
    }else{
        setMensajeerr("Faltan campos por rellenar");
        setMensaje("");
    }
  };


  const eliminarNota = (id) => {
    dispatch({ type: eliminar_nota, payload: id });
    setMensaje("");
  };



  const editarNota = (id) => {
    const nota = notas.find((n) => n.id === id);
    setTitulo(nota.titulo);
    setContenido(nota.contenido);
    setEditando(id); // Establecer el id de la nota que estamos editando
  };



  const guardarEdicion = () => {
    if (titulo && contenido) {
      dispatch({ type: editar_nota, payload: { id: editando, titulo, contenido } });
      setTitulo("");
      setContenido("");
      setEditando(null);
    }
  };

  return (
    <div>
      <h2>Lista de Notas</h2>
      <p style={{ color: "green" }}>{mensaje && mensaje}</p>
      <p style={{ color: "red" }}>{mensajeerr && mensajeerr}</p>
      <div>
        <input
          type="text"
          placeholder="Título de la nota"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <br />
        <br />
        {editando ? (
          <button onClick={guardarEdicion}>Guardar Edición</button>
        ) : (
          <button onClick={agregarNota}>Agregar Nota</button>
        )}
      </div>

      {/* Mostrar las notas */}
      <div>
        {notas.map((nota) => (
          <div key={nota.id}>
            <h3>{nota.titulo}</h3>
            <p>{nota.contenido}</p>
            <button onClick={() => editarNota(nota.id)}>Editar</button>
            <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaNotas;
