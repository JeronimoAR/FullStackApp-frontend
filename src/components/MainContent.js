import React from "react";
import "../templates/MainContent.css";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="card">
        <h1 className="card-title">
          Welcome Register or login to use this app
        </h1>
        <p className="card-text"></p>
        <Link to={"/user/LogIn"}><button className="card-btn">Log In</button></Link>
        <Link to={"/user/Register"}><button className="card-btn">Sign In</button></Link>
      </div>
    </main>
  );
}
