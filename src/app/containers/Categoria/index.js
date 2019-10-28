import React, { Component } from 'react';

import './styles.css';

import DetalhesCategoria from './detalhesCategoria';
import ListaDeProdutos from './listaDeProdutos';

class Categoria extends Component {

  componentDidMount(){
    const { usuario } = this.props;
    const { id } = this.props.match.params;
    if(!usuario || !id) return null;
    this.props.getCategoria(id, usuario.loja)
  }

  componentWillUnmount(){
    this.props.limparCategoria();
  }

  render() {
    return (
      <div className="Categoria">
        <div className="Card">
          <div>
            <DetalhesCategoria history={this.history} />
          </div>
          <div>
            <ListaDeProdutos />
          </div>
        </div>
      </div>
    )
  }
}

export default Categoria;