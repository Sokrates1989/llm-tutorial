import React from "react";
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import './header.css';
import { FaBars } from "react-icons/fa";

function Header({ title, onMenuClick }) {
  return (
    <header className="app-header">
      <button className="burger-menu" onClick={onMenuClick}>
        <FaBars />
      </button>
      <h1 className="app-header-title">{title}</h1>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;