import React from 'react'
import { useState, useContext } from 'react';
import {LanguageContext} from './LanguageContext'
export default function DisplayLanguage() {
  const selectedLanguage = useContext(LanguageContext);
    
  return (
    <LanguageContext.Consumer>
          {selectedLanguage => <h1>Selected Language: {selectedLanguage}</h1>}
        </LanguageContext.Consumer>
  )
}
