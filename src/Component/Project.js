import React from 'react';
import '../assets/css/project.css';
// import youtube from '../assets/images/youtube.png'
// import reactbooth from '../assets/images/reactbooth.png'
// import yelpntable from '../assets/images/yelpntable.png'


const Project = (props) => {

		return (
			<>
				<h2 className="header"><h2 id="tech-header">Technical</h2> &nbsp;portfolio  </h2>
				
				<div id="project-container">
					<section className="box">
						<h1 id="project-number">01.</h1>
						<p className="project-name">React Booth App</p>
						<p className="description">Photo booth app that challenges user's creative photo taking skills through fun mission focused frames</p>
						{/* <img src={reactbooth} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="reactbooth" alt="React booth"></img> */}
						<iframe width={560} height={315} title="reactbooth" src="https://www.youtube.com/embed/LEpe4KuZbeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<a className="github-link" href="www.github.com/sarahpai/photobooth-frontend" target="_blank" >GITHUB</a>
					</section>

					<section className="box">
						<h1 id="project-number">02.</h1>
						<p className="project-name">KTV Palace</p>
						<p className="description">Unlimited, free, and fun karaoking right from your screen!</p>
						{/* <img src={youtube} style={{ width: "100%" }} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="youtube" alt="Youtube"></img> */}
						<iframe width="560" height="315" title="youtube" src="https://www.youtube.com/embed/WXLtqoH3BVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<a className="github-link" href="www.github.com/sarahpai/karaoke-frontend" target="_blank">GITHUB</a>
					</section>

			
					<section className="box">
						<h1 id="project-number">03.</h1>	
						<p className="project-name">Yelp N Table</p>
						<p className="description">Making reservations to the hottest restaurants in New York is just as easy as writing and awesome review!</p>
						{/* <img src={yelpntable} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="yelpntable" alt="YelpNtable"></img> */}
						<iframe width="560" height="315" title="yelpNtable" src="https://www.youtube.com/embed/O967-J5qUl4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<a className="github-link" href="www.github.com/sarahpai/mod2-final-project" target="_blank">GITHUB</a>
					</section>
				</div>
			</>

		)
}
export default Project;