import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const noAuth = Component => {
  class ComponentNoAuth extends React.Component {

    componentDidMount() {
      const { usuario, getUser, authorized, history } = this.props;
      getUser();
      if(authorized && usuario.role.includes('admin')) history.replace('/');
    }

    UNSAFE_componentWillUpdate(nextProps){
      const { authorized, history } = this.props;
      if(
          !authorized 
          && nextProps.authorized 
          && nextProps.usuario.role.includes('admin')
        ) { history.replace('/'); }
    }

    render(){
      return (
        <div>
          <Component {...this.props } />
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    authorized: state.auth.authorized,
    usuario: state.auth.usuario
  });

  return connect(mapStateToProps, actions)(ComponentNoAuth);
}

export default noAuth;