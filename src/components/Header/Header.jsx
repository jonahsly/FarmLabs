import React, { useState, useContext } from 'react';
import Menu from '../Menu/Menu';
import MyOrder from '../../containers/MyOrder/MyOrder';
import AppContext from '../../contexts/AppContext';
import './Header.css';
import ilogo from '../../assets/logos/logo_farm_labs.svg';
import imenu from '../../assets/icons/icon_menu.svg';
import icart from '../../assets/icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state:{cart} } = useContext(AppContext);
	const handleToggle = () => {
		setToggle(!toggle);
	};
    return(
        <nav>
            <img src={imenu} alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src={ilogo} alt="logo" className="nav-logo"/>
                <ul>
                    <li>
                        <a href="/">Flowers</a>
                    </li>
                    <li>
                        <a href="/">Oils</a>
                    </li>
                    <li>
                        <a href="/">Concetrates</a>
                    </li>
                    <li>
                        <a href="/">Edibles</a>
                    </li>
                    <li>
                        <a href="/">Seeds</a>
                    </li>
                    <li>
                        <a href="/">Vapes</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        farmlabs@example.com
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() =>setToggleOrders(!toggleOrders)}
                        >
                        <img src={icart} alt="shopping cart"/>
                        {cart.length > 0 ? <div>{cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />} 
            {toggleOrders && <MyOrder />}
        </nav>
    )
}

export default Header;