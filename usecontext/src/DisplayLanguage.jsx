import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage = () => {
  const { selectedLanguage, handleChangeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    handleChangeLanguage(event.target.value);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="En">English</option>
        <option value="Sp">Spanish</option>
      </select>
      <h1>Selected Language: {selectedLanguage}</h1>
    </div>
  );
};

export default DisplayLanguage;
