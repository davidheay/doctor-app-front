import React, { Component } from 'react';
import Option from "./Option/Option"
import "./Navbar.css";
import { Link } from 'react-router-dom';
class Navbar extends Component {
  renderOptionsByAuth() {
    if (this.props.isAuthenticated) {
      return [
        <Option text="Reservaciones" destination=""  key={2} />,
        <Option text={this.props.user} destination="/logout"  key={1} />]
    } else {
      return <Option text="Iniciar sesión" destination="login" icon="sign-in-alt" key={0} />;
    }
  }
  render() {

    return (
      <nav className="site-header fixed-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between ">
          <Link to="/" className="nav-title">
            <h4 className="pt-1 font-weight-bold">
              Doctor App
            </h4>
          </Link>
          <ul class="nav justify-content-end">
          <Option text="Inicio" destination="/" key={6} />
          <Option text="Nosotros" destination="#"  key={4} />
          <Option text="Consultas" destination="/consultas" key={5} />
          
          <Option text="Tips" destination="/recomendaciones" key={3} />
          
          {this.renderOptionsByAuth()}
          
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
