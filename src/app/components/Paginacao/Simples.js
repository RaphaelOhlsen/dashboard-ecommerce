import React from 'react';

const Paginacao = ({atual, total, limite, onClick }) => {
  const numeroPaginas = Math.ceil(total / limite);
  return (
    <div className="Paginacao flex horizontal">
      {
        [...Array(numeroPaginas).keys()].map((numero, idx) => {
          const numeroAtualPagina = numero * limite;
          return (
            <div
              className={`paginacao-item ${numeroAtualPagina === atual ? "paginacao-item-active" : ""}`}
              onClick={() => onClick(numeroAtualPagina)}
              key={idx}
            >
              { numero + 1 }
            </div>
          );
        })
      }
    </div>
  )
};

export default Paginacao;