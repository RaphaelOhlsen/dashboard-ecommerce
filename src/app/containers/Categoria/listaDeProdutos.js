import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class ListaDeProdutos extends Component {
  state = {
    pesquisa: "",
    atual: 0
  }

  render() {
    const { pesquisa } = this.state;
    
    const dados = [
      {
        "Produto": "Mouse 1",
        "Estoque": 20,
        "Disponibilidade":"sim",
        "botaoDetalhes": "/produto/897JKHSD98"
      },
      {
        "Produto": "Mouse 2",
        "Estoque": 20,
        "Disponibilidade":"não",
        "botaoDetalhes": "/produto/324234fdsd"
      },{
        "Produto": "Mouse 3",
        "Estoque": 20,
        "Disponibilidade":"sim",
        "botaoDetalhes": "/produto/234234fdsf"
      }  
    ]

    return (
      <div className="ListaDeProdutos"> 
        <br/><hr/><br/>
        <Titulo tipo="h3" titulo="Produtos da Categoria" />
        <br />
        <Pesquisa 
          valor = { pesquisa }
          placeholder = {"Pesquise aqui pelo nome do produto ou descrição..."}
          onChange = { (ev) => this.onChangePesquisa(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <br />
        <Tabela 
          cabecalho={["Produto", "Estoque", "Disponibilidade"]}
          dados={dados}
        />
        <Paginacao 
          atual={this.state.atual}
          total={120} 
          limite={20} 
          onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
        />
      </div>
    )
  }
}

export default ListaDeProdutos;