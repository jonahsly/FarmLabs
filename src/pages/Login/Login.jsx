import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logos/logo_farm_labs.svg';
import {
    isValidEmail,
    isValidPassword,
    MIN_PASSWORD_LENGTH,
} from '../../utils/validation';

const Login = () => {
    const form = useRef(null);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const email = (formData.get('email') || '').toString().trim();
        const password = (formData.get('password') || '').toString();

        // Validate only essential fields to keep feedback immediate and clear.
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!isValidPassword(password)) {
            setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
            return;
        }

        setError('');
        const data = {
            username: email,
            password,
        };
        console.log(data);
    }
	return (
		<div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo"/>
                <form ref={form} className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" id="email" name="email" placeholder="farmlabs@example.com" className="input input-email" required/>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" name="password" placeholder="*********" className="input input-password" minLength={MIN_PASSWORD_LENGTH} required/>
                    {error ? <p className="form-error">{error}</p> : null}
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
