import React from 'react';
import '../assets/css/project.css';
// import youtube from '../assets/images/youtube.png'
// import reactbooth from '../assets/images/reactbooth.png'
// import yelpntable from '../assets/images/yelpntable.png'


const Project = (props) => {

		return (
			<>
				<h2 className="header"><h2 id="tech-header">Technical</h2> &nbsp;portfolio  </h2>
				
				<div className="project-info-01">
					<h4>Timeline</h4>
						<p>3 weeks</p>
					<h4>Language</h4>
						<p>React</p>
						<p>Redux</p>
						<p>Thunk</p>
						<p>Rails API</p>
						<p>JWT Auth</p>
						<p>HTML2Canvas API</p>
						<p>CSS</p>
						<p>HTML</p>
						<p>Custom designed photo frames by me</p>
					<h4>Code</h4>
					<a className="github-link" href="https://www.github.com/sarahpai/photobooth-frontend" target="_blank" >Github Frontend</a>
				</div>
				<div id="project-container">
					<div id="box-wrapper">
					<section className="box">
						<h1 id="project-number">01.</h1>
						<p className="project-name">React Booth App</p>
						<p className="description">Photo booth app that challenges user's creative photo taking skills through fun mission focused frames</p>
						{/* <img src={reactbooth} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="reactbooth" alt="React booth"></img> */}
						<iframe width={560} height={315} title="reactbooth" src="https://www.youtube.com/embed/LEpe4KuZbeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</section>
					</div>

					<div className="project-info-02">
						<h4>Timeline</h4>
							<p>1 week</p>
						<h4>Language</h4>
							<p>Javascript</p>
							<p>Youtube API</p>
							<p>CSS</p>
							<p>Semantic UI</p>
						<h4>Code</h4>
						<a className="github-link" href="https://www.github.com/sarahpai/karaoke-frontend" target="_blank">GITHUB Frontend</a>
					</div>
					<div id="box-wrapper">
						<section className="box">
							<h1 id="project-number">02.</h1>
							<p className="project-name">KTV Palace</p>
							<p className="description">Unlimited, free, and fun karaoking right from your screen!</p>
							{/* <img src={youtube} style={{ width: "100%" }} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="youtube" alt="Youtube"></img> */}
							<iframe width="560" height="315" title="youtube" src="https://www.youtube.com/embed/WXLtqoH3BVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</section>
					</div>

					<div className="project-info-03">
						<h4>Timeline</h4>
							<p>1 week</p>
						<h4>Language</h4>
							<p>Ruby on Rails</p>
							<p>Google Map API</p>
							<p>Bootstrap</p>
							<p>Semantic UI</p>
						<h4>Code</h4>
						<a className="github-link" href="https://www.github.com/sarahpai/mod2-final-project" target="_blank">GITHUB Frontend</a>
					</div>
					<div id="box-wrapper">
						<section className="box">
							<h1 id="project-number">03.</h1>	
							<p className="project-name">Yelp N Table</p>
							<p className="description">Making reservations to the hottest restaurants in New York is just as easy as writing and awesome review!</p>
							{/* <img src={yelpntable} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="yelpntable" alt="YelpNtable"></img> */}
							<iframe width="560" height="315" title="yelpNtable" src="https://www.youtube.com/embed/O967-J5qUl4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</section>
					</div>			
				</div>
			</>

		)
}
export default Project;