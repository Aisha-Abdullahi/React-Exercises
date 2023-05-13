import React, { useState } from "react";

export default function Login({onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const isDisabled = username === "" && password===''

    const handleReset = () =>{
        setUsername('')
        setPassword('')
    }
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", width:"200px"}}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsername}/>
      <label>Password:</label>
      <input type="text" value={password} onChange={handlePassword}/>
      <button onClick={onLogin} disabled={isDisabled}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
