import React, { Component } from 'react';

import './styles.css';

import DetalhesDoCliente from './detalhesDoCliente';
// import DetalhesDosPedidos from './detalhesDosPedidos';

class Cliente extends Component {
  render() {
    return (
      <div className="Cliente">
        <div className="Card">
          <DetalhesDoCliente />
        </div>
        <div className="Sub-Card">
          {/* <DetalhesDosPedidos /> */}
        </div>
      </div>
    )
  }
}

export default Cliente;