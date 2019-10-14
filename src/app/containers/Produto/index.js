import React, { Component } from 'react';

import "./styles.css";

import DetalhesProduto from "./detalhesProduto";
// import DetalhesVariacoes from "./detalhesVariacoes";

class Produto extends Component {
  render() {
    return (
      <div className="Produto">
        <div className="Card">
          <DetalhesProduto />
        </div>
        {/* <div className="Card">
          <DetalhesVariacoes />
        </div> */}
      </div>
    )
  }
}

export default Produto;