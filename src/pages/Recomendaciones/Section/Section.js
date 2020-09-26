import React, { Component } from "react";
class Section extends Component {
  render() {
    return (
      <div className={" p-3 col-" + this.props.col}>
        <div className="card shadow-lg h-100 p-4" dangerouslySetInnerHTML={{ __html: this.props.content }} >
        </div>
      </div >
    )
  }
}

export default Section;
