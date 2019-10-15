import React, { Component } from 'react';

import Voltar from '../../components/Links/Voltar'; 
import Button from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';

class Avaliacao extends Component {

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex flex-1 vertical">
          <Titulo tipo="h3" titulo="Avaliação - Produto 1 " />
          <Titulo tipo="h4" titulo="Cliente - Cliente 1 " />
        </div>
        <div className="flex flex-1 flex-end">
          <Button 
            type="danger"
            onClick={() => alert("deletado")}
            label="Remover"
          />
        </div>
      </div>
    )
  }

  renderMensagem() {
    return (
      <div className="Mensagem">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam 
          officiis maiores reprehenderit esse aliquam quibusdam, reiciendis 
          repudiandae. Eveniet in tempora vero veniam provident aperiam, 
          explicabo animi, culpa reiciendis labore ipsam.
        </p>
      </div>
    )
  }

  render(){
    return (
      <div className="Avaliacao GlobalWrap">
        <div className="Card">
          <Voltar path="/avaliacoes/iukiu908" />
          { this.renderCabecalho() }
          { this.renderMensagem() }
        </div>
      </div>
    )
  }
}

export default Avaliacao;