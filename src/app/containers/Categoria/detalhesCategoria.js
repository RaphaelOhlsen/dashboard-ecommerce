import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import Inputvalor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';

class DetalhesCategoria extends Component {

  state = {
    nome: "Categoria",
    disponibilidade: "disponível",
    codigo: "categoria"
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
        { this.renderCabecalho()}
        { this.renderDados()}
      </div>
    )
  }
}

export default DetalhesCategoria;