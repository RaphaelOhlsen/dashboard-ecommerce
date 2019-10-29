import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/produtos';
import { connect } from 'react-redux';

class Produtos extends Component {

  state = {
    pesquisa: "",
    atual: 0,
    limit: 5,
    ordem: "alfabetica_a-z"
  }

  getProdutos(props){
    const { atual, limit, pesquisa, ordem } = this.state;
    const { usuario }= props;
    
    if(!usuario) return null;

    if(pesquisa) props.getProdutosPesquisa(pesquisa, ordem, atual, limit, usuario.loja);
    else props.getProdutos(ordem, atual, limit, usuario.loja);
  }

  componentDidUpdate(){
    this.getProdutos(this.props);
  }

  componentWillUpdate(nextProps){
    if(!this.props.usuario && nextProps.usuario) this.getProdutos(nextProps);
  }

  handleSubmitPesquisa(){
    this.setState({ atual: 0}, () => this.getProdutos(this.props));
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  changeNumeroAtual = (atual) => this.setState({ atual }, () => this.getProdutos(this.props));

  changeOrdem = (ev) => this.setState({ ordem: ev.target.value }, () => this.getProdutos(this.props));

  render(){
    const { pesquisa, ordem } = this.state;
    const { produtos } = this.props;
    const dados = [];
    (produtos ? produtos.docs : []).forEach(item => {
      dados.push({
        "Produto": item.titulo,
        "Categoria": item.categoria ? item.categoria.nome : "",
        "Disponível": item.disponibilidade ? "sim" : "não",
        "botaoDetalhes": `/produto/${item._id}`
      })
    })

    return (
      <div className="Produtos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Produtos" />
          <br />
          <div className="flex">
            <div className="flex-3">
              <Pesquisa 
                valor = { pesquisa }
                placeholder = {"Pesquise pelo produto, descrição ou categoria"}
                onChange = { (ev) => this.onChangePesquisa(ev)}
                onClick={() => this.handleSubmitPesquisa()}
              />
            </div>
            <div className="flex vertical flex-1">
              <label>
                <small>Ordenar por</small>
              </label>
              <select value={ordem} onChange={this.changeOrdem}>
                <option value={""}>Aleatório</option>
                <option value={"alfabetica_a-z"}>Alfabética A-Z</option>
                <option value={"alfabetica_z-a"}>Alfabética Z-A</option>
                <option value={"preco-crescente"}>Preço Menor</option>
                <option value={"preco-decrescente"}>Preço Maior</option>
              </select>
            </div>
          </div>
          <br />
          <Tabela 
            cabecalho={["Produto", "Categoria", "Disponível"]}
            dados={dados}  
          />
          <Paginacao 
            atual={this.state.atual}
            total={this.props.produtos ? this.props.produtos.total : 0} 
            limite={this.state.limit} 
            onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
          />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  produtos: state.produto.produtos
});

export default connect(mapStateToProps, actions)(Produtos);