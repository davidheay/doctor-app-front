import React, { Component } from "react";
import { connect } from 'react-redux';
import CategoricalAppointments from "../../components/Appointments/CategoricalAppointments/CategoricalAppointments";
import Appointment from "../../components/Appointments/Appointment/Appointment";
import FormAppointment from "../../components/Appointments/FormAppointment/FormAppointment";
import Spinner from '../../components/Spinner/Spinner';
import axiosFireBase from "../../instances/axios-fire-base-data"
class MedicalAppointments extends Component {

  constructor(props) {
    super(props)
    this.setCategory = this.setCategory.bind(this)
    this.state = {
      category: "",
      categories: [],
      loadingCategories: true,
      appointments: [],
      loadingappointments: false
    }
  }




  componentDidMount() {
    if (!this.props.isUserLoggedIn)
      this.props.history.push('/login');
    else
      axiosFireBase.get('config/appointments/categories.json')
        .then(response => {
          const dataCategories = response.data;
          let newCategories = [];
          for (const key in dataCategories) {
            newCategories.push(dataCategories[key]);
          }
          this.setState({ categories: newCategories, loadingCategories: false })
        })
        .catch(errorObj => {
          console.log(errorObj);
        });

  }
  componentDidUpdate() {
    if (!this.props.isUserLoggedIn)
      this.props.history.push('/login');
  }
  setCategory(newCategory) {
    this.setState({ category: newCategory, loadingappointments: true });
    axiosFireBase.get(`users/${this.props.localId}/appointments/${newCategory}.json`)
      .then(response => {
        const dataAppointments = response.data;
        let newAppointments = [];
        if (dataAppointments) {
          for (const key in dataAppointments) {
            if (dataAppointments[key])
              newAppointments.push(dataAppointments[key]);
          }
        }
        this.setState({ appointments: newAppointments, loadingappointments: false });
      })
      .catch(errorObj => {
        console.log(errorObj);
      });

  }
  render() {
    return (
      <div className="row">
        <div className="col-3">
          {this.state.loadingCategories ? <Spinner /> : this.state.categories.map((cat, i) => <CategoricalAppointments key={i} {...cat} onClick={this.setCategory} />)}
        </div>

        <div className="col-6">
          <div className="card border-darken shadow-sm p-0">
            <div className="card-header pb-1">
              <h4 className="card-title">Mis citas - {this.state.category}</h4>
            </div>
            <div className="card-body">
              {this.state.loadingappointments ? <Spinner /> : this.state.appointments.map((appo, i) => <Appointment key={i} {...appo} />)}
            </div>
          </div>
        </div>

        <div className="col-3">
          <FormAppointment />
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

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalAppointments);

