import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      accountType: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      username: decoded.username,
      email: decoded.email,
      accountType: decoded.accountType
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.accountType}</h1>
        <h1>{this.state.username}</h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default Profile;
