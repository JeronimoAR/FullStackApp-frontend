import React, { useState, useEffect } from "react";
import "../templates/UserCards.css";

export default function StudentCards() {
  const [users, setUsers] = useState([]);

  return (
    <main className="main-cards">
      <div className="cards">
        {users.map((user) => (
          <div className="student-card">
            <h2>Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Password: {user.password}</h4>
            <button>
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
