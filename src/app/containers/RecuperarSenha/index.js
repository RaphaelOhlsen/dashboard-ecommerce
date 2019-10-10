import React, { Component } from 'react';

import './styles.css'

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Button from '../../components/Button/Simples';

class RecuperarSenha extends Component {
  state = {
    email:""
  }

  onChangeInput = ( field, ev) => this.setState({ [field]: ev.target.value });
  
  render() {
    const { email } = this.state
    return (
      <div className="Recuperar-Senha">
        <div className="Card">
          <div className="wrap-Titulo">
            <Titulo tipo="h1" titulo="LOJA TI" />
            <p>Para reinicar sua senha, digite seu email abaixo</p>
            <p>Enviaremos um link, acesse e entre com um nova senha</p>
          </div>
          <Input
            label="E-mail"
            value={email}
            type="email"
            onChange={ ev => this.onChangeInput('email', ev)}
          />
          <div className="wrap-button">
            <Button type="success" rota="/" label="ENTRAR" /> 
          </div>
        </div>
        
      </div>
    )
  }
}

export default RecuperarSenha;