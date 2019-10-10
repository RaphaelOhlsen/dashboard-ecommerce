import React, { Component } from 'react';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Button from '../../components/Button/Simples';

class ResetarSenha extends Component {
  state = {
    senha: "",
    confirmarSenha: ""
  }

  onChangeInput = ( field, ev) => this.setState({ [field]: ev.target.value });

  render() {
    const { senha, confirmarSenha } = this.state;
    return (
      
      <div className="Recuperar-Senha">
        <div className="Card">
          <div className="wrap-Titulo">
            <Titulo tipo="h1" titulo="LOJA TI" />
            <p>Para reiniciar a senha, digite a nova senha e confirme no campo abaixo</p>
          </div>
          <Input 
            label="Senha" 
            type="password" 
            value={senha} 
            onChange={(ev) => this.onChangeInput("senha", ev) } 
          />
          <Input
            label="Confirmar Senha"
            value={confirmarSenha}
            type="password"
            onChange={ ev => this.onChangeInput('confirmarSenha', ev)}
          />
          <div className="wrap-button">
            <Button type="success" rota="/" label="RESETAR SENHA" /> 
          </div>
        </div>
      </div>
    )
  }
}

export default ResetarSenha;