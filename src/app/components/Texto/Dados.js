import React from 'react';

export const TextoDados = (({ chave, valor }) => (
  <div className="Texto-Dados flex">
    <strong className="flex flex-center">{chave}:&nbsp;</strong>
    <span className="flex flex-center">{valor}</span>
  </div>
));

