import React from 'react';
import { Link } from 'react-router-dom';

import './Simples.css';

const TabelaSimples = ({ cabecalho, dados}) => (
  <div className="TabelaSimples">
    <table className="simples">
      <thead>
        <tr>
          { cabecalho.map((item, idx) => (<th key={idx}>{item}</th>))}
        </tr>
      </thead>
      <tbody>
        {
          dados.map((linha, idx) => (
            <tr key={idx}>
              {
                cabecalho.map((item, index) => 
                (
                  <td className={`td-${item}`} key={index}>{linha[item] || ""}</td>
                ))
              }
              { linha["botaoDetalhes"] && (
                  <td className="botao">
                    <Link to={linha["botaoDetalhes"]}>
                      <button className="button button-danger button-small">
                        DETALHES
                      </button>
                    </Link>
                  </td>
              )}
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)
export default TabelaSimples;