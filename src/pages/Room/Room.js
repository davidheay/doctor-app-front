import React, { Component } from "react";
import ChannelForm from "../../components/Call/ChannelForm";
import Call from "../../components/Call//Call";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "",
      active: false
    };
  }

  selectChannel = channel => {
    this.setState({ channel: channel, active: true });
  };
  exit = () => {
    this.setState({ active: false });
  };
  render() {
    return (
      <div className="container-fluid">
        <ChannelForm selectChannel={this.selectChannel} exit={this.exit} />
        <Call channel={this.state.channel} active={this.state.active}  {...this.props} dataAppointment={this.props.location.query.data}/>
      </div>
    );
  }
}

export default App;
