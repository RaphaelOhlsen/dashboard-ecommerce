import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputSelect from '../../components/Inputs/Select';
import InputSimples from '../../components/Inputs/Simples';
import Voltar from '../../components/Links/Voltar';
import AlertGeral from '../../components/Alert/Geral';

import { connect } from 'react-redux';
import * as actionsProdutos from '../../actions/produtos';
import * as actionsCategorias from '../../actions/categorias';

class novoProduto extends Component {
  
  state = {
    nome: "",
    descricao: "",
    categoria: "",
    preco: 0,
    promocao: 0,
    sku: "",
    aviso: null,
    erros: {}
  }

  getCategorias(props){
    const { usuario, getCategorias } = props;
    if(usuario) getCategorias(usuario.loja);
  }

  componentDidMount(){
    this.getCategorias(this.props);
  }

  componentWillUpdate(nextProps){
    if(!this.props.usuario && nextProps.usuario ) this.getCategorias(nextProps);
  }

  validade(){
    const { nome, descricao, categoria, preco, sku } = this.state;
    const erros = {};

    if(!nome) erros.nome = "Preencha aqui com o nome do produto";
    if(!descricao) erros.descricao = "Preencha aqui com a descriçao do produto";
    if(!categoria) erros.categoria = "Preencha aqui com a categoria do produto";
    if(!preco) erros.preco = "Preencha aqui com o preço do produto";
    if(!sku) erros.sku = "Preencha aqui com o sku do produto";

    this.setState({ erros });
    return !( Object.keys(erros).length > 0 );
  }

  salvarProduto(){
    const { usuario, salvarProduto } = this.props;
    if(!usuario) return null;
    if(!this.validade()) return null;
    salvarProduto(this.state, usuario.loja, error => {
      this.setState({ aviso: { status: !error, msg: error ? error.message: "Produto criado com sucesso"}});
    })
  }

  renderCabecalho(){
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex flex-1 vertical">
          <Titulo tipo="h1" titulo={nome || "Novo Produto"} />
        </div>
        <div className="flex flex-1 flex-end">
          <Button 
            type="success"
            label="Salvar"
            onClick={() => this.salvarProduto()}
          />
        </div>
      </div>
    )
  }

  onChangeInput = (field, value) => this.setState({[field]: value}, () => this.validade());

  renderDados(){
    const { nome, descricao, categoria, preco, promocao, sku, erros} = this.state;
    const { categorias } = this.props;
    return (
      <div className="Dados-Produto">
        <InputSimples 
          name="nome"
          label="Nome:"
          value={nome}
          error={erros.nome}
          onChange={ev => this.onChangeInput("nome", ev.target.value)}
        />
        <br/>
        <TextoDados 
          chave="Categoria"
          valor={(
            <InputSelect 
              name="categoria"
              onChange={ev => this.onChangeInput("categoria", ev.target.value)}
              value={categoria}
              error={erros.categoria}
              opcoes={[
                { label: "Selecionar...", value: ""},
                ...(categorias || []).map(item => ({ label: item.nome, value: item._id}))
              ]}
            />
          )}
        />
        <br/>
        <TextoDados 
          chave="Descricao"
          vertical
          valor={(
           <div>
            <textarea 
              name={'descricao'}
              onChange={ev => this.onChangeInput("descricao", ev.target.value)}
              value={descricao}
              rows="10"
              style={{ resize: "none" }}
            />
            { erros.descricao && (<small className="small-danger">{erros.descricao}</small>)}
           </div>
          )}
        />
        <InputSimples 
          name="preco"
          label="Preço:"
          type="number"
          value={preco}
          error={erros.preco}
          onChange={ev => this.onChangeInput("preco", ev.target.value)}
        />
        <InputSimples 
          name="promocao"
          label="Valor em Promoção:"
          type="number"
          value={promocao}
          error={erros.promocao}
          onChange={ev => this.onChangeInput("promocao", ev.target.value)}
        />
        <InputSimples 
          name="sku"
          label="SKU:"
          value={sku}
          error={erros.sku}
          onChange={ev => this.onChangeInput("sku", ev.target.value)}
        />
      </div>
    )
  }
  
  render(){
    return (
      <div className="Novo-Produto full-width">
      <div className="Card">
        <Voltar history={this.props.history} />
        { this.renderCabecalho()}
        <AlertGeral aviso={this.state.aviso} />
        <br/>
        <div className="flex horizontal">
          <div className="flex flex-1 vertical">
            { this.renderDados() }
          </div>
          <div className="flex flex-1 vertical"></div>
        </div>
      </div>
    </div>
    )
    
  }
}

const MapStateToProps = state => ({
  produto: state.produto.produto,
  categorias: state.categoria.categorias,
  usuario: state.auth.usuario
})

export default connect(MapStateToProps, {...actionsProdutos, ...actionsCategorias})(novoProduto);