import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Clientes extends Component {

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
        "E-mail": "cliente1@gmail.com",
        "Telefone": "27993162448",
        "CPF": "123.456.789-01",
        "botaoDetalhes": "/cliente/1"
      },
      {
        "Cliente": "Cliente 2",
        "E-mail": "client21@gmail.com",
        "Telefone": "27993162448",
        "CPF": "12345678901",
        "botaoDetalhes": "/cliente/2"
      },
      {
        "Cliente": "Cliente 3",
        "E-mail": "cliente3@gmail.com",
        "Telefone": "27993162448",
        "CPF": "12345678901",
        "botaoDetalhes": "/cliente/3"
      }
    ]
    return (
      <div className="Clientes">
        <div className="Card">
          <Titulo tipo="h1" titulo="Clientes" />
          <br />
          <Pesquisa 
            valor = { pesquisa }
            placeholder = {"Pesquise aqui pelo nome do cliente..."}
            onChange = { (ev) => this.onChangePesquisa(ev)}
            onClick={() => alert('Pesquisar')}
          />
          <br />
          <Tabela 
            cabecalho={["Cliente", "E-mail", "Telefone", "CPF"]}
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

export default Clientes;