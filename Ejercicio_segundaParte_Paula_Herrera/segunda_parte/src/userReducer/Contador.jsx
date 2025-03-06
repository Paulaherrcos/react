import { useReducer } from "react";

const estadoInicial = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - 1;
    case "REINICIAR":
      return estadoInicial;
    default:
      return state;
  }
};

const Contador = () => {
    // el dispatch seria el que lleva a la accion que hayamos puesto en el case correspondiente del switch
  const [contador, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Contador: {contador}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>-</button>
      <button onClick={() => dispatch({ type: "REINICIAR" })}>Reiniciar</button>
    </div>
  );
};

export default Contador;
