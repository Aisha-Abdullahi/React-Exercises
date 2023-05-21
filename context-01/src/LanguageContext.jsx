import React, { useState, createContext } from 'react';
import DisplayLanguage from './DisplayLanguage';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); 

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      <DisplayLanguage/>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };


