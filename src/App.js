import React, { Component } from 'react';
import NavBar from './Component/navbar';
import Homepage from './Component/Homepage';
import './css/app.css'
class App extends Component {
 
  render() {
    return (
      <>
        <NavBar />
        <Homepage />
      </>
    )
  }
}

export default App;
