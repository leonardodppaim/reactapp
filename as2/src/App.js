

import React from 'react';
import Rotas from './routes.js';
import firebaseApp from './firebase.js'


function App() {
  <Rotas />
  firebaseApp.firestore().collection("usuario").add({
    nome: "Leonardo",
    sobrenome: "Paim"
  })
  
}




export default App;
