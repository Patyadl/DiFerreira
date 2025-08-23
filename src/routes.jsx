import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Camisas from './components/Camisas/Camisas';
 import Acessorios from "./components/Acessorios/Acessorios"
 import Bermudas from "./components/Bermudas/Bermudas"
import Sapatos from "./components/Sapatos/Sapatos"
 import Tenis from "./components/Tenis/Tenis"
import Comprar from './components/Comprar/Comprar';


function Main() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        } />

       <Route path='/camisas' element = { <Camisas/>} />
           <Route path='/bermudas' element = { <Bermudas/>} />
             <Route path='/tenis' element = { <Tenis/>} />
               <Route path='/sapatos' element = { <Sapatos/>} />
        <Route path='/acessorios' element = { <Acessorios/>} />
         <Route path='/comprar' element = { <Comprar/>} />
       
      </Routes>
    </Router>
  );
}

export default Main;