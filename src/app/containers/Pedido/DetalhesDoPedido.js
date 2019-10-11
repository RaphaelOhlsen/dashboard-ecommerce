import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo'
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import Tabela from '../../components/Tabela/Simples';

class DetalhesDoPedido extends Component {

  renderCabecalho(){
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2019" />
        </div>
        <div className="flex-1 flex flex-end">
          <Button type="danger" 
                  label="CANCELAR PEDIDO" 
                  onClick={() => alert('Cancelado')} 
          />
        </div>
      </div>
    )
  }

  renderDadosDoCliente(){
    return (
      <div className="flex-2">
        <Titulo tipo="h4" titulo="Dados do Cliente" />
        <br/>
        <TextoDados chave="Nome" valor="Cliente 1" />
        <TextoDados chave="CPF" valor="009.599.147-65" />
        <TextoDados chave="Telefone" valor="27 99876-9065" />
        <TextoDados chave="Data de Nascimento" valor="10/04/1987" />
      </div>
    )
  }

  renderDadosDeEntrega(){
    return (
      <div className="flex-2">
        <Titulo tipo="h4" titulo="Dados de Entrega" />
        <br/>
        <TextoDados chave="Endereco" valor="Rua TEste 123," />
        <TextoDados chave="Bairro" valor="Centro" />
        <TextoDados chave="Cidade" valor="Uberaba" />
        <TextoDados chave="Estado" valor="Minas Gerais" />
        <TextoDados chave="CEP" valor="38540-123" />
      </div>
    )
  }

  renderDadosDePagamento(){
    return (
      <div className="flex-3">
        <Titulo tipo="h4" titulo="Dados de Pagamento" />
        <br/>
        <TextoDados chave="Taxa de Entrega" valor="R$ 15,50 (PAC)" />
        <TextoDados chave="Valor do Pedido" valor="R$ 32,00" />
        <TextoDados chave="Valor Total" valor="R$ 47,50" />
        <TextoDados chave="Forma de Pagamento" valor="Boleto" />
      </div>
    )
  }

  renderDadosDoCarrinho(){
    const dados = [
      {
        "Produto": "Produto 1",
        "Preço Und.": "R$ 12,00",
        "Quantidade": "1",
        "Preço Total": "R$ 12,00"
      },
      {
        "Produto": "Produto 2",
        "Preço Und.": "R$ 10,00",
        "Quantidade": "2",
        "Preço Total": "R$ 20,00"
      }
    ];

    return (
      <div className="flex-3">
        <Titulo tipo="h4" titulo="Carrinho" />
        <br/>
        <Tabela 
          cabecalho={["Produto", "Preço Und.", "Quantidade", "Preço Total"]}
          dados={ dados }
        />
      </div>
    )
  }

  render(){
    return (
      <div className="Detalhes-do-Pedido">
        { this.renderCabecalho() }
        <div className="flex vertical">
          <div className="flex horizontal">
            { this.renderDadosDoCliente() }
            { this.renderDadosDoCarrinho() }
          </div>
          <div className="flex horizontal">
            { this.renderDadosDeEntrega() }
            { this.renderDadosDePagamento() }
          </div>
        </div>
        
       
      </div>
    )
  }
}

export default DetalhesDoPedido;