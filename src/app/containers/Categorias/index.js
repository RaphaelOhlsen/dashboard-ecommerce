import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../actions/categorias';

class Categorias extends Component {

  getCategorias(){
    const { usuario } =this.props;
    if(!usuario) return null;
    this.props.getCategorias(usuario.loja);
  }

  componentWillMount(){
    this.getCategorias();
  }

  componentWillUpdate(nextProps){
    if( !this.props.usuario && nextProps.usuario ) this.getCategorias();
  }

  renderBotaoNovo(){
    return (
      <Link
        className="button button-success button-small"
        to="categorias/nova"
      >
        <i style={{color: 'red'}}className="fas fa-plus"></i>
        <span>&nbsp;&nbsp;Nova Categoria</span>
      </Link>
    )
  }

  render(){
    const { categorias } = this.props;
    const dados = [];

    (categorias || []).forEach(item => {
      dados.push({
        "Categoria": item.nome,
        "Qtd. de Produtos": item.produtos.length,
        "botaoDetalhes": `/categoria/${item._id}`
      });
    });

    return (
      <div className="Categorias">
        <div className="Card">
          <Titulo tipo="h1" titulo="Categorias" />
          <br />
          { this.renderBotaoNovo() }
          <Tabela 
            cabecalho={["Categoria", "Qtd. de Produtos"]}
            dados={dados}
          />
        </div>
        
      </div>
    )
  }
}

const mapPropsToState = state => ({
  categorias: state.categoria.categorias,
  usuario: state.auth.usuario
});

export default connect(mapPropsToState, actions)(Categorias);