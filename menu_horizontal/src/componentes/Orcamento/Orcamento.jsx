import React from "react"

import './Orcamento.css'

export default function Orcamento() {
    return (
        
        <div>
            <div class="orcamento">
                <h1 id="titOr" > Orçamento </h1>
                

                <div class="dadosOrcam">
                    <label for="cliente"><strong>Cliente</strong></label>
                    <input type="text" name="cliente" id="cliente" required></input>
                    <br></br>
                    <br></br>
                   

                    <label for="endereco"><strong>Endereço</strong></label>
                    <input type="text" name="endereco" id="endereco" required></input>
                    <br></br>
                    <br></br>
                   

                    <label for="telefone1"><strong>Telefone 1</strong></label>
                    <input type="text" name="telefone1" id="telefone1" required></input>
                    &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                    <label for="telefone2"><strong>Telefone 2</strong></label>
                    <input type="text" name="telefone2" id="telefone2" required></input>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                    <label for="telefone3"><strong>Telefone 3</strong></label>
                    <input type="text" name="telefone3" id="telefone3" required></input>
                </div>


                <div class="tabelaProd">

                    <table>

                        <tr>
                            <td><label>Item</label></td>
                            <td><label>Quantidade</label></td>
                            <td><label>Produto</label></td>
                            <td><label>Mat. Prima</label></td>
                            <td><label>Cor</label></td>
                            <td><label>Comp</label></td>
                            <td><label>Larg</label></td>
                            <td><label>Profund</label></td>
                            <td><label>Med. Total</label></td>
                            <td><label>Acabamento</label></td>
                            <td><label>ValorUnit</label></td>
                            <td><label>ValorTotal</label></td>

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
                                    <option> Outros </option>
                                </select>
                            </td>
                            <td><input type="text" id="corOr" name="corOr" /></td>
                            <td><input type="float" id="comprimentoProd" name="comprimentoProd" /></td>
                            <td><input type="text" id="larguraProd" name="larguraProd" /></td>
                            <td><input type="text" id="profundidadeProd" name="profundidadeProd" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="float" id="valorunit" name="valorunit" /></td>
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
                                    <option> Outros </option>
                                </select>
                            </td>
                            <td><input type="text" id="corOr" name="corOr" /></td>
                            <td><input type="float" id="comprimentoProd" name="comprimentoProd" /></td>
                            <td><input type="text" id="larguraProd" name="larguraProd" /></td>
                            <td><input type="text" id="profundidadeProd" name="profundidadeProd" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="float" id="valorunit" name="valorunit" /></td>
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
                                    <option> Outros </option>
                                </select>
                            </td>
                            <td><input type="text" id="corOr" name="corOr" /></td>
                            <td><input type="float" id="comprimentoProd" name="comprimentoProd" /></td>
                            <td><input type="text" id="larguraProd" name="larguraProd" /></td>
                            <td><input type="text" id="profundidadeProd" name="profundidadeProd" /></td>
                            <td><input type="text" id="medTotal" name="medTotal" /></td>
                            <td><input type="text" id="acabamento" name="acabamento" /></td>
                            <td><input type="float" id="valorunit" name="valorunit" /></td>
                            <td><input type="float" id="valortotal" name="valortotal" /></td>
                        </tr>
                                          

                    </table>
                     <div id="imgOr">
                        <label>Imagem</label>
                        <br></br>
                        <textarea id="imagemOr" name="imagemOr"> </textarea>
                    </div>
                    <div>
                        <h6> Tenho ciência que por ser material extraido da natureza pode haver variação de cores. Declaro ainda que concordo com as condições e valores deste orçamento e tenho ciência,
                            que a desistencia deste serviço os 30% pagos ficarão como pagamento das despesas e prejuízos da empresa.  </h6>
                    </div>
                </div>
            </div>
        </div>

    )
}