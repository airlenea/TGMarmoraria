import React from "react"



import './Cadastro.css'

export default function Cadastro() {
    return (

        <div>
            <div class="cadastro">
               
                <form>
                    <fieldset class="dadosCadastro">
                            <div>
                                <h1 id="tit" > Cadastro </h1>
                            </div>
                                                       
                            <div>

                                <label for="codigo"><strong>Codigo</strong></label> &nbsp; &nbsp; &nbsp;
                                <input type="test" name="codigo" id="codigo" required></input> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            
                                                   
                                <label > <strong>Tipo Cadastro</strong></label>
                                <select id="tipoCadastro">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Cliente </option>
                                    <option> Fornecedor </option>
                                    <option> Funcionário </option>
                                    <option> Transportadora </option>
                                    <option> Colaboradores </option>
                                </select>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                            </div>
                        <div>
                            <br></br>
                            
                            

                            <label for="nome"><strong>Nome/Razão Social</strong></label> &nbsp; &nbsp;
                            <input type="test" name="nome" id="nome" required></input>
                            <br></br>
                            <br></br>


                            <label for="cpf"><strong>CPF/CNPJ</strong></label> &nbsp;&nbsp;&nbsp;
                            <input type="test" name="cpf" id="cpf" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;


                            <label for="rg"><strong>RG</strong></label> &nbsp;&nbsp;&nbsp;
                            <input type="test" name="rg" id="rg" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

                            <label for="dtNasc"><strong>Data Nascimento</strong></label> &nbsp;&nbsp;&nbsp;
                            <input type="test" name="dtNasc" id="dtNasc" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br></br>
                            <br></br>

                            <label for="email"><strong>Email</strong></label> &nbsp;&nbsp;&nbsp;
                            <input type="test" name="email" id="email" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                        <div>
                            <label > <strong>Tipo Endereço</strong></label>
                            <select id="tipoEndereco">
                                <option selected disabled value=""> Selecione </option>
                                <option> Residencial </option>
                                <option> Comercial </option>
                                <option> Obra1 </option>
                                <option> Obra2 </option>
                                <option> Obra3 </option>
                            </select>
                            <br></br>
                            <br></br>
                            
                            <label for="Logradouro"><strong>Logradouro</strong></label> &nbsp;&nbsp;
                            <input type="test" name="logradouro" id="logradouro" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br></br>
                            <br></br>

                            <label for="numero"><strong>Número Imóvel</strong></label> &nbsp;
                            <input type="test" name="numero" id="numero" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           

                            <label for="complemento"><strong>Complemento</strong></label> &nbsp;&nbsp;
                            <input type="test" name="complemento" id="complemento" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label for="cidade"><strong>Cidade</strong></label> &nbsp;&nbsp;
                            <input type="test" name="cidade" id="cidade" required></input>&nbsp;&nbsp;&nbsp;&nbsp;

                            <label for="uf"><strong>UF</strong></label> &nbsp;&nbsp;
                            <input type="test" name="uf" id="uf" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label for="cep"><strong>CEP</strong></label> &nbsp;&nbsp;
                            <input type="test" name="cep" id="cep" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br></br>

                            
                        </div>   
                        
                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                                <label > <strong>Tipo telefone</strong></label>
                                <select id="tipoTelefone">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Celular </option>
                                    <option> Whatsapp </option>
                                    <option> Comercial </option>
                                    <option> Recado </option>
                                </select>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <label for="telefone"><strong>Telefone</strong></label>
                                <input type="test" name="telefone" id="telefone" required></input>
                            </div>
                            <br></br>

                            <div>
                                <label > <strong>Tipo telefone</strong></label>
                                <select id="tipoTelefone">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Celular </option>
                                    <option> Whatsapp </option>
                                    <option> Comercial </option>
                                    <option> Recado </option>
                                </select>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <label for="telefone"><strong>Telefone</strong></label>
                                <input type="test" name="telefone" id="telefone" required></input>
                            </div>
                            <br></br>

                            <div>
                                <label> <strong>Tipo telefone</strong></label>
                                <select id="tipoTelefone">
                                    <option selected disabled value=""> Selecione </option>
                                    <option> Celular </option>
                                    <option> Whatsapp </option>
                                    <option> Comercial </option>
                                    <option> Recado </option>
                                </select>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <label for="telefone"><strong>Telefone</strong></label>
                                <input type="test" name="telefone" id="telefone" required></input>
                            </div>

                        </div>
                    </fieldset>
                

                    <fieldset>
                        <div id="pessoa">
                            <label> Pessoa </label><br></br>
                            <input type="checkbox" id="fisica" name="fisica" value="fisica"></input>
                            <label for="fisica">Física</label><br></br>
                            <input type="checkbox" id="juridica" name="juridica" value="Juridica"></input>
                            <label for="juridica">Jurídica</label>

                        </div>
                    </fieldset>
                  
                    {/*}
                    <fieldset>
                        <div class="Pessoa">
                            <label> Pessoa </label><br></br>
                            <label>
                            <input type="radio" name="fisica" value="fisica"></input> Física
                            </label>
                            <br></br>
                            <label>
                            <input type="radio" name="juridica" value="Juridica"></input> Jurídica
                            </label>
                    </div>
                    </fieldset>
                */}





                    <fieldset>
                        <div id="sexo">
                            <label> Sexo </label><br></br>
                            <input type="checkbox" id="masculino" name="masculino" value="masculino"></input>
                            <label for="masculino">Masculino</label><br></br>
                            <input type="checkbox" id="feminino" name="feminino" value="feminino"></input>
                            <label for="feminino">Feminino</label>

                        </div>
                    </fieldset>

                </form>


            </div>
        </div>
    )
}
