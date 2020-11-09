import React, { Component } from "react";
import "./Call.css"

export default class ChannelForm extends Component {
  state = {
    channel: ""
  }
  click = e => {
    this.setState({ channel: "sala2" });
    this.props.selectChannel("sala2");
  };
  exit = e => {
    this.setState({ channel: "" });
    this.props.exit();
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 text-center ">
          {this.state.channel === "" ?
            (
              <div data-v-236e3827="" class="float-button-action clicable btn-ok" onClick={this.click}>
                <div data-v-236e3827="" class="float-button-action-text" >
                  Ingresar a la cita
                </div>
              </div>
              
            ) : (
              <div data-v-236e3827="" class="float-button-action clicable btn-out" onClick={this.exit}>
                <div data-v-236e3827="" class="float-button-action-text" >
                  Salir de la cita
                </div>
              </div>
            )
          }
        </div>
      </div >
    );
  }
}
