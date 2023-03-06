import React from 'react';
// motion 
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
//img
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
const Work = () => {
	return (
		<section className='section h-full' id='work'>
			<div className="container mx-auto">
				<div>
					<div>
						{/* text */}
						<div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
							<h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
							<p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consequuntur.</p>
							<button className='btn btn-sm'>View all projects</button>
						</div>
						{/* img */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
							{/* pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>UI/UX Design</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>Project Title</span>
							</div>
						</div>
					</div>
					<div>2</div>
				</div>
			</div>
		</section>
	)
};

export default Work;
