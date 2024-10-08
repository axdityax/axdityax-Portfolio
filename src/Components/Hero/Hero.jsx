import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Aditya.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
	const handleResumeClick = () => {
		window.open(
			"https://drive.google.com/file/d/1gJFP2th3vVcMFi5u3lSSLMFmoJDo2kwf/view?usp=sharing",
			"_blank"
		);
	};

	return (
		<div id='home' className='hero'>
			<img src={profile_img} alt='' className='profile-img' />
			<h1>
				<span>I'm Aditya,</span> Full Stack Developer based in India.
			</h1>

			<div className='hero-action'>
				<div className='hero-connect'>
					<AnchorLink className='anchor-link' offset={50} href='#contact'>
						Connect with me
					</AnchorLink>
				</div>
				<div className='hero-resume' onClick={handleResumeClick}>
					My resume
				</div>
			</div>
		</div>
	);
};

export default Hero;
