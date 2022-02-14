import React from "react"
import "./Secoes.css"
export default function Secoes() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href="#home"> Home </a> </li>
                        <li> <a href="#orcamento"> Orçamento </a> </li>
                        <li> <a href="#clientes"> Clientes</a> </li>
                        <li> <a href="#caixa"> caixa </a> </li>
                        <li> <a href="#pedidos">Pedidos</a> </li>
                        <li> <a href="#fichaTecnica">Ficha Tecnica</a> </li>
                        <li> <a href="produtos"> Produtos </a> </li>
                    </ul>
                </nav>
            </div>
            <section id="home">
                <h2> Home </h2>
                <aside className="aside">
                    <a href="#home" id="home2"> Home</a>
                    <a href="#orcamento" id="orcamento2">Orçamento</a>
                    <a href="#clientes" id="clientes2">Clientes</a>
                    <a href="#caixa" id="caixa2">caixa</a>
                    <a href="#pedidos" id="pedidos2">Pedidos</a>
                    <a href="#fichaTecnica" id="fichaTecnica2">Ficha Tecnica</a>
                    <a href="#produtos" id="produtos2">Produtos</a>
                </aside>
            </section>
            <section id="orcamento">
                <h2> Orçamento </h2>
            </section>
            <section id="clientes">
                <h2> Clientes </h2>
            </section>
            <section id="clientes">
                <h2> Caixa </h2>
            </section>
            <section id="pedidos">
                <h2> Pedidos </h2>
            </section>
            <section id="fichaTecnica">
                <h2> fichaTecnica </h2>
            </section>
            <section id="produtos">
                <h2> Produtos </h2>
            </section>
                <a class="voltarTopo" href=".menu"> Topo </a>
                <a class="irHome" href="#home"> Home </a>
                <a class="irOrcamento" href="#orcamento"> Orçamento </a>
                <a class="irClientes" href="#clientes"> clientes </a>
                <a class="irCaixa" href="#caixa"> Caixa </a>
                <a class="irPedidos" href="#pedidos"> Pedidos </a>
                <a class="irFichaTecnica" href="#fichatecnica"> Ficha Tecnica</a>
                <a class="irProdutos" href="#Produtos"> Produtos </a>
            <footer>
                <h3> Rodapé </h3>
            </footer>
        </div>
    )
}