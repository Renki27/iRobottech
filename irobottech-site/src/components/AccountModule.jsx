
import React, { Component } from "react";
import { Input } from 'mdbreact';

class AccountModule extends Component {


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
                <div className="row">
                    <div className="col">
                        <Input label="Email" hint="ejemplo@hotmail.com" group type="email" validate error="wrong" success="right" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input label="Confirma Email"  hint="ejemplo@hotmail.com" group type="text" validate error="wrong" success="right" />
                    </div>
                </div>
            </div >
        );


    }
}
export default AccountModule;