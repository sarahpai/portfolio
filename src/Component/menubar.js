import React from 'react';
import '../assets/css/menubar.css'
import computer from '../assets/images/computer-placeholder.jpg'
import drawing from '../assets/images/drawing-placeholder.jpg'

class Menubar extends React.Component {

	render() {
		return (
			<>
				<section className="row">
					<div className="column-one">
						<a href="www.linkedin.com/in/sarahpai">
							<i className="fab fa-linkedin-in fa-2x"></i>
						</a>
						<a href="www.medium.com/paisarah89">
							<i class="fab fa-medium-m fa-2x"></i>
						</a>
						<a href="www.github.com/sarahpai">
					    	<i class="fab fa-github fa-2x"></i>
						</a>
					
						{/* <div className="line">
						<div className="wordwrapper">
							<a className="word">
							ABOUT
							</a> 
							</div>
						</div>
					<div className="wrapper">
					  <div className="line">
						<div className="wordwrapper">
							<a className="word" id="work">
								WORK
							</a>
						</div>
					  </div>
					</div> */}
						<article>
							<span>HELLO!</span>
							<p>scroll to see my work</p>
						</article>
					</div>
					<div className="column-two">
						<article>
					
						</article>
					</div>
				</section>
				
				<div className="wrapper">
					<div className="line">
						<div className="wordwrapper">
							<a className="word">
							ABOUT
							</a> 
						</div>
					</div>
				</div>
			
			
			
				</>
		)
	}
}
export default Menubar