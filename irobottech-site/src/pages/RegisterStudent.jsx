import React, { Component } from "react";
//import Navbar from '../components/Navbar.jsx';
//import FooterPage from '../components/Footer.jsx';
import PersonModule from '../components/PersonModule';
import ASTabs from '../components/ASTabs';
import { Button } from 'mdbreact';



class RegisterStudent extends Component {



    render() {
        return (

            <div>
                <PersonModule />
                <ASTabs />
            </div>

        );
    }


}
export default RegisterStudent;
