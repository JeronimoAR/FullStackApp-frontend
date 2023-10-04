import "./App.css";
import StudentCards from "./components/StudentCards";
import StudentForm from "./components/StudentForm";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContent/>}/>
        <Route path="/student/LogIn" element={<LoginForm/>}/>
        <Route path="/student/Register" element={<StudentForm/>}/>
        <Route path="/student/AllStudents" element={<StudentCards/>}/>
      </Routes>
    </div>
  );
}

export default App;
