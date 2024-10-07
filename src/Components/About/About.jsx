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
					<img src={profile_img} alt='' />
				</div>
				<div className='about-right'>
					<div className='dummy'></div>

					<div className='about-para'>
						<p>
							I am a passionate Full Stack Developer with a strong foundation in
							technologies like Node.js, MongoDB, PostgreSQL, React, Express, and
							JavaScript. Although I am just starting my professional journey, I have
							completed several projects that demonstrate my ability to create dynamic
							and responsive web applications.
						</p>
						<p>
							My enthusiasm for full stack development drives me to continuously learn
							and improve my skills. I am eager to contribute to innovative projects
							and collaborate with teams to build impactful solutions.
						</p>
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
			<div className='about-achievements'>
				<div className='about-achievement'>
					<h1>2</h1>
					<p>INTERNSHIPS</p>
				</div>
				<hr />
				<div className='about-achievement'>
					<h1>9+</h1>
					<p>PROJECTS COMPLETED</p>
				</div>
			</div>
		</div>
	);
};

export default About;
