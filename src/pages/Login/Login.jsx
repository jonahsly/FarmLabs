import React from 'react';
import { useRef } from 'react';
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
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="farmlabs@example.com" className="input input-email"/>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="text" name="password" placeholder="*********" className="input input-password"/>
                    <button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
	);
}

export default Login;