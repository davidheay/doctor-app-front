import React, { Component } from "react";
import Recommendation from "./Recommendation/Recommendation"

class Recomendations extends Component {
    render() {
        return (
            <div className="row">
                <Recommendation text="Lávate las manos con frecuencia. Usa agua y jabón o un desinfectante de manos a base de alcohol." number="1" />
                <Recommendation text="Mantén una distancia de seguridad con personas que tosan o estornuden." number="2" />
                <Recommendation text="Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico." number="3" />
                <Recommendation text="Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo." number="4" />
            </div>
        )
    }
}
export default Recomendations;