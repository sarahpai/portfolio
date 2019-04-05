import React, { Component } from 'react';

import NavBar from './Component/navbar';
import Landing from './Component/Landing';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';

import './assets/css/app.css'
class App extends Component {
 
  render() {
    return (
            <React.Fragment>
              <NavBar /> 
              <Landing />
              <About />
              <Project />
              <Contact /> 
            </React.Fragment>


     
    )
  }
}

export default App;
