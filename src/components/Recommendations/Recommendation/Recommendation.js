import React, { Component } from "react";
import"./Recommendation.css"
class Recomendation extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card" >
                    <img src={this.props.src} className="card-img-top" alt="Recomendation" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recomendation;