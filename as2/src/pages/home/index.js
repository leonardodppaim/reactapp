import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página inicial</h1>
            <div></div>
            <Link to='/contato'><button>Contato</button></Link>
            <Link to='/sobre'><button>Sobre</button></Link>
        </div>
    )
}

export default Home;