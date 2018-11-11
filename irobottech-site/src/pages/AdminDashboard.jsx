import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import ASTabs from '../components/ASTabs'

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <ASTabs />


                </div>
                <FooterPage />
            </div>
        );
    }
}

export default AdminDashboard;