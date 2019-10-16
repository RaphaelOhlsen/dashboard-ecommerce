import React from 'react';
import './Dados.css'

export const TextoDados = (({ chave, valor, vertical = false }) => (
  <div className={`Texto-Dados flex ${vertical ? "vertical" : "horizontal"}`}>
    <strong className={`Texto-Dados flex ${!vertical ? "flex-center" : ""}`}>{chave}:&nbsp;</strong>
    <span className={`Texto-Dados flex ${!vertical ? "flex-center" : ""}`}>{valor}</span>
  </div>
));

