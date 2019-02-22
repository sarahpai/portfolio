import React from 'react'
import About from './About'
import computer from '../assets/images/computer-placeholder.jpg'
import drawing from '../assets/images/drawing-placeholder.jpg'
import '../assets/css/homepage.css'
class Homepage extends React.Component {
	render() {
		return (
			<>
			
				<div className="pic">
					<div className="pic">
						<img width={700} height={700} src={computer} alt="computer"></img>
					</div>
					<div className="pic">
						<img width={700} height={700} src={drawing} alt="drawing"></img>
					</div>
				</div>
				
			</>
		)
	}
}
export default Homepage;