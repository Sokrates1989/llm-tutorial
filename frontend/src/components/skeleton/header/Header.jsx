import React from "react";
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import './header.css';

function Header(props) {
  return (
    <header className="app-header">
      <h1 className="app-header-title">{props.title}</h1>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
