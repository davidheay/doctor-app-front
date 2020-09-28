import React, { Component } from 'react';
import ilustration from '../../images/ilustration.png';
import "./Info.css";
class Info extends Component {
  render() {
    return (
      <div className="row info-section">
        <div className="col-sm-6">
          <div className="info-content">
            <h2>Cuidamos de ti virtualmente</h2>
            <p>
              Nuestra labor se centra en el cuidado de tu salud,
              mediante la tecnología y la medicina queremos
              ofrecerte el mejor cuidado que puedas encontrar
              en la red.
            </p>
            <button className="btn btn-primary ">
              Reserva ahora
            </button>
           </div>
        </div>
        <div className="col-sm-6 ">
        <img src={ilustration} alt="Ilustration home" className="img-fluid"/>
        
        </div>
      </div>
     
    )
  }
}

export default Info;
