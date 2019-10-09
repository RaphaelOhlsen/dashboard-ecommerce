import React from 'react';

const Titulo = ({ tipo, titulo }) => {
  switch(tipo){
    case 'h4': 
      return (<h4 className="Subtitulo">{ titulo }</h4>);
    case 'h3': 
    return (<h3 className="Titulo-Terciario">{ titulo }</h3>);
    case 'h2': 
      return (<h2 className="Titulo-Secundario">{ titulo }</h2>);
    case 'h1':
    default:
      return (<h1 className="Titulo">{ titulo }</h1>);
  }
}

export default Titulo;