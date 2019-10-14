import React from 'react';

export default ({ value, name, opcoes, onChange }) => (
  <div>
    <select value={ value } name={ name } onChange={ onChange}>
      {
        opcoes.map((opcao, idx) => (
          <option key={idx} value={opcao.value}>{opcao.label}</option>
        ))
      }
    </select>
  </div>
  
)

