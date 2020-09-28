import React, { Component } from "react";
import Recommendation from "./Recommendation/Recommendation"

import aguja from '../../images/aguja.png';
import micro from '../../images/micro.png';
import piel from '../../images/cara.png';

class Recomendations extends Component {
    recomendations = [{
        title: "Nueva tecnología a tu disposición",
        text: "Ahora nuestros laboratorios cuentan con tecnología de extracción de muestras indolora. No más miedo",
        src: aguja
    }, {
        title: "Medicamentos herbales seguros para el consumo",
        text: "Los medicamentos herbales o tradicionales son seguros para el consumo, pero ojo, no todos",
        src: micro
    },
    {
        title: "Cuidado natural para la salud piel facial",
        text: "Un estilo de vida saludable debe comenzar ahora y también para la salud de tu piel. Hay algunos...",
        src: piel
    }];
    render() {
        return (
           <div className="mb-5">
                <div className="text-center mb-5">
                    <h2>Nuestros tips para tu cuidado</h2>
                </div>
                <div className="row" id="reccomendations">
                    {this.recomendations.map((item, index) => (<Recommendation {...item} key={index} />))}
                </div>
           </div>
        )
    }
}
export default Recomendations;