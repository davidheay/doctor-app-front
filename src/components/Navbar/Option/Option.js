import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Option extends Component {
  render() {
    return (
      <Link to={this.props.destination}>
      <li className="nav-item">
        <span  className="nav-link">{this.props.text}</span>
      </li>
     
      </Link>
    )
  }
}
export default Option;
