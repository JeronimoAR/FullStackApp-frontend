import "../templates/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="nav-title">FullStack Application Users</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="nav-btn" to={"/user/LogIn"}>
              Log In
            </Link>
          </li>
          <li>
            <Link className="nav-btn" to={"/user/Register"}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
