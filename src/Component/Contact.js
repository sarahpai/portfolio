import React from 'react';
// import { FormGroup } from 'semantic-ui-react';
import '../assets/css/connect.css'

function Contact(props) {
	return (
		<>
			<div id="square"></div>
			<div id="square2"></div>
			<section className="form">
				<span id="title">Get in touch</span>
			</section>
			
				<article id="location">
				<i class="fas fa-map-marker-alt"></i>
				<h6>Location</h6>
				<p>New Jersey • New York</p>
				</article>
				<article id="email">
				<i class="fas fa-envelope"></i>
				<h6>Email</h6>
				<p>pai.sarah89@gmail.com</p>
				</article>
				<article id="resume">
				<i class="far fa-file"></i>
				<h6>Resume</h6>
				<a id="csv" href="https://uploads-learn.s3.amazonaws.com/uploads/resume/5c4b980f-78fa-4e19-bf05-6fb2650c9a24/Sarah_Pai_Resume.pdf" target="_blank">Download</a>
				</article>
			
				<article id="social-media-icon">
				<h6>Follow me</h6>
				<a href="https://www.instagram.com/spai" target="_blank">
					<i id="social-media" className="fab fa-instagram fa-2x"></i>
                </a>
				<a href="https://www.linkedin.com/in/sarah-pai" target="_blank">
                  <i id="social-media" className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://medium.com/@pai.sarah89" target="_blank">
                  <i id="social-media" class="fab fa-medium-m fa-2x"></i>
                </a>
                <a href="https://www.github.com/sarahpai" target="_blank">
                  <i id="social-media" class="fab fa-github fa-2x"></i>
				</a>
				</article>
		</>	
		
	)
}
export default Contact;