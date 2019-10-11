import React, { Component } from 'react';

import Button from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';
import { TextoDados } from '../../components/Texto/Dados';
import Inputvalor from '../../components/Inputs/InputValor';

class DetalhesDoCliente extends Component {

  state = {
    nome: "Cliente 1",
    CPF: "111.222.333-44",
    telefone: "12 1234-5678",
    dataDeNascimento: "10/01/1995",
    email: "cliente1@hotmail.com",

    endereco: "Rua Teste, 123",
    bairro: "Centro",
    cidade: "Serra",
    estado: "ES",
    cep: "29078-30"
  }

  handleSubmit = (field, value) => { 
    this.setState({ [field]: value });
    alert('SALVO!');
  }

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo="Cliente 1" />
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
          chave="Nome"
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

export default DetalhesDoCliente;