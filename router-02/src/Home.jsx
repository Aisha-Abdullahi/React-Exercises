import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const username = "Aisha-Abdullahi"
  return (
    <div>
    <Link to={`/users/${username}`}>Show user</Link>
    </div>
  )
}
