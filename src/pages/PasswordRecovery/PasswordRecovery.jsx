import React from "react";
import { useState } from "react";
import "./PasswordRecovery.css";
import logo from "../../assets/logos/logo_farm_labs.svg";
import { UI_TEXT } from "../../constants/uiText";
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
        <h1 className="title">{UI_TEXT.auth.passwordRecoveryTitle}</h1>
        <p className="subtitle">
          {UI_TEXT.auth.passwordRecoverySubtitle}
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            {UI_TEXT.auth.emailAddressLabel}
          </label>
          <input type="email" id="email" name="email" className="input input-email" required />
          {error ? <p className="form-error">{error}</p> : null}
          <input
            type="submit"
            value={UI_TEXT.auth.confirm}
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};
export default RecoveryPassword;
