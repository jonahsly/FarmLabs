import React, { Link } from 'react';
import './Menu.css';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/orders" className="title">My orders</a>
				</li>
				<li>
					<a href="/my-account">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;