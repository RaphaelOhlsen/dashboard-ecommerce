import React, {Component} from 'react';

import Titulo from '../../../components/Texto/Titulo';
import Button from '../../../components/Button/Simples';
import { TextoDados } from '../../../components/Texto/Dados';
import InputSimples from '../../../components/Inputs/Simples';
import InputSelect from '../../../components/Inputs/Select';

import AlertGeral from '../../../components/Alert/Geral';

import { connect } from 'react-redux';
import * as actions from '../../../actions/variacoes';

class NovaVariacao extends Component {

  state = {
    
  }

  renderCabecalho(){
    const { nome } = this.state;
    return (
      <div className="flex horizontal">
        <div className="flex-1">
          <Titulo tipo="h3" titulo={nome ? "Variacao - " + nome: "Nova Variacao"} />
        </div>
        <div className="flex-1 flex flex-end">
          <Button type="success" onClick={() => this.salvarVariacao()} label="Salvar" />
        </div>
      </div>
    )
  }
  render(){
    return(
      <div className="Nova-Variacao">
        {this.renderCabecalho()}
        <AlertGeral aviso={this.state.aviso}/>
        <br/>
        <div className="flex horizontal">
          <div className="flex-3">
            { this.renderDadosCadastrais()}
          </div>
          <div className="flex-1"></div>
          <div className="flex-3">
            { this.renderDadosEnvio()}
          </div>
        </div>
      </div>
    

    )
  }
}

const mapStateToProps = state =>({
  usuario: state.auth.usuario,
  produto: state.produto.produto,
})

export default connect(mapStateToProps, actions)(NovaVariacao)
