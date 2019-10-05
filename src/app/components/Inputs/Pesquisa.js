import React from 'react';

const Pesquisa = ({ valor, onChange, placeholder}) => (
  <div>
    <input value={valor} onChange={onChange} placeholder={placeholder} />
  </div>
)

export default Pesquisa;