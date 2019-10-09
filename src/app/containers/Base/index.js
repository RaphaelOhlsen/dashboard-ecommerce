import React from 'react';

import './index.css';

import BarraTopo from './BarraTopo';
import Menu from './Menu';

class DashBoard extends React.Component {
  render(){
    return (
      <div className="flex horizontal full-height">
        <div className="flex vertical">
          <Menu history={this.props.history}/>
        </div>
        <div className="flex vertical full-width">
          <div className="flex horizontal">
            <BarraTopo />
          </div>
          <main className="">
            { this.props.children }
          </main>
        </div>
      </div>
    )
  }
}

export default DashBoard;