import { Link } from "react-router-dom";
import "./Nav.css";
import { useLocation } from "react-router-dom"


const Nav = () => {
  const ACCESS_TOKEN = localStorage.getItem("user-token");
  const { pathname } = useLocation();

  return !pathname.includes("login") && !pathname.includes("signup") && !pathname.includes("dashboard") && (
    <div className="nav__wrapper">
      <form id="form">
        <input id="search" type="text" placeholder="Search" />

        <select id="select">
          <option selected disabled>
            all
          </option>
        </select>
      </form>

      {!ACCESS_TOKEN && (
        <div className="register">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      )}

      {ACCESS_TOKEN && (
        <div className="register">
          <Link to="/user">
            <p>User account</p>
          </Link>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
        </div>
      )}


    </div>
  );
};

export default Nav;
