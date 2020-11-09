import React from "react";
import { Link } from 'react-router-dom';
import Specialties from '../../components/Specialties/Specialties';
import ilustration from '../../images/icons/clinica.png';

const Us = () => {
  return (
    <div className="container">


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
          <img src={ilustration} alt="Ilustration home" className="img-fluid" />
        </div>
      </div>
      <div className="mt-5">
        <Specialties />
      </div>
    </div>
  )
}

export default Us;
