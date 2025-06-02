import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import api from "../../services/authApi";
import validateEmail from "../../common/EmailValidation";
import validatePassword from "../../common/PasswordValidation";
import Logo from "../components/Logo";
import AuthContext from "../context/AuthContext";

export default function LogIn() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setSubmitError(null);

    let hasError = false;

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      hasError = true;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number and one special character"
      );
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await login(email, password);
      if (response.status === 200) {
        const token = response.data.token;
        if (token) {
          sessionStorage.setItem("jwtToken", token);
        }
        const meResponse = await api.get("/auth/me");
        const userData = meResponse.data;

        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
        navigate("/events");
      }
    } catch {
      setSubmitError("Failed to log in. Please check your email and password.");
    }
  };

  return (
    <div className="signContainer">
      <Logo />
      <form className="signForm" onSubmit={handleSubmit} noValidate>
        <div className="formGroup">
          <label>Email</label>
          <input
            className="signInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <div className="errorMessage">{emailError}</div>}
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
          {passwordError && (
            <div className="errorMessage pwError">{passwordError}</div>
          )}
        </div>

        {submitError && <div className="errorMessage">{submitError}</div>}

        <button className="btn formSubmit" type="submit">
          <span>Log In</span>
        </button>
      </form>
      <div className="signInRedirect">
        <span>Don't have an account?</span>
        <NavLink to="/register" className="signRedirectLink">
          <span>Sign Up</span>
        </NavLink>
      </div>
    </div>
  );
}
