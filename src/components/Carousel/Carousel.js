import React, { Component } from "react";
import CarouselItem from "./CarouselItem/CarouselItem"
import logo from "../../images/logo.png";
import logo1 from "../../images/1.jpg";
import logo2 from "../../images/2.jpg";
const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <CarouselItem img={logo} className="active" />
                <CarouselItem img={logo1} />
                <CarouselItem img={logo2} />
            </div>
        </div>
    )
}

export default Carousel;