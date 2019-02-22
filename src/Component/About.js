import React from 'react';
import pfpic from '../assets/images/profilepic.jpg'
import '../assets/css/about.css'

class About extends React.Component {

	render() {
		return (
			<>
				<section className="container">
					<span id="header">ABOUT ME</span>
					<div className="page-wrap">
						<img src={pfpic} alt="profile pic"></img>
						<p id="description">
							My passion for coding started when I was exposed to a blogging platform called Xanga. I was hooked and spent endless nights researching HTML, flash, and collaborating with other developers to create my very own customized blog page. Since then I have honed my skills in the arts but realized I was missing my other half. As a full stack developer, I use grit, compassion, and creativity to create meaningful products that inspire others.	
						</p>
					</div>
				</section>
				
			</>
		)
	}
}
export default About;