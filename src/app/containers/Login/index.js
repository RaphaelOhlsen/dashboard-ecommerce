import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';


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
        <div className="card">
          <Titulo tipo="h1" titulo="LOJA TI" />
          <p>Faça seu login abaixo</p>

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

          <div>
            <div>
              <Checkbox 
                value={this.state.opcacaoLembrar} 
                onChange={() => this.onChangeCheckbox('opcaoLembrar')}
                label="Lembrar?"
              />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Login;