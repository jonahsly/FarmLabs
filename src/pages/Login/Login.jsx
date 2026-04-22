import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logos/logo_farm_labs.svg';
/*Revisar las funciones y la clase donde se tratan*/ 
const Login = () => {
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }
	return (
		<div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo"/>
                <form ref={form} className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" id="email" name="email" placeholder="farmlabs@example.com" className="input input-email"/>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" name="password" placeholder="*********" className="input input-password"/>
                    <button
						type="submit"
						className="primary-button login-button">
						Log in
					</button>
					<Link to="/password-recovery">Forgot my password</Link>
                </form>
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
	);
}

export default Login;
