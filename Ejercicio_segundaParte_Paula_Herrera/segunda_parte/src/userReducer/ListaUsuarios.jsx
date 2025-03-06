import { useReducer, useState } from "react";

const estadoInicial = [];

const agregar_usuario = "AGREGAR_USUARIO";
const eliminar_usuario = "ELIMINAR_USUARIO";
const editar_usuario = "EDITAR_USUARIO";

const reducer = (state, action) => {
  switch (action.type) {
    case agregar_usuario:
      return [...state, { id: Date.now(), nombre: action.payload.nombre, correo: action.payload.correo }];
    case eliminar_usuario:
      return state.filter((usuario) => usuario.id !== action.payload);
    case editar_usuario:
      return state.map((usuario) =>
        usuario.id === action.payload.id
          ? { ...usuario, nombre: action.payload.nombre, correo: action.payload.correo }
          : usuario
      );
    default:
      return state;
  }
};

const ListaUsuarios = () => {
  const [usuarios, dispatch] = useReducer(reducer, estadoInicial);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [editando, setEditando] = useState(null); // Estado para saber si estamos editando un usuario

  // Función para agregar user
  const agregarUsuario = () => {
    if (nombre && correo) {
      dispatch({ type: agregar_usuario, payload: { nombre, correo } });
      setNombre("");
      setCorreo("");
    }
  };

  // Función que elimina
  const eliminarUsuario = (id) => {
    dispatch({ type: eliminar_usuario, payload: id });
  };

  // Función que edita
  const editarUsuario = (id) => {
    const usuario = usuarios.find((u) => u.id === id);
    setNombre(usuario.nombre);
    setCorreo(usuario.correo);
    setEditando(id); // Establecer el id del usuario que estamos editando
  };

  // funcion que guarda al editar
  const guardarEdicion = () => {
    if (nombre && correo) {
      dispatch({ type: editar_usuario, payload: { id: editando, nombre, correo } });
      setNombre(""); 
      setCorreo(""); 
      setEditando(null);
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {editando ? (
          <button onClick={guardarEdicion}>Guardar Edición</button>
        ) : (
          <button onClick={agregarUsuario}>Agregar Usuario</button>
        )}
      </div>

      {/* Mostrar los usuarios */}
      <div>
        {usuarios.map((usuario) => (
          <div key={usuario.id}>
            <span>Nombre = {usuario.nombre} <br/>Correo = {usuario.correo}<br/></span>
            <button onClick={() => editarUsuario(usuario.id)}>Editar</button>
            <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaUsuarios;
