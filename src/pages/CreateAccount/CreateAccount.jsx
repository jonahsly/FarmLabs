import React from 'react';
import { useState } from 'react';
import './CreateAccount.css';
import {
	isValidEmail,
	isValidPassword,
	MIN_PASSWORD_LENGTH,
} from '../../utils/validation';

const CreateAccount = () => {
	const [error, setError] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = (formData.get('name') || '').toString().trim();
		const email = (formData.get('email') || '').toString().trim();
		const password = (formData.get('password') || '').toString();

		// Keep account creation checks minimal but explicit.
		if (!name) {
			setError('Name is required.');
			return;
		}
		if (!isValidEmail(email)) {
			setError('Please enter a valid email address.');
			return;
		}
		if (!isValidPassword(password)) {
			setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
			return;
		}

		setError('');
		console.log({ name, email, password });
	};

	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input type="text" id="name" name="name" placeholder="Jonah" className="input input-name" required />
						<label htmlFor="email" className="label">Email</label>
						<input type="email" id="email" name="email" placeholder="farmlabs@example.com" className="input input-email" required />
						<label htmlFor="password" className="label">Password</label>
						<input type="password" id="password" name="password" placeholder="*********" className="input input-password" minLength={MIN_PASSWORD_LENGTH} required />
					</div>
					{error ? <p className="form-error">{error}</p> : null}
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
