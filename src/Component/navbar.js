import React from 'react'
import '../assets/css/navbar.css'
import about from './About'
import landing from './Landing'
import contact from './Contact'
import project from './Project'
class NavBar extends React.Component {

	state = {
		activeItem: 'about'
	}

	componentDidMount() {
		return({landing})
	}

	handleItemClick = (event) => {
		console.log("clicked", event.target.name);
		// let clickedLink;
		switch (event.target.name) {
			case "about":
				return (<about/>)
				break;
			case "work":
				return (<project/>)
				break;
			case "contact":
				return (<contact/>)
				break;
			default:
				return (<landing/>)
				break;
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

					<span className="menu"><a onClick={(event)=> this.handleItemClick(event)} name="about">About</a></span> 
					<span className="menu"><a onClick={(event) => this.handleItemClick(event)} name="work">Work</a></span> 
					<span className="menu"><a onClick={(event) => this.handleItemClick(event)} name="contact">Contact</a></span> 
					<h1 id="title">Hello!</h1>
					<h3>I'm a</h3>
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