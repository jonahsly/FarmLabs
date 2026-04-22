import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/">Flowers</Link>
                    </li>
                    <li>
                        <Link to="/">Oils</Link>
                    </li>
                    <li>
                        <Link to="/">Concentrates</Link>
                    </li>
                    <li>
                        <Link to="/">Edibles</Link>
                    </li>
                    <li>
                        <Link to="/">Seeds</Link>
                    </li>
                    <li>
                        <Link to="/">Vapes</Link>
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
