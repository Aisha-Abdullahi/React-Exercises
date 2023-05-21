import React, {useState} from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;

    if (name === 'username'){
      setUsername(value)
    } if (name === 'password'){
      setPassword(value)
    } if (name === 'remember'){
      setRemember(checked)
    }
  }

  const handleReset = () => {
      setUsername('');
      setPassword('');
  }

  const isDisabled = !username || !password;

  return (
  <div>
    <label>Username:</label>
    <input name="username" type="text" value={username} onChange={handleInputChange}/>
    <label>Password:</label>
    <input name="password" type="password" value={password} onChange={handleInputChange}/>
    <input name='remember' type='checkbox' value={remember} onChange={handleInputChange}/>
    <button disabled={isDisabled}>Login</button>
    <button onClick={handleReset}>Reset</button>
  </div>
  )
}
