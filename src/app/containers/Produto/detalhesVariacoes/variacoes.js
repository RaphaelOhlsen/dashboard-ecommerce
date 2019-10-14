import React, { Component } from 'react';


class Variacoes extends Component {
  state = {
    variacoes: [
      { none:"P", id:"C8K90PFD"},
      { none:"M", id:"T67HKPCX"},
    ]
  }
  render() {
    const { variacoes } = this.state;
    return (
      <div className="Variacoes flex vertical">
        {
          variacoes.map((item, idx) => (
            <div key={idx} className="variacao-idem">
              <span>{item.nome}</span>
            </div>
          ))
        }
      </div>
    )
  }
} 

export default Variacoes;