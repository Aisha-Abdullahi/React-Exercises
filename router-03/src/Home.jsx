import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const username = "Aisha-Abdullahi"
  return (
    <div>
    <p>
    <Link to={`/users/${username}`}>Show user</Link>
    </p>
    <p>
        <Link to="/counter">
          <button>Start Timer</button>
        </Link>
      </p>
    </div>
  )
}
