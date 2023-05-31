import React from 'react'
import UseGithubUser from './UseGithubUser'
import {Link} from 'react-router-dom'

export default function GithubUsers() {
    const { users, error, isLoading, onRefresh } = UseGithubUser();
  
    return (
      <div>
        <button onClick={onRefresh}>Refresh</button>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && (
          <ul>
            {users.map((user) => (
              <li key={user.login}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  
  
  
  
  
  
  