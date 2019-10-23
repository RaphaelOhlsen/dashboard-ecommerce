import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import {
  GET_PEDIDOS,
  GET_PEDIDO,
  LIMPAR_PEDIDO,
  CANCELAR_PEDIDO
} from './types';

export const getPedidos = (atual, limit, loja) => {
  return function(dispatch){
    axios.get(`${api}/${versao}/api/pedidos/admin?offset=${atual}&limit=${limit}&loja=${loja}`, getHeaders())
    .then(response => { dispatch({ type: GET_PEDIDOS, payload: response.data })})
    .catch(errorHandling)
  }
}

export const getPedidosPesquisa = (termo, atual, limit, loja) => {
  return function(dispatch){
    axios.get(`${api}/${versao}/api/clientes/search/${termo}/pedidos?offset=${atual}&limit=${limit}&loja=${loja}`, getHeaders())
    .then(response => { dispatch({ type: GET_PEDIDOS, payload: response.data })})
    .catch(errorHandling)
  }
}

export const getPedido = (id, loja) => {
  return function(dispatch){
    axios.get(`${api}/${versao}/api/pedidos/admin/${id}?loja=${loja}`, getHeaders())
    .then(response => dispatch({ type: GET_PEDIDO, payload: response.data }))
    .catch(errorHandling);
  }
}

export const cancelarPedido = (id, loja, cb) => {
  return function(dispatch){
    axios.delete(`${api}/${versao}/api/pedidos/admin/${id}?loja=${loja}`, getHeaders())
    .then(response => {
      dispatch({ type: CANCELAR_PEDIDO, payload: response.data });
      cb(null);
    })
    .catch(e => cb(errorHandling(e)));
  }
}

export const limparPedido = () => ({ type: LIMPAR_PEDIDO });

export const setNovoStatusPagamento = (status, id, IdPedido, loja, cb) => {
  return function(dispatch){
    axios.put(
      `${api}/${versao}/api/pagamentos/${id}?loja=${loja}&pedido=${IdPedido}`,
      { status},
      getHeaders()
    )
    .then(response => {
      dispatch(getPedido(IdPedido,loja));
      cb(null);
    })
    .catch(e => cb(errorHandling(e)));
  }
} 

export const setNovoStatusEntrega = ({status, codigoRastreamento}, id, IdPedido, loja, cb) => {
  return function(dispatch){
    axios.put(
      `${api}/${versao}/api/entregas/${id}?loja=${loja}&pedido=${IdPedido}`,
      { status, codigoRastreamento },
      getHeaders()
    )
    .then(response => {
      dispatch(getPedido(IdPedido,loja));
      cb(null);
    })
    .catch(e => cb(errorHandling(e)));
  }
} 