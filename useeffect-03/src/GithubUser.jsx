import React, {useState, useEffect} from 'react'

export default function GithubUser({username}) {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
          .then(response => {
            if (response.status === 200) {
              return response.json()
            } else {
              throw new Error(`Failed to fetch user`)
            }
          })
          .then(json => {
            setData(json)
            console.log(json)
          })
          .catch(error => {
            console.error('could not fetch data')
          })
      }, [username])
  return (
    <div>
     <h1>Github User</h1>
        <p>Username: {data.name}</p>
        <p>Id: {data.id}</p>
    </div>
  )
}
