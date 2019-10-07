import React from 'react';

const imputSimples = ({ type, label, value, onChange }) => (
  <div className="Input-Simples">
    { label && <label>{ label }</label> } 
    <input type={type} value={value} onChange={onChange} />
  </div>
);

export default imputSimples;