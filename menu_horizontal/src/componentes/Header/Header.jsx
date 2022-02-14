import React from "react"
import { Link } from "react-router-dom"
//import logotipo from '../../imagens/logoBuramar.jpeg'

import './Header.css'

export default function Header() {
    return (
                
        <header className="menu">
            
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/orcamento"> Orçamento </Link> </li>
                    <li> <Link to="/cadastro"> Cadastro </Link> </li>
                    <li> <Link to="/caixa"> Caixa </Link> </li>
                    <li> <Link to="/pedidos"> Pedidos </Link> </li>
                    <li> <Link to="/fichaTecnica"> Ficha Técnica </Link> </li>
                    <li> <Link to="/produtos"> Produtos </Link> </li>
                </ul>
            </nav>
            
        </header>
    )
}
