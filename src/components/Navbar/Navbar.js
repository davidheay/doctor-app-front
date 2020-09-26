import React, { Component } from 'react';
import Option from "./Option/Option"
import "./Navbar.css";
import { Link } from 'react-router-dom';
class Navbar extends Component {
  renderOptionsByAuth() {
    if (this.props.isAuthenticated) {
      return [
        <Option text="Reserva tu cita" destination="" icon="calendar-plus" key={2} />,
        <Option text={this.props.user} destination="/logout" icon="sign-out-alt" key={1} />]
    } else {
      return <Option text="Iniciar sesión" destination="login" icon="sign-in-alt" key={0} />;
    }
  }
  render() {

    return (
      <nav className="site-header sticky-top py-1 bg-info">
        <div className="container d-flex flex-column flex-md-row justify-content-between text-white">
          <Link to="/" className="text-white">
            <h4 className="pt-1 font-weight-bold">
              <i className="fas fa-user-md fa-1x"></i> Doctor App
            </h4>
          </Link>
          <Option text="Consultas" destination="/consultas" icon="search" key={5} />
          <Option text="Quienes somos" destination="#" icon="user-friends" key={4} />
          <Option text="Recomendaciones" destination="/recomendaciones" icon="info" key={3} />
          {this.renderOptionsByAuth()}
        </div>
      </nav>
    )
  }
}

export default Navbar;
