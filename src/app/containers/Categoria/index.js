import React, { Component } from 'react';

import './styles.css';

import DetalhesCategoria from './detalhesCategoria';
import ListaDeProdutos from './listaDeProdutos';

class Categoria extends Component {
  render() {
    return (
      <div className="Categoria">
        <div className="Card">
          <div>
            <DetalhesCategoria />
          </div>
          <div>
            {/* <ListaDeProdutos /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Categoria;