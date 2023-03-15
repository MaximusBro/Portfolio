import React from 'react';
// icon
import { BsArrowUpRight } from "react-icons/bs"
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll"
//services data
const services = [
	{
		name: "ReactJs",
		description: "I am proficient in using ReactJS to develop web applications, creating reusable components that improve efficiency, maintainability, and reusability of code.",
		link: "Learn more",
		linkHref: "https://www.linkedin.com/in/maksymshydlovskyi/details/skills/",
		href: "https://reactjs.org/"
	},
	{
		name: "Redux+Redux Toolkit",
		description: "Using Redux and Redux Toolkit to manage state in web applications, creating a predictable and centralized way of handling data flow between components.",
		link: "Learn more",
		linkHref: "https://www.linkedin.com/in/maksymshydlovskyi/details/skills/",
		href: "https://redux.js.org/"
	},
	{
		name: "HTML/CSS/JS, TypeScript",
		description: "I have good skills in website layout using html/css. And good knowledge of Javascript + TypeScript programming languages. With their help, I develop a beautiful interface and interactivity of the site.",
		link: "Learn more",
		linkHref: "https://www.linkedin.com/in/maksymshydlovskyi/details/skills/",
		href: "https://www.typescriptlang.org/"
	},
	{
		name: "GIT",
		description: "I use Git for version control and collaboration on projects, ensuring that changes are tracked, organized, and safely stored. I am familiar with basic Git commands such as pull, push, merge, and commit.",
		link: "Learn more",
		linkHref: "https://www.linkedin.com/in/maksymshydlovskyi/details/skills/",
		href: "https://git-scm.com/"
	}
]

const Services = () => {
	return (
		<section className='section h-full' id='services'>
			<div className="container mx-auto">
				<div className='flex flex-col lg:flex-row '>
					{/* text & image */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: true, amount: 0.3 }}
						className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
						<h2 className='h2 text-accent mb-6'>What i know.</h2>
						<h3 className='h3 max-w-[455px] mb-16'>I'm a Front-end developer with over 1 year of experience.</h3>
						<Link activeClass='active'
							smooth={true}
							spy={true}

							to='work'
							className='self-center'>
							<button className='btn btn-sm '>See my work</button>
						</Link>

					</motion.div>
					{/* services */}
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: true, amount: 0.3 }}
						className='flex-1 '>
						{/* service list */}
						<div>
							{services.map((service, index) => {
								//destructure service
								const { name, description, link, linkHref, href } = service
								return (
									<div className='border-b border-white/20 lg:h-[150px] mb-[50px] flex md:h-[200px]' key={index}>
										<div className='max-w-[476px]'>
											<h4 className='lg:text-[20px] tracking-wider font-primary font-semibold mb-10'>{name}</h4>
											<p className='font-secondary leading-tight'>{description}</p>
										</div>
										<div className='flex flex-col flex-1 items-end'>
											<a href={href} target="_blank" rel="noreferrer" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
											<a href={linkHref} target="_blank" rel="noreferrer" className='text-gradient text-sm'>{link}</a>
										</div>
									</div>
								)
							})}
						</div>
					</motion.div>
				</div>
			</div >
		</section >
	)
};

export default Services;
