import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import validateEmail from "../../common/EmailValidation";

const RequestRegistration = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (val && !validateEmail(val)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "https://localhost:7107/api/auth/request-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Failed to send verification code");
      }
      navigate("/register/verify", { state: { email } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signForm">
        <div className="formGroup">
          <label>Enter your email</label>
          <input
            className="signInput"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          <span className="errorMessage">{error}</span>
        </div>

        <button
          className="btn formSubmit"
          type="submit"
          disabled={!validateEmail(email) || loading}
        >
          <span>Send verification code</span>
        </button>
      </form>
      <div className="signInRedirect">
        <span>Already have an account?</span>
        <NavLink to="/login" className="signRedirectLink">
          <span>Sign in</span>
        </NavLink>
      </div>
    </>
  );
};

export default RequestRegistration;
