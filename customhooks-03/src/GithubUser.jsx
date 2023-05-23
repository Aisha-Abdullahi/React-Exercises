import React from 'react'
import UseGithubUser from './UseGithubUser'

export default function GithubUser({username}) {
    const data = UseGithubUser(username)
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
