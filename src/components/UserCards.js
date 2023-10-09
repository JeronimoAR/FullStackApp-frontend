import React, { useState, useEffect } from "react";
import "../templates/UserCards.css";

export default function StudentCards() {
  const [users, setUsers] = useState([]);

  function handleClick(id){
    const user = { id };
    console.log(user);
    fetch("http://localhost:8080/user/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      alert("Student has been Deleted");
      window.location.reload(false);
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);
  return (
    <main className="main-cards">
      <div className="cards">
        {users.map((user) => (
          <div className="student-card">
            <h2>Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Password: {user.password}</h4>
            <button
              className="delete-btn"
              onClick={(e) => {
                handleClick(e.target.value);
              }}
              value={user.id}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
