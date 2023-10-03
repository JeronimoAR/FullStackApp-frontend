import React, { useState, useEffect } from "react";
import "../templates/MainContent.css";

export default function MainContent() {
  const [students, setStudents] = useState([]);

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
            <h1>ID: {student.id}</h1>
            <h2>Name: {student.name}</h2>
            <h3>Address: {student.address}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
