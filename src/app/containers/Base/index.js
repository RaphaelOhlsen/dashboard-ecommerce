import React from 'react';

class DashBoard extends React.Component {
  render(){
    return (
      <div className="flex horizontal">
        <div className="flex vertical">
          <p>Menu</p>
        </div>
        <div className="flex vertical">
          <div className="flex horizontal">
            Barra Topo
          </div>
          <div className="flex">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard;