import React from 'react'
import About from './About'
import pfpic from '../assets/images/profilepic.jpg'
import '../assets/css/homepage.css'
class Homepage extends React.Component {
	render() {
		return (
			<>
				<div className="container">
				<div className="header">
					<span id="title">ABOUT ME</span>
				</div>
				<div className="content">
					<img src={pfpic} alt="profile pic"></img>
					<span id="description">
					My passion for coding started when I was exposed to a blogging platform called Xanga. I was hooked and spent endless nights researching HTML, flash, and collaborating with other developers to create my very own customized blog page. Since then I have honed my skills in the arts but realized I was missing my other half. As a full stack developer, I use grit, compassion, and creativity to create meaningful products that inspire others.	
					</span>
				</div>

				</div>
				
			</>
		)
	}
}
export default Homepage;