import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/col_logo.jfif";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="navbar container" aria-label="Main navigation">
      <div className="nav-left">
        <img src={logo} alt="VPKBIET logo" className="nav-logo" />
        <h2 className="sr-only">VPKBIET</h2>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        &#9776;
      </button>

      <div className={"nav-links" + (open ? " open" : "")}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;