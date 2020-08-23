import React, { Component } from "react";
class Specialty
    extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card shadow" >
                    <img src={this.props.src} className="card-img-top w-100" alt="logo" />
                    <div className="card-body">
                        <h3>{this.props.title}</h3>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Specialty;
