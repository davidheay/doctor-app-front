import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../store/actions/authenticationActions';
import "./Navbar.css";
import Option from "./Option/Option";
class Navbar extends Component {

  render() {

    return (
      <nav className="site-header fixed-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between ">
          <Link to="/" className="nav-title">
            <h4 className="pt-1 font-weight-bold">
              Doctor App
            </h4>
          </Link>
          <ul className="nav justify-content-end">
            <Option text="Inicio" destination="/" key={1} />
            <Option text="Nosotros" destination="/nosotros" key={2} />
            <Option text="Tips" destination="/recomendaciones" key={3} />
            {this.renderOptionsByAuth()}
          </ul>
        </div>
      </nav>
    )
  }
  renderOptionsByAuth() {
    if (this.props.isUserLoggedIn) {
      return [<Option text="Mis citas" destination="/citas" key={4} />,
        <button className="btn btn-sm btn-danger py-0" onClick={this.logOut} key={5} ><i className="fa fa-sign-out-alt"></i> {this.props.userName}</button>]
    } else {
      return <Option text="Iniciar sesión" destination="login" icon="sign-in-alt" key={0} />;
    }
  }
  logOut = () => {
    this.props.onLogOut();
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    userName: state.authenticationStore.userLoggedIn.userName,
  }
}

const mapDispatchToProps = dispatch => {
  return { onLogOut: () => dispatch(actionCreators.logOut()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
