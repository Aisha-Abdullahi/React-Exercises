import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const username = ""
  return (
    <div>
    <p>
    <Link to={`/users/${username}`}>Show user</Link>
    </p>
    </div>
  )
}
