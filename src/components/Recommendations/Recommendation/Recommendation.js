import React, { Component } from "react";
import"./Recommendation.css"
class Recomendation extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card recommendation h-100 shadow-sm bg-white rounded" role="button" tabIndex="0">
                    <div className="card-body">
                        <h5 className="card-title">Recomendacion {this.props.number}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recomendation;