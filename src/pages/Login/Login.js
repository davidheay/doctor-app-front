import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Login.css";
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "eve.holt@reqres.in",
      password: "",
      error: false,
      loading: false
    };

  }
  onSubmit = (e) => {
    e.preventDefault();
    // this.props.changeGif();
    this.setState({ loading: true });
    axios.post("https://reqres.in/api/login", {
      "email": this.state.user,
      "password": this.state.password
    }).then(response => {
      const { status } = response;
      this.setState({ loading: false });
      if (status === 200) {
        // this.props.changeGif();
        this.props.setAuth(true, this.state.user);
        this.props.history.push('/');
      }
    }).catch(error => {
      this.setState({ loading: false });
      const status = error.response.status;
      if (status === 400) {
        this.setState({ error: true });
        this.props.history.push('/login?error');
      }
    })
  }
  componentDidMount() {
    if (this.props.logout) {
      this.props.setAuth(false);
      this.props.history.push('/login?logout');
    }
  }
  render() {

    return (
      <div className="row" >
        {this.state.loading ? <div className="loading"></div> : ''}
        <div className="col-4 offset-4">
          <form className="text-center" onSubmit={this.onSubmit}>
            <img className="mb-3 w-50" src={logo} alt="logo" />

            <h1 className="h3 mb-3 font-weight-normal">Por favor, ingresa</h1>

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

            <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Iniciar sesion</button>
            {this.state.error ? <div className="alert alert-danger mt-3" role="alert">Ha ocurrido un error!</div> : ""}
            {(this.props.location.search).includes("logout") ? <div className="alert alert-warning mt-3" role="alert">Has cerrado sesion satisfactoriamente!</div> : ""}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
