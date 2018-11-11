
import React, { Component } from "react";
import { Input } from 'mdbreact';

class AccountModule extends Component {


    render() {

        return (
            <div className="row">
                <div className="col">
                    <Input label="Email" group type="email" validate error="wrong" success="right" />

                    <Input label="Confirma Email" group type="text" validate error="wrong" success="right" />
                </div>
                <div className="col">
                    <Input label="Your password" group type="password" validate />
                </div>
            </div>
        );


    }
}
export default AccountModule;