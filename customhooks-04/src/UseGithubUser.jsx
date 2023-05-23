import React, { useEffect, useState } from 'react'

export default function UseGithubUser(username) {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
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
          }).catch(error => {
            setError(error)
            setData(null)
          }).finally(() =>{
            setLoading(false)
          }) 
      }, [username, 8000])
    
      return { data, error, loading };
    }
