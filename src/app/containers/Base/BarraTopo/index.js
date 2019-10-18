import React from 'react';

import './styles.css';

const BarraTopo = ({handleLogout}) => (
  <div className="Barra-Topo">
    <div className="Link-Loja">
      <a href="/">Ver Loja</a>
    </div>
    <div className="Link-Exit">
     <span onClick={() => handleLogout()}>Sair</span>
    </div>
  </div>
)

export default BarraTopo;