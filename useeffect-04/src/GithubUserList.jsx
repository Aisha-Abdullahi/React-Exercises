import React,{useState, useEffect} from 'react'
import GithubUser from './GithubUser'

export default function GithubUserList() {
    const [usernames, setUsernames] = useState([])
    const [input, setInput] = useState('')

    const handleInput= (event) => {
    setInput(event.target.value)
  }

    const handleAddUser = () => {
    setUsernames([...usernames, input]);
    setInput('')
  }
  return (
    <div>
     <h2>Github user list</h2>
        {usernames.map((username) => (
          <GithubUser username={username} />
        ))}
      <input value={input} onChange={handleInput}/>
      <button onClick={handleAddUser}>Add User to the list</button>
    </div>
  )
}
