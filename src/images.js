import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './images.css';
import pot from "./crashes/imgs/pot.png";
import finger from "./crashes/imgs/finger.png";

class Images extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={pot} />
                    <p className="legend">Temporary pot!</p>
                </div>
                <div>
                    <img src={finger} />
                    <p className="legend">Broken bone!</p>
                </div>
            </Carousel>
        );
    }
}

export default Images;