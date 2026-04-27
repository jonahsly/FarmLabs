import React from "react";
import { useState } from "react";
import "./PasswordRecovery.css";
import logo from "../../assets/logos/logo_farm_labs.svg";
import { isValidEmail } from "../../utils/validation";

const RecoveryPassword = () => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get("email") || "").toString().trim();

    // Basic email validation prevents sending incomplete recovery requests.
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log({ email });
  };

  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Enter the email address used to create your account
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="email" id="email" name="email" className="input input-email" required />
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
export default RecoveryPassword;
