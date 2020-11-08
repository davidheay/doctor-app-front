import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Spinner from '../../components/Spinner/Spinner';
import logo from "../../images/logo.png";
import * as actionCreators from '../../store/actions/authenticationActions';
import "./Login.css";


const MySwal = withReactContent(Swal)

class Login extends Component {

  state = {
    isUserLoggedIn: this.props.isUserLogged,
    user: "",
    password: ""
  };
  componentDidUpdate() {
    this.checkLoggedIn();
  }
  componentDidMount() {
    this.checkLoggedIn();
  }
  checkLoggedIn() {
    if (this.props.isUserLoggedIn)
      this.props.history.push('/');
    else if (this.props.error !== '' && !this.props.loadingAuth)
      this.showError();
  }
  showError = () => {
    MySwal.fire({
      icon: 'error',
      text: this.props.error
    }).then(() => {
      this.props.afterErrorShow();
    });
  }

  render() {
    return (
      <div className="row bg-login" >
        <div className="col-4 offset-4 card text-center d-flex align-items-center">
          <img className="mb-3 w-50" src={logo} alt="logo" />

          <h6 className="mb-3 font-weight-normal">Ingresa tus credenciales para iniciar sesión</h6>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" ></i> </span>
            </div>
            <input type="text" className="form-control" placeholder="Usuario"
              value={this.state.user} onChange={(e => this.setState({ user: e.target.value }))} />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><i className="fa fa-key"></i> </span>
            </div>
            <input type="password" className="form-control" placeholder="Contraseña"
              value={this.state.password} onChange={(e => this.setState({ password: e.target.value }))} />
          </div>
          <div className="input-group ">
            {this.renderSubmitButton()}
          </div>

        </div>
      </div>
    );
  }

  renderSubmitButton = () => {
    let content = [
      <button className="btn btn-md btn-success btn-block" onClick={this.logIn} key={1} >Iniciar sesión</button>
      , <Link to="/singUp" className="btn btn-md btn-info btn-block" key={2}>Crear cuenta</Link>];
    if (this.props.loadingAuth)
      content = <Spinner />
    return content;
  }
  logIn = () => {
    const userData = {
      email: this.state.user,
      password: this.state.password
    };
    this.props.onUserLogin(userData, () => {
      this.props.history.push('/');
    });
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    loadingAuth: state.authenticationStore.loadingAuth,
    error: state.authenticationStore.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
    afterErrorShow: () => dispatch(actionCreators.cleanError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
