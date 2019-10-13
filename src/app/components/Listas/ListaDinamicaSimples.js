import React, { Component } from 'react';

import Button from '../Button/Simples';
import InputSimples from '../Inputs/Simples';

import './styles.css';

class ListaDinamicaSimples extends Component {
  state = {
    texto: ""
  }

  onChangeInput = (ev) => this.setState({ texto: ev.target.value });

  onAdd() {
    const { texto } = this.state;
    this.props.onAdd(texto);
    this.setState({ texto: ""});
  }

  render() {
    const { dados, onRemove } = this.props;
    const { texto } = this.state;
    return (
      <div className="flex-vertical">
        {
          dados.map((item, idx) => (
            <div key={idx} className="flex horizontal">
              <div className="item">
                <span>{item}</span>
              </div>
              {
                onRemove &&
                (
                  <div className="flex-1 flex flex-center">
                    <Button 
                      type="danger" 
                      onClick={() => onRemove(idx)} 
                      label=" - "
                    />
                  </div>
                )
              }
            </div>
          ))
        }
        <div className="flex flex-center">
          <div className="flex">
            <InputSimples
              type="text"
              value={texto}
              onChange={this.onChangeInput} 
            />
          </div>
          <div className="flex flex-center">
            <Button 
              type="success button-small" 
              onClick={() => this.onAdd(texto)} 
              label=" + "
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ListaDinamicaSimples; 
