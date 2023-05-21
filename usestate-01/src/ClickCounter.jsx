import React, {useState} from 'react'

export default function ClickCounter() {
  
    let [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
  
}
