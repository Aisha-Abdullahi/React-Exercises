import React, { useEffect, useState } from 'react'

export default function UseGithubUser(username) {
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
            console.error('Could not fetch data')
          })
      }, [username])
    
      return data;
    }
