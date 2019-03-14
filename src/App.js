import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './Component/navbar';
import Landing from './Component/Landing';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
class App extends Component {
 
  render() {
    return (
      <>
        	<Router>
            <React.Fragment>
              <NavBar />
              <Landing />
              <About />
              <Project />
              <Contact /> 
              <Route exact path="/" component={App} />
              <Route path="/" component={Landing} />
            </React.Fragment>

          </Router>
      </>
    )
  }
}

export default App;
