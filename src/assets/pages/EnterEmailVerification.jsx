import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/authApi";

const EnterEmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidCode = /^\d{6}$/.test(code);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidCode) {
      setError("Verification code must be exactly 6 digits");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/verify-email", { email, code });
      const data = res.data;
      navigate("/register/complete", {
        state: { email, signupToken: data.signupToken },
      });
    } catch {
      setError("An error occurred while verifying the code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="signForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Enter verification code</label>
          <input
            className="signInput"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            required
          />

          <span className="errorMessage">{error}</span>
        </div>

        <button
          className="btn formSubmit"
          type="submit"
          disabled={loading || !isValidCode}
        >
          <span>Verify Code</span>
        </button>
      </form>
      <div className="paddingBottom"></div>
    </>
  );
};

export default EnterEmailVerification;
