import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*Component en minuscula*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
