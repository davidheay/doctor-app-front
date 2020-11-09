import React from "react";

const CategoricalAppointments = (props) => {
    const click = () => {
        props.onClick(props.value)
    }
    return (
        <div className="row my-4">
            <div className="col-10 offset-1">
                <div className={`card py-0 text-white bg-${props.color}`} onClick={click}>
                    <div className="card-body  py-2 px-1 ">
                        <div className="row no-gutters">
                            <div className="col-6 d-flex justify-content-center align-content-center align-items-center">
                                <h6 className="text-uppercase">{props.value}</h6>
                            </div>
                            <div className="col-6 text-center">
                                <i className={"fa fa-2x fa-" + props.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoricalAppointments;

