import React from 'react';
import pfpic from '../assets/images/profilepic.jpg'
import '../assets/css/about.css'
// import '../assets/css/project.css'
class About extends React.Component {

	render() {
		return (
			<>
				<div id="background">
				<h2 className="header"><h2 id="tech-header" style={{marginLeft: "60%", marginTop: "15%"}}>Who</h2>&nbsp;am I?</h2>
				<section className="box-wrapper">
						<p id="description">
							Grew up loving all things creative and beautiful. 
							My passion for coding started when I was exposed to a blogging platform called Xanga. I was hooked and spent endless nights researching HTML, flash, and collaborating with other developers to create my very own customized blog page. Since then I have honed my skills in the arts but realized I was missing my other half. As a full stack developer, I use grit, compassion, and creativity to create meaningful products that inspire others.	
						</p>
				</section>
				</div>
			</>
		)
	}
}
export default About;