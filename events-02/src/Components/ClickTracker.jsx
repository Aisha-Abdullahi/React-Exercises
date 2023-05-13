import React, { useState } from 'react'

export default function ClickTracker() {
    const [lastPressed, setLastPressed] = useState('')

    const handlePressed = (event) =>{
        const pressed = event.target.id;
        setLastPressed(pressed)
    }
  return (
    <div>
<h1>Last Button pressed: {lastPressed}</h1>
<button onClick={handlePressed} id='1'>1</button>
<button onClick={handlePressed} id='2'>2</button>
<button onClick={handlePressed} id='3'>3</button>
    </div>
  )
}
