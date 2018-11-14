import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
class RegisterSecretary extends Component {

   


    render() {
        return (
            <div>
                <Navbar />
                <Container >
                    <Row>
                        <Col md="8" className="mx-auto">
                            <Card>
                                <h3 className="text-center font-weight-bold pl-0 my-4">Registro de Secretario(a)</h3>
                                <CardBody>
                       
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
export default RegisterSecretary;