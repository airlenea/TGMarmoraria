

import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';


import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Orcamento from '../Orcamento/Orcamento.jsx'
import Cadastro from '../Cadastro/Cadastro.jsx'
import Caixa from '../Caixa/Caixa.jsx'
import Pedidos from '../Pedidos/Pedidos.jsx'
import FichaTecnica from '../FichaTecnica/FichaTecnica.jsx'
import Produtos from '../Produtos/Produtos.jsx'


function App() {
  return (
    <div>

      <Header/> {/* componete letra Maiuscula-vamos criar ente componente*/}

      <main>
        <Switch>
          
          <Route exact path="/" render={(props) => <Inicio />}></Route>
          <Route exact path="/orcamento" render={(props) => <Orcamento />}></Route>
          <Route exact path="/cadastro" render={(props) => <Cadastro />}></Route>
          <Route exact path="/caixa" render={(props) => <Caixa />}></Route>
          <Route exact path="/pedidos" render={(props) => <Pedidos/>}></Route>
          <Route exact path="/fichaTecnica" render={(props) => <FichaTecnica/>}></Route>
          <Route exact path="/produtos" render={(props) => <Produtos/>}></Route>

      

        </Switch>

      </main>

      {/*<Footer />*/}

    </div>

  )
}

export default App;
