import React, { createContext, useState } from "react";

export const LanguageContext = createContext('En');

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('En');


  return (
    <LanguageContext.Provider value={{ selectedLanguage  }}>
      {children}
    </LanguageContext.Provider>
  );
};
