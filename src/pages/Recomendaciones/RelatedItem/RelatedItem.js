import React, { Component } from "react";
class RelatedItem extends Component {
  render() {
    const colors = ["bg-primary", "bg-secondary", "bg-success ", "bg-info"];

    return (
      <div className={"pointer hover col-" + this.props.col} onClick={this.props.onClick}>
        <div className={"card " + colors[this.props.index]} >
          <div className="card-body">
            <p className="card-text">{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedItem;
