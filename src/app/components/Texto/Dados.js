import React from 'react';
import './Dados.css'

export const TextoDados = (({ chave, valor }) => (
  <div className="Texto-Dados">
    <strong className="flex flex-center">{chave}:&nbsp;</strong>
    <span className="flex flex-center">{valor}</span>
  </div>
));

