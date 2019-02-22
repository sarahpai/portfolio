import React, { Component } from 'react';
// import NavBar from './Component/navbar';
import Landing from './Component/Landing';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
class App extends Component {
 
  render() {
    return (
      <>
        <Landing />
        <About />
        <Project />
        <Contact /> 
      </>
    )
  }
}

export default App;
