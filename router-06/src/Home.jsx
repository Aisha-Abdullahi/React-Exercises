import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const username = ""
  return (
    <div>
    <p>
    <Link to={`/users/${username}`}>Add a User and select it</Link>
    </p>
    </div>
  )
}
