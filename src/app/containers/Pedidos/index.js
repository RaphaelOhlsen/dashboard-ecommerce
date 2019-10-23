import React, { Component } from 'react';
import moment from 'moment';

import './index.css';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

import { connect } from 'react-redux';
import * as actions from '../../actions/pedidos';
import { formatMoney } from '../../actions';

class Pedidos extends Component {

  state = {
    pesquisa: "",
    atual: 0, 
    limit: 5
  }

  getPedidos(){
    const { atual, limit, pesquisa } = this.state;
    const { usuario } = this.props;
    if(!usuario) return null;
    const loja = usuario.loja;
    if(pesquisa) this.props.getPedidosPesquisa(pesquisa, atual, limit, loja)    
    else this.props.getPedidos(atual, limit, loja);

  }

  componentDidMount(){
    this.getPedidos();
  }

  componentWillUpdate(nextProps){
    if(!this.props.usuario && nextProps.usuario) this.getPedidos();
  }

  handleSubmitPesquisa(){
    this.setState({atual: 0}, () => {
      const { atual, limit, pesquisa } = this.state;
      const { usuario } = this.props;
      if(!usuario) return null;
      const loja = usuario.loja;
      this.props.getPedidosPesquisa(pesquisa, atual, limit, loja);
    });
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  changeNumeroAtual = (atual) => {
    this.setState({ atual }, () => {
        this.getPedidos();
      });
    };

  render(){
    const { pesquisa } = this.state;
    const { pedidos } = this.props;
    const dados = [];
    (pedidos ? pedidos.docs : []).forEach((item) => {
      dados.push({
        "Cliente": item.cliente ? item.cliente.nome : "",
        "Valor Total": formatMoney(item.pagamento.valor),
        "Data": moment(item.createdAt).format("DD/MM/YYYY"),
        "Situacao": item.pagamento.status !== 'Paga' ? item.pagamento.status : item.entrega.status,
        "botaoDetalhes": `/pedidos/${item._id}`
      })
    })
    return (
      <div className="Pedidos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Pedidos" />
          <br />
          <Pesquisa 
            valor = { pesquisa }
            placeholder = {"Pesquise aqui pelo nome do cliente..."}
            onChange = { (ev) => this.onChangePesquisa(ev)}
            onClick={() => this.handleSubmitPesquisa()}
          />
          <br />
          <Tabela 
            cabecalho={["Cliente", "Valor Total", "Data", "Situacao"]}
            dados={dados}  
          />
          <Paginacao 
            atual={this.state.atual}
            total={this.props.pedidos ? this.props.pedidos.total : 0} 
            limite={this.state.limit} 
            onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
          />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pedidos: state.pedido.pedidos,
  usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Pedidos);