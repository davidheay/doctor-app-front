import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ilustration from '../../images/icons/clinica.png';
import Specialties from '../../components/Specialties/Specialties';

class Us extends Component {
  render() {
    return (
      <div class="container">
        
        
        <div className="row info-section">
          <div className="col-sm-6">
            <div className="info-content">
              <h2>Nos apasiona tu cuidado</h2>
              <p>
                Nos apasiona ayudarte a cuidarte, te cuidamos desde casa y vamos hasta tu casa, no te preocupes por nada, nos encargamos de todo
              </p>
              <Link className="btn btn-primary" to="/citas">
                Reserva ahora
              </Link>
            </div>
          </div>
          <div className="col-sm-6 ">
            <img src={ilustration} alt="Ilustration home" className="img-fluid"/>
          </div>
        </div>
        <div className="mt-5">
          <Specialties />
        </div>
     </div>
    )
  }
}

export default Us;
