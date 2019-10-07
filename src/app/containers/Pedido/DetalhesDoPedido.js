import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo'
import Button from '../../components/Button/Simples';

class DetalhesDoPedido extends Component {

  renderCabecalho(){
    return (
      <div>
        <div>
          <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2019" />
        </div>
        <div>
          <Button type="danger" 
                  label="CANCELAR PEDIDO" 
                  onClick={() => alert('Cancelado')} 
          />
        </div>
        
      </div>
    )
  }

  render(){
    return (
      <div className="Detalhes-do-Pedido">
        { this.renderCabecalho() }
      </div>
    )
  }
}

export default DetalhesDoPedido;