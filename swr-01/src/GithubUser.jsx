import React from 'react'
import UseGithubUser from './UseGithubUser'

export default function GithubUser({username}) {

  const { data, error, loading } = UseGithubUser(username);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        <li>
          <span>Username: {data.name}</span><br/>
          <span>Id: {data.id}</span>
        </li>
      </ul>
    </div>
  )
}
