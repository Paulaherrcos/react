import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Videos from './Videos.jsx'
import Videos2 from './Videos2.jsx'
import Temporizador1 from './Temporizador1.jsx'
import Contador from './Contador.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Formulario from './Formulario.jsx'
import Comentarios from './Comentarios.jsx'
import ListaTareas from './userReducer/ListaTareas.jsx'
import FormularioDinamico from './userReducer/FormularioDinamico.jsx'

// CREAR HEDAER Y QUE CADA CONTENIDO SE CARGE AQUI
const App = () => {
  const [pagina, setPagina] = useState('videos'); // Estado para controlar qué ejercicio se muestra

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', background: '#333', padding: '20px', height: '100vh', color: 'white' }}>
        <h3>Menú</h3>
        <button style={styles.button} onClick={() => setPagina('videos')}>Video</button>
        <button style={styles.button} onClick={() => setPagina('videos2')}>Vídeo 2</button>
        <button style={styles.button} onClick={() => setPagina('temporizador')}>Temporizador</button>
        <button style={styles.button} onClick={() => setPagina('contador')}>Contador</button>
        <button style={styles.button} onClick={() => setPagina('formulario')}>Formulario</button>
        <button style={styles.button} onClick={() => setPagina('comentarios')}>Comentario</button>
        <button style={styles.button} onClick={() => setPagina('contador')}>Contador UseReducer</button>
        <button style={styles.button} onClick={() => setPagina('listaTareas')}>Lista de tareas UseReducer</button>
        <button style={styles.button} onClick={() => setPagina('formularioDinamico')}>Fomrulario dinámico UseReducer</button>
      </nav>

      {/* Contenido dinámico */}
      <div style={{ marginLeft: '20px', flex: 1, padding: '20px' }}>
        {pagina === 'videos' && <Videos />}
        {pagina === 'videos2' && <Videos2 />}
        {pagina === 'temporizador' && <Temporizador1 />}
        {pagina === 'contador' && <Contador />}
        {pagina === 'formulario' && <Formulario />}
        {pagina === 'comentarios' && <Comentarios />}
        {pagina === 'conatdor' && <Contador />}
        {pagina === 'comentarios' && <ListaTareas />}
        {pagina === 'formularioDinamico' && <FormularioDinamico />}
      </div>
    </div>
  );
};

// Estilos básicos
const styles = {
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    background: '#00858A',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left'
  }
};

export default App;

