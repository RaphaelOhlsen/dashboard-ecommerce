import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import BlocoImagens from '../../components/'

class DetalhesProduto extends Component {

  state = {
    nome: "Produto 1",
    disponibilidade: "disponível",
    descricao: "",
    imagens: [
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg"     
    ]
  }

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex flex-1 vertical">
          <Titulo tipo="h1" titulo={nome} />
          <Link to="/avaliacoes/iukiu908"><small>Ver Avaliações</small></Link>
        </div>
        <div className="flex flex-1 flex-end">
          <Button 
            type="success"
            label="Salvar"
            onClick={() => alert("Salvo")}
          />
        </div>
      </div>
    )
  }

  renderDados() {
    const { nome, disponibilidade, descricao  } = this.state;
    return (
      <div className="Dados-Produto">
        <TextoDados
          chave="Nome"
          valor={(
            <InputValor
              value={ nome } noStyle
              name="nome"
              onChange={(ev) => this.setState({ nome: ev.target.value })}
            />
          )}
        />
        <TextoDados
          chave="Disponibilidade"
          valor={(
            <InputSelect
              name="disponibildiade"
              onChange={(ev)=>this.setState({ disponibilidade: ev.target.value})}
              value={disponibilidade}
              opcoes={[
                {label:"Disponível", value: "disponível"},
                {label:"Indisponível", value: "indisponível"}
              ]}
            />
          )}
        />
        <TextoDados
          chave="Descrição"
          valor={(
            <textarea
              value={ descricao } 
              name={"descrição"}
              onChange={(ev) => this.setState({ descricao: ev.target.value })}
              rows="10"
              style={{ resize: "none"}}
            />
          )}
        />
      </div>
    )
  }

  renderImagens(){
    const { imagens } = this.state;
    return (
      <div className="dados-de-imagens">
        <BlocoImagens
          imagens={imagens}
          handleSubmit={() => alert("Enviado")}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="Detalhes-do-Produto">
        { this.renderCabecalho() }
        <br/>
        <div className="flex horizontal">
          <div className="flex flex-1 vertical">
            { this.renderDados() }
          </div>
          <div className="flex flex-1 vertical">
            { this.renderImagens() }
          </div>
        </div>
      </div>
    )
  }
}

export default DetalhesProduto;