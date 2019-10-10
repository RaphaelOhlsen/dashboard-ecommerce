import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';

import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';


class Login extends Component {

  state = {
    email: "",
    senha: "",
    opcaoLembrar: false
  }

  onChangeInput = ( field, ev) => this.setState({ [field]: ev.target.value });
  onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  render() {
    return (
      <div className="Login">
        <div className="Card">
          <div className="wrap-Titulo">
            <Titulo tipo="h1" titulo="LOJA TI" />
            <p>Faça seu login abaixo</p>
          </div>
          <Input
            label="E-mail"
            value={this.state.email}
            type="email"
            onChange={ ev => this.onChangeInput('email', ev)}
          />
          <Input
            label="Senha"
            value={this.state.senha}
            type="password"
            onChange={ ev => this.onChangeInput('senha', ev)}
          />
          <div className="wrap-checkbox-link">
            <div className="checkbox">
              <Checkbox 
                value={this.state.opcacaoLembrar} 
                onChange={() => this.onChangeCheckbox('opcaoLembrar')}
                label="Lembrar?"
              />
            </div>
            <div className="link">
              <Link to="/recuperar-senha"><small>Esqueceu sua senha?</small></Link>
            </div>
          </div>
            <div className="wrap-button">
              <Button type="success" rota="/" label="ENTRAR" /> 
            </div>
        </div>
      </div>
      
    )
  }
}

export default Login;