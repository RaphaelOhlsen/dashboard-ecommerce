import React from 'react';

import './Simples.css'

const imputSimples = ({ type, label, value, onChange, error }) => (
  <div className="Input-Simples">
    { label && <label>{ label }</label> }
    { error && (<small className="small-danger">{error}</small>)} 
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      className={`${error ? "input-error" : ""}`}
    />
  </div>
);

export default imputSimples;