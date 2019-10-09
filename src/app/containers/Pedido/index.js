import React, { Component } from 'react';

import './index.css';

import DetalhesDoPedido from './DetalhesDoPedido';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPagamento from './DetalhesDoPagamento';

import Voltar from '../../components/Links/Voltar';
 
class Pedido extends Component {
  render(){
    return (
      <div className="Pedidos">
        <div className="DetalhesDoPedido">
          <Voltar path="/" />
          <DetalhesDoPedido />
        </div>
        <div className="flex horizontal">
          <div className="DetalhesDaEntrega">
            <DetalhesDaEntrega />
          </div>
          <div className="DetalhesDoPagamento">
            <DetalhesDoPagamento />
          </div>
        </div>
      </div>
    )
  }
}

export default Pedido;