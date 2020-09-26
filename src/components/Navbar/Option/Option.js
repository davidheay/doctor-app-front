import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Option extends Component {
  render() {
    return (
      <Link to={this.props.destination}>
        <span className="py-2 d-none d-md-inline-block text-white">
          {this.props.text}
          <i className={"ml-2 fa fa-" + this.props.icon}></i>
        </span>
      </Link>
    )
  }
}
export default Option;
