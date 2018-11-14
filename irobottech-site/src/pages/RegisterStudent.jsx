import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import './RegisterStudent.css';
import { Container, Row, Col, Card, CardBody, Input } from 'mdbreact';



class RegisterStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            idNumber: '',
            birthDate: '',
            phone: '',
            address: '',
            guardianName: '',
            guardianID: '',
            emergencyPhone: '',
            email: '',
            emailConfirm: ''
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputNumberValidator = this.inputNumberValidator.bind(this);

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    inputNumberValidator(event) {
        const re = /^[0-9\b]+$/;
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // if value is not blank, then test the regex

        if ((value === '') || (re.test(value))) {
            this.setState({
                [name]: value
            });
        }
    }


    validateForm() {
        return (
            (this.state.name.length > 0) && (this.state.phone.length === 8) && (this.state.id.lengh < 9)
        );
    }


    handleSubmit = evt => {
        /* alert(
             `Datos:
              Nombre: ${this.state.name} 
              Apellido: ${this.state.lastName}
              idNumber: ${this.state.idNumber} 
              birthDate: ${this.state.birthDate} 
              phone: ${this.state.phone} 
              address: ${this.state.address} 
              guardianName: ${this.state.guardianName} 
              guardianID:${this.state.guardianID} 
              emergencyPhone: ${this.state.emergencyPhone} 
              email: ${this.state.email}                          
              `);*/
        evt.preventDefault();
        console.log(this.state);
        //axios.post
    }


    validateEmail(event) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(event);
    }

    validateNumbers(evt) {
        const keyCode = evt.keyCode || evt.which;
        const keyValue = String.fromCharCode(keyCode);
        if (/\+|-/.test(keyValue))
            evt.preventDefault();
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container >
                    <Row>
                        <Col md="8" className="mx-auto">
                            <Card>
                                <h3 className="text-center font-weight-bold pl-0 my-4">Registro de estudiante</h3>
                                <CardBody>

                                    <div className="container">
                                        <form onSubmit={this.handleSubmit}>
                                            <label className="cyan-text">Datos personales:</label>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        name="name"
                                                        label="Nombre Completo"
                                                        maxLength="25"
                                                        value={this.state.name}
                                                        onChange={this.handleInputChange}
                                                        type="text"
                                                        required
                                                    />

                                                </div>
                                                <div className="col">
                                                    <Input
                                                        label="Apellidos"
                                                        name="lastName"
                                                        maxLength="25"
                                                        value={this.state.lastName}
                                                        onChange={this.handleInputChange}
                                                        type="text"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Cédula"
                                                        name="idNumber"
                                                        maxLength="25"
                                                        value={this.state.idNumber}
                                                        onChange={this.inputNumberValidator}
                                                        type="text"
                                                        required

                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <Input
                                                        label="Fecha Nacimiento"
                                                        name="birthDate"
                                                        value={this.state.birthDate}
                                                        onChange={this.handleInputChange}
                                                        type="date"
                                                        hint="00/00/0000 "
                                                        required />
                                                </div>
                                                <div className="col">
                                                    <Input
                                                        label="Teléfono"
                                                        name="phone"
                                                        maxLength="8"
                                                        value={this.state.phone}
                                                        onChange={this.inputNumberValidator}
                                                        type="text"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Dirección"
                                                        name="address"
                                                        value={this.state.address}
                                                        onChange={this.handleInputChange}
                                                        type="textarea"
                                                        hint="Dirección exacta"
                                                        rows="1"
                                                        maxLength="250"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <p className="cyan-text">Datos del encargado:</p>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Nombre Completo Encargado"
                                                        name="guardianName"
                                                        value={this.state.guardianName}
                                                        onChange={this.handleInputChange}
                                                        type="text"
                                                        maxLength="50"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Cédula de encargado"
                                                        name="guardianID"
                                                        maxLength="25"
                                                        value={this.state.guardianID}
                                                        onChange={this.inputNumberValidator}
                                                        type="text"
                                                        required />
                                                </div>
                                                <div className="col">
                                                    <Input
                                                        label="Teléfono de encargado"
                                                        name="emergencyPhone"
                                                        maxLength="8"
                                                        value={this.state.emergencyPhone}
                                                        onChange={this.inputNumberValidator}
                                                        type="text"
                                                        required />
                                                </div>
                                            </div>
                                            <p className="cyan-text">Datos de la cuenta:</p>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Email"
                                                        name="email"
                                                        maxLength="30"
                                                        value={this.state.email}
                                                        onChange={this.handleInputChange}
                                                        hint="ejemplo@mail.com"
                                                        type="email"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <Input
                                                        label="Confirma Email"
                                                        name="emailConfirm"
                                                        maxLength="30"
                                                        value={this.state.emailConfirm}
                                                        onChange={this.handleInputChange}
                                                        hint="ejemplo@mail.com"
                                                        type="email"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="text-center py-4 mt-3">
                                                <button className="btn btn-outline-deep-orange" type="submit">Registrar</button>
                                            </div>
                                        </form>
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
