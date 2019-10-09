import React, { Component } from 'react';
import moment from 'moment';

import './index.css';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';


class Pedidos extends Component {

  state = {
    pesquisa: "",
    atual: 0
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  changeNumeroAtual = (atual) => this.setState({ atual });

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
            onChange = { (ev) => this.onChangePesquisa(ev)}
            onClick={() => alert('Pesquisar')}
          />
          <br />
          <Tabela 
            cabecalho={["Cliente", "Valor Total", "Data", "Situacao"]}
            dados={dados}  
          />
          <Paginacao 
            atual={this.state.atual}
            total={120} 
            limite={20} 
            onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
          />
        </div>
        
      </div>
    )
  }
}

export default Pedidos;