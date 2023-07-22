import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';


const Navbar = () => {
return (
	<div className='navbar'>
	<Nav>
    
		<Bars />
		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		</NavMenu>
	</Nav>
	</div>
);
};

export default Navbar;


