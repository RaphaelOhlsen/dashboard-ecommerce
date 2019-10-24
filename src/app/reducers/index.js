import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import pedidoReducer from './pedido_reducer';
import clienteReducer from './cliente_reducers';

const reducers = combineReducers({
  auth: authReducer,
  pedido: pedidoReducer,
  cliente: clienteReducer
});

export default reducers;