import React, { Component } from 'react';

import moment from 'moment';

import Button from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';
import { TextoDados } from '../../components/Texto/Dados';
import Inputvalor from '../../components/Inputs/InputValor';
import Voltar from "../../components/Links/Voltar";

import { connect } from 'react-redux';
import * as actions from '../../actions/clientes';
import AlertGeral from '../../components/Alert/Geral';

class DetalhesDoCliente extends Component {

 constructor(props){
   super();
   this.state = {
     ...this.generateStateCliente(props),
     aviso: null,
     erros: {}
   }
 }

 componentWillUpdate(nextProps){
   if(
     (!this.props.cliente && nextProps.cliente) ||
     (this.props.cliente && nextProps.cliente && this.props.cliente.updatedAt !== nextProps.cliente.updatedAt)
   ) this.setState(this.generateStateCliente(nextProps));
 }

  generateStateCliente = (props) => ({
    nome: props.cliente ? props.cliente.nome : "",
    CPF: props.cliente ? props.cliente.cpf : "",
    telefone: props.cliente ? props.cliente.telefones[0] : "",
    dataDeNascimento: props.cliente ? moment(props.cliente.dataDeNascimento).format("DD/MM/YYYY") : "",
    email: props.cliente && props.cliente.usuario ? props.cliente.usuario.email : "",

    endereco: props.cliente && props.cliente.endereco ? props.cliente.endereco.local : "",
    numero: props.cliente && props.cliente.endereco ? props.cliente.endereco.numero : "",
    bairro: props.cliente && props.cliente.endereco ? props.cliente.endereco.bairro : "",
    cidade: props.cliente && props.cliente.endereco ? props.cliente.endereco.cidade : "",
    estado: props.cliente && props.cliente.endereco ? props.cliente.endereco.estado : "",
    cep: props.cliente && props.cliente.endereco ? props.cliente.endereco.CEP : "",
  })

  handleSubmit = (field, value) => { 
    this.setState({ [field]: value });
    alert('SALVO!');
  }

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo={nome} />
        </div>
        <div className="flex-1 flex flex-end">
          <Button 
            onClick={() => alert('Salvo') }
            label="Salvar"
            type="success"
          />
          <Button 
            onClick={() => alert('Removido') }
            label="Remover"
            type="danger"
          />
        </div>
      </div>
    )
  }
  
  renderDetalhesCadastro() {
    const { nome, CPF, email, telefone, dataDeNascimento } = this.state;
    return (
      <div className="Detalhes-do-Cadastro">
        <TextoDados 
          chave={"Nome"}
          valor={(
            <Inputvalor 
              name="nome" noStyle
              handleSubmit={(valor) => this.handleSubmit("nome", valor)}
              value={nome}
            />
          )}
        />
        <TextoDados 
          chave="CPF"
          valor={(
            <Inputvalor 
              name="cpf" noStyle
              handleSubmit={(valor) => this.handleSubmit("CPF", valor)}
              value={CPF}
            />
          )}
        />
        <TextoDados 
          chave="Telefone"
          valor={(
            <Inputvalor 
              name="telefone" noStyle
              handleSubmit={(valor) => this.handleSubmit("telefone", valor)}
              value={telefone}
            />
          )}
        /> 
        <TextoDados 
          chave="E-mail"
          valor={(
            <Inputvalor 
              name="email" noStyle
              handleSubmit={(valor) => this.handleSubmit("email", valor)}
              value={email}
            />
          )}
        /> 
        <TextoDados 
          chave="Data de Nascimento"
          valor={(
            <Inputvalor 
              name="datadenascimento" noStyle
              handleSubmit={(valor) => this.handleSubmit("dataDeNascimento", valor)}
              value={dataDeNascimento}
            />
          )}
        /> 
      </div>
    )
  }
  
  renderDetalhesEntrega() {
    const { endereco, bairro, cidade, estado, cep } = this.state;
    return (
      <div className="Detalhes-da-Entrega">
        <TextoDados 
          chave="Endereço"
          valor={(
            <Inputvalor 
              name="endereco" noStyle
              handleSubmit={(valor) => this.handleSubmit("endereco", valor)}
              value={endereco}
            />
          )}
        />
        <TextoDados 
          chave="Bairro"
          valor={(
            <Inputvalor 
              name="bairro" noStyle
              handleSubmit={(valor) => this.handleSubmit("bairro", valor)}
              value={bairro}
            />
          )}
        />
        <TextoDados 
          chave="Cidade"
          valor={(
            <Inputvalor 
              name="cidade" noStyle
              handleSubmit={(valor) => this.handleSubmit("cidade", valor)}
              value={cidade}
            />
          )}
        /> 
        <TextoDados 
          chave="Estado"
          valor={(
            <Inputvalor 
              name="estado" noStyle
              handleSubmit={(valor) => this.handleSubmit("estado", valor)}
              value={estado}
            />
          )}
        /> 
        <TextoDados 
          chave="CEP"
          valor={(
            <Inputvalor 
              name="cep" noStyle
              handleSubmit={(valor) => this.handleSubmit("cep", valor)}
              value={cep}
            />
          )}
        /> 
      </div>
    )
  }

  render(){
    return (
      <div className="DetalhesDoCliente">
        <Voltar path="/clientes" />
        { this.renderCabecalho() }
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">
            { this.renderDetalhesCadastro() }
          </div>
          <div className="flex-1 flex vertical">
            { this.renderDetalhesEntrega() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps =state => ({
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente
});

export default connect(mapStateToProps, actions)(DetalhesDoCliente);