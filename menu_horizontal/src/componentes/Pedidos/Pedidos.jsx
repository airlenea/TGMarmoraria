import React from "react"




import './Pedidos.css'


export default function Pedidos() {
    return (
        <div>
            <div class="pedido">
                        <div>
                            <h1 id="titPed" > Pedido </h1>
                            <h3 id="clN"><label> Cliente </label>  </h3>
                            <h3 id="PedN"><label> Pedido </label>  </h3>
                           
                        </div>
                        <br></br>
                                                 
                    <table class="tabelaPedido">

                        <tr>
                            <td><label>Item</label></td>
                            <td><label>Quantidade</label></td>
                            <td><label>Produto</label></td>
                            <td><label>Materia Prima</label></td>
                            <td><label>Cor</label></td>
                            <td><label>Comprim</label></td>
                            <td><label>Larg</label></td>
                            <td><label>Prof</label></td>
                            <td><label>Med.Total</label></td>
                            <td><label>Acabamento</label></td>
                            <td><label>Valor</label></td>

                        </tr>
                        <tr>
                            <td><input type="int" id="item" name="item" /></td>
                            <td><input type="int" id="quantidade" name="quantidade" /></td>
                            <td><input type="text" id="produto" name="produto" /></td>
                            <td>
                                <select id="matPrima">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Granito </option>
                                    <option> Marmore </option>
                                    <option> Quartzo </option>
                                </select>
                            </td>
                            <td><input type="text" id="cor" name="cor" /></td>
                            <td><input type="float" id="comprim" name="comprim" /></td>
                            <td><input type="text" id="larg" name="larg" /></td>
                            <td><input type="text" id="profund" name="profundid" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="float" id="valortotal" name="valortotal" /></td>
                        </tr>
                        <tr>
                            <td><input type="int" id="item" name="item" /></td>
                            <td><input type="int" id="quantidade" name="quantidade" /></td>
                            <td><input type="text" id="produto" name="produto" /></td>
                            <td>
                                <select id="matPrima">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Granito </option>
                                    <option> Marmore </option>
                                    <option> Quartzo </option>
                                </select>
                            </td>
                            <td><input type="text" id="cor" name="cor" /></td>
                            <td><input type="float" id="comprim" name="comprim" /></td>
                            <td><input type="text" id="larg" name="larg" /></td>
                            <td><input type="text" id="profund" name="profundid" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="float" id="valortotal" name="valortotal" /></td>
                        </tr>
                        <tr>
                            <td><input type="int" id="item" name="item" /></td>
                            <td><input type="int" id="quantidade" name="quantidade" /></td>
                            <td><input type="text" id="produto" name="produto" /></td>
                            <td>
                                <select id="matPrima">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Granito </option>
                                    <option> Marmore </option>
                                    <option> Quartzo </option>
                                </select>
                            </td>
                            <td><input type="text" id="cor" name="cor" /></td>
                            <td><input type="float" id="comprim" name="comprim" /></td>
                            <td><input type="text" id="larg" name="larg" /></td>
                            <td><input type="text" id="profund" name="profundid" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="float" id="valortotal" name="valortotal" /></td>
                        </tr>
                        
                        
                       
                    </table>
                    <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <label>Imagem</label>
                        <br></br>
                        <textarea id="imagemP" name="imagemP"> </textarea>
                    </div>

                <div id="status">  
                    <label >Status do Pedido </label>
                                     
                    <table class="etapasProd">

                       <tr>
                            <td><label>Ordem </label></td>
                            <td><label>Serviço</label></td>
                            <td><label>Data Entrada</label></td>
                        </tr>

                        <tr>
                            <td><label> Etapa 1 </label></td>
                            <td><input type="text" id="servico" name="servico" /></td>
                            <td><input type="date" id="dataEnt" name="dataEnt" /></td>
                            <td><button> concluída </button></td>
                            <td><input type="date" id="dataAcao" name="dataAcao" /></td>
                        </tr>

                        <tr>
                            <td><label> Etapa 2 </label></td>
                            <td><input type="text" id="servico" name="servico" /></td>
                            <td><input type="date" id="dataEnt" name="dataEnt" /></td>
                            <td><button> concluída </button></td>
                            <td><input type="date" id="dataAcao" name="dataAcao" /></td>
                        </tr>

                        <tr>
                            <td><label> Etapa 3 </label></td>
                            <td><input type="text" id="servico" name="servico" /></td>
                            <td><input type="date" id="dataEnt" name="dataEnt" /></td>
                            <td><button> concluída </button></td>
                            <td><input type="date" id="dataAcao" name="dataAcao" /></td>
                        </tr>
                        <tr>
                            <td><label> Etapa 4 </label></td>
                            <td><input type="text" id="servico" name="servico" /></td>
                            <td><input type="date" id="dataEnt" name="dataEnt" /></td>
                            <td><button> concluída </button></td>
                            <td><input type="date" id="dataAcao" name="dataAcao" /></td>
                        </tr>
                                               

                    </table>
                </div> 
            </div>
        </div>

    )
}
