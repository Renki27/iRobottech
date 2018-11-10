import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
//import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="container-contact">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Card>
                                    <CardBody>
                                        <form>
                                            <p className="h5 text-center mb-4">¡ESCRÍBENOS!</p>
                                            <div className="grey-text">
                                                <Input label="Tu nombre" icon="user" group type="text" validate error="wrong" success="right" />
                                                <Input label="Tu e-mail" icon="envelope" group type="email" validate error="wrong" success="right" />
                                                <Input label="Asunto" icon="tag" group type="text" validate error="wrong" success="right" />
                                                <Input type="textarea" rows="2" label="Tu mensaje" icon="pencil" />
                                            </div>
                                            <div className="text-center">
                                                <Button outline color="secondary">Enviar<Fa icon="paper-plane-o" className="ml-1" /></Button>
                                            </div>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;