import React, { Component } from 'react';
import Option from "./Option/Option"
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="site-header sticky-top py-1 bg-info">
        <div className="container d-flex flex-column flex-md-row justify-content-between text-white">
          <h4 className="pt-1 font-weight-bold">
            <i className="fas fa-user-md fa-1x"></i> Doctor App
          </h4>
          <Option text="Consultas" destination="#" icon="search"/>
          <Option text="Quienes somos" destination="#" icon="user-friends"/>
          <Option text="Recomendaciones" destination="#" icon="info"/>
          <Option text="Reserva tu cita" destination="#" icon="calendar-plus"/>
          <Option text="Iniciar sesión" destination="#" icon="sign-in-alt"/>
        </div>
      </nav>
    )
  }
}

export default Navbar;
