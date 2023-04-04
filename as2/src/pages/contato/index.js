import React from 'react';
import {Link} from 'react-router-dom';

const Contato = () => {
    return (
        <div>
            <h1>Contato</h1>
            <h2>Leonardo Paim</h2>
            <h3>leonardodppaim@gmail.com</h3>
            <Link to='/'><button>Inicio</button></Link>
        </div>
    )
}

export default Contato;