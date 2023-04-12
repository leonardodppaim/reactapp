import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Home extends Component{

     
    
    render(){
        return (
            <div>
                <h1>Página inicial</h1>
                <div></div>
                <Link to='/cadastro'><button>Cadastro</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/contato'><button>Contato</button></Link>
                <Link to='/sobre'><button>Sobre</button></Link>
                
            </div>
        )
    }

}



export default Home;