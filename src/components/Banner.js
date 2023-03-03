import React from 'react';
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type animations  
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
	return <section className='section' id='home'>
		<div className="container mx-auto">
			<div className='flex flex-col gapy-y-8 lg:flex-row lg:items-center'>
				{ /*text */}
				<div className='flex-1 text-center font-secondary lg:text-left'>
					<h1 className='text-[55px] font-bold leading-[0.8]  lg:text-[110px]'>MAKSYM <span>SHYDLOVSKYI</span></h1>
					<div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-1'>
						<span className='text-white mr-2 mb-10'>I am a </span>
						<TypeAnimation
							sequence={[

								"Frontend Dev",
								2000,
								"React Dev",
								2000,
							]}
							speed={50}
							className=" text-accent"
							wrapper='span'
							repeat={Infinity} />
					</div>
					<p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Eius sunt quibusdam
						maiores quam pariatur cumque hic rem vel sequi ex qui error,
						fugiat eaque blanditiis vitae doloribus perspiciatis, corrupti optio.</p>
					<div className='flex  gap-x-6 items-center mb-12 mx-auto max-w-max'>
						<button className='btn btn-lg'>Contact me</button>
						<a href="#" className='text-gradient btn-link'>My Portfolio</a>
					</div>
					<div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
						<a href="#">
							<FaYoutube />
						</a>
						<a href="#">
							<FaGithub />
						</a>
						<a href="#">
							<FaDribbble />
						</a>
					</div>
				</div>


				{/*socials*/}

				{ /*image */}
				<div>
					<img src={Image} alt="" />
				</div>
			</div>
		</div >
	</section >;
};

export default Banner;
