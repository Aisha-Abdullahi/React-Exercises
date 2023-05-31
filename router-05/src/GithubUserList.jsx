import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddUser = () => {
    setUsernames([...usernames, input]);
    setInput('');
  };

  return (
    <div>
      <h2>Github user list</h2>
      {usernames.map((username) => (
        <div key={username}>
          <Link to={`/users/${username}`}>{username}</Link>
        </div>
      ))}
      <input value={input} onChange={handleInput} />
      <button onClick={handleAddUser}>Add User to the list</button>
    </div>
  );
}
