import React, { Component } from "react";
import Recommendations from '../../components/Recommendations/Recommendations';
import Specialties from '../../components/Specialties/Specialties';
import Info from '../../components/Info/Info';
import Banner from '../../components/Banner/Banner';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Info />
        <Specialties />
        <Banner />
        <Recommendations />
      </div>
    )
  }
}

export default Home;
