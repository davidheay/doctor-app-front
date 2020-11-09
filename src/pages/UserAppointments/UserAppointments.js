import React, { Component } from "react";
import { connect } from 'react-redux';
import CategoricalAppointments from "../../components/Appointments/CategoricalAppointments/CategoricalAppointments";
import Appointment from "../../components/Appointments/UserAppointment/UserAppointment";
import FormAppointment from "../../components/Appointments/FormAppointment/FormAppointment";
import Spinner from '../../components/Spinner/Spinner';
import axiosFireBase from "../../instances/axios-fire-base-data"
import "./UserAppointments.css"
class UserAppointments extends Component {

  constructor(props) {
    super(props)
    this.setCategory = this.setCategory.bind(this)
    this.update = this.update.bind(this)
    this.state = {
      category: "",
      categories: [],
      loadingCategories: true,
      appointments: [],
      loadingappointments: false
    }
  }
  update(){
    this.setCategory("pendientes")
    
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
          this.update();
        })
        .catch(e => {
          console.log(e);
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
      .catch(e => {
        console.log(e);
      });

  }
  render() {
    return (
      <div className="row">
        <div className="col-9">
        <div className="row mb-4">
          {this.state.loadingCategories ? <Spinner /> : this.state.categories.map((cat, i) => <CategoricalAppointments key={i} {...cat} onClick={this.setCategory} />)}
        </div>

          <div className="card  p-0">
            
            <div className="p-4">
              <h4 className="card-title ">Mis citas - {this.state.category}</h4>
              <div data-v-636de4fa="" class="separator "></div>
            </div>
            
            <div className="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Especialidad</th>
                    <th>Doctor</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.loadingappointments ? <Spinner /> :
                this.state.appointments.map((appo, i) => <Appointment key={i} {...appo} />)}
                
                </tbody>
              </table>
             
            </div>
          </div>
        </div>

        <div className="col-3">
          <FormAppointment onClick={this.update} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserAppointments);

