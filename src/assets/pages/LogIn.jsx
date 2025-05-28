import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, pw);
      navigate("/events");
    } catch {
      setErr("Failed to log in. Please check your email and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Logga in</button>
    </form>
  );
}
