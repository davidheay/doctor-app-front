import React, { Component } from "react";

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
              <button className="btn btn-success" type="button" onClick={this.click}>
                <i className="fas  fa-video"></i> Ingresar a la cita
              </button>
            ) : (
              <button className="btn btn-danger" type="button" onClick={this.exit}>
                <i className="fas  fa-times"></i> Salir de la cita
              </button>
            )
          }
        </div>
      </div >
    );
  }
}
