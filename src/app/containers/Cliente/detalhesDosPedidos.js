import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';


class DetalhesDosPedidos extends Component {
  
  render(){
    const dados = [
      {
        "ID": "89809841",
        "Valor Total": 89.90,
        "Data": moment().toISOString(),
        "Situacao": "Aguardando Pagamento",
        "botaoDetalhes": "/pedido/89809841"
      },
      {
        "ID": "K9CTLKLKJASD",
        "Valor Total": 105.90,
        "Data": moment().toISOString(),
        "Situacao": "Aguardando Pagamento",
        "botaoDetalhes": "/pedido/K9CTLKLKJASD"
      },
      {
        "ID": "8SDFSDF9857",
        "Valor Total": 126.7,
        "Data": moment().toISOString(),
        "Situacao": "Pagamanento Concluido",
        "botaoDetalhes": "/pedido/8SDFSDF9857"
      }
    ]
    return (
      <div className="Card">
        <Titulo tipo="h3" titulo="Pedidos Feitos" />
        <br />
        <Tabela 
          cabecalho={["ID", "Valor Total", "Data", "Situacao"]}
          dados={dados}  
        />
      </div>
    )
  }
}

export default DetalhesDosPedidos;