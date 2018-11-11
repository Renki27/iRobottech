import React, { Component } from "react";
import { Input} from 'mdbreact';
import './PersonModule.css';

class PersonModule extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            dateRawValue: ''
        };

        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(event) {
        this.setState({ dateRawValue: event.target.rawValue });
    }

    validateEmail(event) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(event);
    }
    handleEmailInput(event) {
        this.setState({
            email: event.target.value
        });
    }



    render() {

        return (
            <div className="container">
                <form>
                    <h3 className="h4 text-center py-4">Datos Personales</h3>
                    <div className="row">
                        <div className="col">
                            <Input label="Nombre Completo" group type="text" validate error="wrong" success="right" />
                        </div>
                        <div className="col">
                            <Input label="Apellidos" group type="text" validate error="wrong" success="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Input label="Cédula" hint="9 dígitos" group type="text" validate error="wrong" success="right" />
                        </div>
                        <div className="col-8">
                            <Input label="Fecha Nacimiento" type="date" hint="00/00/0000 " validate error="wrong" success="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Input label="Dirección" group type="text" validate error="wrong" success="right" />
                        </div>
                        <div className="col">
                            <Input label="Teléfono" group type="text" validate error="wrong" success="right" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default PersonModule;



