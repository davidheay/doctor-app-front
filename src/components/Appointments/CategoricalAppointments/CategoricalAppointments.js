import React, { Component } from "react";

class CategoricalAppointments extends Component {
    click = () => {
        this.props.onClick(this.props.value)
    }
    render() {
        return (

        <div className="col-3">
            <div className={`card py-0 text-white bg-${this.props.color}`} onClick={this.click}>
                <div className="card-body  py-2 px-1 ">
                    <div className="row no-gutters">
                        <div className="col-6 d-flex justify-content-center align-content-center align-items-center">
                            <h6 className="text-uppercase">{this.props.value}</h6>
                        </div>
                        <div className="col-6 text-center">
                            <i className={"fa fa-2x fa-" + this.props.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        )
    }
}
export default CategoricalAppointments;

