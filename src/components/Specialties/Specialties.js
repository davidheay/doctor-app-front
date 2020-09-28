import React, { Component } from "react";
import Specialty from "./Specialty/Specialty";
import "./specialities.css";
import hv from "../../images/icons/hv.png";
import medicinal from "../../images/icons/medicinal.png";
import medicine from "../../images/icons/medicine.png";
import search from "../../images/icons/search.png";
import table from "../../images/icons/table.png";
import table2 from "../../images/icons/table2.png";

class Specialties extends Component {
    specialties = [{
        title: "Revisión general",
        text: "Nuestra tecnología de Streaming nos permite tomar tus consultas de forma remota, revisión general desde tu casa sin importar el lugar",
        src: search
    }, {
        title: "Medicinas",
        text: "Mediante nuestra logística de entrega y nuestros aliados somos capaces de proveer la medicina que necesitas",
        src: medicinal
    }, {
        title: "Consultas generales",
        text: "Obtén consultas generales de tus sintomas y cadencias en tiempo real gracias a nuestro chat con especialistas",
        src: table
    }, {
        title: "Historia clínica",
        text: "Almacenamos tu historia clínica con altos estándares de seguridad para que sea accesible desde cualquier lugar del mundo",
        src: table2
    }, {
        title: "Cuidado de emergencia",
        text: "Nuestros médicos pueden llegar hasta ti en el momento justo, gracias a nuestra tecnología de mapeo satelital no habrá ningún problema",
        src: medicine
    }, {
        title: "Seguimiento evolutivo",
        text: "¿Preocupado por tu evolución? Nosotros nos encargaremos de tus revisiones periodicas.",
        src: hv
    }]
    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4 text-center especiality-header">
                    <h2>Nuestras características</h2>
                    <p>Somos expertos en lo que hacemos. Contamos con especialistas en todas las áreas y para todos los casos, <br/> deja tu salud en las mejores manos expertas.</p>
                </div>
                {this.specialties.map((item, index) => (<Specialty  {...item} key={index} />))}
            </div>
        )
    }
}

export default Specialties;
