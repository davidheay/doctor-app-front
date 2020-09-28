import React, { Component } from 'react';
import "./Banner.css"
import logo from '../../images/app.png';

class Banner extends Component {
    render() {
        return (
            <div className="row featurette my-5">
                <div className="col-md-6 justify-content-center  py-5">
                    <h2 className="featurette-heading ">
                    Descargar nuestra <br /> aplicación móvil
                    </h2>
                    <p className="lead">
                        Presiona en el botón y nuestro inteligente sistema descargará una aplicación super rápida y sencilla
                        para que puedas acceder a todos nuestros servicios desde ahí
                    </p>
                    <button className="btn btn-outline-primary btn-round">
                        Descargar ahora
                    </button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={logo} className="img-fluid" alt="lgoo" />
                </div>
            </div>
        )
    }
}

export default Banner;
