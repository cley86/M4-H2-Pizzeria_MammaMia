import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 w-100">
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  🔓 Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  🔒 Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  🔐 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  🔐 Register
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Total: ${total.toLocaleString()}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
