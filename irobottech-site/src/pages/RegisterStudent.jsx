import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import PersonModule from '../components/PersonModule';

var Stepper = require('react-bootstrap/Stepper'); 
var Step = require('react-bootstrap/Step'); 
var Fa = require('react-bootstrap/Fa'); 


class RegisterStudent extends Component {


    render() {
        return (

            <div>
                <Navbar />
                <div className="container">
                    <Stepper>
                        <Step className="completed">
                            <a href="#!">
                                <span className="circle">1</span>
                                <span className="label">First step</span>
                            </a>
                        </Step>
                        <Step className="active">
                            <a href="#!">
                                <span className="circle">2</span>
                                <span className="label">Second step</span>
                            </a>
                        </Step>
                        <Step className="warning">
                            <a href="#!">
                                <span className="circle"><Fa icon="warning" /></span>
                                <span className="label">Third step</span>
                            </a>
                        </Step>
                    </Stepper>


                </div>
                <FooterPage />
            </div>

        );
    }
}
export default RegisterStudent;
