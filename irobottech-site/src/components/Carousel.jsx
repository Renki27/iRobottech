import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpg';
import Slide3 from '../images/slide3.jpg';
import './Carousel.css';

class HomeCarousel extends Component {
    render() {
        return (

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                    <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src={Slide1} alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="second-slide" src={Slide2} alt="Second slide" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="third-slide" src={Slide3} alt="Third slide" />
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>






        );
    }
}

export default HomeCarousel;