import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav
    className="navbar"
    data-bs-theme="dark"
    style={{ backgroundColor: "#6e4318" }}
  >
    <div className="nav">
      <div className="navbar-brand">Utopia</div>

      <ul className="navbar-nav navtabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        &nbsp; &nbsp;
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
