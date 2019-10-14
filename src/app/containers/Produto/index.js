import React, { Component } from 'react';

import "./styles.css";

import DetalhesProduto from "./detalhesProduto";
import DetalhesVariacoes from "./detalhesVariacoes";

class Produto extends Component {
  render() {
    return (
      <div className="Produto">
        <div className="Card DetalhesProduto">
          <DetalhesProduto />
        </div>
        <div className="DetalhesVariacoes">
          <DetalhesVariacoes />
        </div>
      </div>
    )
  }
}

export default Produto;