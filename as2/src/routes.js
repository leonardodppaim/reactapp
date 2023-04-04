import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Contato from './pages/contato';
import Sobre from './pages/about'

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
               
        </Routes>
    </BrowserRouter>
    )
    

}

export default Rotas;