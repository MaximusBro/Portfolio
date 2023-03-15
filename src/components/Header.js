import React from 'react';
//images
import { Link } from 'react-scroll';
const Header = () => {
	return <header className=' py-8'>
		<div className="container mx-auto">
			<div className='flex justify-center items-center'>

				{/* 		<a href="/">
					<img src={Logo} alt="" />
				</a> */}
				<Link activeClass='active'
					smooth={true}
					spy={true}
					to='contact'
					as='button'
					className=' cursor-pointer btn btn-sm flex items-center '>
					Work with me
				</Link>

			</div>
		</div>
	</header>;
};

export default Header;
