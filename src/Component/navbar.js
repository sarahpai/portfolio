import React from 'react'
import '../assets/css/navbar.css'
// import about from './About'
// import landing from './Landing'
// import contact from './Contact'
// import project from './Project'
// import { Link } from 'react-router-dom'
class NavBar extends React.Component {

	state = { activeItem: 'about' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
	render() {
		//  const { activeItem } = this.state

		return (
			<>
					{/* <div className="navbar">
						<span className="menu"><Link to="/">About</Link></span> 
						<span className="menu"><Link to="https://www.paisarah.com/project">Project</Link></span> 
						<span className="menu"><Link to="https://www.paisarah.com/contact">Contact</Link></span> 
					</div> */}
				<p>Gu</p>
			</>
	)
}

}
export default NavBar;