import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';

import Voltar from "../../components/Links/Voltar";

class Avaliacoes extends Component {

  render(){
    const dados = [
      {
        "Cliente": "Cliente 1",
        "Data": moment().format("DD/MM/YYYY"),
        "botaoDetalhes": "/avaliacao/F9lkjqweq"
      },
      {
        "Cliente": "Cliente 2",
        "Data": moment().format("DD/MM/YYYY"),
        "botaoDetalhes": "/avaliacao/jkasd87qweq"
      },
      {
        "Cliente": "Cliente 3",
        "Data": moment().format("DD/MM/YYYY"),
        "botaoDetalhes": "/avaliacao/hjasd9qweq"
      }
    ]
    return (
      <div className="Avaliacoes GlobalWrap">
        <div className="Card">
          <Voltar path="/produto/123123" />
          <Titulo tipo="h1" titulo="Avaliações - Produto 1" />
          <br />
          <Tabela 
            cabecalho={["Cliente", "Data"]}
            dados={dados}  
          />
        </div>   
      </div>
    )
  }
}

export default Avaliacoes;