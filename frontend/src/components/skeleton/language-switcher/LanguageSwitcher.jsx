import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './language-switcher.css';
import deFlag from './flags/de_original.png';
import enFlag from './flags/gb_original.png';
import { FaChevronDown } from 'react-icons/fa';

const LANGUAGES = {
  de: { label: 'Deutsch', flag: deFlag },
  en: { label: 'English', flag: enFlag }
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef();

  const currentLang = i18n.language in LANGUAGES ? i18n.language : 'en';

  const handleClickOutside = (e) => {
    if (switcherRef.current && !switcherRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="language-switcher-dropdown" ref={switcherRef}>
      <button className="current-lang-btn" onClick={() => setOpen(!open)}>
        <img src={LANGUAGES[currentLang].flag} alt={LANGUAGES[currentLang].label} />
        <FaChevronDown className={`chevron-icon ${open ? 'open' : ''}`} />
      </button>
      {open && (
        <ul className="language-menu">
          {Object.entries(LANGUAGES).map(([code, { label, flag }]) => (
            <li key={code} onClick={() => changeLanguage(code)}>
              <img src={flag} alt={label} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
