import React, { Component } from "react";
//import Navbar from '../components/Navbar.jsx';
//import FooterPage from '../components/Footer.jsx';
import PersonModule from '../components/PersonModule';
import AccountModule from '../components/AccountModule';
import StudentModule from '../components/StudentModule';
import ASTabs from '../components/ASTabs';
import { Button } from 'mdbreact';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';

class RegisterStudent extends Component {

    onClick() {
        alert("CLICK!!")
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container>

                    <Row>
                        <Col md="8">
                            <Card>
                                <h3 className="h4 text-center py-4">Registro de estudiante</h3>
                                <CardBody>
                                    <p>Datos personales:</p>
                                    <PersonModule />
                                    <p>Datos del encargado:</p>
                                    <StudentModule />
                                    <p>Datos de la cuenta:</p>
                                    <AccountModule />
                                    <div className="text-center py-4 mt-3">
                                        <button className="btn btn-outline-cyan" onClick={this.onClick} type="submit">Registrar</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                <FooterPage />
            </div>





        );
    }


}
export default RegisterStudent;
