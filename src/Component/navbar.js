import React from 'react'
import '../assets/css/navbar.css'
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom';

import About from './About'
import Landing from './Landing'
import Contact from './Contact'
import Project from './Project'
class NavBar extends React.Component {

	state = {
		activeItem: 'about',
		
	}

	

	handleItemClick = (event) => {
		event.preventDefault();
		console.log("clicked", event.target.name);
		// let clickedLink;
		switch (event.target.name) {
			case "about":
				console.log("yes")
				return (
					<About />
				)
				// break;
			case "work":
				return (<Project/>)
				// break;
			case "contact":
				return (<Contact/>)
				// break;
			default:
				return (<Landing/>)
				// break;
		}
	}

	

	render() {
		 const { activeItem } = this.state

		return (
			<>
				<div className="navbar">
					<div id="menu-mobile">
						<hr id="hamburger"></hr>
						<hr id="hamburger"></hr>
						<hr id="hamburger"></hr> 
						<p>Menu</p>
					</div>

					<Link to={"/about"} className="menu"> About </Link>
					<Link to={"/project"} className="menu"> Project </Link>
					<Link to={"/connect"} className="menu"> Connect </Link>

					
					{/* <span className="menu"><a onClick={(event)=> this.handleItemClick(event)} name="about">About</a></span>  */}
					{/* <span className="menu"><a onClick={(event) => this.handleItemClick(event)} name="work">Work</a></span>  */}
					{/* <span className="menu"><a onClick={(event) => this.handleItemClick(event)} name="connect">Connect</a></span>  */}
					<h1 id="title">Hello!</h1>
					<h3>I'm</h3>
					<span id="who-i-am"> </span>
					<hr></hr>
				
					<div id="footer">
						<span>
						<a href="www.linkedin.com/in/sarahpai">
							<i id="social-media" className="fab fa-linkedin-in fa-2x"></i>
						</a>
						<a href="www.medium.com/paisarah89">
							<i id="social-media" class="fab fa-medium-m fa-2x"></i>
						</a>
						<a href="www.github.com/sarahpai">
					    	<i id="social-media" class="fab fa-github fa-2x"></i>
						</a>
						</span>
					</div>
				</div>
				
			</>
	)
}

}
export default NavBar;