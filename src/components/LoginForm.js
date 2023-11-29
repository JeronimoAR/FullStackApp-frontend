import React, { useEffect } from "react";
import { useState } from "react";
import "../templates/LoginForm.css";

export default function LoginForm() {
  const [response, setResponse] = useState("");
  const [user, setUser] = useState(``);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="logIn-form">
      <h2 className="form-response">{response}</h2>
      <h1 className="form-title">Log In</h1>
      <div className="form-input-cont">
        <input
          className="logIn-input"
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="logIn-label" htmlFor="email">
          Email:
        </label>
      </div>
      <div className="form-input-cont">
        <input
          className="logIn-input"
          type="text"
          id="pasword"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="logIn-label" htmlFor="pasword">
          password:
        </label>
      </div>
      <button className="formBtn">Submit</button>
    </form>
  );
}
