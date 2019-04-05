import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// import NavBar from './Component/navbar';
import About from './Component/About';
import Project from './Component/Project';
import Connect from './Component/Contact';
import './assets/css/navbar.css';
import './assets/css/app.css';
class App extends Component {

  render() {
    return (
      
      <Router>
        <>
          <div className="navbar">
          <Link to={"/about"} className="menu"> About </Link>
            <Link to={"/project"} className="menu"> Project </Link>
            <Link to={"/connect"} className="menu"> Connect </Link>    

            <div id="menu-mobile">
              <hr id="hamburger"></hr>
              <hr id="hamburger"></hr>
              <hr id="hamburger"></hr>
              <p>Menu</p>
            </div>

          <h1 id="title">Hello!</h1>
          <h3>I'm</h3>
          <span id="who-i-am"> </span>
          <hr id="underline"></hr>
				
            <div id="footer">
            </div>
          </div>
          <Switch>
          <Route exact path="/" render={() => <Redirect to="/about" />} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/connect" component={Connect} />
        </Switch>
        </>
      </Router> 
    );
  }
}

export default App;
