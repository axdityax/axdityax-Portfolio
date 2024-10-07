import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Aditya.png";

const About = () => {
	return (
		<div id='about' className='about'>
			<div className='dummy'></div>
			<div className='title-box'>
				<h1>About me</h1>
				<img src={theme_pattern} alt='' />
			</div>
			<div className='about-sections'>
				<div className='about-left'>
					<div className='dummy'></div>
					<img src={profile_img} alt='' />
				</div>
				<div className='about-right'>
					<div class='about-container'>
						<h3>Passionate Full Stack Developer 🌟</h3>
						<div class='skills'>
							<p>
								<strong>Technologies:</strong> Node.js | MongoDB | PostgreSQL |
								React | Express | JavaScript
							</p>
							<p>
								<strong>Expertise:</strong> Crafting responsive web applications
							</p>
						</div>

						<h3>My Journey</h3>
						<div class='journey'>
							<p>
								I may be at the start of my professional career, but I’ve
								already:
							</p>
							<ul>
								<p>
									<strong>Completed</strong> multiple projects showcasing my
									capability to create innovative solutions.
								</p>
								<p>
									<strong>Cultivated</strong> a strong enthusiasm for continuous
									learning and improvement.
								</p>
							</ul>
						</div>

						<h3>Internship Experience</h3>
						<div class='internships'>
							<ul>
								<p>
									<strong>Full Stack Developer</strong> at Progressive Techno
									Systems
									<br />
									<em>Duration: Feb 2024 - Jul 2024</em>
									<br />
									{/* Developed, tested, and deployed new features on web applications
									using JavaScript, and React. Implemented RESTful API endpoints
									with Node.js and Analyzed user feedback and implemented design
									changes based on customer requirements. */}
								</p>
								<br />
								<p>
									<strong>Backend Developer</strong> S.R Infotech
									<br />
									<em>Duration: Oct 2023 - Dec 2023</em>
									<br />
								</p>
							</ul>
						</div>

						<h3>Let's Collaborate!</h3>
						<div class='collaboration'>
							<p>I’m eager to:</p>
							<ul>
								<p>
									<strong>Contribute</strong> to groundbreaking projects
								</p>
								<p>
									<strong>Collaborate</strong> with passionate teams to build
									impactful solutions
								</p>
							</ul>
						</div>
					</div>

					{/* 
					<div className='about-skills'>
						<div className='about-skill'>
							<p>JavaScript</p>
							<hr style={{ width: "80%" }} />
						</div>
						<div className='about-skill'>
							<p>React JS</p>
							<hr style={{ width: "80%" }} />
						</div>
						<div className='about-skill'>
							<p>Node.js</p>
							<hr style={{ width: "80%" }} />
						</div>
						<div className='about-skill'>
							<p>Express</p>
							<hr style={{ width: "80%" }} />
						</div>
						<div className='about-skill'>
							<p>MongoDB</p>
							<hr style={{ width: "70%" }} />
						</div>
						<div className='about-skill'>
							<p>Tailwindcss</p>
							<hr style={{ width: "60%" }} />
						</div>
						<div className='about-skill'>
							<p>PostgreSQL</p>
							<hr style={{ width: "40%" }} />
						</div>
					</div> */}
				</div>
			</div>
			{/* <div className='about-achievements'>
				<div className='about-achievement'>
					<h1>2</h1>
					<p>INTERNSHIPS</p>
				</div>
				<hr />
				<div className='about-achievement'>
					<h1>9+</h1>
					<p>PROJECTS COMPLETED</p>
				</div>
			</div> */}
		</div>
	);
};

export default About;
