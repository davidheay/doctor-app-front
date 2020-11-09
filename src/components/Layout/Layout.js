import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid my-3">
        {props.children}
      </div>
      <Footer />
    </React.Fragment >
  );
}

export default Layout;
