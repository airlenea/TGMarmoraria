import React from "react"




import './FichaTecnica.css'


export default function FichaTecnica() {
    return (
        <div>
            <div class="fichaTecnica">
                <div>
                    <h1 id="titFT" >Ficha Técnica</h1>
                </div>
                <br></br>
                

                <table class="tabelaGastos">

                    <tr><label> Pedido Num</label></tr>
                    <tr><label> Peça </label></tr>

                    <tr>
                        <td><label>Gastos</label></td>
                        <td><label>Quant</label></td>
                        <td><label>ValorUnit</label></td>
                        <td><label>ValorTotal</label></td>

                    </tr>

                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>
                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>
                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>
                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>
                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>
                    <tr>
                        <td><input type="int" id="itemGasto" name="itemGasto" /></td>
                        <td><input type="int" id="quantidadeGasto" name="quantidadeGasto" /></td>
                        <td><input type="float" id="valorunitGasto" name="valorunitGasto" /></td>
                        <td><input type="float" id="valortotalGasto" name="valortotalGasto" /></td>
                    </tr>

                </table>
                <table class="tabelaChecklist">
                        
                    <tr>
                        <label>Check List</label>
                        
                    </tr>

                    <tr>
                        <td><label>Medidas Exatas</label></td>
                        <td><label> ____ </label></td>
                    </tr>
                   
                    <tr>
                        <td><label>Pias/Balcoes testados</label></td>
                        <td><label> ____ </label></td>
                    </tr>

                    <tr>
                        <td><label>Espelhos Testados</label></td>
                        <td><label> ____ </label></td>
                    </tr>

                    <tr>
                        <td><label>Cola Grossa</label></td>
                        <td><label> ____ </label></td>

                    </tr>
                        <td><label>Polimento Opaco</label></td>
                        <td><label> ____ </label></td>

                    <tr>
                        <td><label>Excesso de Cera/Gis</label></td>
                        <td><label> ____ </label></td>
                    </tr>

                    <tr>
                        <td><label>Pedras limpas</label></td>
                        <td><label> ____ </label></td>
                    </tr>

                    <tr> <label> Data __/__/__ Ass.Conferente ________</label></tr>
                   
                </table>

                <table class="tabelaEtapas">
                        <tr>
                            
                            <td><input type="text" id="etapa9" name="etapa9" /></td>
                            <td><input type="text" id="etapa8" name="etapa9"/></td>
                            <td><input type="text" id="etapa7" name="etapa9"/></td>
                        </tr>
                        <tr> 
                            <td><input type="text" id="etapa6" name="etapa6"/></td>
                            <td><input type="text" id="etapa5" name="etapa5"/></td>
                            <td><input type="text" id="etapa4" name="etapa4"/></td>
                        </tr>
                        <tr>
                            <td><input type="text" id="etapa3" name="etapa3"/></td>
                            <td><input type="text" id="etapa2" name="etapa2"/></td>
                            <td><input type="text" id="etapa1" name="etapa1"/></td>
                        </tr>
                        

                </table>

            </div>
        </div>

    )
}
