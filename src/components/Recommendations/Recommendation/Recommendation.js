import React, { Component } from "react";
import"./Recommendation.css"
class Recomendation extends Component {
    render() {
        return (
            <div className="col-4">
                <div class="card" >
                    <img src={this.props.src} class="card-img-top" alt="Recomendation" />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recomendation;