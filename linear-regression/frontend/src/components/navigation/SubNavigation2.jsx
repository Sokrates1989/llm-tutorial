import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function SubNavigation2({ currentSelection }) {
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="sub-nav-2">
      <Link className={`nav-link ${isActive("home")}`} to="/">Home</Link>
      <Link className={`nav-link ${isActive("contacts")}`} to="/contacts">Contacts</Link>
      <Link className={`nav-link ${isActive("notes")}`} to="/notes">Notes</Link>
    </nav>
  );
}

export default SubNavigation2;
