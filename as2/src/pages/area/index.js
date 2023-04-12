import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase';

class Area extends Component{

    constructor(props){
        super(props);
        this.state={
            nome: "",
            sobrenome: "",
            nascimento: ""


        }
    }

    async componentDidMount(){
       await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            nascimento: retorno.data().nascimento
                        });
                    });
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Sua página</h1>
                <br />
                <div>Bem vindo {this.state.nome} {this.state.sobrenome}!</div>
                <br />
                <div>Sua data de nasimento é {this.state.nascimento}</div>
                <br />
                <Link to='/'><button>Pagina inicial</button></Link>

            </div>
        )
    }

}

export default Area;