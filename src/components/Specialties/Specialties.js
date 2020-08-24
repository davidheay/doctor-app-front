import React, { Component } from "react";
import Specialty from "./Specialty/Specialty";
import psicologia from "../../images/psicologia.jpg";
import cardiologia from "../../images/cardio.png";
import fisioterapia from "../../images/fisioterapia.jpg";
class Specialties extends Component {
    specialties = [{
        title: "Psicologia",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. ",
        src: psicologia
    }, {
        title: "Cardiologia",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. ",
        src: cardiologia
    }, {
        title: "Fisioterapia",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. ",
        src: fisioterapia
    }]
    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <h2>Nuestras especialidades</h2>
                </div>
                {this.specialties.map(item => (<Specialty  {...item} />))}
            </div>
        )
    }
}

export default Specialties;
