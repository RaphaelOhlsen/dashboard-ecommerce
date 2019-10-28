import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import Inputvalor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import Voltar from "../../components/Links/Voltar";
import AlertGeral from '../../components/Alert/Geral'

import { connect } from 'react-redux';
import * as actions from '../../actions/categorias';

class DetalhesCategoria extends Component {

  generateStateCategoria = props => ({
    nome: props.categoria ? props.categoria.nome : "",
    disponibilidade: props.categoria 
                     ? ( props.categoria.disponibildiade ||
                         props.categoria.disponibildiade === undefined
                       ) ? "disponivel" : "indisponivel"
                     : "",
    codigo: props.categoria ? props.caegoria.codigo : ""                 
  })

  constructor(props){
    super();
    this.state = {
      ...this.generateStateCategoria(props),
      erros: {},
      aviso: null
    }
  }
  
  componentWillUpdate(nextProps){
    if(
      (!this.props.caegoria && nextProps.categoria) ||
      (
        this.props.categria &&
        nextProps.categoria &&
        this.props.caegoria.updatedAt !== nextProps.categoria.updatedAt
      )
    ) this.setState(this.generateStateCategoria(nextProps));
  }

  salvarCategoria(){
    const { usuario, categoria } = this.props;
    if(!usuario || !categoria) return null;

    this.props.updateCategoria(this.state, categoria._id, usuario.loja, error => {
      this.setState({
        aviso: {
          status: !error,
          msg: error ? error.message : "Categoria atualizada com sucesso"
        }
      });
    });
  }

  removeCategoria(){
    const { usuario, categoria } = this.props;
    if(!usuario || !categoria) return null;

    if(!window.confirm("Você realmente deseja remover essa categoria?")) return;

    this.props.updateCategoria(this.state, categoria._id, usuario.loja, error => {
      this.setState({
        aviso: {
          status: !error,
          msg: error ? error.message : "Categoria atualizada com sucesso"
        }
      });
    });
  }

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex flex-1">
          <Titulo tipo="h1" titulo={nome} />
        </div>
        <div className="flex flex-1 flex-end">
          <ButtonSimples
            onClick={()=> alert("Salvo")}
            type="success"
            label="Salvar"
          />
          <ButtonSimples
            onClick={()=> alert("Removido")}
            type="danger"
            label="Remover"
          />
        </div>
      </div>
    )
  }

  renderDados() {
    const { nome, disponibilidade, codigo } = this.state;
    return(
      <div className="flex vertical">
        <TextoDados
          chave="Código"
          valor= {(
            <Inputvalor
              name="codigo" noStyle
              value={codigo}
              handleSubmit = {(valor) => this.setState({ codigo: valor })}  
            />
          )}
        />
        <TextoDados
          chave="Nome"
          valor= {(
            <Inputvalor
              name="nome" noStyle
              value={nome}
              handleSubmit = {(valor) => this.setState({ nome: valor })}  
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
      </div>
    )
  } 

  render(){
    return (
      <div className="Detalhes-Categoria">
        <Voltar history={this.props.history} />
        <AlertGeral aviso={this.state.aviso} />
        { this.renderCabecalho()}
        { this.renderDados()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  categoria: state.categoria.categoria
});

export default connect(mapStateToProps, actions)(DetalhesCategoria);