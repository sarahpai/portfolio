import React from 'react'
import '../assets/css/navbar.css'
// import about from './About'
// import landing from './Landing'
// import contact from './Contact'
// import project from './Project'
class NavBar extends React.Component {

	// state = { activeItem: 'about' }

	// handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
	render() {
		//  const { activeItem } = this.state

		return (
			<>
				<div className="navbar">
					<div id="menu-mobile">
						<hr id="hamburger"></hr>
						<hr id="hamburger"></hr>
						<hr id="hamburger"></hr> 
						<p>Menu</p>
					</div>

					<span className="menu"><a href="#">About</a></span> 
					<span className="menu"><a href="https://www.paisarah.com/project">Work</a></span> 
					<span className="menu"><a href="https://www.paisarah.com/project">Contact</a></span> 
					<h1 id="title">Hello!</h1>
					<h3>I'm a</h3>
					<span id="who-i-am"> </span>
					<hr></hr>
				
					<div id="footer">
						<span>
						<a href="www.linkedin.com/in/sarahpai">
							<i className="fab fa-linkedin-in fa-2x"></i>
						</a>
						<a href="www.medium.com/paisarah89">
							<i class="fab fa-medium-m fa-2x"></i>
						</a>
						<a href="www.github.com/sarahpai">
					    	<i class="fab fa-github fa-2x"></i>
						</a>


						</span>
					</div>
				</div>
				
			</>
	)
}

}
export default NavBar;