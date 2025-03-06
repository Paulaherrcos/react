import React, { useRef } from 'react'
import demo from './assets/demo.mp4'

const Videos = () => {
  const videoRef=useRef(null);
  const reproducir=()=>{
    videoRef.current.play();
  }

  const parar=()=>{
    videoRef.current.pause();
  }
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <video ref={videoRef} src={demo} width="400px" ></video>
      <br />
      <button className='botonpausa_start' onClick={reproducir}><i className="bi bi-play-fill"></i></button>
      <button className='botonpausa_start' onClick={parar}><i className="bi bi-pause-fill"></i></button>
    </div>
  )
}

export default Videos