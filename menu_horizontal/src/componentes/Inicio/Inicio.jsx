import React from "react"

import Logo from '../../imagens/LogoSite.jpeg';

import './Inicio.css'

export default function Inicio(){
    return (
        <div>
            
      
            <div className="inicio">
               
                <figure>
                    <img id="logo" src={Logo} align="center" alt="Logotipo"/>
                </figure>

                <form>
                   
                        <div class= "grupo">
                            <label for="login"><strong>Login</strong></label>  &nbsp; &nbsp; &nbsp;
                            <input type="test" name="login" id= "login" required></input>
                            <br></br>
                            <br></br>
                                                    
                            <label for="senha"><strong>Senha</strong></label> &nbsp;&nbsp; &nbsp;
                            <input type="test" name="sobrenome" id= "sobrenome" required></input>
                        </div>
             
                 </form>    
            </div>
           
        </div>
    )
}