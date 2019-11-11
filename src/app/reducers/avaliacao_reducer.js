import {
  GET_AVALIACOES,
  GET_AVALIACAO,
  LIMPAR_AVALIACAO,
  REMOVE_AVALIACAO
} from '../actions/types';

export default (state = {}, actino) => {
  switch(actino.type){
    case GET_AVALIACOES:
      return {
        ...state,
        avaliacoes: actino.payload.avaliacoes
      }
    case GET_AVALIACAO:
        return {
          ...state,
          avaliacoes: actino.payload.avaliacao
        }
    case LIMPAR_AVALIACAO:
    case REMOVE_AVALIACAO:
      return {
        ...state,
        avaliacao: null
      }
    default:
      return state;
  }
}