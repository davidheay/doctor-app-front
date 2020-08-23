import React, { Component } from 'react';
import './App.css';
import './extras/bootstrap/bootstrap.min.css';
import './extras/fontawesome/css/all.min.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    )
  }
}

export default App;
