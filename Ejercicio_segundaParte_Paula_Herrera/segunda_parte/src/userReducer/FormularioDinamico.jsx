import { useReducer, useState } from "react";

const estadoInicial = [];// lista vacía

const agregar_campo = "AGREGAR_CAMPO";
const eliminar_campo = "ELIMINAR_CAMPO";
const actualizar_campo = "ACTUALIZAR_VALOR";

const reducer = (state, action) => {
  switch (action.type) {
    case agregar_campo:
      return [...state, { id: Date.now(), nombre: action.payload, valor: "" }];
    case eliminar_campo:
      return state.filter((campo) => campo.id !== action.payload);
    case actualizar_campo:
      return state.map((campo) =>
        campo.id === action.payload.id ? { ...campo, valor: action.payload.valor } : campo
      );
    default:
      return state;
  }
};

const FormularioDinamico = () => {
  const [campos, dispatch] = useReducer(reducer, estadoInicial);
  const [mensaje, setMensaje] = useState("");
  const [nombreCampo, setNombreCampo] = useState(""); // Estado para el nombre del nuevo campo

  const agregarCampo = () => {
    if (nombreCampo.trim() !== "") {
      dispatch({ type: agregar_campo, payload: nombreCampo }); // Agregar el nuevo campo con el nombre
      setMensaje(""); 
      setNombreCampo("");
    } else {
      setMensaje("Debe introducir un nombre para el campo.");
    }
  };

  return (
    <div>
      <h2>Formulario Dinámico</h2>
      <div>
        <input
          type="text"
          value={nombreCampo}
          onChange={(e) => setNombreCampo(e.target.value)} // le paso el nombre que quiero para el campo que me va a crear en el form
          placeholder="Nombre del campo"
        />
        <button onClick={agregarCampo}>Agregar Campo</button>
      </div>
      {mensaje && <p>{mensaje}</p>}
      <div>
        {campos.map((campo) => (
          <div key={campo.id}>
            <label>{campo.nombre}:</label>
            <input
              type="text"
              value={campo.valor}
              onChange={(e) =>
                dispatch({ type: actualizar_campo, payload: { id: campo.id, valor: e.target.value } })
              }
            />
            <button onClick={() => dispatch({ type: eliminar_campo, payload: campo.id })}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormularioDinamico;
