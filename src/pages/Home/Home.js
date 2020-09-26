import React, { Component } from "react";
import Recommendations from '../../components/Recommendations/Recommendations';
import Specialties from '../../components/Specialties/Specialties';
import Info from '../../components/Info/Info';
import Banner from '../../components/Banner/Banner';
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Info />
        <Specialties />
        <Banner />
        <Recommendations />
      </>
    )
  }
}

export default Home;
