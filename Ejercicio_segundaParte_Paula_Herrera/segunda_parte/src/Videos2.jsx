import React, { useState } from 'react'
import demo from './assets/demo.mp4'
import { useRef } from 'react';

const Videos2 = () => {
    const [reproduciendo, setReproduciendo]=useState(false);
    const videoRef=useRef(null);

    const reproducir=()=>{
      videoRef.current.play();
      setReproduciendo(true);//una vez he dado a play pasa a ser true
    }

    const parar=()=>{
        videoRef.current.pause();
        setReproduciendo(false);//una vez he dado a play pasa a ser true
    }

  return (
    <div>
      <h1>Ejercicio 2</h1>
        <video ref={videoRef} src={demo} width="400px" ></video>
        <br />
        {/* escribo la ternaria donde el onclick ya que si el state es reproducir */}
        <button className='botonpausa_start' onClick={reproduciendo ? parar : reproducir}><i className={reproduciendo ? "bi bi-pause-fill" : "bi bi-play-fill"}></i>  {reproduciendo ? 'Pausar' : 'Reproducir'}</button>
    </div>
  )
}

export default Videos2