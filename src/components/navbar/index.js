import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#81b71a"}}>
      <Link className="navbar-brand" to="/">
      <i class="fal fa-dice-d20 fa-2x"></i> Tabletop Assistant
      </Link>
      <div>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              to="/create"
              className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
            >
              <i class="far fa-user-plus"></i> Create Character
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/view"
              className={window.location.pathname === "/view" ? "nav-link active" : "nav-link"}
            >
              <i class="far fa-users"></i> View Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/begin"
              className={window.location.pathname === "/begin" ? "nav-link active" : "nav-link"}
            >
              <i class="far fa-chart-network"></i> Begin Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
