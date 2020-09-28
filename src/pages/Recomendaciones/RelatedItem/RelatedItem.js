import React, { Component } from "react";
class RelatedItem extends Component {
  render() {
    const colors = ["bg-primary", "bg-secondary", "bg-success ", "bg-info"];

    return (
      <div className={"pointer hover col-" + this.props.col} onClick={this.props.onClick}>
        <div className={"h-100 card " + colors[this.props.index]} >
          <div className="card-body d-flex align-items-center text-center">
            <p className="card-text text-white w-100">{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedItem;
