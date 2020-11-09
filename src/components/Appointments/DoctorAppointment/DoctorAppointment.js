import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./DoctorAppointment.css"

import axiosFireBase from '../../../instances/axios-fire-base-data';
import { connect } from 'react-redux';

class DoctorAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }
    takeAppoiment = () => {
        axiosFireBase.post(`users/${this.props.localId}/appointments/taken.json`,
            {
                date: this.state.date,
                obs: this.props.obs,
                specialty: this.props.specialty,
                user: this.props.user,
            })
            .then(res => {
                axiosFireBase.delete(`users/${this.props.userKey}/appointments/pendientes/${this.props.userppoimentKey}.json`)
                    .then(() => {
                        axiosFireBase.post(`users/${this.props.userKey}/appointments/proximas.json`,
                            {
                                date: this.state.date,
                                obs: this.props.obs,
                                specialty: this.props.specialty,
                                doctor: this.props.userName
                            })
                            .then(() => {
                                this.props.onClick();
                            });
                    });
            })
            .catch(e => {
                console.log(e);
            })

    }
    renderBottomCard = (type) => {
        switch (type) {
            case "pending":
                return (<>
                    <div className="col-4 my-1 pt-1">
                        <b><i className="fa fa-clock text-dark"></i> Reservar el:</b>
                    </div>
                    <div className="col-8 my-1">
                        <div className="form-group">
                            <input type="datetime-local" className="form-control" value={this.state.date} onChange={(e => this.setState({ date: e.target.value }))} />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-success btn-sm btn-block pill" onClick={this.takeAppoiment}>
                            <i className="fa fa-check text-white"></i> Realizar reservación
                        </button>
                    </div>
                </>)
            case "taken":
                return (
                    <div className="col-12">
                        <Link to="/sala" className="btn btn-primary btn-sm btn-block">
                            <i className="fa fa-link text-white"></i> Entrar a la cita
                        </Link>
                    </div>
                )
            case "done":
                return (
                    <>
                        <div className="col-4 my-1 ">
                            <b><i className="fa fa-notes-medical text-dark"></i> Notas:</b>
                        </div>
                        <div className="col-8 my-1">
                            Se realizó esto y tambien esto y estro y otra cosa que bno se que
                        </div>
                    </>
                )
            default:
                break;
        }

    }
    render() {
        return (
            <div className="card py-0 my-2" >
                <div className="card-body py-2 px-1">
                    <div className="row no-gutters">
                        <div className="col-4 my-1">
                            <b><i className="fa fa-user text-dark"></i> Paciente:</b>
                        </div>
                        <div className="col-8 my-1">
                            {this.props.user}
                        </div>
                        <div className="col-4 my-1 ">
                            <b><i className="fa fa-calendar text-dark"></i> Fecha:</b>
                        </div>
                        <div className="col-8 my-1">
                            {this.props.date}
                        </div>
                        <div className="col-4 my-1 ">
                            <b><i className="fa fa-notes-medical text-dark"></i> Observacion:</b>
                        </div>
                        <div className="col-8 my-1">
                            {this.props.obs}
                        </div>
                        <div className="col-4 my-1 ">
                            <b><i className="fa fa-hospital text-dark"></i> Espec.:</b>
                        </div>
                        <div className="col-8 my-1">
                            {this.props.specialty}
                        </div>
                        {this.renderBottomCard(this.props.type)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.authenticationStore.userLoggedIn.userName,
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        localId: state.authenticationStore.userLoggedIn.localId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAppointment);


