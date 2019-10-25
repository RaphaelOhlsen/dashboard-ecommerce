import React, { Component } from 'react';

import './styles.css';

import DetalhesDoCliente from './detalhesDoCliente';
import DetalhesDosPedidos from './detalhesDosPedidos';

import { connect } from 'react-redux';
import * as actions from '../../actions/clientes'

class Cliente extends Component {

  componentWillMount(){
    const { usuario } = this.props;
    const { id } = this.props.match.params;
    if(!usuario) return null;
    this.props.getCliente(id, usuario.loja);
  }

  componentWillUnmount(){
    this.props.limparCliente();
  }

  render() {
    
    return (
      <div className="Cliente">
        <div className="Card">
          <DetalhesDoCliente history={this.props.history}/>
        </div>
        <div className="Sub-Card">
          <DetalhesDosPedidos id={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => ({
  usuario: state.auth.usuario
})

export default connect(mapStateToProp, actions)(Cliente);