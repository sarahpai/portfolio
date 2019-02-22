import React, { Component } from 'react';
import NavBar from './Component/navbar';
import Homepage from './Component/Homepage';
import Menubar from './Component/menubar';
class App extends Component {
 
  render() {
    return (
      <>
        <Menubar />
        <Homepage />
      </>
    )
  }
}

export default App;
