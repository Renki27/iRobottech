import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import PersonModule from '../components/PersonModule';
import AccountModule from '../components/AccountModule';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
class RegisterAdmin extends Component {

    onClick() {
        alert("CLICK!!")
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container >
                    <Row>
                        <Col md="8" className="mx-auto">
                            <Card>
                                <h3 className="text-center font-weight-bold pl-0 my-4">Registro de Administrador</h3>
                                <CardBody>
                                    <label class="cyan-text">Datos personales:</label>
                                    <PersonModule />

                                    <p class="cyan-text">Datos de la cuenta:</p>
                                    <AccountModule />
                                    <div className="text-center py-4 mt-3">
                                        <button className="btn btn-outline-deep-orange" onClick={this.onClick} type="submit">Registrar</button>
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
export default RegisterAdmin;