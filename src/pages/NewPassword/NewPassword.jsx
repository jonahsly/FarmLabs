import React from "react";
import { useState } from "react";
import "./NewPassword.css";
import logo from "../../assets/logos/logo_farm_labs.svg";
import { isValidPassword, MIN_PASSWORD_LENGTH } from "../../utils/validation";

const NewPassword = () => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = (formData.get("password") || "").toString();
    const newPassword = (formData.get("new-password") || "").toString();

    // Require baseline strength and matching values before continuing.
    if (!isValidPassword(password)) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (!isValidPassword(newPassword)) {
      setError(`New password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (password !== newPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log({ password, newPassword });
  };

  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for yue account</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />
          <label htmlFor="new-password" className="label">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="*********"
            className="input input-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />
          {error ? <p className="form-error">{error}</p> : null}
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
