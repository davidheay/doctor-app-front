import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import P404 from "./pages/P404/P404";
import Recomendaciones from "./pages/Recomendaciones/Recomendaciones";
import "./extras/bootstrap/bootstrap.min.css";
import "./extras/fontawesome/css/all.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.setAuth = this.setAuth.bind(this);
    this.changeGif = this.changeGif.bind(this);

    this.state = {
      isAuthenticated: false,
      user: '',
      loading: false
    };
  }

  setAuth(val, user) {
    this.setState({
      isAuthenticated: val,
      user: user || ''
    });
  }
  changeGif() {
    this.setState({ loading: !this.state.loading });
  }
  render() {
    return (
      <BrowserRouter>
        <Layout isAuthenticated={this.state.isAuthenticated} user={this.state.user} loading={this.state.loading} >
          <Switch>
            <Route exact path="/login" component={() => <Login setAuth={this.setAuth} changeGif={this.changeGif} />} />
            <Route exact path="/logout" component={() => <Login setAuth={this.setAuth} changeGif={this.changeGif} logout={true} />} />
            <Route exact path="/recomendaciones" component={Recomendaciones} />
            <Route exact path="/" component={Home} />
            <Route component={P404} />
          </Switch>
        </Layout>
      </BrowserRouter >
    );
  }

}

export default App;
