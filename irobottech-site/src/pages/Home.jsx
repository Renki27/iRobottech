import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import HomeCarousel from '../components/Carousel';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeCarousel />
                <div className="container">
                
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;