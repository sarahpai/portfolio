import React from 'react'
import About from './About'
import computer from '../assets/images/computer-placeholder.jpg'
import drawing from '../assets/images/drawing-placeholder.jpg'
import '../assets/css/app.css'
class Homepage extends React.Component {
	render() {
		return (
			<>
				<div className="row">
					<div className="column">
						<img width={700} height={700} src={computer} alt="computer"></img>
					</div>
					<div className="column">
						<img width={700} height={700} src={drawing} alt="drawing"></img>
					</div>
				</div>
			<hr></hr>
				
			</>
		)
	}
}
export default Homepage;