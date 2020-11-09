import React, { Component } from "react";
import { connect } from 'react-redux';
import DoctorAppointment from '../../components/Appointments/DoctorAppointment/DoctorAppointment';
import axiosFireBase from '../../instances/axios-fire-base-data';
import Spinner from '../../components/Spinner/Spinner';

class Doctor extends Component {

    constructor(props) {
        super(props)
        this.update = this.update.bind(this);
        this.state = {
            pendingAppoiments: [],
            loadingPending: true,
            takenAppoiments: [],
            loadingTaken: true,
            doneAppoiments: [],
            loadingDone: true,
        }
    }

    getPendingAppoiments() {
        this.setState({ loadingPending: true })
        axiosFireBase.get(`users.json`)
            .then(response => {
                const dataUsers = response.data;
                let newPendingAppoiments = [];
                for (const key in dataUsers) {
                    if (dataUsers[key].appointments && dataUsers[key].appointments.pendientes) {
                        const userAppoinments = dataUsers[key].appointments.pendientes;
                        for (const key2 in userAppoinments) {
                            newPendingAppoiments.push(
                                {
                                    ...userAppoinments[key2],
                                    ...dataUsers[key],
                                    "userKey": key,
                                    "userppoimentKey": key2
                                }
                            )
                        }
                    }
                }
                newPendingAppoiments.sort((a, b) => new Date(a.date) - new Date(b.date));
                this.setState({ pendingAppoiments: newPendingAppoiments, loadingPending: false })

            })
            .catch(e => {
                console.log(e);
            });
    }
    getTakenAppoiments() {
        this.setState({ loadingTaken: true })
        axiosFireBase.get(`users/${this.props.localId}/appointments/taken.json`)
            .then(response => {
                const dataAppointments = response.data;
                let newTakenAppoiments = [];
                for (const key in dataAppointments) {
                    newTakenAppoiments.push({ ...dataAppointments[key], keyAppointment: key })
                }
                // newTakenAppoiments.sort((a, b) => new Date(a.date) - new Date(b.date));
                this.setState({ takenAppoiments: newTakenAppoiments, loadingTaken: false })
            })
            .catch(e => {
                console.log(e);
            });
    }
    getDoneAppoiments() {
        this.setState({ loadingDone: true })
        axiosFireBase.get(`users/${this.props.localId}/appointments/done.json`)
            .then(response => {
                const dataAppointments = response.data;
                let newDoneAppoiments = [];
                for (const key in dataAppointments) {
                    newDoneAppoiments.push({ ...dataAppointments[key], keyAppointment: key })
                }
                this.setState({ doneAppoiments: newDoneAppoiments, loadingDone: false })
            })
            .catch(e => {
                console.log(e);
            });
    }
    update() {
        this.getPendingAppoiments();
        this.getTakenAppoiments();
        this.getDoneAppoiments();
    }
    componentDidMount() {
        if (!this.props.isUserLoggedIn)
            this.props.history.push('/login');
        else {
            this.update();
        }
    }
    componentDidUpdate() {
        if (!this.props.isUserLoggedIn)
            this.props.history.push('/login');
    }

    render() {
        return (
            <div className="row">
                <div className="col-4 offset-4 text-center mb-4">
                    <h3> <i className="fa fa-user-plus float"></i> Citas</h3>

                </div>
                <div className="col-4 text-center">
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.update}><i className="fas fa-redo-alt"></i> Recargar</button>
                </div>
                <div className="col-4">
                    <div className="card p-0">
                        <div className="card-header">
                            <p className="card-title">Pendientes</p>
                        </div>
                        <div className="card-body">
                            {
                                this.state.loadingPending ?
                                    <Spinner /> :
                                    this.state.pendingAppoiments.map((pa, i) =>
                                        <DoctorAppointment type={"pending"} key={i} {...pa} onClick={this.update} />
                                    )
                            }

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card p-0">
                        <div className="card-header">
                            <p className="card-title">Tomadas</p>
                        </div>
                        <div className="card-body">

                            {
                                this.state.loadingTaken ?
                                    <Spinner /> :
                                    this.state.takenAppoiments.map((pa, i) =>
                                        <DoctorAppointment type={"taken"} key={i} {...pa} />
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">

                    <div className="card p-0">
                        <div className="card-header">
                            <p className="card-title">Realizadas</p>
                        </div>
                        <div className="card-body">
                            {
                                this.state.loadingDone?
                                    <Spinner /> :
                                    this.state.doneAppoiments.map((pa, i) =>
                                        <DoctorAppointment type={"done"} key={i} {...pa} />
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        localId: state.authenticationStore.userLoggedIn.localId,
    }
}

export default connect(mapStateToProps, null)(Doctor);

