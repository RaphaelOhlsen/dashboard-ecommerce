import React, { Component } from 'react';

import Button from '../../components/Button/Simples';

import './InputValor.css';

class Inputvalor extends Component {
  state = {
    value: this.props.value,
    form: false
  }

  onChange = (ev) => this.setState({ value: ev.target.value });
  toggleForm = () => this.setState({ form: !this.state.form, value: this.props.value });

  handleSubmit(value) {
    this.props.handleSubmit(value);
    this.toggleForm();
  }

  renderForm(){
    const { value } = this.state;
    return (
      <div className="Input-Valor flex input-valor-open">
        <div>
          <input 
            value={value}
            onChange={this.onChange}
            name={this.props.name}
            type={ this.props.type || "text" } />
          />
        </div>
        <div className="flex flex-center">
          <Button 
            type="success button-small"
            onClick={() => this.handleSubmit(value)}
            label={ <i className="fas fa-check" /> }
          />
          <Button 
            type="danger button-small"
            onClick={this.toggleForm}
            label={ <i className="fas fa-times" /> }
          />
        </div>
      </div>
      
    )
  }

  renderValue(){
    const { value } = this.props;
    return (
      <div className="Input-Valor" onClick={() => this.toggleForm()}>
        <span className={this.props.noStyle ? "input-nostyle" : "input"}>{value}</span>
          <Button 
            type="warning button-small"
            label={ <i className="fas fa-edit" /> }
          />
      </div>
    )
  }

  render() {
    const { form } = this.state;
    return form ? this.renderForm() : this.renderValue();
  }
}

export default Inputvalor;