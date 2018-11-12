
import React, { Component } from "react";
import { Input } from 'mdbreact';

class StudentModule extends Component {

    render() {
        return (

            <div className="container">
                <form>
                    <div className="row">
                        <div className="col">
                            <Input label="Nombre Completo Encargado" group type="text" validate error="wrong" success="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Input label="Cédula de encargado" hint="9 dígitos" group type="text" validate error="wrong" success="right" />
                        </div>
                        <div className="col">
                            <Input label="Teléfono de encargado" group type="text" validate error="wrong" success="right" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }


}
export default StudentModule;