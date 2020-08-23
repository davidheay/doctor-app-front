import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Banner extends Component {
    render() {
        return (
            <div className="row featurette my-5">
                <div className="col-md-7 justify-content-center  py-5">
                    <h2 className="featurette-heading ">
                        Nuevo logo.<span className="text-muted">Proximamente en tu celular.</span>
                    </h2>
                    <p className="lead">
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <img src={logo} class="img-fluid w-50" alt="lgoo" />
                </div>
            </div>
        )
    }
}

export default Banner;
