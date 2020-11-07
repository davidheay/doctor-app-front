import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./extras/bootstrap/bootstrap.min.css";
import "./extras/fontawesome/css/all.min.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import P404 from "./pages/P404/P404";
import Recomendaciones from "./pages/Recomendaciones/Recomendaciones";
import SingUp from "./pages/SingUp/SingUp";
import Us from "./pages/Us/Us";
import * as actionCreators from './store/actions/authenticationActions';



class App extends Component {
  componentDidMount() {
    this.props.onPersistAuthentication();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/singup" component={SingUp} />
            <Route path="/nosotros" component={Us} />
            <Route path="/recomendaciones" component={Recomendaciones} />
            <Route component={P404} />
          </Switch>
        </Layout>
      </BrowserRouter >
    );
  }


}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch(actionCreators.persistAuthentication())
  };
};

export default connect(null, mapDispatchToProps)(App);
