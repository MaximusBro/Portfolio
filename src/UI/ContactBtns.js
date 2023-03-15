import React from 'react';
import { Link } from "react-scroll"
const ContactBtns = () => {
	return (
		<>
			<Link
				smooth={true}
				spy={true}
				to='contact'
				as='button'
				className=' cursor-pointer btn btn-lg text-center items-center flex'>
				Contact me
			</Link>

			<Link
				smooth={true}
				spy={true}

				to='work'
				as='a'
				className=' cursor-pointer text-gradient btn-link bg-inherit'>
				Portfolio
			</Link>
		</>

	);
}

export default ContactBtns;
