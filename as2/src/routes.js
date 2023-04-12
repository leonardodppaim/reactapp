import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Contato from './pages/contato';
import Sobre from './pages/about'
import Cadastro from './pages/cadastro'
import Login from "./pages/login";
import Area from "./pages/area";

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/arearestrita' element={<Area />} />
               
        </Routes>
    </BrowserRouter>
    )
    

}

export default Rotas;