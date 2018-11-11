import React, { Component } from "react";
//import Navbar from '../components/Navbar.jsx';
//import FooterPage from '../components/Footer.jsx';
import PersonModule from '../components/PersonModule';
import AccountModule from '../components/AccountModule';
import ASTabs from '../components/ASTabs';
import { Button } from 'mdbreact';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';


class RegisterStudent extends Component {


    render() {
        return (

            <Container>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <PersonModule />
                                <AccountModule />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>





        );
    }


}
export default RegisterStudent;
