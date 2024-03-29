import React from 'react';
// motion 
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
//img
import img1 from "../assets/MarvelProjScreen.png";
import img2 from "../assets/netflix-clone.png";
import img3 from "../assets/uujobsScreen.png";
const Work = () => {
	return (
		<section className='section h-full' id='work'>
			<div className="container mx-auto">
				<div className='flex flex-col lg:flex-row gap-x-10'>
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: true, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
						{/* text */}
						<div className='flex-1 flex flex-col  mb-10 lg:mb-0'>
							<h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
							<p className='max-w-sm mb-16'>My latest ones, which can be found on GitHub</p>
							<a className='btn btn-sm  text-center flex items-center justify-center' href="https://github.com/MaximusBro" rel="noreferrer" target="_blank" >View all projects</a>
						</div>
						{/* img */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
							{/* pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'><a target="_blank" rel="noreferrer" href='https://maximusbro.github.io/Marvel-Project--React-/'>Marvel Project</a></span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<p className='text-xl text-white'>Web application for viewing marvel heroes and comics</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: true, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-10'>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
							{/* pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'><a target="_blank" rel="noreferrer" href='https://clone-popular-videos-maximusbro.vercel.app/auth'>Netflix clone</a></span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<p className=' text-xl text-white'>Fullstack app using Next.js, MongoDB, Prisma</p>
							</div>
						</div>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
							{/* pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'><a target="_blank" rel="noreferrer" href='https://uujobs.ca/'>UUJobs</a></span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-xl text-white'>Commercial job search project</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
};

export default Work;
