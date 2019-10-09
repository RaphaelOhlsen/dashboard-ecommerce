import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const BarraTopo = () => (
  <div className="Barra-Topo">
    <div className="Link-Loja">
      <a href="/">Ver Loja</a>
    </div>
    <div className="Link-Exit">
      <Link to="logout">Sair</Link>
    </div>
  </div>
)

export default BarraTopo;