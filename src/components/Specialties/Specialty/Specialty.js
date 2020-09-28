import React, { Component } from "react";
class Specialty
    extends Component {
    render() {
        return (
            <div className="col-4">
                <div className=" card-specialities mb-5" >
                    <div className="card-body card-specialities">
                        <img  src={this.props.src}  alt="logo" />
                        <h3>{this.props.title}</h3>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Specialty;
