import React from "react"


import './Caixa.css'

export default function Caixa() {
  return (

    <div class="movimento">


      <div>
        <h1 id="tit" > Caixa </h1>
      </div>

      <div class="tabelaoperacao">




        <table>

          <tr>
            <td><label>Data</label></td>
            <td><label>Operação</label></td>
            <td><label>Referência</label></td>
            <td><label>Num.Doc.Ref</label></td>
            <td><label>Cond.Pagamento</label></td>
            <td><label>Forma Pgto</label></td>
            <td><label>parcela</label></td>
            <td><label>Valor</label></td>
          </tr>
          <tr>
            <td><input type="date" id="data" name="data" /></td>
            <td>
              <select id="operacao">
                <option selected disabled value=""> Selecione </option>
                <option> Entrada </option>
                <option> Saída </option>
              </select>
            </td>
            <td>
              <select id="referencia">
                <option selected disabled value=""> Selecione </option>
                <option> RecPedido </option>
                <option> PgtoFornecedor</option>
                <option> PagtoFuncionario </option>
                <option> Deposito </option>
                <option> Sangria </option>
                <option> Outros</option>
              </select>
            </td>
            <td><input type="text" id="docRef" name="docRef" /></td>
            <td>
              <select id="condPagto">
                <option selected disabled value=""> Selecione </option>
                <option> à Vista </option>
                <option> Entrada </option>
                <option> 30 </option>
                <option> 30/60 </option>
                <option> 30/60/90 </option>
                <option> 30/60/90/120 </option>

              </select>
            </td>
            <td>
              <select id="formaOper">
                <option selected disabled value=""> Selecione </option>
                <option> Dinheiro </option>
                <option> Cheque </option>
                <option> Cartão Débito </option>
                <option> Cartão Crédito </option>
                <option> Pix </option>

              </select>
            </td>
            <td>
              <select id="parcela">
                <option selected disabled value=""> Selecione </option>
                <option> 01/01 </option>
                <option> 01/02 </option>
                <option> 02/02 </option>
                <option> 01/03 </option>
                <option> 02/03 </option>
                <option> 03/03 </option>
                <option> 01/04 </option>
                <option> 02/04 </option>
                <option> 03/04 </option>
                <option> 04/04 </option>
                <option> Todas </option>

              </select>
            </td>

            <td><input type="float" id="valor" name="valor" /></td>
          </tr>

          <tr>
            <td><input type="date" id="data" name="data" /></td>
            <td>
              <select id="operacao">
                <option selected disabled value=""> Selecione </option>
                <option> Entrada </option>
                <option> Saída </option>
              </select>
            </td>
            <td>
              <select id="referencia">
                <option selected disabled value=""> Selecione </option>
                <option> RecPedido </option>
                <option> PgtoFornecedor</option>
                <option> PagtoFuncionario </option>
                <option> Deposito </option>
                <option> Sangria </option>
                <option> Outros</option>
              </select>
            </td>
            <td><input type="text" id="docRef" name="docRef" /></td>
            <td>
              <select id="condPagto">
                <option selected disabled value=""> Selecione </option>
                <option> à Vista </option>
                <option> Entrada </option>
                <option> 30 </option>
                <option> 30/60 </option>
                <option> 30/60/90 </option>
                <option> 30/60/90/120 </option>

              </select>
            </td>
            <td>
              <select id="formaOper">
                <option selected disabled value=""> Selecione </option>
                <option> Dinheiro </option>
                <option> Cheque </option>
                <option> Cartão Débito </option>
                <option> Cartão Crédito </option>
                <option> Pix </option>

              </select>
            </td>
            <td>
              <select id="parcela">
                <option selected disabled value=""> Selecione </option>
                <option> 01/01 </option>
                <option> 01/02 </option>
                <option> 02/02 </option>
                <option> 01/03 </option>
                <option> 02/03 </option>
                <option> 03/03 </option>
                <option> 01/04 </option>
                <option> 02/04 </option>
                <option> 03/04 </option>
                <option> 04/04 </option>
                <option> Todas </option>

              </select>
            </td>

            <td><input type="float" id="valor" name="valor" /></td>
          </tr>

          <tr>
            <td><input type="date" id="data" name="data" /></td>
            <td>
              <select id="operacao">
                <option selected disabled value=""> Selecione </option>
                <option> Entrada </option>
                <option> Saída </option>
              </select>
            </td>
            <td>
              <select id="referencia">
                <option selected disabled value=""> Selecione </option>
                <option> RecPedido </option>
                <option> PgtoFornecedor</option>
                <option> PagtoFuncionario </option>
                <option> Deposito </option>
                <option> Sangria </option>
                <option> Outros</option>
              </select>
            </td>
            <td><input type="text" id="docRef" name="docRef" /></td>
            <td>
              <select id="condPagto">
                <option selected disabled value=""> Selecione </option>
                <option> à Vista </option>
                <option> Entrada </option>
                <option> 30 </option>
                <option> 30/60 </option>
                <option> 30/60/90 </option>
                <option> 30/60/90/120 </option>

              </select>
            </td>
            <td>
              <select id="formaOper">
                <option selected disabled value=""> Selecione </option>
                <option> Dinheiro </option>
                <option> Cheque </option>
                <option> Cartão Débito </option>
                <option> Cartão Crédito </option>
                <option> Pix </option>

              </select>
            </td>
            <td>
              <select id="parcela">
                <option selected disabled value=""> Selecione </option>
                <option> 01/01 </option>
                <option> 01/02 </option>
                <option> 02/02 </option>
                <option> 01/03 </option>
                <option> 02/03 </option>
                <option> 03/03 </option>
                <option> 01/04 </option>
                <option> 02/04 </option>
                <option> 03/04 </option>
                <option> 04/04 </option>
                <option> Todas </option>

              </select>
            </td>

            <td><input type="float" id="valor" name="valor" /></td>
          </tr>
        </table>
      </div>

      <div class="resumoEntrada">

        <table>

          <tr>
            <td><label>Forma Recebimento</label></td>
            <td><label>valor</label></td>

          </tr>

          <tr>
            <td><label>Dinheiro </label></td>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

          <tr>
            <td><label>Cheque </label></td>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

          <tr>
            <td><label>Cartão de Crédito </label></td>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

          <tr>
            <td><label>Cartão de débito</label></td>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

          <tr>
            <td><label>Pix </label></td>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

        </table>

      </div>


      <div class="fechamento">

        <table>
          <tr><label>Fechamento</label></tr>

          <tr>
            <label for="credito"><strong>Crédito</strong></label>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>

          <tr>
            <label for="debito"><strong>Débito</strong></label>
            <td><input type="float" id="valorT" name="valorT" /></td>
          </tr>
          <tr>
            <label for="saldo"><strong>Saldo</strong></label>
            <td><input type="float" id="saldo" name="saldo" /></td>
          </tr>

        </table>

      </div>
    </div>

  )
}

