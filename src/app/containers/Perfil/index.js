import React, { Component } from 'react';

// import './styles.css';

import Button from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';
import {TextoDados} from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSimples from '../../components/Inputs/Simples';

class Perfil extends Component {
  
  state = {
    nome: "Usuario teste",
    email: "usuario@teste.com",
    telefone: "11 1234-4321",

    senhaAntiga: "",
    novaSenha: "",
    confirmarNovaSenha: ""
  }

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex flex-1">
          <Titulo tipo="h1" titulo="Perfil" />
        </div>
        <div className="flex flex-1 flex-end">
          <Button 
            type="success"
            onClick={() => alert("Salvo")}
            label={"Salvar"}
          />
        </div>
      </div>
    )
  }
  
  renderDadosConfiguracao() {
    const { nome, email, telefone } = this.state;
    return (
      <div className="dados-configuracao">
        <TextoDados
          chave="Nome"
          valor={(
            <InputValor 
              value={nome} name="nome" noStyle
              handleSubmit={(valor) => this.setState({ nome: valor })}
            />
          )}
        />
        <TextoDados
          chave="Email"
          valor={(
            <InputValor 
              value={email} name="email" noStyle
              handleSubmit={(valor) => this.setState({ email: valor })}
            />
          )}
        />
        <TextoDados
          chave="Telefone"
          valor={(
            <InputValor 
              value={telefone} name="email" noStyle
              handleSubmit={(valor) => this.setState({ telefone: valor })}
            />
          )}
        />
      </div>
    )
  }

  renderDadosSenha() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;
    return (
      <div className="dados-configuracao">
        <InputSimples
          type="password"
          name="senha-antiga"
          label="Senha Antiga"
          value={senhaAntiga}
          onChange ={ ev => this.setState({ senhaAntiga: ev.target.value })}
        />
        <InputSimples
          type="password"
          name="nova-senha"
          label="Nova Senha"
          value={novaSenha}
          onChange ={ ev => this.setState({ novaSenha: ev.target.value })}
        />
        <InputSimples
          type="password"
          name="confirmar-nova-senha"
          label="Confirmar Nova Senha"
          value={confirmarNovaSenha}
          onChange ={ ev => this.setState({ confirmarNovaSenha: ev.target.value })}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="Perfil GlobalWrap">
        <div className="Card">
          { this.renderCabecalho() }
          <div className="flex horizontal">
            <div className="flex-1">
              { this.renderDadosConfiguracao() }
            </div>
            <div className="flex-1">
              { this.renderDadosSenha() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Perfil;