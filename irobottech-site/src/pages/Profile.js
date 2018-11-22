import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import AdminDashboard from "./AdminDashboard";
import ProfessorDashboard from "./ProfessorDashboard";

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
    const adminView = <AdminDashboard />;
    const professorView = <AdminDashboard />;

    return (
      <div>
        {adminView}
        <h1>{this.state.email}</h1>
        <h1>{this.state.accountType}</h1>
      </div>
    );
  }
}

export default Profile;
