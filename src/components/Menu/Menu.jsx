import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';
import { UI_TEXT } from '../../constants/uiText';
import './Menu.css';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				{/* Shared labels keep account/menu copy consistent across screens. */}
				<li>
					<Link to={APP_ROUTES.ORDERS} className="title">{UI_TEXT.menu.orders}</Link>
				</li>
				<li>
					<Link to={APP_ROUTES.MY_ACCOUNT}>{UI_TEXT.menu.myAccount}</Link>
				</li>
				<li>
					<Link to={APP_ROUTES.LOGIN}>{UI_TEXT.menu.signOut}</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
