import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo'
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import Tabela from '../../components/Tabela/Simples';
import AlertGeral from '../../components/Alert/Geral';

import { connect } from 'react-redux';
import moment from 'moment';
import { formatMoney } from '../../actions';
import * as actions from '../../actions/pedidos';

class DetalhesDoPedido extends Component {

  state = {
    aviso: null
  }

  cancelarPedido = () => {
    const { usuario, pedido } = this.props;
    console.log(pedido.pedido._id)
    if(!usuario && !pedido) return null
    if(window.confirm("Voce realmente deseja cancelar este pedido")){
      this.props.cancelarPedido(pedido.pedido._id, usuario.loja, (error) => {
        this.setState({
          aviso: {
            status: !error,
            msg: error ? error.message : "Pedido cancelado com sucesso!"
          }
        })
      })
    }
  }


  renderCabecalho(){
    if(!this.props.pedido) return null;
    const { pedido } = this.props.pedido
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo 
            tipo="h2" 
            titulo={`Pedido - ${pedido.cliente ? pedido.cliente.nome : ""} - ${moment(pedido.createdAt).format("DD/MM/YY")}`} 
          />
        </div>
        <div className="flex-1 flex flex-end">
          {
            pedido.cancelado 
            ? (
                <Button
                  type="danger"
                  label="CANCELADO" 
                />  
              ) 
            : (
                <Button 
                  type="danger" 
                  label="CANCELAR PEDIDO" 
                  onClick={() => this.cancelarPedido()}
                />  
            ) 
          }
        </div>
      </div>
    )
  }

  renderDadosDoCliente(){
    if(!this.props.pedido) return null;
    const { cliente } = this.props.pedido.pedido;
    return (
      <div className="flex-2">
        <Titulo tipo="h4" titulo="Dados do Cliente" />
        <br/>
        <TextoDados chave="Nome" valor={cliente ? cliente.nome : "Teste"} />
        <TextoDados chave="CPF" valor={cliente ? cliente.cpf : ""} />
        <TextoDados chave="Telefone" valor={cliente ? cliente.telefones[0] : ""} />
        <TextoDados chave="Data de Nascimento" valor={cliente ? moment(cliente.dataDeNascimento).format("DD/MM/YYYY") : ""} />
      </div>
    )
  }

  renderDadosDeEntrega(){
    if(!this.props.pedido) return null;
    const { entrega } = this.props.pedido.pedido;
    return (
      <div className="flex-2">
        <Titulo tipo="h4" titulo="Dados de Entrega" />
        <br/>
        <TextoDados chave="Endereco" valor={entrega ? entrega.endereco.local : ""} />
        <TextoDados chave="Numero" valor={entrega ? entrega.endereco.numero : ""} />
        <TextoDados chave="Bairro" valor={entrega ? entrega.endereco.bairro : ""} />
        <TextoDados chave="Cidade" valor={entrega ? entrega.endereco.cidade : ""} />
        <TextoDados chave="Estado" valor={entrega ? entrega.endereco.estado : ""} />
        <TextoDados chave="CEP" valor={entrega ? entrega.endereco.CEP : ""} />
      </div>
    )
  }

  renderDadosDePagamento(){
    if(!this.props.pedido) return null;

    const { entrega, pagamento } = this.props.pedido.pedido;
   
    if(entrega.tipo === '40010') entrega.tipo = 'PAC';
    else entrega.tipo = 'SEDEX'

    return (
      <div className="flex-3">
        <Titulo tipo="h4" titulo="Dados de Pagamento" />
        <br/>
        <TextoDados chave="Taxa de Entrega" valor={`${formatMoney(entrega.custo)} (${entrega.tipo})`} />
        <TextoDados chave="Valor do Pedido" valor={`${formatMoney( pagamento.valor - entrega.custo )}`}/>
        <TextoDados chave="Valor Total" valor={`${formatMoney( pagamento.valor )}`} />
        <TextoDados chave="Forma de Pagamento" valor={pagamento.forma} />
      </div>
    )
  }

  renderDadosDoCarrinho(){
    if(!this.props.pedido) return null;
    const { carrinho } = this.props.pedido.pedido;
    const dados = [];

    carrinho.forEach(item => {
      dados.push({
        "Produto": item.produto.titulo + " - " + item.variacao.nome,
        "Preço Und.": formatMoney(item.precoUnitario),
        "Quantidade": item.quantidade,
        "Preço Total": formatMoney(item.precoUnitario * item.quantidade)
      })
    })

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
        <AlertGeral aviso={this.state.aviso} />
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

const mapStateToProps = state => ({
  pedido: state.pedido.pedido,
  usuario: state.auth.usuario

})

export default connect(mapStateToProps, actions)(DetalhesDoPedido);