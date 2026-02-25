import React, { useState } from "react";
import "./LanguageSelector.css";
import { FaChevronDown } from "react-icons/fa";

import brazilFlag from "../../assets/flag/br.svg";
import unitedStatesFlag from "../../assets/flag/us.svg";
import { useLanguage } from "../../contexts/LanguageContext";

const languages = [
  { code: "pt-BR", name: "Português", flag: brazilFlag },
  { code: "en-US", name: "English", flag: unitedStatesFlag }
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage = languages.find((l) => l.code === language) || languages[0];

  const handleSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        <div className="language-title">
          <img src={selectedLanguage.flag} alt="flag" />
          {selectedLanguage.name}
        </div>
        <FaChevronDown className="arrow-icon" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {languages.map((lang) => (
            <div key={lang.code} className="dropdown-item" onClick={() => handleSelect(lang.code)}>
              <img src={lang.flag} alt="flag" />
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;