import React, { useCallback, useState } from "react";

export default function UseCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(()=>{
    setCount((count) => count + 1);
  }, []) 

  const handleDecrement =useCallback(()=>{
    setCount((count) => count - 1);
  }, [])

  const handleReset =useCallback(()=>{
    setCount(0);
  }) 

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
