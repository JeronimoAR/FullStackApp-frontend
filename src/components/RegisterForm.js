import { useState } from "react";
import "../templates/RegisterForm.css";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");


  return (
    <form className="student-register">
      <h2 className="form-response">{response}</h2>
      <h1 className="form-title">Register</h1>
      <div className="form-input-cont">
        <input
          className="form-input"
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label" htmlFor="name">
          Name:
        </label>
      </div>
      <div className="form-input-cont">
        <input
          className="form-input"
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="email">
          Email:
        </label>
      </div>
      <div className="form-input-cont">
        <input
          className="form-input"
          type="text"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="password">
          Password:
        </label>
      </div>
      <button className="formBtn">Submit</button>
    </form>
  );
}
