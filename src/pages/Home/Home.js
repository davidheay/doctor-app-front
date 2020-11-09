import React from "react";
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Recommendations from '../../components/Recommendations/Recommendations';
import Specialties from '../../components/Specialties/Specialties';

const Home = () => {
  return (
    <div className="container">
      <Info />
      <Specialties />
      <Banner />
      <Recommendations />
    </div>
  )
}

export default Home;
