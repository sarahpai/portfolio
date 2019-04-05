import React from 'react';
import '../assets/css/project.css';
import youtube from '../assets/images/youtube.png'
import reactbooth from '../assets/images/reactbooth.png'
import yelpntable from '../assets/images/yelpntable.png'



const handleClick = (event) => {


	// Get the modal
	// var modal = document.getElementById('myModal');
	// // console.log(modal);

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// // When the user clicks on the button, open the modal 
	// modal.style.display = "block";

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	// 	modal.style.display = "none";
	// }

	// When the user clicks anywhere outside of the modal, close it
	// window.onclick = function(event) {
	// 	if (event.target === modal) {
	// 		modal.style.display = "none";
	// 	}
	// }

	console.log(event.target.name);
	let selectedFrame;
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	}
		switch (event.target.name) {
			
			case "youtube":
				return (
					<>
					<p id="header">YOUTUBE KARAOKE </p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/WXLtqoH3BVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</>
				)
			break;
			case "reactbooth":
				return (
					
				<>
							<p id="header">REACT BOOTH APP</p>
							<iframe width={560} height={315} src="https://www.youtube.com/embed/LEpe4KuZbeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</>
				)
				break;
			case "yelpntable":
				// selectedFrame = aliFrame
				break;
			default:
				selectedFrame = ""
				} console.log("frame selected", selectedFrame)
		}
		  
const Project = (props) => {

		return (
			<>
					
				{/* <!-- Container (Portfolio Section) --> */}
			{/* <div className="w3-content w3-container w3-padding-24" id="portfolio">
			<span id="header" className="w3-center">Technical Projects</span>
			<p className="w3-center"><em>Click on the images to make them bigger</em></p><br></br> */}

				{/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
			{/* <div className="w3-row-padding w3-center">
					<div className="w3-col m3">
						<img src={youtube} style={{ width: "100%" }} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="youtube" alt="Youtube"></img>
						<p>youtube</p>
					</div>

					<div className="w3-col m3">
						<img src={reactbooth} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="reactbooth" alt="React booth"></img>
						<p>react booth</p>
					</div>

					<div className="w3-col m3">
						<img src={yelpntable} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="yelpntable" alt="YelpNtable"></img>
						<p>yelpntable</p>
					</div> */}

					{/* <div className="w3-col m3">
					<img src={youtube} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" alt="Extra"></img>
					</div> */}
				{/* </div> */}
			{/* </div> */}

		
				{/* <section className="box">
				<span id="header">My works</span>
					<div id="left"><p id="title">Technical</p></div>
					<div id="right"><p id="title">Graphic</p></div>
					<div id="middle"><p id="title">Fashion</p></div>
				</section> */}
				<section className="box">
					<span className="header">Portfolio</span>
					<hr></hr>
					<p className="project-name">REACT BOOTH APP</p>
					{/* <img src={reactbooth} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="reactbooth" alt="React booth"></img> */}
					<iframe width={560} height={315} src="https://www.youtube.com/embed/LEpe4KuZbeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<a href="">GITHUB</a>
				</section>

					
				<section className="box">
					<p className="project-name">YOUTUBE KARAOKE </p>
					{/* <img src={youtube} style={{ width: "100%" }} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="youtube" alt="Youtube"></img> */}
					<iframe width="560" height="315" src="https://www.youtube.com/embed/WXLtqoH3BVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<a href="">GITHUB</a>
				</section>

		
					
				<section className="box">
					<p className="project-name">YELPnTABLE</p>
					{/* <img src={yelpntable} style={{width: "100%"}} onClick={(e)=>handleClick(e)} className="w3-hover-opacity" name="yelpntable" alt="YelpNtable"></img> */}
					<iframe width="560" height="315" src="https://www.youtube.com/embed/O967-J5qUl4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<a href="">GITHUB</a>
				</section>
			</>

		)
}
export default Project;