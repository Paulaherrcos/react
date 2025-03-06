import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Temporizador1() {
  const [contador, setContador]=useState(0);//defino valor inicial

  // Usa el hook useEƯect para iniciar un intervalo que incremente el valor del temporizador cada segundo(actualizandose sin dar a click).
  useEffect(() => {
    //Creao un intervalo que cada 1000ms se incremente 1. El PrevTime asegura que siempre se usa el valor actualizado del estado
    //setInterval devuelve un id numerico
    const id=setInterval(() => {
        setContador(prevTime => prevTime + 1);
    }, 1000)
    
    return () => {
      clearInterval(id);//he creado antes const intervalo(id del intervalo) para que con clearinterval lo pueda borrar
    };
  }, []);


  return (
    <div>
      <h1>Ejercicio 3</h1>
      {contador}
    </div>
  )
}

export default Temporizador1