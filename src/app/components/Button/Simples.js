import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const Button = ({ type, onClick, label }) => (
    <button onClick={onClick} className={`button button-${type || 'default'}`} >
      { label }
    </button>
)

const buttonSimples = ({ type, rota, label, onClick }) => {
  if(rota)
    return (
      <Link to={rota}>
        <Button type={type} onClick={onClick} label={label} />
      </Link>
    )

  return <Button type={type} onClick={onClick} label={label} />
  
} 

export default buttonSimples;