import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";
export const Navbar = () => {
  const { isUserLoggedIn } = useAuth(); //from useAuth consumer getting the isUserLoggedIn

  return (
    <>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Deep Matrix</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>

            {isUserLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
