import { useState } from "react";
import "../templates/LoginForm.css";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (name !== "" && address !== "") {
      const student = { name, address };
      console.log(student);
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        alert("New Student has been Added");
        window.location.reload(false);
      });
    }else{
      setResponse("Completa los campos")
    }
  };
  return (
    <form onSubmit={handleClick}>
      <h1 className="form-title">Create Student</h1>
      <h2 className="form-response">{response}</h2>
      <div className="form-input">
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Name:</label>
      </div>
      <div className="form-input">
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
      </div>
      <button className="formBtn">Submit</button>
    </form>
  );
}
