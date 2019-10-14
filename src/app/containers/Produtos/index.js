import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Produtos extends Component {

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
        "Produto": "Mouse 1",
        "Categoria": "acessorios",
        "Disponível": "sim",
        "botaoDetalhes": "/produtos/1asdasd99000"
      },
      {
        "Produto": "Mouse 2",
        "Categoria": "acessorios",
        "Disponível": "sim",
        "botaoDetalhes": "/produtos/1awewedd99230"
      },{
        "Produto": "Mouse 3",
        "Categoria": "acessorios",
        "Disponível": "não",
        "botaoDetalhes": "/produtos/2k8908dsdf"
      }
    ]
    return (
      <div className="Produtos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Produtos" />
          <br />
          <div className="flex">
            <div className="flex-3">
              <Pesquisa 
                valor = { pesquisa }
                placeholder = {"Pesquise pelo produto, descrição ou categoria"}
                onChange = { (ev) => this.onChangePesquisa(ev)}
                onClick={() => alert('Pesquisar')}
              />
            </div>
            <div className="flex vertical flex-1">
              <label>
                <smal>Ordenar por</smal>
              </label>
              <select defaultValue="">
                <option>Aleatório</option>
                <option value={"oaA-Z"}>Alfabética A-Z</option>
                <option value={"oaZ-A"}>Alfabética Z-A</option>
                <option value={"op-menor"}>Preço Menor</option>
                <option value={"op-maior"}>Preço Maior</option>
              </select>
            </div>
          </div>
          <br />
          <Tabela 
            cabecalho={["Produto", "Categoria", "Disponível"]}
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

export default Produtos;