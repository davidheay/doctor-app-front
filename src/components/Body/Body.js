import React, { Component } from 'react';
import Recommendations from '../Recommendations/Recommendations';
import Specialties from '../Specialties/Specialties';
import Info from '../Info/Info';
import Banner from '../Banner/Banner';

class Body extends Component {
  render() {
    return (
      <div className="container my-5">
        <Info />
        <Specialties />
        <Banner />
        <Recommendations />
      </div>
    )
  }
}

export default Body;
