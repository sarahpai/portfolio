import React from 'react';
import '../assets/css/menubar.css'
import computer from '../assets/images/computer-placeholder.jpg'
import drawing from '../assets/images/drawing-placeholder.jpg'
import '../assets/css/app.css'

class Menubar extends React.Component {

	render() {
		return (
			<>
				<div className="wrapper">
					<div className="column">
							<img width={700} height={700} src={drawing} alt="drawing"></img>
					</div>
					<div className="column">
							<img width={700} height={700} src={computer} alt="computer"></img>
					</div>
					<div className="line">
						<div className="wordwrapper">
							<div className="word">
							ABOUT
							</div> 
						</div>
					</div>
				</div>
				<div className="wrapper">
					
					<div className="line">
						<div className="wordwrapper">
							<div className="word" id="work">
								WORK
							</div>
						</div>
					</div>
				</div>
			
			
				</>
		)
	}
}
export default Menubar