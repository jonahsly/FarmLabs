import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/orders" className="title">My orders</Link>
				</li>
				<li>
					<Link to="/my-account">My account</Link>
				</li>
				<li>
					<Link to="/login">Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
