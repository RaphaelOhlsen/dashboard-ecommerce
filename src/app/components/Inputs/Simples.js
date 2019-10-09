import React from 'react';

import './Simples.css'

const imputSimples = ({ type, label, value, onChange }) => (
  <div className="Input-Simples">
    { label && <label>{ label }</label> } 
    <input type={type} value={value} onChange={onChange} />
  </div>
);

export default imputSimples;