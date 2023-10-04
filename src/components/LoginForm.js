import React from "react";
import { useState } from "react";
import '../templates/LoginForm.css'

export default function LoginForm() {
  const [response, setResponse] = useState("");
  return (
    <form className="logIn-form">
      <h2 className="form-response">{response}</h2>
      <h1 className="form-title">Log In</h1>
      <div className="form-input-cont">
        <input className="logIn-input" type="text" id="name" placeholder="Name" />
        <label className="logIn-label" htmlFor="name">Name:</label>
      </div>
      <div className="form-input-cont">
        <input className="logIn-input" type="text" id="address" placeholder="Address" />
        <label className="logIn-label" htmlFor="address">Address:</label>
      </div>
      <button className="formBtn">Submit</button>
    </form>
  );
}
