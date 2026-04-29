import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';
import { UI_TEXT } from '../../constants/uiText';
import './SendEmail.css';
import ilogo from '../../assets/logos/logo_farm_labs.svg';
import iemail from '../../assets/icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={ilogo} alt="logo" className="logo" />
				<h1 className="title">{UI_TEXT.sendEmail.title}</h1>
				<p className="subtitle">{UI_TEXT.sendEmail.subtitle}</p>
				<div className="email-image">
					<img src={iemail} alt="email" />
				</div>
				<button className="primary-button login-button">{UI_TEXT.auth.login}</button>
				<p className="resend">
					<span>{UI_TEXT.sendEmail.resendPrompt} </span>
					<Link to={APP_ROUTES.HOME}>{UI_TEXT.sendEmail.resend}</Link>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
