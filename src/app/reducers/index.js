import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import pedidoReducer from './pedido_reducer';
import clienteReducer from './cliente_reducers';
import categoriaReducer from './categoria_reducer';


const reducers = combineReducers({
  auth: authReducer,
  pedido: pedidoReducer,
  cliente: clienteReducer,
  categoria: categoriaReducer
});

export default reducers;