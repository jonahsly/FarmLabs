import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MyOrder from '../../containers/MyOrder/MyOrder';
import AppContext from '../../contexts/AppContext';
import { APP_ROUTES } from '../../constants/routes';
import { UI_TEXT } from '../../constants/uiText';
import appConfig from '../../config/appConfig';
import './Header.css';
import ilogo from '../../assets/logos/logo_farm_labs.svg';
import imenu from '../../assets/icons/icon_menu.svg';
import icart from '../../assets/icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state:{cart} } = useContext(AppContext);
    const cartItemsCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
	const handleToggle = () => {
		setToggle(!toggle);
	};
    return(
        <nav>
            <img src={imenu} alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src={ilogo} alt="logo" className="nav-logo"/>
                <ul>
                    {UI_TEXT.header.categories.map((category) => (
                        // Categories remain local links until category routing is added.
                        <li key={category}>
                            <Link to={APP_ROUTES.HOME}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        {appConfig.supportEmail}
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() =>setToggleOrders(!toggleOrders)}
                        >
                        <img src={icart} alt="shopping cart"/>
                        {cartItemsCount > 0 ? <div>{cartItemsCount}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />} 
            {toggleOrders && <MyOrder />}
        </nav>
    )
}

export default Header;
