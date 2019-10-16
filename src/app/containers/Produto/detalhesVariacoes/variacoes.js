import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../../components/Texto/Titulo';

class Variacoes extends Component {
  state = {
    variacaoSelecionada: "C8K90PFD",
    variacoes: [
      { nome:"P", id:"C8K90PFD"},
      { nome:"M", id:"T67HKPCX"},
    ]
  }
  render() {
    const { variacoes, variacaoSelecionada } = this.state;
    return (
      <div className="Variacoes flex vertical flex-center">
        <Titulo tipo="h2" titulo="Variações" />
        {
          variacoes.map((item, idx) => (
            <div
              onClick={() => this.setState({ variacaoSelecionada: item.id })}
              key={idx} 
              className={`variacao-item ${ variacaoSelecionada === item.id ? "variacao-item-ativa" : ""}`}
            >
              <span>{item.nome}</span>
            </div>
          ))
        }
      </div>
    )
  }
} 

export default Variacoes;