import React, { useState, createContext } from 'react';
// import DisplayLanguage from './DisplayLanguage';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); 
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <>
    <div>
      <label htmlFor="languageSelect">Select Language:</label>
      <select id="languageSelect" onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Kiswahili">Kiswahili</option>
        <option value="Italian">Italian</option>
      </select>
    </div>
    <LanguageContext.Provider value={selectedLanguage}>
      {children}
    </LanguageContext.Provider>
  </>
  );
};

export { LanguageContext, LanguageProvider };


