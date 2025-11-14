import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container" id="app">
      <header className="navbar">
        <div className="brand">
          <div
            className="logo"
            aria-hidden="true"
            onClick={() => (window.location.href = "/")}
          >
            G
          </div>
          <div>
            <h1>GrowHabits</h1>
            <div className="small d-none d-sm-block">Grow healthy • Be kind • Learn daily</div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="habits" className="nav-link">
            Habits
          </Link>
          <Link to="tracker" className="nav-link">
            Tracker
          </Link>
          <Link to="games" className="nav-link">
            Games
          </Link>
          <Link to="rewards" className="nav-link">
            Rewards
          </Link>
        </nav>

        <div className="actions">
          <Link
            className="btn btn-primary"
            id="signupBtn"
            onClick={() => (window.location.href = "/login")}
          >
            Get Started
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;
