import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import axiosFireBase from "../../../instances/axios-fire-base-data"
import Spinner from '../../Spinner/Spinner';


class FormAppointment extends Component {
    constructor(props) {
        super(props);
        this.request = this.request.bind(this);
        this.state = {
            options: [],
            specialty: "",
            obs: "",
            requesting: false
        }
    }

    componentDidMount() {
        axiosFireBase.get("config/specialties.json")
            .then(response => {
                const dataSpecialties = response.data;
                let newOptions = [];
                newOptions.push('');
                for (const key in dataSpecialties) {
                    newOptions.push(dataSpecialties[key]);
                }
                this.setState({ options: newOptions })
            }).catch(e => {
                console.log(e);
            });
    }
    request() {
        this.setState({ requesting: true })
        axiosFireBase.post(`users/${this.props.localId}/appointments/pendientes.json`,
            {
                date: (new Date()).toLocaleDateString(),
                specialty: this.state.specialty,
                obs: this.state.obs
            }
        ).then(response => {
            console.log("response");
            this.props.onClick();
            this.setState({
                specialty: "",
                obs: "",
                requesting: false
            });
        }).catch(e => {
            console.log(e);
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card border-darken shadow-sm p-0">
                        <div className="card-header pb-1">
                            <h5 className="card-title"><i className="fa fa-plus"></i> Nueva solicitud</h5>
                        </div>
                        <div className="card-body  ">
                            <div className="form-group">
                                <label>Especialidad</label>
                                <select className="form-control" value={this.state.specialty} onChange={(e => this.setState({ specialty: e.target.value }))} >
                                    {this.state.options.map((op, i) => <option key={i} value={op}>{op}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Motivo</label>
                                <textarea className="form-control" rows="3" value={this.state.obs} onChange={(e => this.setState({ obs: e.target.value }))}>

                                </textarea>
                            </div>
                            <div className="form-group">
                                {this.state.requesting ? <Spinner /> :
                                    (<button type="button" className="btn btn-success btn-sm btn-block text-white" onClick={this.request}>
                                        <i className="fas fa-notes-medical text-white "></i>  Solicitar
                                    </button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        localId: state.authenticationStore.userLoggedIn.localId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAppointment);

