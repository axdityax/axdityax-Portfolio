import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./MyWork.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const sliderRef = useRef(null);
	const titleIntroRef = useRef(null); // Create a ref for the title intro

	// Slider settings
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: activeSlide,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	// Function to handle image click and navigate to the title intro
	const handleImageClick = (index) => {
		setActiveSlide(index);
		sliderRef.current.slickGoTo(index);

		// Scroll to the title intro
		if (titleIntroRef.current) {
			titleIntroRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div id='work' className='mywork'>
			<div className='dummy'></div>

			<div ref={titleIntroRef} className='title-box'>
				<h1>My Latest Work</h1>
				<img src={theme_pattern} alt='' />
			</div>

			<div className='title-intro'>
				<p>
					Welcome to my projects gallery. Swipe through the projects to see live demos,
					source code, and more!
				</p>
			</div>

			<div className='mywork-slider'>
				<Slider {...settings} ref={sliderRef}>
					{mywork_data.map((work, index) => (
						<div key={index} className='work-item'>
							<img src={work.w_img} alt={work.w_name} />
							<div className='item-footer'>
								<div className='footer-name'>{work.w_name}</div>
								<div className='work-links'>
									{work.github && (
										<>
											<a
												href={work.github}
												target='_blank'
												rel='noopener noreferrer'>
												GitHub
											</a>
											<hr />
										</>
									)}

									{work.videoDemo && (
										<>
											<a
												href={work.videoDemo}
												target='_blank'
												rel='noopener noreferrer'>
												Video
											</a>
											<hr />
										</>
									)}

									{work.liveDemo && (
										<>
											<a
												href={work.liveDemo}
												target='_blank'
												rel='noopener noreferrer'>
												Live
											</a>
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>

			{/* Static display of all projects */}
			<div className='all-projects'>
				<h2>All Projects</h2>
				<div className='mywork-container'>
					{mywork_data.map((work, index) => (
						<div
							key={index}
							className='work-item'
							onClick={() => handleImageClick(index)} // On image click, navigate to the title intro
							style={{ cursor: "pointer" }} // Change cursor to pointer on hover
						>
							<img src={work.w_img} alt={work.w_name} />
							<h3>{work.w_name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyWork;
