import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import validatePassword from "../../common/PasswordValidation";
import api from "../../services/authApi";

const CompleteRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, signupToken } = location.state || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email || !signupToken) {
      navigate("/register");
    }
  }, [email, signupToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !password) {
      setError("All fields are required");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include uppercase, lowercase, number and special character"
      );
      return;
    }
    setLoading(true);
    try {
      await api.post(
        "/auth/register",
        { email, firstName, lastName, password },
        {
          headers: {
            Authorization: `Bearer ${signupToken}`,
          },
        }
      );

      navigate("/login");
    } catch {
      setError("Something went wrong during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="signForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Email</label>
          <input className="signInput" type="email" value={email} disabled />
        </div>

        <div className="formGroup">
          <label>First Name</label>
          <input
            className="signInput"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label>Last Name</label>
          <input
            className="signInput"
            type="name"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label>Password</label>
          <input
            className="signInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <div className="errorMessage">{passwordError}</div>}
        </div>

        <span className="errorMessage">{error}</span>

        <button className="btn formSubmit" type="submit" disabled={loading}>
          <span>Complete Registration</span>
        </button>
      </form>
      <div className="paddingBottom"></div>
    </>
  );
};

export default CompleteRegistration;
