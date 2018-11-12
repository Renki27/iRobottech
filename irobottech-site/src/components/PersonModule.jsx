import React, { Component } from "react";
import { Input } from 'mdbreact';
import './PersonModule.css';

class PersonModule extends Component {





    render() {

        return (
            <div className="container">
                <form>
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
                        <div className="col-6">
                            <Input label="Fecha Nacimiento" type="date" hint="00/00/0000 " validate error="wrong" success="right" />
                        </div>
                        <div className="col">
                            <Input label="Teléfono" group type="text" validate error="wrong" success="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Input label="Dirección" group type="textarea" hint="Dirección exacta" rows="2"validate error="wrong" success="right" />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
export default PersonModule;



