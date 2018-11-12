import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import FooterPage from '../components/Footer.jsx';
import HomeCarousel from '../components/Carousel';

class Home extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <HomeCarousel />
                <div className="container">
                
                </div>
                <FooterPage />
            </div>
        );
    }
}

export default Home;