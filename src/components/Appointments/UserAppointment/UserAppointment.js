import React from "react";
import { Link } from 'react-router-dom'
const UserAppointment = (props) => {
    return (
        <div className="card py-0 my-2">
            <div className="card-body py-2 px-1">
                <div className="row no-gutters">
                    <div className="col-6">
                        {props.date}
                    </div>
                    <div className="col-6 text-right">
                        {props.specialty}
                    </div>
                </div>
                <div className="row mt-2 no-gutters">
                    <div className="col-6 ">
                        {props.doctor || props.obs}
                    </div>
                    <div className="col-6 text-right">
                        {props.doctor ? (
                            <Link to={"/" + props.id} type="button" className="btn btn-sm btn-primary">
                                <i className="fa fa-link text-white"></i> Click aqui para acceder a la cita
                            </Link>
                        ) : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserAppointment;

