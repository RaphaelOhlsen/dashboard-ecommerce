import React, { Component } from 'react';

import '../styles.css'

import Variacoes from "./variacoes";
import OpcaoVariacao from './opcaoVariacao';

class DetalhesVariacoes extends Component {
  render() {
    return (
      <div className="Detalhes-variacoes flex">
        <div className="Variacoes Card flex-1">
          <Variacoes />
        </div>
        <div className="Card flex-8">
          <OpcaoVariacao />
        </div>  
      </div>
    )
  }
}

export default DetalhesVariacoes;