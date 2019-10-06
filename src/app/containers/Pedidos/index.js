import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';


class Pedidos extends Component {

  state = {
    pesquisa: ""
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  render(){
    const { pesquisa } = this.state;
    const dados = [
      {
        "Cliente": "Cliente 1",
        "Valor Total": 89.90,
        "Data": moment().toISOString(),
        "Situacao": "Aguardando Pagamento",
        "botaoDetalhes": "/pedido/89809841"
      },
      {
        "Cliente": "Cliente 2",
        "Valor Total": 105.90,
        "Data": moment().toISOString(),
        "Situacao": "Aguardando Pagamento",
        "botaoDetalhes": "/pedido/K9CTLKLKJASD"
      },
      {
        "Cliente": "Cliente 3",
        "Valor Total": 126.7,
        "Data": moment().toISOString(),
        "Situacao": "Pagamanento Concluido",
        "botaoDetalhes": "/pedido/8SDFSDF9857"
      }
    ]
    return (
      <div className="Pedidos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Pedidos" />
          <br />
          <Pesquisa 
            valor = { pesquisa }
            placeholder = {"Pesquise aqui pelo nome do cliente..."}
            onChange = { (ev) => this.onChangePesquisa(ev)} />
          />
          <br />
          <Tabela 
            cabecalho={["Cliente", "Valor Total", "Data", "Situacao"]}
            dados={dados}  
          />
          <Paginacao />
        </div>
        
      </div>
    )
  }
}

export default Pedidos;