import React, { Component } from "react";
import "../P404/P404.css";
import img404 from "../../images/404.png";
import { Link } from "react-router-dom";

class P404 extends Component {
  render() {
    return (
      <div className="container my-5 padding-top-5">
        <div className="row text-center">
          <div className="col-12">
            <img src={img404} alt="img" className="w-50" />
          </div>
          <div className="col-12 mt-3">
            <h4 className="d-block">Parece que no podemos encontrar la página que estás buscando</h4>
            <Link to="/">
              <button className="btn btn-info mt-3"> <i className="fa fa-arrow-left"></i> Volver </button>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}

export default P404;
