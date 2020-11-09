import React from "react";
import { Link } from 'react-router-dom'
const UserAppointment = (props) => {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.specialty}</td>
            <td>{props.doctor || props.obs}</td>
            <td>
            {props.notes ? (
                            props.notes
                        ) : (props.doctor ? (
                            <Link to={{ pathname: '/sala', query: { data: { ...props } } }}type="button" className="btn btn-sm btn-primary">
                                <i className="fa fa-link text-white"></i> Acceder a la cita
                            </Link>
                        ) : '')}
            </td>
        </tr>
        
    )
}
export default UserAppointment;

