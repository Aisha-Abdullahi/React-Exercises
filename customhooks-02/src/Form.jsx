import React, {useState} from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;

    if (name === 'username'){
    setUsername(value)
    } if (name === 'password'){
    setPassword(value)
    } 
}


  return (
    <div>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handleInputChange} />
      </label>
      <div>
        Username: {username}<br/>
        Password: {password}
      </div>
    </div>
  );
}
