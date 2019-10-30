import React, { Component } from 'react';

import './styles.css';

import { Link } from "react-router-dom";

import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import BlocoImagens from '../../components/Imagens/Bloco';
import Voltar from "../../components/Links/Voltar";

import { connect } from 'react-redux';
import * as actions from '../../actions/produtos';
import AlertGeral from '../../components/Alert/Geral';

class DetalhesProduto extends Component {

  generateStateProduto = props => ({
    nome: props.produto ? props.produto.titulo : "",
    disponibildiade: props.produto ? (props.produto.disponilidade ? "disponivel" : "indisponível") : "",
    descricao: props.produto ? props.produto.descricao : "",
    categoria: props.produto ? props.produto.categoria : "",
    fotos: props.produto ? props.produto.fotos : "",
    preco: props.produto ? props.produto.preco : "",
    promocao: props.produto ? props.produto.promocao : "",
    sku: props.produto ? props.produto.sku : ""
  });

  constructor(props){
    super();
    this.state = {
      ...this.generateStateProduto(props),
      aviso: null,
      erros: {}
    }
  }

  componentWillUpdate(nextProps){
    if(
        (!this.props.produto && nextProps.produto) ||
        (this.props.produto && nextProps.produto &&
          this.props.produto.updatedAt !== nextProps.produto.updatedAt)
    ) this.setState(this.generateStateProduto(nextProps));
  }

  updateProduto(){
    const { usuario, produto, updateProduto } = this.props;
    if(!usuario || !produto || !this.validade()) return null;
    updateProduto(this.state, produto._id, usuario.loja, error => {
      this.setState({
        aviso: { 
          status: !error,
          msg: error ? error.message : "Produto atualizado com sucesso"
        }
      });
    });
  }

  renderCabecalho() {
    const { nome } = this.state;
    const { produto } = this.props;
    return (
      <div className="flex">
        <div className="flex flex-1 vertical">
          <Titulo tipo="h1" titulo={nome} />
          { produto && <Link to={`/avaliacoes/${produto._id}`}><small>Ver Avaliações</small></Link>}
        </div>
        <div className="flex flex-1 flex-end">
          <Button 
            type="success"
            label="Salvar"
            onClick={() => this.updateProduto()}
          />
        </div>
      </div>
    )
  }

  renderDados() {
    const { nome, disponibilidade, descricao  } = this.state;
    return (
      <div className="Dados-Produto">
        <TextoDados
          chave="Nome"
          valor={(
            <InputValor
              value={ nome } noStyle
              name="nome"
              handleSubmit={(valor) => this.setState({ nome: valor })}
            />
          )}
        />
        <TextoDados
          chave="Disponibilidade"
          valor={(
            <InputSelect
              name="disponibildiade"
              onChange={(ev)=>this.setState({ disponibilidade: ev.target.value})}
              value={disponibilidade}
              opcoes={[
                {label:"Disponível", value: "disponível"},
                {label:"Indisponível", value: "indisponível"}
              ]}
            />
          )}
        />
        <TextoDados
          chave="Descrição"
          vertical
          valor={(
            <textarea
              value={ descricao } 
              name={"descrição"}
              onChange={(ev) => this.setState({ descricao: ev.target.value })}
              rows="10"
              style={{ resize: "none"}}
            />
          )}
        />
      </div>
    )
  }

  onRemove = id => {
    const { imagens } = this.state;
    this.setState({ imagens: imagens.filter((i, idx) => idx !== id) });
  }

  renderImagens(){
    const { imagens } = this.state;
    return (
      <div className="dados-de-imagens">
        <BlocoImagens
          imagens={imagens}
          handleSubmit={() => alert("Enviado")}
          onRemove={this.onRemove}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="Detalhes-do-Produto">
        <Voltar history={this.props.history} />
        { this.renderCabecalho() }
        <AlertGeral aviso={this.state.aviso} />
        <br/>
        <div className="flex horizontal">
          <div className="flex flex-1 vertical">
            { this.renderDados() }
          </div>
          <div className="flex flex-1 vertical">
            { this.renderImagens() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  produto: state.produto.produto, 
  categorias: state.categoria.categorias
})

export default connect(mapStateToProps, actions)(DetalhesProduto);