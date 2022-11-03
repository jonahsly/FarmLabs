import React from 'react';
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My Account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Jonah Sly</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">slyjonatan@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
