import React from 'react';
import { Link} from 'react-router-dom';

const Sobre = () => {

    return (
        <div>
            <h1>Sobre</h1>
            <h2>Projeto React</h2>
            <h3>Feito com Visual Studio</h3>
            <Link to='/'><button>Inicio</button></Link>
        </div>
    )
}

export default Sobre;