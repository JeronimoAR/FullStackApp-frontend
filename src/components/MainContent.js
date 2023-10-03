import React, { useState, useEffect } from "react";
import "../templates/MainContent.css";

export default function MainContent() {
  const [students, setStudents] = useState([]);

  function handleClick(id){
    const student = { id };
    console.log(student);
    fetch("http://localhost:8080/student/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      alert("Student has been Deleted");
      window.location.reload(false);
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <main>
      <div className="cards">
        {students.map((student) => (
          <div className="student-card">
            <h2>Name: {student.name}</h2>
            <h3>Address: {student.address}</h3>
            <button
              className="delete-btn"
              onClick={(e) => {
                handleClick(e.target.value);
              }}
              value={student.id}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
