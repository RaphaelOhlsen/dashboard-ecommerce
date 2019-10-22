import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './styles.css';

import Titulo from '../../components/Texto/Titulo';

import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';
import Alert from '../../components/Alert/Danger';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { api, versao } from '../../config';

class Login extends Component {

  state = {
    email: "",
    senha: "",
    opcaoLembrar: true,
    erros: {}
  }

  onChangeInput = ( field, ev) => {
    this.setState({ [field]: ev.target.value });
    this.validate();
  }

  onChangeCheckbox = (field) => {
    this.setState({ [field]: !this.state[field] });
  }

  handleLogin() {
    const { email, senha: password, opcaoLembrar  } = this.state;
    if(!this.validate()) return;
    this.props.handleLogin({email, password, opcaoLembrar}, (error) => {
      // console.log(error)
      this.setState({erros: {...this.state.erros, form: error}})
      // console.log(this.state.erros.form)
    });
  }

  validate(){
    const { email, senha } = this.state;
    const erros = {};

    if(!email) erros.email = "Preencha aqui com seu email";
    if(!senha) erros.senha = "Preencha aqui com sua senha";
    this.setState({ erros });
    return !(Object.keys(erros).length > 0);
  }

  render() {
    const { email, senha, opcaoLembrar, erros } = this.state;
    return (
      <div className="Login">
        <div className="Card">
          <div className="wrap-Titulo">
            <Titulo tipo="h1" titulo="LOJA TI" />
            <p>Faça seu login abaixo</p>
          </div>
          <br/><br/>
          <Alert error={erros.form} />
          <Input
            label="E-mail"
            value={email}
            type="email"
            error={erros.email}
            onChange={ ev => this.onChangeInput('email', ev)}
          />
          <Input
            label="Senha"
            value={senha}
            type="password"
            error={erros.senha}
            onChange={ ev => this.onChangeInput('senha', ev)}
          />
          <div className="wrap-checkbox-link">
            <div className="checkbox">
              <Checkbox 
                value={opcaoLembrar}
                onChange={() => this.onChangeCheckbox('opcaoLembrar')}
                label="Lembrar?"
              />
            </div>
            <div className="link">
              {/* <Link to="/recuperar-senha"><small>Esqueceu sua senha?</small></Link> */}
              <a href={`${api}/${versao}/api/usuarios/recuperar-senha`}>
                <small>Esqueceu sua senha?</small>
              </a>
            </div>
          </div>
            <div className="wrap-button">
              <Button 
                type="success" 
                
                label="ENTRAR" 
                onClick={() => this.handleLogin()}
              /> 
            </div>
        </div>
      </div>
      
    )
  }
}

export default connect(null, actions)(Login);