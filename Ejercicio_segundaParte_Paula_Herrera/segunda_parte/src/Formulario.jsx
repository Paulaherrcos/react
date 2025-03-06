import React, { useEffect, useState } from 'react'

const Formulario = () => {

    const [estado, setEtado]=useState(false);
    const [nombre, setNombre]=useState("");
    const [correo, setCorreo]=useState("");
    const [contraseña, setContraseña]=useState("");
    const [mensaje, setMensaje] = useState(""); 

    // para verificar correo
    const emailComprobado=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    useEffect(() => {
        if (nombre && correo && contraseña) {
                if(emailComprobado.test(correo)){
                    setMensaje("Formato correo ok");
                }else{
                    setMensaje("Debe introducir un formato de correo");
                }
            } else {
            setMensaje("Faltan campos por rellenar");
        }
    }, [nombre, correo, contraseña]); 

  return (
    <div>
        <form action="" >
            <h2>Rellena el formulario</h2>
            <label text="">Nombre</label>
            <input type="text" id='nombre' required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="nombre"/>
            <br />
            <br />
            <label text="">Correo</label>
            <input type="text" id='correo' required value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo"/>
            <br />
            <br />
            <label text="">Contraseña</label>
            <input type="text" id='contraseña' required value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="contraseña"/>
            <br />
            <br />
            <button onClick={(e) => e} className="botonpausa_start" type='submit'>Enviar Formulario <br /></button>
            <br />
            <p>{mensaje}</p>
        </form>
    </div>
  )
}

export default Formulario