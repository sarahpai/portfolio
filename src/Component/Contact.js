import React from 'react';
// import { FormGroup } from 'semantic-ui-react';

function Contact(props) {
	return (
		<>
			<section className="form">
			<span>Connect with me!</span>
				<form action="mailto:pai.sarah89@gmail.com" method="post" enctype="text/plain">
				<label>Your name:</label>
				<input type="text" name="yourName" value=""></input><br></br>
				<label>Your Email:</label>
				<input type="email" name="yourEmail" value=""></input><br></br>
				<label>Your message:</label>
				<textarea name="name" rows="10" cols="30"></textarea><br></br>	
				<input type="submit" name=""></input>
				</form>


			</section>
		</>	
		
	)
}
export default Contact;