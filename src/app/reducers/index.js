import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import pedidoReducer from './pedido_reducer';
import clienteReducer from './cliente_reducers';
import categoriaReducer from './categoria_reducer';
import produtoReducer from './produto_reducer';
import variacaoReducer from './variacao_reducer';
import avaliacaoReducer from './avaliacao_reducer';


const reducers = combineReducers({
  auth: authReducer,
  pedido: pedidoReducer,
  cliente: clienteReducer,
  categoria: categoriaReducer,
  produto: produtoReducer,
  variacao: variacaoReducer,
  avaliacao: avaliacaoReducer
});

export default reducers;