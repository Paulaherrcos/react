import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

const Contador = () => {

const [estado, setEstado]=useState(true);
const [contador, setContador]=useState(0);
const intervalo= useRef();
const [nombre, setNombre]=useState("");

useEffect(() => {
    if (estado) {
        intervalo.current = setInterval(() => {
          setContador(prevTime => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(intervalo.current);
      }
  
      return () => clearInterval(intervalo.current); // Limpieza
    }, [estado]);

    const parar=()=>{
        setEstado(false);
    }

    const seguir=()=>{
        setEstado(true);
       
    }

    const toggleEstado = () => {
        setEstado(prev => !prev);
      };


  return (
    <div>
        <h1>Ejercicio 4</h1>
        {contador}
        <br />
        <button onClick={toggleEstado}><i className={estado ? "bi bi-pause-fill" : "bi bi-play-fill"}></i></button>
    </div>
  )
}

export default Contador