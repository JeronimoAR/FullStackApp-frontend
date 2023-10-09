import "./App.css";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCards from "./components/UserCards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContent/>}/>
        <Route path="/user/LogIn" element={<LoginForm/>}/>
        <Route path="/user/Register" element={<RegisterForm/>}/>
        <Route path="/user/AllStudents" element={<UserCards/>}/>
      </Routes>
    </div>
  );
}

export default App;
