import React, { useState } from 'react'
import Welcome from './Welcome'

export default function InteractiveWelcome() {
    const [inputValue, setInputValue] = useState('')

    const handleChange =(event) =>{
        setInputValue (event.target.value);
        
    }
  return (
    <div>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <Welcome name= {inputValue}/>
    </div>
  )
}
