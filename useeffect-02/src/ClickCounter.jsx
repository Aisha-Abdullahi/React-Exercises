import React, {useEffect, useState} from 'react'

export default function ClickCounter() {
  
    let [counter, setCounter] = useState(0)
    

    const increase = () => {
        setCounter(counter + 1)
    }

    useEffect(()=>{
        const interval=setInterval(()=>{
            increase()
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
  
}
