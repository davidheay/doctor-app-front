import React, { Component } from "react";
class CarouselItem extends Component {
    render() {
        return (
            <div className={"carousel-item " + this.props.className}>
                <img src={this.props.img} alt="img" className="d-block w-50" />
            </div>
        )
    }
}

export default CarouselItem;