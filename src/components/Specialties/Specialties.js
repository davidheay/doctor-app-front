import React, { Component } from "react";
import Specialty from "./Specialty/Specialty";
import psicologia from "../../images/psicologia.jpg";
import cardiologia from "../../images/cardio.png";
import fisioterapia from "../../images/fisioterapia.jpg";
class Specialties extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <h2>Nuestras especialidades</h2>
                </div>
                <Specialty src={psicologia} title="Psicologia" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. " />
                <Specialty src={cardiologia} title="Cardiologia" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. " />
                <Specialty src={fisioterapia} title="Fisioterapia" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus id eros condimentum dignissim. Cras porta tortor id risus vestibulum rhoncus. " />
            </div>
        )
    }
}

export default Specialties;
