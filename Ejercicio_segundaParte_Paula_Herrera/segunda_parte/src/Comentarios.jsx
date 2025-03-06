import React, { useState } from 'react';

const Comentarios = () => {
    const [comentarios, setComentarios] = useState([]);//array de comentarios
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [reseña, setReseña] = useState('');
    const [comentario, setComentario] = useState('');
    
    const handleEnviar = (e) => {
        e.preventDefault();//hace que no se envie
        if (nombre && usuario && reseña && comentario) {
            const nuevoComentario = {
                id: Date.now(),  // Genera un ID único basado en el tiempo actual
                nombre,
                usuario,
                reseña,
                comentario,
                likes: 0,
                dislikes: 0,
            };
            setComentarios([...comentarios, nuevoComentario]);
            setNombre('');
            setUsuario('');
            setReseña('');
            setComentario('');
        }
    };

    const handleLike = (id) => {//se recibe el id del comentario al que se quiere dar like
      //con el metodo map recorro toso los comentarios aque hay guardados en ese usestate
        setComentarios(comentarios.map(com =>
          //si el id coincide añado a comentarios el like
            com.id === id ? { ...com, likes: com.likes + 1 } : com
        ));
    };

    const handleDislike = (id) => {
        setComentarios(comentarios.map(com =>
            com.id === id ? { ...com, dislikes: com.dislikes + 1 } : com
        ));
    };

    const handleDelete = (id) => {
        setComentarios(comentarios.filter(com => com.id !== id));
    };

    return (
        <div>
            <h1>COMENTARIOS</h1>
            <form onSubmit={handleEnviar}>
                <h2>Rellena el formulario</h2>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="nombre" required />
                <br /><br />
                <label>Usuario</label>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="usuario" required />
                <br /><br />
                <label>Reseña</label>
                <input type="text" value={reseña} onChange={(e) => setReseña(e.target.value)} placeholder="reseña" required />
                <br /><br />
                <label>Comentario</label>
                <input type="text" value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Comentario" required />
                <br /><br />
                <button type="submit" className="botonpausa_start">Enviar Formulario</button>
                <br />
            </form>
            <ul> 
                {comentarios.map((com) => (
                    <li key={com.id}>
                        <br />
                        <div> <strong>{com.nombre} ({com.usuario})</strong>: {com.reseña} - {com.comentario}</div>
                        <br />
                        <button className="botonpausa_start" onClick={() => handleLike(com.id)}>Me gusta ({com.likes})</button>
                        <button className="botonpausa_start" onClick={() => handleDislike(com.id)}>No me gusta ({com.dislikes})</button>
                        <button className="botonpausa_eliminar" onClick={() => handleDelete(com.id)}>Eliminar</button>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comentarios;
