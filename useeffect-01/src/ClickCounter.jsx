import React, {useEffect, useState} from 'react'

export default function ClickCounter({onCounterChange}) {
  
    let [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }
useEffect(()=>{
    onCounterChange(counter)
}, [counter, onCounterChange])
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
  
}
