import React, { Component } from 'react';
class Option extends Component {
  render() {
    return (
      <a className="py-2 d-none d-md-inline-block text-white" href={this.props.destination}>{this.props.text} <i className={"fa fa-" + this.props.icon}></i></a>
    )
  }
}
export default Option;
