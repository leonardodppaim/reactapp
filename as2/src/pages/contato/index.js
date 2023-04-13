import React from 'react';
import {Link} from 'react-router-dom';

const Contato = () => {
    return (
        <div>
            <h1>Contato</h1>
            <h2>Leonardo Paim</h2>
            <Link to='https://github.com/leonardodppaim/reactapp.git'><h3>leonardodppaim/reactapp</h3></Link>
            <Link to='/'><button>Inicio</button></Link>
        </div>
    )
}

export default Contato;