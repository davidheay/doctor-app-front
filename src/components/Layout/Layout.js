import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <React.Fragment>
      {props.loading ? <div className="loading"></div> : ''}
      <Navbar isAuthenticated={props.isAuthenticated} user={props.user} />
      <div className="container my-3">
        {props.children}
      </div>
      <Footer />
    </React.Fragment >
  );
}

export default Layout;
