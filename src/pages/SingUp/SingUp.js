import React, { Component } from "react";
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Spinner from '../../components/Spinner/Spinner';
import logo from "../../images/logo.png";
import * as actionCreators from '../../store/actions/authenticationActions';
import "./SingUp.css";


const MySwal = withReactContent(Swal)

class SingUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: this.props.isUserLoggedIn,
      user: "",
      password: ""
    };
  }
  componentDidUpdate() {
    if (this.state.isUserLoggedIn)
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

          <h5 className="mb-3 font-weight-normal">Crea Tu cuenta </h5>
          <h6 className="mb-3 font-weight-normal">Para crear una cuenta ingresa tu correo  y una contraseña </h6>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope" ></i> </span>
            </div>
            <input type="text" className="form-control" placeholder="Correo"
              value={this.state.user} onChange={(e => this.setState({ user: e.target.value }))} />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><i className="fa fa-key"></i> </span>
            </div>
            <input type="password" className="form-control" placeholder="Contraseña"
              value={this.state.password} onChange={(e => this.setState({ password: e.target.value }))} />
          </div>
          {this.renderSubmitButton()}
          {(this.props.location.search).includes("logout") ? <div className="alert alert-warning mt-3" role="alert">Has cerrado sesion satisfactoriamente!</div> : ""}
        </div>
      </div>
    );
  }

  renderSubmitButton = () => {
    let content = <button className="btn btn-md btn-success btn-block" onClick={this.singUp} >Crear cuenta</button>;
    if (this.props.loadingAuth)
      content = <Spinner />
    return content;
  }
  singUp = () => {
    const userData = {
      email: this.state.user,
      password: this.state.password
    };
    this.props.onUserSignUp(userData, () => {
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
    onUserSignUp: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
    afterErrorShow: () => dispatch(actionCreators.cleanError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
