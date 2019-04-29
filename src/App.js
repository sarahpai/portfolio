import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// import NavBar from './Component/navbar';
import About from "./Component/About";
import Project from "./Component/Project";
import Connect from "./Component/Contact";
import Homepage from "./Component/Homepage";
import "./assets/css/navbar.css";
import "./assets/css/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Nav Start */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
                  <a className="navbar-brand" href="#">
                    Sarah Pai
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                      <li className="nav-item">
                        <h1 id="title">Hello</h1>
                      </li>
                      <li className="nav-item">
                        <span id="who-i-am">
                          <h3>I'm</h3>
                        </span>
                      </li>
                      <li className="nav-item">
                        <hr id="underline" />
                      </li>
                      <li className="nav-item active">
                        <Link to={"/about"} className="menu nav-link">
                          About
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to={"/project"} className="menu nav-link">
                          Project
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/connect"} className="menu nav-link">
                          Connect
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* <ul className="navbar-default nav justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h1 id="title">Hello</h1>
              </li>
              <li className="nav-item">
                <span id="who-i-am">
                  <h3>I'm</h3>
                </span>
              </li>
              <li className="nav-item">
                <hr id="underline" />
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="menu">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/project"} className="menu">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/connect"} className="menu">
                  Connect
                </Link>
              </li>
            </ul>
            <div id="footer" />
          </ul> */}
          <About />
          {/* <div className="navbar">
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
          </div> */}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/homepage" />} />
            <Route path="/home" component={Homepage} />
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
