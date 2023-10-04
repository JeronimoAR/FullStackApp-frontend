import "../templates/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="nav-title">FullStack Application Students</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="nav-btn" to={"/student/LogIn"}>
              Log In
            </Link>
          </li>
          <li>
            <Link className="nav-btn" to={"/student/Register"}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
