import AgoraRTC from "agora-rtc-sdk";
import React, { Component } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axiosFireBase from '../../instances/axios-fire-base-data';
import { connect } from 'react-redux';

const MySwal = withReactContent(Swal)

let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
const USER_ID = Math.floor(Math.random() * 1000000001);
const APP_ID = "e5f30b46074a4fbe9ca9394535b2687c";

class Call extends Component {
  localStream = AgoraRTC.createStream({
    streamID: USER_ID,
    audio: true,
    video: true,
    screen: false
  });

  state = {
    remoteStreams: []
  };

  componentWillUnmount() {
    try {
      this.localStream.close();
      client.leave();
    } catch (err) {
      console.error(err);
    }
  }
  componentDidMount() {
    this.initLocalStream();
    this.initClient();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.active) {
      this.handleLeave()
    }
    if (this.props.active && prevProps.channel !== this.props.channel && this.props.channel !== "") {
      this.joinChannel();
    }
  }


  initLocalStream = () => {
    let me = this;
    me.localStream.init(
      function () {
        console.log("getUserMedia successfully");
        me.localStream.play("agora_local");
      },
      function (err) {
        console.log("getUserMedia failed", err);
      }
    );
  };

  initClient = () => {
    client.init(
      APP_ID,
      function () {
        console.log("AgoraRTC client initialized");
      },
      function (err) {
        console.log("AgoraRTC client init failed", err);
      }
    );
    this.subscribeToClient();
  };

  subscribeToClient = () => {
    let me = this;
    client.on("stream-added", me.onStreamAdded);
    client.on("stream-subscribed", me.onRemoteClientAdded);

    client.on("stream-removed", me.onStreamRemoved);

    client.on("peer-leave", me.onPeerLeave);
  };

  onStreamAdded = evt => {
    let me = this;
    let stream = evt.stream;
    console.log("New stream added: " + stream.getId());
    me.setState(
      {
        remoteStreams: {
          ...me.state.remoteStream,
          [stream.getId()]: stream
        }
      },
      () => {
        client.subscribe(stream, function (err) {
          console.log("Subscribe stream failed", err);
        });
      }
    );
  };

  joinChannel = () => {
    let me = this;
    client.join(
      "006e5f30b46074a4fbe9ca9394535b2687cIABUVuoCgy5jwDkqBmK+89SuwNj2tlmzkUMhh6SoiFSMlkbENg4AAAAAEAA8/8eaFcWqXwEAAQAVxapf",
      me.props.channel,
      USER_ID,
      function (uid) {
        client.publish(me.localStream, function (err) {
          console.log("Publish local stream error: " + err);
        });

        client.on("stream-published", function (evt) {
          console.log("Publish local stream successfully");
        });
      },
      function (err) {
        console.log("Join channel failed", err);
      }
    );
  };

  onRemoteClientAdded = evt => {
    let me = this;
    let remoteStream = evt.stream;
    me.state.remoteStreams[remoteStream.getId()].play("agora_remote" + remoteStream.getId()
    );
  };

  onStreamRemoved = evt => {
    let me = this;
    let stream = evt.stream;
    if (stream) {
      let streamId = stream.getId();
      let { remoteStreams } = me.state;

      stream.stop();
      delete remoteStreams[streamId];

      me.setState({ remoteStreams });

      console.log("Remote stream is removed " + stream.getId());
    }
  };

  handleLeave = () => {
    try {
      this.localStream.close();
      client.leave();
      if (this.props.userRol === 'doctor') {
        MySwal.fire({
          icon: 'info',
          input: 'textarea',
          title: 'Ha finalizado la cita añada una nota',
          inputPlaceholder: 'Notas de la cita',
          inputValidator: (value) => {
            if (!value) {
              return 'Valida la nota!'
            }
          }
        }).then((e) => {
          if (e.isConfirmed) {

            axiosFireBase.delete(`users/${this.props.dataAppointment.userKey}/appointments/proximas/${this.props.dataAppointment.keyAppointment}.json`)
              .then(() => {
                axiosFireBase.patch(`users/${this.props.dataAppointment.userKey}/appointments/realizadas/${this.props.dataAppointment.keyAppointment}.json`,
                  {
                    date: (new Date()).toLocaleString(),
                    obs: this.props.dataAppointment.obs,
                    specialty: this.props.dataAppointment.specialty,
                    notes: e.value,
                    doctor: this.props.userName,
                    doctorKey: this.props.localId
                  }
                ).then(() => {
                  axiosFireBase.delete(`users/${this.props.localId}/appointments/taken/${this.props.dataAppointment.keyAppointment}.json`)
                    .then(() => {
                      axiosFireBase.patch(`users/${this.props.localId}/appointments/done/${this.props.dataAppointment.keyAppointment}.json`,
                        {
                          date: (new Date()).toLocaleString(),
                          obs: this.props.dataAppointment.obs,
                          specialty: this.props.dataAppointment.specialty,
                          notes: e.value,
                          user: this.props.dataAppointment.userName,
                          userKey: this.props.dataAppointment.localId
                        }
                      ).then(() => {
                        this.props.history.push('/citas');
                      });
                    });
                });
              });

          }
        })
      } else {
        MySwal.fire({
          icon: 'info',
          text: 'Gracias por la llamada,volviendo a tus citas'
        }).then(() => {
          this.props.history.push('/citas');
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  onPeerLeave = evt => {
    let me = this;
    let stream = evt.stream;
    if (stream) {
      let streamId = stream.getId();
      let { remoteStreams } = me.state;

      stream.stop();
      delete remoteStreams[streamId];

      me.setState({ remoteStreams });

      console.log(evt.uid + " leaved from this channel");
    }
  };

  render() {
    return (
      <div className="row">
        <div id="agora_local" className="col-6 " style={{ width: "400px", height: "400px" }} />

        {Object.keys(this.state.remoteStreams).map(key => {
          let stream = this.state.remoteStreams[key];
          let streamId = stream.getId();
          return (
            <div className="col-6"
              key={streamId}
              id={`agora_remote${streamId}`}
              style={{ width: "400px", height: "auto" }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRol: state.authenticationStore.userLoggedIn.rol,
    userName: state.authenticationStore.userLoggedIn.userName,
    localId: state.authenticationStore.userLoggedIn.localId,
  }
}

export default connect(mapStateToProps, null)(Call);
