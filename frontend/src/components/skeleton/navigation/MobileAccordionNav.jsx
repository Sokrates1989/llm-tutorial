import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from "react-icons/fa";
import "./navigation.css"; 

export default function MobileAccordionNav({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-accordion">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header"
      >
        {title}
        <FaChevronDown className={`icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}
